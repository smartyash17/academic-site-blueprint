
import React from "react";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";

const HostelPage = () => {
  return (
    <Layout>
      <PageHeader
        title="Hostel Accommodation"
        breadcrumbs={[
          { label: "Facilities", href: "/facilities" },
          { label: "Hostel", href: "/facilities/hostel" },
        ]}
      />
      
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-college-primary">
          Student Accommodation
        </h2>
        <p className="text-gray-700 mb-8">
          Our institution provides comfortable and safe hostel facilities for outstation students with all necessary amenities.
        </p>
        
        <div className="p-6 border rounded-lg">
          <p className="text-gray-500">Hostel accommodation details will be available soon...</p>
        </div>
      </div>
    </Layout>
  );
};

export default HostelPage;
