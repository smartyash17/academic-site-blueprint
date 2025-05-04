
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import CourseCard from "@/components/CourseCard";

const featuredCourses = [
  {
    title: "Bachelor of Pharmacy",
    category: "Pharmacy",
    description: "Comprehensive program covering pharmaceutical sciences, medicinal chemistry, pharmacology, and clinical pharmacy.",
    duration: "4 Years",
    icon: "book" as const,
    link: "/courses/pharmacy/bpharm",
  },
  {
    title: "B.Sc. Nursing",
    category: "Nursing",
    description: "Learn patient care, clinical practices, and specialized nursing techniques in our state-of-the-art facilities.",
    duration: "4 Years",
    icon: "users" as const,
    link: "/courses/nursing/bsc",
  },
  {
    title: "Diploma in Medical Laboratory Technology",
    category: "Paramedical",
    description: "Train in laboratory techniques, sample analysis, and medical diagnostics for a career in healthcare.",
    duration: "2 Years",
    icon: "graduation" as const,
    link: "/courses/paramedical/dmlt",
  },
];

const FeaturedCoursesSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-college-secondary font-semibold uppercase text-sm tracking-wider">
            Our Programs
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">Featured Courses</h2>
          <p className="text-gray-600 max-w-3xl mx-auto mt-4">
            Discover our selection of top programs designed to provide you with
            the knowledge and skills needed for a successful career in healthcare.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredCourses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>

        <div className="text-center mt-10">
          <Button
            variant="outline"
            className="border-college-primary text-college-primary hover:bg-college-primary hover:text-white"
            asChild
          >
            <Link to="/courses">View All Courses</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCoursesSection;
