import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 rounded-lg backdrop-blur-md`}
    >
      <div className="section-container py-3 flex items-center justify-between rounded-full border border-border/90">
        <a
          href="#"
          className="font-display text-2xl font-semibold text-foreground"
        >
          Saren Sokmeak
        </a>

        <div className="flex items-center gap-4">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 text-base">
            <a
              href="#about"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </a>
            <a
              href="#education"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Education
            </a>
            <a
              href="#skills"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </a>
          </div>

          <ThemeToggle />

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-card/95 backdrop-blur-md border border-border/50 rounded-lg mt-2 mx-4 py-4 shadow-lg">
          <div className="flex flex-col gap-4 px-6">
            <a
              href="#about"
              onClick={closeMobileMenu}
              className="text-muted-foreground hover:text-foreground transition-colors py-2"
            >
              About
            </a>
            <a
              href="#education"
              onClick={closeMobileMenu}
              className="text-muted-foreground hover:text-foreground transition-colors py-2"
            >
              Education
            </a>
            <a
              href="#skills"
              onClick={closeMobileMenu}
              className="text-muted-foreground hover:text-foreground transition-colors py-2"
            >
              Skills
            </a>
            <a
              href="#projects"
              onClick={closeMobileMenu}
              className="text-muted-foreground hover:text-foreground transition-colors py-2"
            >
              Projects
            </a>
            <a
              href="#contact"
              onClick={closeMobileMenu}
              className="text-muted-foreground hover:text-foreground transition-colors py-2"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
