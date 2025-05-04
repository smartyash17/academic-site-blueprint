
import React from "react";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";

const ChairmansDeskPage = () => {
  return (
    <Layout>
      <PageHeader
        title="Chairman's Desk"
        breadcrumbs={[
          { label: "About", href: "/about" },
          { label: "Chairman's Desk", href: "/about/chairmans-desk" },
        ]}
      />
      
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/3">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <img
                src="public/lovable-uploads/bc5b88ee-c9a7-41d7-95c4-7b0c300f796e.png"
                alt="Chairman"
                className="rounded-full w-48 h-48 mx-auto object-cover mb-4 border-4 border-college-primary"
              />
              <h3 className="text-xl font-bold">Prof. Rajendra Kumar</h3>
              <p className="text-gray-600">Chairman</p>
              <p className="text-gray-600 mt-1">Ph.D, M.Pharm</p>
            </div>
          </div>
          <div className="md:w-2/3">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-college-primary">
              Message from the Chairman
            </h2>
            <div className="prose max-w-none">
              <p className="mb-4">
                Dear Students and Parents,
              </p>
              <p className="mb-4">
                It is my privilege to welcome you to Sarada Devi Group of Institutions, where we strive for excellence in healthcare education. Our institution was founded with the vision of creating healthcare professionals who are not only technically competent but also compassionate and ethical.
              </p>
              <p className="mb-4">
                In today's rapidly evolving healthcare landscape, there is an increasing demand for skilled professionals who can adapt to technological advancements while maintaining the human touch that is essential to healthcare. At Sarada Devi, we have developed a curriculum that balances theoretical knowledge with practical skills, ensuring that our graduates are ready to meet the challenges of the healthcare industry.
              </p>
              <p className="mb-4">
                Our state-of-the-art facilities, experienced faculty, and industry partnerships provide students with an environment conducive to learning and growth. We believe in holistic development, and our extracurricular activities are designed to nurture leadership, teamwork, and communication skills.
              </p>
              <p className="mb-4">
                As you explore our programs in Pharmacy, Nursing, and Paramedical sciences, I encourage you to reach out to our faculty and staff with any questions. We are here to guide you through your educational journey and help you achieve your professional goals.
              </p>
              <p className="mb-4">
                I look forward to welcoming you to our institution and being a part of your success story.
              </p>
              <p className="mb-4 italic">
                "Education is not the filling of a pail, but the lighting of a fire." — William Butler Yeats
              </p>
              <p className="font-semibold">
                Prof. Rajendra Kumar<br />
                Chairman, Sarada Devi Group of Institutions
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ChairmansDeskPage;
