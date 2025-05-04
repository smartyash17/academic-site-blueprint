
import React from "react";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";

const FacultiesPage = () => {
  return (
    <Layout>
      <PageHeader
        title="Our Faculties"
        breadcrumbs={[
          { label: "Faculties", href: "/faculties" },
        ]}
      />
      
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-college-primary">
          Academic Faculties
        </h2>
        <p className="text-gray-700 mb-8">
          Our institution is proud to have a team of highly qualified and experienced faculty members dedicated to providing quality education.
        </p>
        
        <div className="p-6 border rounded-lg">
          <p className="text-gray-500">Faculty details will be available soon...</p>
        </div>
      </div>
    </Layout>
  );
};

export default FacultiesPage;
