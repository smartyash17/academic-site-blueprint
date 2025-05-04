
import React from "react";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";

const LaboratoryPage = () => {
  return (
    <Layout>
      <PageHeader
        title="Laboratory Facilities"
        breadcrumbs={[
          { label: "Facilities", href: "/facilities" },
          { label: "Laboratory", href: "/facilities/laboratory" },
        ]}
      />
      
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-college-primary">
          Our Modern Laboratories
        </h2>
        <p className="text-gray-700 mb-8">
          Our institution is equipped with state-of-the-art laboratories that provide hands-on experience to students in their respective fields.
        </p>
        
        <div className="p-6 border rounded-lg">
          <p className="text-gray-500">Laboratory details will be available soon...</p>
        </div>
      </div>
    </Layout>
  );
};

export default LaboratoryPage;
