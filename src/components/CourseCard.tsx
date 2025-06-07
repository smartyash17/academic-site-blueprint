
import React from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Book, GraduationCap, Users } from "lucide-react";

interface CourseCardProps {
  title: string;
  category: string;
  description: string;
  duration: string;
  icon?: "book" | "graduation" | "users";
  link: string;
  className?: string;
}

const CourseCard: React.FC<CourseCardProps> = ({
  title,
  category,
  description,
  duration,
  icon = "graduation",
  link,
  className,
}) => {
  const renderIcon = () => {
    switch (icon) {
      case "book":
        return <Book className="h-10 w-10" />;
      case "users":
        return <Users className="h-10 w-10" />;
      default:
        return <GraduationCap className="h-10 w-10" />;
    }
  };

  return (
    <Card className={cn("h-full flex flex-col transition-all duration-300 hover:shadow-lg hover:scale-105 border-gray-200 group", className)}>
      <CardHeader className="pb-2">
        <div className="mb-2 text-college-primary group-hover:text-college-dark transition-colors">{renderIcon()}</div>
        <div className="font-medium text-xs text-college-secondary mb-1 uppercase tracking-wide">{category}</div>
        <h3 className="text-xl font-semibold text-college-primary group-hover:text-college-dark transition-colors">{title}</h3>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-gray-600 group-hover:text-gray-700 transition-colors">{description}</p>
      </CardContent>
      <CardFooter className="flex flex-col items-start space-y-4 pt-2">
        <div className="text-sm text-gray-500">
          <span className="font-medium text-college-primary">Duration:</span> {duration}
        </div>
        <Button
          variant="outline"
          className="w-full"
          asChild
        >
          <Link to={link}>Learn More</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;
