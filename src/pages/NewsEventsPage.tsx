
import React from "react";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";

const NewsEventsPage = () => {
  return (
    <Layout>
      <PageHeader
        title="News & Events"
        breadcrumbs={[
          { label: "News & Events", href: "/news" },
        ]}
      />
      
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-college-primary">
          Latest Updates
        </h2>
        <p className="text-gray-700 mb-8">
          Stay informed about the latest news, events, and happenings at our institution.
        </p>
        
        <div className="p-6 border rounded-lg">
          <p className="text-gray-500">News and events details coming soon...</p>
        </div>
      </div>
    </Layout>
  );
};

export default NewsEventsPage;
