
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import FacilityCard from "@/components/FacilityCard";

const facilities = [
  {
    title: "Modern Laboratories",
    description: "Fully equipped labs with the latest technology for hands-on learning experiences.",
    icon: "laboratory" as const,
    link: "/facilities/laboratory",
  },
  {
    title: "Well-stocked Library",
    description: "Extensive collection of books, journals, and digital resources.",
    icon: "library" as const,
    link: "/facilities/library",
  },
  {
    title: "Comfortable Hostels",
    description: "Safe and comfortable accommodation for both male and female students.",
    icon: "home" as const,
    link: "/facilities/hostel",
  },
  {
    title: "Transportation Services",
    description: "Convenient transportation options for commuting students and staff.",
    icon: "transportation" as const,
    link: "/facilities/transportation",
  },
];

const FacilitiesSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-college-secondary font-semibold uppercase text-sm tracking-wider">
            Campus Life
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">Our Facilities</h2>
          <p className="text-gray-600 max-w-3xl mx-auto mt-4">
            We provide state-of-the-art facilities to ensure a comfortable and
            productive learning environment for all our students.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {facilities.map((facility, index) => (
            <FacilityCard key={index} {...facility} />
          ))}
        </div>

        <div className="text-center mt-10">
          <Button
            variant="outline"
            className="border-college-primary text-college-primary hover:bg-college-primary hover:text-white"
            asChild
          >
            <Link to="/facilities">Explore All Facilities</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;
