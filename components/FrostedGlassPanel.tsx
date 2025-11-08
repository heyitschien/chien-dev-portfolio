import React from "react";

interface FrostedGlassPanelProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  borderColor?: string; // For colored accents (like Skills, How I Build AI)
}

export const FrostedGlassPanel: React.FC<FrostedGlassPanelProps> = ({
  children,
  className = "",
  hover = true,
  borderColor = "border-white/20",
}) => {
  return (
    <div
      className={`
        rounded-xl 
        bg-white/10 
        backdrop-blur-md 
        border 
        ${borderColor}
        p-6 
        shadow-lg 
        transition-all
        ${hover ? "hover:scale-[1.02] hover:shadow-xl hover:border-white/30" : ""}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

