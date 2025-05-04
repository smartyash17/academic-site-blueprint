
import React from "react";
import { useParams } from "react-router-dom";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";

const SyllabusPage = () => {
  const { department } = useParams<{ department?: string }>();
  
  const title = department 
    ? `${department.charAt(0).toUpperCase() + department.slice(1)} Syllabus`
    : "Syllabus";
  
  return (
    <Layout>
      <PageHeader
        title={title}
        breadcrumbs={[
          { label: "Syllabus", href: "/syllabus" },
          ...(department ? [{ label: department, href: `/syllabus/${department}` }] : []),
        ]}
      />
      
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-college-primary">
          Academic Curriculum and Syllabus
        </h2>
        <p className="text-gray-700 mb-8">
          Our institution follows a comprehensive curriculum designed to provide students with both theoretical knowledge and practical skills.
        </p>
        
        <div className="p-6 border rounded-lg">
          <p className="text-gray-500">Syllabus content for {department || "all departments"} will be available soon...</p>
        </div>
      </div>
    </Layout>
  );
};

export default SyllabusPage;
