
import React from "react";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";

const AdmissionsPage = () => {
  return (
    <Layout>
      <PageHeader
        title="Admissions"
        breadcrumbs={[
          { label: "Apply", href: "/apply" },
        ]}
      />
      
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-college-primary">
          Admission Process
        </h2>
        <p className="text-gray-700 mb-8">
          Join our institution and embark on a successful career path. Here's how to apply.
        </p>
        
        <div className="p-6 border rounded-lg">
          <p className="text-gray-500">Admission details and application form coming soon...</p>
        </div>
      </div>
    </Layout>
  );
};

export default AdmissionsPage;
