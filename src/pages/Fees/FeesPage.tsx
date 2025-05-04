
import React from "react";
import { useParams } from "react-router-dom";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";

const FeesPage = () => {
  const { department } = useParams<{ department?: string }>();
  
  const title = department 
    ? `${department.charAt(0).toUpperCase() + department.slice(1)} Fee Structure`
    : "Fee Structure";
  
  return (
    <Layout>
      <PageHeader
        title={title}
        breadcrumbs={[
          { label: "Fees", href: "/fees" },
          ...(department ? [{ label: department, href: `/fees/${department}` }] : []),
        ]}
      />
      
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-college-primary">
          Fee Structure
        </h2>
        <p className="text-gray-700 mb-8">
          Our institution strives to provide quality education at affordable fees. Below is the fee structure for various programs.
        </p>
        
        <div className="p-6 border rounded-lg">
          <p className="text-gray-500">Fee structure details for {department || "all departments"} will be available soon...</p>
        </div>
      </div>
    </Layout>
  );
};

export default FeesPage;
