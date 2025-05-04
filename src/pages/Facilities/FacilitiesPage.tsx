
import React from "react";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import FacilityCard from "@/components/FacilityCard";

const FacilitiesPage = () => {
  return (
    <Layout>
      <PageHeader
        title="Campus Facilities"
        breadcrumbs={[
          { label: "Facilities", href: "/facilities" },
        ]}
      />
      
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8 text-college-primary">
          Our Campus Facilities
        </h2>
        <p className="text-lg mb-10 max-w-3xl">
          Our institution offers state-of-the-art facilities to ensure a conducive learning environment for our students.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FacilityCard 
            title="Laboratory"
            description="Modern labs equipped with the latest scientific instruments for practical learning."
            icon="laboratory"
            link="/facilities/laboratory"
          />
          
          <FacilityCard 
            title="Equipment"
            description="Advanced equipment for hands-on training in various disciplines."
            icon="building"
            link="/facilities/equipment"
          />
          
          <FacilityCard 
            title="Library"
            description="Extensive collection of books, journals, and digital resources."
            icon="library"
            link="/facilities/library"
          />
          
          <FacilityCard 
            title="Transportation"
            description="Fleet of buses providing safe transport to and from campus."
            icon="transportation"
            link="/facilities/transportation"
          />
          
          <FacilityCard 
            title="Hostel"
            description="Safe and comfortable accommodation for outstation students."
            icon="home"
            link="/facilities/hostel"
          />
        </div>
      </div>
    </Layout>
  );
};

export default FacilitiesPage;
