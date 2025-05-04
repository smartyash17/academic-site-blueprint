
import React from "react";

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
}

const Logo: React.FC<LogoProps> = ({ 
  className,
  width = 50, 
  height = 50 
}) => {
  return (
    <img 
      src="public/lovable-uploads/cee6155f-caf6-4ac8-9e6b-3e1aaf18262f.png"
      alt="Sarada Devi Group of Institutions"
      width={width}
      height={height}
      className={className}
    />
  );
};

export default Logo;
