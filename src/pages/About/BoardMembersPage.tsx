
import React from "react";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";

const BoardMembersPage = () => {
  return (
    <Layout>
      <PageHeader
        title="Board Members"
        breadcrumbs={[
          { label: "About", href: "/about" },
          { label: "Board Members", href: "/about/board-members" },
        ]}
      />
      
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-college-primary">
          Our Governing Board
        </h2>
        <p className="text-gray-700 mb-8">
          The Sarada Devi Group of Institutions is guided by a distinguished board of members who bring their expertise and vision to steer our institution towards excellence in healthcare education.
        </p>
        
        {/* Board members content will be added here */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Placeholder for board members */}
          <div className="text-center p-6">
            <p className="text-gray-500">Board members content coming soon...</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BoardMembersPage;
