
import React from "react";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";

const PlacementPage = () => {
  return (
    <Layout>
      <PageHeader
        title="Placements"
        breadcrumbs={[
          { label: "Placements", href: "/placement" },
        ]}
      />
      
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-college-primary">
          Career Placements
        </h2>
        <p className="text-gray-700 mb-8">
          Our institution has a dedicated placement cell to help students find rewarding career opportunities.
        </p>
        
        <div className="p-6 border rounded-lg">
          <p className="text-gray-500">Placement details and statistics coming soon...</p>
        </div>
      </div>
    </Layout>
  );
};

export default PlacementPage;
