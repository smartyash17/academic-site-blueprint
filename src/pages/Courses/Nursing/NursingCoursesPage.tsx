
import React from "react";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import CourseCard from "@/components/CourseCard";

const NursingCoursesPage = () => {
  return (
    <Layout>
      <PageHeader
        title="Nursing Programs"
        breadcrumbs={[
          { label: "Courses", href: "/courses" },
          { label: "Nursing", href: "/courses/nursing" },
        ]}
      />
      
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8 text-college-primary">
          Nursing Programs
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <CourseCard 
            title="B.Sc. Nursing"
            category="Bachelor's Degree"
            description="Four-year undergraduate program in nursing science with clinical rotations."
            duration="4 years"
            icon="graduation"
            link="/courses/nursing/bsc-nursing"
          />
          
          <CourseCard 
            title="GNM (General Nursing & Midwifery)"
            category="Diploma"
            description="Three-year diploma program in general nursing and midwifery."
            duration="3 years" 
            icon="graduation"
            link="/courses/nursing/gnm"
          />
          
          <CourseCard 
            title="Post Basic B.Sc. Nursing"
            category="Bachelor's Degree"
            description="Two-year nursing program for registered nurses to obtain B.Sc. qualification."
            duration="2 years"
            icon="book"
            link="/courses/nursing/post-basic-bsc"
          />
        </div>
      </div>
    </Layout>
  );
};

export default NursingCoursesPage;
