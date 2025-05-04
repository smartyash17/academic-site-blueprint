
import React from "react";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";

const EquipmentPage = () => {
  return (
    <Layout>
      <PageHeader
        title="Equipment & Technology"
        breadcrumbs={[
          { label: "Facilities", href: "/facilities" },
          { label: "Equipment", href: "/facilities/equipment" },
        ]}
      />
      
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-college-primary">
          Modern Equipment & Technology
        </h2>
        <p className="text-gray-700 mb-8">
          Our institution is equipped with the latest equipment and technology to ensure students receive practical training with industry-standard tools.
        </p>
        
        <div className="p-6 border rounded-lg">
          <p className="text-gray-500">Equipment details will be available soon...</p>
        </div>
      </div>
    </Layout>
  );
};

export default EquipmentPage;
