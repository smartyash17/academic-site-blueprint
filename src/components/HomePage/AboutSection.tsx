
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="w-full md:w-1/2 lg:w-5/12">
            <div className="relative">
              <img
                src="public/lovable-uploads/9bd44782-7ad3-4548-9e14-e706d3dbee63.png"
                alt="Award ceremony"
                className="rounded-lg w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-md hidden md:block">
                <p className="text-3xl font-bold text-college-primary">20+</p>
                <p className="text-gray-600">Years of Excellence</p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-7/12 mt-8 md:mt-0">
            <div className="inline-block mb-6">
              <span className="text-college-secondary font-semibold uppercase text-sm tracking-wider">
                About Our Institution
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Committed to Academic Excellence and Professional Development
            </h2>
            <p className="text-gray-600 mb-6">
              Founded in 2005, our college has been at the forefront of healthcare education,
              providing quality training in Pharmacy, Nursing, and Paramedical sciences. 
              Our curriculum combines theoretical knowledge with practical experience, 
              preparing students for successful careers in healthcare.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-college-secondary"></div>
                <span>Experienced Faculty</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-college-secondary"></div>
                <span>Modern Facilities</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-college-secondary"></div>
                <span>Industry Partnerships</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-college-secondary"></div>
                <span>100% Placement Assistance</span>
              </div>
            </div>
            <Button className="bg-college-primary hover:bg-college-dark text-white" asChild>
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
