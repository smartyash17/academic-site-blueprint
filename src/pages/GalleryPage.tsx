
import React from "react";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";

const GalleryPage = () => {
  return (
    <Layout>
      <PageHeader
        title="Gallery"
        breadcrumbs={[
          { label: "Gallery", href: "/gallery" },
        ]}
      />
      
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-college-primary">
          Campus Gallery
        </h2>
        <p className="text-gray-700 mb-8">
          Explore our campus life, events, and facilities through our photo gallery.
        </p>
        
        <div className="p-6 border rounded-lg">
          <p className="text-gray-500">Photo gallery coming soon...</p>
        </div>
      </div>
    </Layout>
  );
};

export default GalleryPage;
