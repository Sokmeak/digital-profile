import { ExternalLink, Github } from 'lucide-react';
import projectTextDisplayer from '@/assets/project-text-displayer.jpg';
import projectEcommerce from '@/assets/project-ecommerce.jpg';
import projectJobseeker from '@/assets/project-jobseeker.jpg';
import projectLms from '@/assets/project-lms.jpg';
import projectShowcase from '@/assets/project-showcase.jpg';

const projects = [
  {
    title: 'Text Displayer',
    description: 'A dynamic text animation tool built with vanilla web technologies.',
    image: projectTextDisplayer,
    tech: ['HTML', 'CSS', 'JavaScript'],
    status: 'completed',
  },
  {
    title: 'E-Commerce Frontend',
    description: 'Modern shopping platform with responsive design and state management.',
    image: projectEcommerce,
    tech: ['Vue.js', 'Pinia'],
    status: 'completed',
  },
  {
    title: 'Job Seeker Platform',
    description: 'Full-stack job hunting platform with authentication and application tracking.',
    image: projectJobseeker,
    tech: ['NestJS', 'PostgreSQL', 'Vue.js', 'Docker'],
    status: 'completed',
  },
  {
    title: 'Learning Management System',
    description: 'Scalable backend with microservices architecture and message queuing.',
    image: projectLms,
    tech: ['NestJS', 'Redis', 'PostgreSQL', 'RabbitMQ', 'KrakenD'],
    status: 'completed',
  },
  {
    title: 'Student Showcase',
    description: 'Portfolio platform for students to showcase their projects and skills.',
    image: projectShowcase,
    tech: ['NestJS', 'PostgreSQL', 'NuxtJS', 'Docker'],
    status: 'in-progress',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of projects I've built, from simple tools to full-stack applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group bg-card rounded-2xl overflow-hidden border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Thumbnail */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {project.status === 'in-progress' && (
                  <div className="absolute top-3 right-3 bg-amber-500/90 text-white text-xs font-medium px-2 py-1 rounded-full">
                    In Progress
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-md font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
