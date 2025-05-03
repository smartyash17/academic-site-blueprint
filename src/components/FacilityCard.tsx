
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
        return <Bus className="h-8 w-8" />; // Changed from Transportation to Bus
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
        "bg-white rounded-lg p-6 shadow-sm h-full transition-all duration-300 hover:shadow-md border border-gray-100",
        className
      )}>
        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-college-primary/10 text-college-primary mb-4">
          {renderIcon()}
        </div>
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </Link>
  );
};

export default FacilityCard;
