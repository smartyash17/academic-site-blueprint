
import React from "react";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import CourseCard from "@/components/CourseCard";

const ParamedicalCoursesPage = () => {
  return (
    <Layout>
      <PageHeader
        title="Paramedical Programs"
        breadcrumbs={[
          { label: "Courses", href: "/courses" },
          { label: "Paramedical", href: "/courses/paramedical" },
        ]}
      />
      
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8 text-college-primary">
          Paramedical Programs
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <CourseCard 
            title="Medical Laboratory Technology"
            category="Diploma / Bachelor's"
            description="Learn laboratory techniques for diagnostic and research purposes."
            duration="2-3 years"
            icon="book"
            link="/courses/paramedical/mlt"
          />
          
          <CourseCard 
            title="Radiography & Imaging Technology"
            category="Diploma / Bachelor's"
            description="Training in operating radiographic equipment and image processing."
            duration="2-3 years" 
            icon="graduation"
            link="/courses/paramedical/radiography"
          />
          
          <CourseCard 
            title="Operation Theater Technology"
            category="Diploma / Certificate"
            description="Training in assisting surgeons and managing operation theater equipment."
            duration="1-2 years"
            icon="users"
            link="/courses/paramedical/ott"
          />
        </div>
      </div>
    </Layout>
  );
};

export default ParamedicalCoursesPage;
