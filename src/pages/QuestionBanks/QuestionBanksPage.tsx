
import React from "react";
import { useParams } from "react-router-dom";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";

const QuestionBanksPage = () => {
  const { department } = useParams<{ department?: string }>();
  
  const title = department 
    ? `${department.charAt(0).toUpperCase() + department.slice(1)} Question Banks`
    : "Question Banks";
  
  return (
    <Layout>
      <PageHeader
        title={title}
        breadcrumbs={[
          { label: "Question Banks", href: "/question-banks" },
          ...(department ? [{ label: department, href: `/question-banks/${department}` }] : []),
        ]}
      />
      
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-college-primary">
          Academic Question Banks
        </h2>
        <p className="text-gray-700 mb-8">
          Our institution provides comprehensive question banks to help students prepare for examinations and assessments.
        </p>
        
        <div className="p-6 border rounded-lg">
          <p className="text-gray-500">Question bank materials for {department || "all departments"} will be available soon...</p>
        </div>
      </div>
    </Layout>
  );
};

export default QuestionBanksPage;
