
import React from "react";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";

const About = () => {
  return (
    <Layout>
      <PageHeader
        title="About Us"
        breadcrumbs={[{ label: "About Us", href: "/about" }]}
        backgroundImage="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
      />

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="w-full md:w-2/3">
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-4">Our Institution</h2>
                <p className="text-gray-600 mb-4">
                  Founded in 2005, the College of Pharmacy & Nursing has grown to become one of the premier institutions for healthcare education in the region. Our college is committed to excellence in teaching, research, and community service.
                </p>
                <p className="text-gray-600 mb-4">
                  Our programs in Pharmacy, Nursing, and Paramedical sciences are designed to provide students with both theoretical knowledge and practical skills necessary for successful careers in healthcare.
                </p>
                <p className="text-gray-600">
                  We maintain strong relationships with leading hospitals, healthcare facilities, and pharmaceutical companies to ensure that our curriculum remains relevant and that our students have access to quality internship and placement opportunities.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
                <p className="text-gray-600">
                  To be recognized as a center of excellence in healthcare education, producing competent professionals who contribute significantly to the advancement of healthcare services and the well-being of society.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li>To provide quality education and training in healthcare disciplines</li>
                  <li>To foster a culture of research and innovation among students and faculty</li>
                  <li>To instill ethical values and professional integrity in our students</li>
                  <li>To collaborate with healthcare institutions for continuous improvement of our programs</li>
                  <li>To contribute to the community through healthcare services and awareness programs</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-md">
                    <h3 className="text-lg font-semibold mb-2">Experienced Faculty</h3>
                    <p className="text-gray-600">Learn from seasoned professionals with extensive academic and industry experience.</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-md">
                    <h3 className="text-lg font-semibold mb-2">Modern Facilities</h3>
                    <p className="text-gray-600">Access to state-of-the-art labs, libraries, and other resources.</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-md">
                    <h3 className="text-lg font-semibold mb-2">Industry Connections</h3>
                    <p className="text-gray-600">Partnerships with leading healthcare providers for internships and placements.</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-md">
                    <h3 className="text-lg font-semibold mb-2">Holistic Development</h3>
                    <p className="text-gray-600">Focus on both academic excellence and personal growth.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/3 space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-college-primary">Key Statistics</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-4xl font-bold text-college-secondary">500+</p>
                    <p className="text-gray-600">Students Enrolled</p>
                  </div>
                  <div>
                    <p className="text-4xl font-bold text-college-secondary">50+</p>
                    <p className="text-gray-600">Experienced Faculty</p>
                  </div>
                  <div>
                    <p className="text-4xl font-bold text-college-secondary">95%</p>
                    <p className="text-gray-600">Placement Rate</p>
                  </div>
                  <div>
                    <p className="text-4xl font-bold text-college-secondary">20+</p>
                    <p className="text-gray-600">Industry Partners</p>
                  </div>
                </div>
              </div>

              <div>
                <img
                  src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
                  alt="College campus"
                  className="rounded-lg w-full"
                />
              </div>

              <div className="bg-college-primary text-white p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Accreditations</h3>
                <ul className="space-y-2">
                  <li>Pharmacy Council of India (PCI)</li>
                  <li>Indian Nursing Council (INC)</li>
                  <li>State Nursing Council</li>
                  <li>ISO 9001:2015 Certified</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
