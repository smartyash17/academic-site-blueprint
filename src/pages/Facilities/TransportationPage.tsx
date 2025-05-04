
import React from "react";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";

const TransportationPage = () => {
  return (
    <Layout>
      <PageHeader
        title="Transportation Services"
        breadcrumbs={[
          { label: "Facilities", href: "/facilities" },
          { label: "Transportation", href: "/facilities/transportation" },
        ]}
      />
      
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-college-primary">
          Campus Transportation
        </h2>
        <p className="text-gray-700 mb-8">
          Our institution provides reliable transportation services to help students commute safely and conveniently to and from the campus.
        </p>
        
        <div className="p-6 border rounded-lg">
          <p className="text-gray-500">Transportation service details will be available soon...</p>
        </div>
      </div>
    </Layout>
  );
};

export default TransportationPage;
