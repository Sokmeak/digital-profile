import { Calendar, GraduationCap, MapPin } from "lucide-react";

interface SchoolProps {
  degree: string;
  institution: string;
  duration: string;
  location: string;
  coursework: string;
  website?: string;
}

const School = ({
  degree,
  institution,
  duration,
  location,
  coursework,
  website,
}: SchoolProps) => {
  return (
    <a
      href={website}
      target="_blank"
      rel="noopener noreferrer"
      className="block border border-border rounded-lg p-8 bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 cursor-pointer"
    >
      <div className="flex items-start gap-6">
        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
          <GraduationCap className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h4 className="font-medium text-foreground text-lg">{degree}</h4>
          <p className="text-muted-foreground text-base">{institution}</p>
          <div className="flex flex-wrap gap-4 mt-3 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {duration}
            </span>
            <span className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              {location}
            </span>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            Relevant coursework: {coursework}
          </p>
        </div>
      </div>
    </a>
  );
};

export default School;
