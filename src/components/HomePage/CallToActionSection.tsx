
import React from "react";
import { Button } from "@/components/ui/button";

const CallToActionSection = () => {
  return (
    <section
      className="py-16 bg-college-primary relative"
      style={{
        backgroundImage: "linear-gradient(rgba(10, 36, 99, 0.9), rgba(10, 36, 99, 0.9)), url(public/lovable-uploads/21e101ab-d527-4b4e-b8ab-8e9e2476e163.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Journey with Us?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Apply now to secure your place in our upcoming academic session and take
            the first step towards a rewarding career in healthcare.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-college-secondary hover:bg-college-secondary/90 text-college-primary font-semibold">
              Apply Now
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
