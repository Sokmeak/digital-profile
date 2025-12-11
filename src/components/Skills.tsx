import { Code, Palette, Database, Globe, Terminal, Layers } from "lucide-react";
import SkillCard from "./SkillCard";

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
        name: "React",
        level: "Proficient" as const,
        profile: "Hooks, Context API, component lifecycle, state management",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
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
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
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
        level: "Intermediate" as const,
        profile: "Relational database, complex queries, optimization",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
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
        name: "Nest.js",
        level: "Intermediate" as const,
        profile: "Node.js framework, decorators, dependency injection",
        logo: "https://nestjs.com/logo-small-gradient.0ed287ce.svg",
      },
      {
        name: "Django",
        level: "Beginner" as const,
        profile: "Python web framework, ORM, admin panel, REST APIs",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
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
      },
      {
        name: "Team Collaboration",
        level: "Proficient" as const,
        profile: "Agile methodologies, communication, code reviews",
      },
      {
        name: "Project Management",
        level: "Intermediate" as const,
        profile: "Planning, time management, deadline adherence",
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
