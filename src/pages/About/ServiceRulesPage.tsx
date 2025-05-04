
import React from "react";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";

const ServiceRulesPage = () => {
  return (
    <Layout>
      <PageHeader
        title="Service Rules"
        breadcrumbs={[
          { label: "About", href: "/about" },
          { label: "Service Rules", href: "/about/service-rules" },
        ]}
      />
      
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-college-primary">
          Institutional Policies and Service Rules
        </h2>
        <p className="text-gray-700 mb-8">
          This page outlines the service rules and institutional policies that govern the functioning of Sarada Devi Group of Institutions.
        </p>
        
        {/* Service rules content will be added here */}
        <div className="p-6 border rounded-lg">
          <p className="text-gray-500">Service rules content coming soon...</p>
        </div>
      </div>
    </Layout>
  );
};

export default ServiceRulesPage;
