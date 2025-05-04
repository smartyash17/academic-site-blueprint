
import React from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { GraduationCap, FileText, DollarSign, Book } from "lucide-react";

const PharmacyCoursesPage = () => {
  return (
    <Layout>
      <PageHeader
        title="Pharmacy Courses"
        breadcrumbs={[
          { label: "Courses", href: "/courses" },
          { label: "Pharmacy", href: "/courses/pharmacy" },
        ]}
      />
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-college-primary">
              Our Pharmacy Programs
            </h2>
            <p className="text-gray-700 mb-6">
              Sarada Devi Group of Institutions offers comprehensive pharmacy education designed to prepare students for successful careers in pharmaceutical sciences. Our programs combine theoretical knowledge with hands-on practical experience in state-of-the-art laboratories.
            </p>

            <Tabs defaultValue="dpharm" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="dpharm">D.Pharm</TabsTrigger>
                <TabsTrigger value="bpharm">B.Pharm</TabsTrigger>
              </TabsList>
              <TabsContent value="dpharm" className="border rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Diploma in Pharmacy (D.Pharm)</h3>
                <p className="mb-4">
                  The D.Pharm program is a 2-year diploma course that provides students with the essential knowledge and skills required to pursue a career in pharmacy. The curriculum is based on the ER-2020 regulations and includes both theoretical and practical components.
                </p>
                <h4 className="font-semibold mt-4 mb-2">Key Features:</h4>
                <ul className="list-disc pl-5 mb-4 space-y-1">
                  <li>2-year diploma program</li>
                  <li>11 theory courses and 10 practical courses</li>
                  <li>825 theory hours, 800 practical hours, and 275 tutorial hours</li>
                  <li>Courses in Pharmaceutics, Pharmacology, Pharmacognosy, and more</li>
                  <li>Focus on practical skills and industry readiness</li>
                </ul>
                <div className="flex flex-wrap gap-3 mt-6">
                  <Button asChild variant="outline" className="flex gap-2">
                    <Link to="/courses/eligibility"><GraduationCap size={18} /> Eligibility</Link>
                  </Button>
                  <Button asChild variant="outline" className="flex gap-2">
                    <Link to="/syllabus/pharmacy"><FileText size={18} /> Syllabus</Link>
                  </Button>
                  <Button asChild variant="outline" className="flex gap-2">
                    <Link to="/fees/pharmacy"><DollarSign size={18} /> Fees</Link>
                  </Button>
                  <Button asChild variant="outline" className="flex gap-2">
                    <Link to="/question-banks/pharmacy"><Book size={18} /> Question Banks</Link>
                  </Button>
                </div>
              </TabsContent>
              
              <TabsContent value="bpharm" className="border rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Bachelor of Pharmacy (B.Pharm)</h3>
                <p className="mb-4">
                  The B.Pharm program is a 4-year degree course that provides students with comprehensive knowledge of pharmaceutical sciences. The curriculum is designed as per the Pharmacy Council of India guidelines and includes subjects like Pharmaceutical Chemistry, Pharmacology, and Pharmaceutics.
                </p>
                <h4 className="font-semibold mt-4 mb-2">Key Features:</h4>
                <ul className="list-disc pl-5 mb-4 space-y-1">
                  <li>4-year degree program (8 semesters)</li>
                  <li>208+ credits as per PCI guidelines</li>
                  <li>Subjects including Human Anatomy, Pharmaceutical Chemistry, Pharmacognosy, and more</li>
                  <li>Project work in the final year</li>
                  <li>CGPA-based grading system</li>
                  <li>Minimum 80% attendance required</li>
                </ul>
                <div className="flex flex-wrap gap-3 mt-6">
                  <Button asChild variant="outline" className="flex gap-2">
                    <Link to="/courses/eligibility"><GraduationCap size={18} /> Eligibility</Link>
                  </Button>
                  <Button asChild variant="outline" className="flex gap-2">
                    <Link to="/syllabus/pharmacy"><FileText size={18} /> Syllabus</Link>
                  </Button>
                  <Button asChild variant="outline" className="flex gap-2">
                    <Link to="/fees/pharmacy"><DollarSign size={18} /> Fees</Link>
                  </Button>
                  <Button asChild variant="outline" className="flex gap-2">
                    <Link to="/question-banks/pharmacy"><Book size={18} /> Question Banks</Link>
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </div>
          
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h3 className="text-lg font-bold mb-4 text-college-primary">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/apply" className="text-college-primary hover:underline flex items-center gap-2">
                    <span className="w-2 h-2 bg-college-secondary rounded-full"></span>
                    Apply Now
                  </Link>
                </li>
                <li>
                  <Link to="/courses/eligibility" className="text-college-primary hover:underline flex items-center gap-2">
                    <span className="w-2 h-2 bg-college-secondary rounded-full"></span>
                    Eligibility Criteria
                  </Link>
                </li>
                <li>
                  <Link to="/syllabus/pharmacy" className="text-college-primary hover:underline flex items-center gap-2">
                    <span className="w-2 h-2 bg-college-secondary rounded-full"></span>
                    Course Syllabus
                  </Link>
                </li>
                <li>
                  <Link to="/fees/pharmacy" className="text-college-primary hover:underline flex items-center gap-2">
                    <span className="w-2 h-2 bg-college-secondary rounded-full"></span>
                    Fees Structure
                  </Link>
                </li>
                <li>
                  <Link to="/facilities" className="text-college-primary hover:underline flex items-center gap-2">
                    <span className="w-2 h-2 bg-college-secondary rounded-full"></span>
                    Campus Facilities
                  </Link>
                </li>
                <li>
                  <Link to="/placement" className="text-college-primary hover:underline flex items-center gap-2">
                    <span className="w-2 h-2 bg-college-secondary rounded-full"></span>
                    Placement Opportunities
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-college-primary hover:underline flex items-center gap-2">
                    <span className="w-2 h-2 bg-college-secondary rounded-full"></span>
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            
            <div className="bg-college-primary/10 rounded-lg p-6">
              <h3 className="text-lg font-bold mb-4 text-college-primary">Why Choose Us</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-college-secondary rounded-full mt-2"></span>
                  <span>PCI approved curriculum</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-college-secondary rounded-full mt-2"></span>
                  <span>Experienced faculty members</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-college-secondary rounded-full mt-2"></span>
                  <span>State-of-the-art laboratories</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-college-secondary rounded-full mt-2"></span>
                  <span>Industry partnerships</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-college-secondary rounded-full mt-2"></span>
                  <span>100% placement assistance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-college-secondary rounded-full mt-2"></span>
                  <span>Regular industry visits</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PharmacyCoursesPage;
