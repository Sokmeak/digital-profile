import { GraduationCap, Calendar, MapPin } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-16 ">
      <div className="section-container">
        <h2 className="text-2xl font-semibold text-foreground mb-6">
          About Me
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-8">
          I'm a motivated computer science student with a strong foundation in
          programming and a passion for creating meaningful software solutions.
          I enjoy working on projects that challenge me to learn and grow as a software engineer.
        </p>

        {/* Education Section */}
        <div id="education" className="mt-12 ">
          <h3 className="text-xl font-semibold text-foreground mb-6">
            Education
          </h3>
          <a
            href="https://gic.itc.edu.kh/"
            target="_blank"
            rel="noopener noreferrer"
            className="block border border-border rounded-lg p-6 bg-card  hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 cursor-pointer"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 ">
                <GraduationCap className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-medium text-foreground">
                  Engineering Degree of Computer Science
                </h4>
                <p className="text-muted-foreground">
                  Institute of Technology of Cambodia
                </p>
                <div className="flex flex-wrap gap-4 mt-2 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    2021 - 2026
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    Phnom Penh, Cambodia
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mt-3">
                  Relevant coursework: Data Structures, Algorithms, Web
                  Development, Database Design
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
