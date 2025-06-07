
import React from "react";
import { Link } from "react-router-dom";
import { Library, Building, GraduationCap, Bus, Home, Microscope } from "lucide-react";
import { cn } from "@/lib/utils";

interface FacilityCardProps {
  title: string;
  description: string;
  icon: "library" | "building" | "graduation" | "transportation" | "home" | "laboratory";
  link: string;
  className?: string;
}

const FacilityCard: React.FC<FacilityCardProps> = ({
  title,
  description,
  icon,
  link,
  className,
}) => {
  const renderIcon = () => {
    switch (icon) {
      case "library":
        return <Library className="h-8 w-8" />;
      case "building":
        return <Building className="h-8 w-8" />;
      case "graduation":
        return <GraduationCap className="h-8 w-8" />;
      case "transportation":
        return <Bus className="h-8 w-8" />;
      case "home":
        return <Home className="h-8 w-8" />;
      case "laboratory":
        return <Microscope className="h-8 w-8" />;
      default:
        return <Building className="h-8 w-8" />;
    }
  };

  return (
    <Link to={link}>
      <div className={cn(
        "bg-white rounded-lg p-6 shadow-sm h-full transition-all duration-300 hover:shadow-lg hover:scale-105 border border-gray-100 group",
        className
      )}>
        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-college-primary/10 text-college-primary mb-4 group-hover:bg-college-primary group-hover:text-white transition-all duration-300">
          {renderIcon()}
        </div>
        <h3 className="text-xl font-semibold mb-3 text-college-primary group-hover:text-college-dark transition-colors">{title}</h3>
        <p className="text-gray-600 group-hover:text-gray-700 transition-colors">{description}</p>
      </div>
    </Link>
  );
};

export default FacilityCard;
