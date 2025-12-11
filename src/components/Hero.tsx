import { FileText, Github, Linkedin, Mail, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/Sokmeak-palmTree.jpg";

const Hero = () => {
  return (
    <section className="min-h-[80vh] flex items-center pt-20">
      <div className="section-container py-20">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16">
          {/* Text Content */}
          <div className="flex-1 animate-fade-in text-center md:text-left">
            <p className="text-muted-foreground mb-2 text-lg">Hello, I'm</p>
            <h1 className="text-5xl sm:text-6xl font-semibold text-foreground mb-4">
              Saren Sokmeak
            </h1>
            <p className="text-xl text-muted-foreground mb-2">
              Computer Science Student
            </p>
            <p className="text-muted-foreground mb-8 md:mx-0 text-base">
              Passionate about building web applications and learning new
              technologies. Currently pursuing my degree and seeking
              opportunities to grow.
            </p>

            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              <Button asChild>
                <a
                  href="https://drive.google.com/file/d/1VbC65RHW-6ClzJ3u1Be4dzl6Fb605q0Y/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FileText className="w-5 h-5 mr-2" />
                  Download CV
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="mailto:sokmeak.sarenn@gmail.com">
                  <Mail className="w-4 h-4 mr-2" />
                  Contact Me
                </a>
              </Button>
            </div>

            <div className="flex gap-4 mt-8 justify-center md:justify-start">
              <a
                href="https://github.com/Sokmeak"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/sokmeak-saren-940a3123a"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div
            className="flex-shrink-0 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="relative">
              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 blur-xl scale-110" />

              {/* Image container */}
              <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-border bg-muted">
                <img
                  src={profileImage}
                  alt="Saren Sokmeak"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
