
import React from "react";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";

const LibraryPage = () => {
  return (
    <Layout>
      <PageHeader
        title="Library Resources"
        breadcrumbs={[
          { label: "Facilities", href: "/facilities" },
          { label: "Library", href: "/facilities/library" },
        ]}
      />
      
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-college-primary">
          Academic Library
        </h2>
        <p className="text-gray-700 mb-8">
          Our institution houses a well-stocked library with a vast collection of books, journals, and digital resources to support academic research and learning.
        </p>
        
        <div className="p-6 border rounded-lg">
          <p className="text-gray-500">Library resource details will be available soon...</p>
        </div>
      </div>
    </Layout>
  );
};

export default LibraryPage;
