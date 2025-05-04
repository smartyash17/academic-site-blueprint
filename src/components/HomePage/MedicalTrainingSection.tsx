
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const MedicalTrainingSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2">
            <img src="public/lovable-uploads/e7551a4c-5376-44b6-940f-b32a8e7bd876.png" alt="Medical training" className="rounded-lg w-full shadow-md" />
          </div>
          <div className="w-full md:w-1/2">
            <div className="inline-block mb-6">
              <span className="text-college-secondary font-semibold uppercase text-sm tracking-wider">
                Hands-on Experience
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Clinical Training & Practice
            </h2>
            <p className="text-gray-600 mb-6">
              Our students receive practical training in modern clinical settings under the guidance of experienced medical professionals. This hands-on experience is crucial for developing the skills needed in the healthcare industry.
            </p>
            <Button className="bg-college-primary hover:bg-college-dark text-white" asChild>
              <Link to="/facilities/clinical-training">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MedicalTrainingSection;
