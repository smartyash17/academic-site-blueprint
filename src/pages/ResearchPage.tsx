
import React from "react";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";

const ResearchPage = () => {
  return (
    <Layout>
      <PageHeader
        title="Research"
        breadcrumbs={[
          { label: "Research", href: "/research" },
        ]}
      />
      
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-college-primary">
          Research Activities
        </h2>
        <p className="text-gray-700 mb-8">
          Our institution is actively involved in various research activities to contribute to the advancement of knowledge in different fields.
        </p>
        
        <div className="p-6 border rounded-lg">
          <p className="text-gray-500">Research activities and publications details coming soon...</p>
        </div>
      </div>
    </Layout>
  );
};

export default ResearchPage;
