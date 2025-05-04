
import React from "react";

const StudentLifeSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-college-secondary font-semibold uppercase text-sm tracking-wider">
            Our Students
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">Student Life</h2>
          <p className="text-gray-600 max-w-3xl mx-auto mt-4">
            Our students are engaged in various academic and extracurricular activities to ensure their holistic development.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div className="rounded-lg overflow-hidden shadow-md">
            <img src="public/lovable-uploads/2dd8aa3b-0d53-4414-a3b5-985908571507.png" alt="Faculty staff" className="w-full h-60 object-cover" />
          </div>
          <div className="rounded-lg overflow-hidden shadow-md">
            <img src="public/lovable-uploads/bc5b88ee-c9a7-41d7-95c4-7b0c300f796e.png" alt="Students group" className="w-full h-60 object-cover" />
          </div>
          <div className="rounded-lg overflow-hidden shadow-md">
            <img src="public/lovable-uploads/0f5f7dce-d712-46c1-aa48-b6528330768f.png" alt="Nursing students" className="w-full h-60 object-cover" />
          </div>
          <div className="rounded-lg overflow-hidden shadow-md">
            <img src="public/lovable-uploads/0b7a1b09-0f0f-418a-a62c-93b60821d029.png" alt="Award ceremony" className="w-full h-60 object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentLifeSection;
