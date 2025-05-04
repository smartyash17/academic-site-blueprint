
import React from "react";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import CourseCard from "@/components/CourseCard";

const CoursesPage = () => {
  return (
    <Layout>
      <PageHeader
        title="Our Courses"
        breadcrumbs={[
          { label: "Courses", href: "/courses" },
        ]}
      />
      
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8 text-college-primary">
          Explore Our Academic Programs
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <CourseCard 
            title="Pharmacy Programs"
            category="Pharmaceutical Sciences"
            description="Comprehensive pharmacy education with modern curriculum and hands-on training."
            duration="2-4 years depending on program"
            icon="book"
            link="/courses/pharmacy"
          />
          
          <CourseCard 
            title="Nursing Programs"
            category="Healthcare"
            description="Professional nursing education with clinical experience and patient care focus."
            duration="3-4 years depending on program" 
            icon="graduation"
            link="/courses/nursing"
          />
          
          <CourseCard 
            title="Paramedical Programs"
            category="Allied Health Sciences"
            description="Essential paramedical courses for careers in healthcare support services."
            duration="1-3 years depending on program"
            icon="users"
            link="/courses/paramedical"
          />
        </div>
      </div>
    </Layout>
  );
};

export default CoursesPage;
