
import React from "react";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";

const ContactPage = () => {
  return (
    <Layout>
      <PageHeader
        title="Contact Us"
        breadcrumbs={[
          { label: "Contact", href: "/contact" },
        ]}
      />
      
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-college-primary">
          Get in Touch
        </h2>
        <p className="text-gray-700 mb-8">
          We're here to help! Feel free to reach out to us with any questions or inquiries.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 border rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <p className="mb-2"><strong>Address:</strong> 123 Education Street, Academic City, State 12345</p>
            <p className="mb-2"><strong>Phone:</strong> +1-234-567-8901</p>
            <p className="mb-2"><strong>Email:</strong> info@college.edu</p>
            <p className="mb-2"><strong>Office Hours:</strong> Monday to Friday, 9:00 AM to 5:00 PM</p>
          </div>
          
          <div className="p-6 border rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Send Us a Message</h3>
            <p className="text-gray-500">Contact form coming soon...</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;
