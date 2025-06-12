
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import AdmissionPortal from "../AdmissionPortal/AdmissionPortal";

const CallToActionSection = () => {
  const [isAdmissionPortalOpen, setIsAdmissionPortalOpen] = useState(false);

  return (
    <>
      <section
        className="py-16 bg-college-primary relative overflow-hidden"
        style={{
          backgroundImage: "linear-gradient(rgba(22, 163, 74, 0.95), rgba(21, 128, 61, 0.95)), url(public/lovable-uploads/21e101ab-d527-4b4e-b8ab-8e9e2476e163.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Your Journey with Us?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Apply now to secure your place in our upcoming academic session and
              take the first step towards a rewarding career in healthcare.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                size="lg" 
                variant="secondary"
                className="shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
                onClick={() => setIsAdmissionPortalOpen(true)}
              >
                Apply Now
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white/10 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-white/5 rounded-full -translate-x-16 -translate-y-16"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-white/5 rounded-full translate-x-20 translate-y-20"></div>
      </section>

      <AdmissionPortal
        isOpen={isAdmissionPortalOpen}
        onClose={() => setIsAdmissionPortalOpen(false)}
      />
    </>
  );
};

export default CallToActionSection;
