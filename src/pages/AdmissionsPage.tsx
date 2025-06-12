
import React, { useState } from "react";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import AdmissionPortal from "@/components/AdmissionPortal/AdmissionPortal";

const AdmissionsPage = () => {
  const [isAdmissionPortalOpen, setIsAdmissionPortalOpen] = useState(false);

  return (
    <>
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-college-primary">Admission Requirements</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Completed 12th standard with minimum 50% marks</li>
                <li>• Valid government-issued ID (Aadhar Card)</li>
                <li>• Medical fitness certificate</li>
                <li>• Character certificate from previous institution</li>
                <li>• Passport size photographs</li>
              </ul>
            </div>
            
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-college-primary">Application Process</h3>
              <ol className="space-y-2 text-gray-700">
                <li>1. Fill out the online application form</li>
                <li>2. Upload required documents</li>
                <li>3. Pay the application fee (₹1000)</li>
                <li>4. Submit your application</li>
                <li>5. Wait for admission confirmation</li>
              </ol>
            </div>
          </div>

          <div className="text-center">
            <Button 
              size="lg"
              className="shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => setIsAdmissionPortalOpen(true)}
            >
              Start Your Application
            </Button>
          </div>
        </div>
      </Layout>

      <AdmissionPortal
        isOpen={isAdmissionPortalOpen}
        onClose={() => setIsAdmissionPortalOpen(false)}
      />
    </>
  );
};

export default AdmissionsPage;
