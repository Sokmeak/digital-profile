import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tech: string[];
  status?: "completed" | "in-progress";
  index?: number;
  demo?: string;
}

const ProjectCard = ({
  title,
  description,
  image,
  tech,
  status = "completed",
  index = 0,
  demo,
}: ProjectCardProps) => {
  return (
    <div
      className="group relative bg-card rounded-2xl overflow-hidden border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Thumbnail */}
      <div className="relative overflow-hidden aspect-video">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {status === "in-progress" && (
          <div className="absolute top-3 right-3 bg-amber-500/90 text-white text-xs font-medium px-2 py-1 rounded-full">
            In Progress
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Floating Demo Link */}
        {demo && (
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 scale-90 group-hover:scale-100 z-10"
          >
            <div className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-full shadow-lg hover:bg-primary/90 transition-colors">
              <ExternalLink className="w-4 h-4" />
              <span className="text-sm font-medium">Preview</span>
            </div>
          </a>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1.5">
          {tech.map((techItem) => (
            <span
              key={techItem}
              className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-md font-medium"
            >
              {techItem}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
