
import React from "react";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";

const CommitteesPage = () => {
  return (
    <Layout>
      <PageHeader
        title="College Committees"
        breadcrumbs={[
          { label: "Committees", href: "/committees" },
        ]}
      />
      
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-college-primary">
          Institutional Committees
        </h2>
        <p className="text-gray-700 mb-8">
          Our institution has various committees that work together to ensure smooth functioning and development of academic and administrative processes.
        </p>
        
        <div className="p-6 border rounded-lg">
          <p className="text-gray-500">Committee details will be available soon...</p>
        </div>
      </div>
    </Layout>
  );
};

export default CommitteesPage;
