
import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

interface Breadcrumb {
  label: string;
  href: string;
}

interface PageHeaderProps {
  title: string;
  breadcrumbs?: Breadcrumb[];
  backgroundImage?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  breadcrumbs = [],
  backgroundImage = "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1200",
}) => {
  return (
    <div
      className="relative py-16 md:py-24"
      style={{
        backgroundImage: `linear-gradient(rgba(10, 36, 99, 0.85), rgba(10, 36, 99, 0.85)), url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          {title}
        </h1>
        {breadcrumbs.length > 0 && (
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-1 text-white/80">
              <li>
                <Link to="/" className="hover:text-white">
                  Home
                </Link>
              </li>
              {breadcrumbs.map((breadcrumb, index) => (
                <li key={index} className="flex items-center">
                  <ChevronRight className="h-4 w-4 mx-1" />
                  {index === breadcrumbs.length - 1 ? (
                    <span className="font-medium">{breadcrumb.label}</span>
                  ) : (
                    <Link
                      to={breadcrumb.href}
                      className="hover:text-white"
                    >
                      {breadcrumb.label}
                    </Link>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}
      </div>
    </div>
  );
};

export default PageHeader;
