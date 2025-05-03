
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import CourseCard from "@/components/CourseCard";
import FacilityCard from "@/components/FacilityCard";

const Index = () => {
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

  return (
    <Layout>
      <HeroSection
        title="Excellence in Healthcare Education"
        subtitle="Join our prestigious institution for quality education in Pharmacy, Nursing, and Paramedical sciences."
        buttonText="Apply Now"
        buttonLink="/apply"
        backgroundImage="public/lovable-uploads/b43ad39f-f05b-470e-8ba5-1d6c7d8ce88d.png"
      />

      {/* About Section */}
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

      {/* Featured Courses Section */}
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

      {/* Students Gallery Section */}
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

      {/* Facilities Section */}
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

      {/* Campus Images */}
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

      {/* Medical Training Section */}
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

      {/* Call to Action */}
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
    </Layout>
  );
};

export default Index;
