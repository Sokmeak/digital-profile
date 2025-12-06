import { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/80 backdrop-blur-md border-b border-border' : ''
    }`}>
      <div className="section-container py-4 flex items-center justify-between">
        <a href="#" className="font-display text-xl font-semibold text-foreground">
          Saren Sokmeak
        </a>
        
        <div className="flex items-center gap-6">
          <div className="hidden sm:flex items-center gap-6 text-sm">
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">About</a>
            <a href="#education" className="text-muted-foreground hover:text-foreground transition-colors">Education</a>
            <a href="#skills" className="text-muted-foreground hover:text-foreground transition-colors">Skills</a>
            <a href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">Projects</a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a>
          </div>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
