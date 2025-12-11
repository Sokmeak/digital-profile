import { Code, Palette, Database, Globe, Terminal, Layers } from "lucide-react";
import SkillCard from "./SkillCard";
import { log, profile } from "console";

const skills = [
  {
    category: "Languages",
    icon: Code,
    items: [
      {
        name: "JavaScript",
        level: "Proficient" as const,
        profile: "Modern ES6+, async/await, DOM manipulation, event handling",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
      {
        name: "TypeScript",
        level: "Intermediate" as const,
        profile: "Type safety, interfaces, generics, strict typing",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      },
      {
        name: "Python",
        level: "Intermediate" as const,
        profile: "Data structures, OOP, web development, scripting",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      },
      {
        name: "Java",
        level: "Intermediate" as const,
        profile: "OOP principles, Spring framework, enterprise applications",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      },
    ],
    color: "from-blue-500 to-cyan-500",
  },
  {
    category: "Frontend",
    icon: Palette,
    items: [
      {
        name: "HTML5",
        level: "Proficient" as const,
        profile: "Semantic markup, accessibility, modern HTML standards",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      },
      {
        name: "CSS3",
        level: "Proficient" as const,
        profile: "Flexbox, Grid, animations, responsive design",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      },
      {
        name: "Tailwind CSS",
        level: "Proficient" as const,
        profile: "Utility-first CSS, custom components, responsive design",
        logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAPFBMVEX////G6fxsyvk/v/g4vfhhyPmz4vuK1PoAtfckufgvu/hTxPn6/f+h2/tGwPjS7v255fxMwviT1/qn3vsZjXhWAAAAbElEQVR4AeWOCQqAMAwEq11r06b3//9qAwiI0QfowHINC2N+yLJabE53uycgUGTtF11CmDqLLVdZ57iJhSt9V+4cCQB5a1RGJgr9FrrW866GbmpoGylISlNC3RxnsbY+hLbX0GSJIKE6zOajHN4ZA8/fNs9XAAAAAElFTkSuQmCC",
      },
      {
        name: "React",
        level: "Proficient" as const,
        profile: "Hooks, Context API, component lifecycle, state management",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "Vue",
        level: "Proficient" as const,
        profile: "Hooks, Context API, component lifecycle, state management",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
      },
    ],
    color: "from-pink-500 to-rose-500",
  },
  {
    category: "Backend",
    icon: Database,
    items: [
      {
        name: "Node.js",
        level: "Intermediate" as const,
        profile: "Express.js, RESTful APIs, middleware, authentication",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      },
      {
        name: "Express",
        level: "Intermediate" as const,
        profile: "Routing, middleware, error handling, API development",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      },
      {
        name: "MongoDB",
        level: "Intermediate" as const,
        profile: "NoSQL database, aggregation pipelines, indexing",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      },
      {
        name: "PostgreSQL",
        level: "Proficient" as const,
        profile: "Relational database, complex queries, optimization",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      },
      {
        name: "MySQL",
        level: "Intermediate" as const,
        profile: "Relational database, joins, indexing, stored procedures",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      },

      {
        name: "DynamoDB",
        level: "Intermediate" as const,
        profile: "NoSQL database, key-value store, scalability",
        logo: "https://miro.medium.com/1*MeLwtqK7-Jm6fFsff0JF-g.png",
      },
    ],
    color: "from-green-500 to-emerald-500",
  },
  {
    category: "Frameworks",
    icon: Code,
    items: [
      {
        name: "Nuxt.js",
        level: "Intermediate" as const,
        profile: "Vue.js framework, SSR, static generation, routing",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg",
      },
      {
        name: "Next.js",
        level: "Beginner" as const,
        profile: "React framework, SSR, static generation, routing",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      },
      {
        name: "Nest.js",
        level: "Intermediate" as const,
        profile: "Node.js framework, decorators, dependency injection",
        logo: "https://nestjs.com/logo-small-gradient.0ed287ce.svg",
      },
      {
        name: "Spring Boot",
        level: "Beginner" as const,
        profile: "Java framework, microservices, dependency injection",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
      },
    ],
    color: "from-yellow-500 to-lime-500",
  },
  {
    category: "Tools & DevOps",
    icon: Terminal,
    items: [
      {
        name: "Git",
        level: "Proficient" as const,
        profile: "Version control, branching, merging, collaboration",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      },
      {
        name: "VS Code",
        level: "Expert" as const,
        profile: "Extensions, debugging, integrated terminal, productivity",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
      },
      {
        name: "Docker",
        level: "Intermediate" as const,
        profile: "Containerization, Docker Compose, deployment",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      },
      {
        name: "Linux",
        level: "Intermediate" as const,
        profile: "Command line, system administration, shell scripting",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
      },
    ],
    color: "from-purple-500 to-violet-500",
  },
  {
    category: "Design & Soft Skills",
    icon: Layers,
    items: [
      {
        name: "Figma",
        level: "Intermediate" as const,
        profile: "UI/UX design, prototyping, design systems",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
      },
      {
        name: "Problem Solving",
        level: "Proficient" as const,
        profile: "Algorithmic thinking, debugging, optimization",
        logo: "data:image/jpeg;base64,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",
      },
      {
        name: "Team Collaboration",
        level: "Proficient" as const,
        profile: "Agile methodologies, communication, code reviews",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_-Y248LYyOkGzEUTvaeUDOsuWLoqhQFF-MObQcGiJ3USaQ1fW2THG3ZO4fEfW50LOKQrLYbzKcETOEMtTkm-ECjXEOB1LsxKqRB5-gupl&s=10",
      },
      {
        name: "Project Management",
        level: "Intermediate" as const,
        profile: "Planning, time management, deadline adherence",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfQ1sqW5fyntijzOoQraFlLNNY-PIu5dmls1gGQZzy&s",
      },
    ],
    color: "from-teal-500 to-cyan-500",
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-br from-background via-secondary/5 to-background"
    >
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
            Skills & Technologies
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My technical expertise with detailed proficiency levels and
            experience
          </p>
        </div>

        <div className="space-y-16">
          {skills.map((skillGroup, groupIndex) => {
            const IconComponent = skillGroup.icon;
            return (
              <div
                key={skillGroup.category}
                className="group"
                style={{ animationDelay: `${groupIndex * 200}ms` }}
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${skillGroup.color} flex items-center justify-center shadow-lg`}
                  >
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">
                      {skillGroup.category}
                    </h3>
                    <div
                      className={`h-1 w-20 bg-gradient-to-r ${skillGroup.color} rounded-full mt-1`}
                    />
                  </div>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <div
                      key={skill.name}
                      style={{
                        animationDelay: `${
                          groupIndex * 200 + skillIndex * 100
                        }ms`,
                      }}
                      className="animate-fade-in"
                    >
                      <SkillCard
                        name={skill.name}
                        level={skill.level}
                        profile={skill.profile}
                        logo={skill.logo}
                      />
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Skills Summary */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-8 px-8 py-4 bg-card border border-border rounded-full">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">15+</div>
              <div className="text-xs text-muted-foreground">Technologies</div>
            </div>
            <div className="w-px h-8 bg-border"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">1+</div>
              <div className="text-xs text-muted-foreground">
                Years Experience
              </div>
            </div>
            <div className="w-px h-8 bg-border"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">10+</div>
              <div className="text-xs text-muted-foreground">Projects</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
