
import React from "react";

const CampusImagesSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-college-secondary font-semibold uppercase text-sm tracking-wider">
            Our Campus
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">Campus Infrastructure</h2>
          <p className="text-gray-600 max-w-3xl mx-auto mt-4">
            Take a look at our modern campus facilities designed to provide an optimal learning environment.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-6 mb-6">
          <div className="w-full md:w-2/3 rounded-lg overflow-hidden shadow-md">
            <img src="public/lovable-uploads/fec98065-0842-48aa-92bb-e2d698786e81.png" alt="Campus building" className="w-full h-96 object-cover" />
          </div>
          <div className="w-full md:w-1/3 rounded-lg overflow-hidden shadow-md">
            <img src="public/lovable-uploads/30a552fc-5424-40b3-95e0-e3fefa67f587.png" alt="Campus building side view" className="w-full h-96 object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CampusImagesSection;
