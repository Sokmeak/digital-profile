import React from "react";

interface SkillCardProps {
  name: string;
  level: "Beginner" | "Intermediate" | "Proficient" | "Expert";
  profile: string;
  logo?: string;
}

const SkillCard = ({ name, level, profile, logo }: SkillCardProps) => {
  const getLevelColor = (level: string) => {
    switch (level) {
      case "Expert":
        return "bg-purple-100 text-purple-700 border-purple-200 dark:bg-purple-900/30 dark:text-purple-300 dark:border-purple-700";
      case "Proficient":
        return "bg-green-100 text-green-700 border-green-200 dark:bg-green-900/30 dark:text-green-300 dark:border-green-700";
      case "Intermediate":
        return "bg-yellow-100 text-yellow-700 border-yellow-200 dark:bg-yellow-900/30 dark:text-yellow-300 dark:border-yellow-700";
      case "Beginner":
        return "bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-700";
      default:
        return "bg-secondary text-secondary-foreground border-border/50";
    }
  };

  const getLevelProgress = (level: string) => {
    switch (level) {
      case "Expert":
        return 100;
      case "Proficient":
        return 80;
      case "Intermediate":
        return 60;
      case "Beginner":
        return 40;
      default:
        return 0;
    }
  };

  const getLevelDots = (level: string) => {
    const levels = ["Beginner", "Intermediate", "Proficient", "Expert"];
    const currentLevel = levels.indexOf(level) + 1;

    return (
      <div className="flex gap-1 mt-2">
        {[1, 2, 3, 4].map((dot) => (
          <div
            key={dot}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              dot <= currentLevel
                ? "bg-current scale-110"
                : "bg-muted-foreground/30 scale-90"
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="group relative bg-gradient-to-br from-card to-card/80 backdrop-blur-sm border border-border/60 rounded-xl p-5 hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-2 hover:scale-105">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Content */}
      <div className="relative z-10 space-y-4">
        {/* Header with Logo and Name */}
        <div className="flex items-start gap-3">
          {logo ? (
            <div className="w-12 h-12 rounded-lg bg-background/80 backdrop-blur-sm border border-border/40 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg flex-shrink-0">
              <img
                src={logo}
                alt={`${name} logo`}
                className="w-8 h-8 object-contain"
              />
            </div>
          ) : (
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
              <span className="text-lg font-bold text-primary">
                {name.charAt(0)}
              </span>
            </div>
          )}
          <div className="flex-1 min-w-0">
            <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300 truncate">
              {name}
            </h4>
            <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
              {profile}
            </p>
          </div>
        </div>

        {/* Level Information */}
        <div className="space-y-3">
          {/* Level Badge and Progress */}
          <div className="flex items-center justify-between">
            <span
              className={`px-3 py-1 text-xs rounded-full border font-medium ${getLevelColor(
                level
              )}`}
            >
              {level}
            </span>
            <div className="text-xs text-muted-foreground">
              {getLevelProgress(level)}%
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-secondary/50 rounded-full h-1.5 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-1000 ease-out"
              style={{
                width: `${getLevelProgress(level)}%`,
                transitionDelay: "200ms",
              }}
            />
          </div>

          {/* Level Dots */}
          <div className="flex items-center justify-center">
            {getLevelDots(level)}
          </div>
        </div>

        {/* Hover effect sparkles */}
      </div>
    </div>
  );
};

export default SkillCard;
