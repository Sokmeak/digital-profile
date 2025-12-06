import { Code, Palette, Database, Globe, Terminal, Layers } from "lucide-react";

const skills = [
  {
    category: "Languages",
    icon: Code,
    items: ["JavaScript", "TypeScript", "Python", "Java"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    category: "Frontend",
    icon: Palette,
    items: ["React", "HTML", "CSS", "Tailwind CSS"],
    color: "from-pink-500 to-rose-500",
  },
  {
    category: "Backend",
    icon: Database,
    items: ["Node.js", "Express", "MongoDB", "PostgreSQL"],
    color: "from-green-500 to-emerald-500",
  },

  {
    category: "Frameworks",
    icon: Code,
    items: ["Nuxt.js", "Nest.js", "Django", "Spring Boot"],
    color: "from-yellow-500 to-lime-500",
  },
  {
    category: "Tools",
    icon: Terminal,
    items: ["Git", "VS Code", "Figma", "Linux", "Docker"],
    color: "from-purple-500 to-violet-500",
  },

  {
    category: "Other",
    icon: Layers,
    items: ["Agile", "Problem Solving", "Team Work"],
    color: "from-teal-500 to-cyan-500",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="section-container">
        <h2 className="text-3xl font-semibold text-foreground mb-2 text-center">
          Skills & Technologies
        </h2>
        <p className="text-muted-foreground text-center mb-10">
          What I bring to the table
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((skillGroup, index) => {
            const IconComponent = skillGroup.icon;
            return (
              <div
                key={skillGroup.category}
                className="group relative bg-card border border-border rounded-xl p-5 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Gradient accent */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${skillGroup.color} opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-300`}
                />

                {/* Icon with gradient background */}
                <div
                  className={`w-10 h-10 rounded-lg bg-gradient-to-br ${skillGroup.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <IconComponent className="w-5 h-5 text-white" />
                </div>

                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {skillGroup.category}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-sm bg-secondary text-secondary-foreground rounded-full border border-border/50 hover:border-primary/30 hover:bg-primary/5 transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
