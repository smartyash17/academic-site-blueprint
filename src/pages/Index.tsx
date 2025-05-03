
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
        backgroundImage="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
      />

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="w-full md:w-1/2 lg:w-5/12">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
                  alt="College campus"
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

      {/* Facilities Section */}
      <section className="py-16 bg-white">
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

      {/* Call to Action */}
      <section
        className="py-16 bg-college-primary relative"
        style={{
          backgroundImage: "linear-gradient(rgba(10, 36, 99, 0.9), rgba(10, 36, 99, 0.9)), url(https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80)",
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
