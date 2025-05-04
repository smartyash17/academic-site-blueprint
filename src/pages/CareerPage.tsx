
import React from "react";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";

const CareerPage = () => {
  return (
    <Layout>
      <PageHeader
        title="Careers"
        breadcrumbs={[
          { label: "Careers", href: "/career" },
        ]}
      />
      
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-college-primary">
          Work With Us
        </h2>
        <p className="text-gray-700 mb-8">
          Join our team of dedicated professionals and contribute to shaping the future of education.
        </p>
        
        <div className="p-6 border rounded-lg">
          <p className="text-gray-500">Job openings and application details coming soon...</p>
        </div>
      </div>
    </Layout>
  );
};

export default CareerPage;
