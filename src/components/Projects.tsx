import ProjectCard from "./ProjectCard";
import projectTextDisplayer from "@/assets/project-text-displayer.jpg";
import projectEcommerce from "@/assets/project-ecommerce.jpg";
import projectJobseeker from "@/assets/project-jobseeker.jpg";
import projectLms from "@/assets/project-lms.jpg";
import projectShowcase from "@/assets/project-showcase.jpg";
import { stat } from "fs";
enum Status {
  IN_PROGRESS = "in-progress",
  COMPLETED = "completed",
}

const projects = [
  {
    title: "Text Displayer",
    description:
      "A dynamic text animation tool built with vanilla web technologies.",
    image: projectTextDisplayer,
    tech: ["HTML", "CSS", "JavaScript"],
    status: Status.COMPLETED,
    demo: "https://drive.google.com/file/d/1KwfaCyNPB9hz8V3jRl49to9GbOhfXCCQ/view?usp=sharing",
  },
  {
    title: "E-Commerce Frontend",
    description:
      "Modern shopping platform with responsive design and state management.",
    image: projectEcommerce,
    tech: ["Vue.js", "Pinia"],
    status: Status.COMPLETED,
    demo: "https://drive.google.com/file/d/1G-V5mT1Pp9SGr1y1WAn33qHH2zymlyM6/view?usp=sharing",
  },
  {
    title: "Job Seeker Platform",
    description:
      "Full-stack job hunting platform with authentication and application tracking.",
    image: projectJobseeker,
    tech: ["NestJS", "PostgreSQL", "Vue.js", "Docker"],
    status: Status.COMPLETED,
    demo: "https://drive.google.com/file/d/1Jij5nVPZOuoZ3Xa55yViBNKF8WBztMuO/view?usp=sharing",
  },
  {
    title: "Learning Management System",
    description:
      "Scalable backend with microservices architecture and message queuing.",
    image: projectLms,
    tech: ["NestJS", "Redis", "PostgreSQL", "RabbitMQ", "KrakenD"],
    status: Status.COMPLETED,
    demo: "https://drive.google.com/file/d/1NZQBXxwH66qVaITBwoPKkhcep0v_9jir/view?usp=sharing",
  },
  {
    title: "Student Showcase",
    description:
      "Portfolio platform for students to showcase their projects and skills.",
    image: projectShowcase,
    tech: ["NestJS", "PostgreSQL", "NuxtJS", "Docker"],
    status: Status.IN_PROGRESS,
    demo: "",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Projects
          </h2>
          <p className="text-muted-foreground">
            A collection of projects I've built, from simple tools to full-stack
            applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 hover:cursor-pointer">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              image={project.image}
              tech={project.tech}
              status={project.status}
              index={index}
              demo={project.demo}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
