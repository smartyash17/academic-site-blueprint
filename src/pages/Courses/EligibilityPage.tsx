
import React from "react";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const EligibilityPage = () => {
  return (
    <Layout>
      <PageHeader
        title="Eligibility Criteria"
        breadcrumbs={[
          { label: "Courses", href: "/courses" },
          { label: "Eligibility Criteria", href: "/courses/eligibility" },
        ]}
      />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-college-primary">
            Admission Eligibility Requirements
          </h2>
          <p className="text-gray-700 mb-8">
            Before applying to our programs, please review the eligibility criteria below to ensure you meet the requirements for admission. If you have any questions, please contact our admissions office.
          </p>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="dpharm">
              <AccordionTrigger className="text-lg font-semibold">D.Pharm: Diploma in Pharmacy</AccordionTrigger>
              <AccordionContent className="space-y-4 text-gray-700">
                <p>
                  Applicants must have completed +2 Science with the following subjects:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Physics</li>
                  <li>Chemistry</li>
                  <li>Biology (Bioscience/Life Science) and/or Mathematics</li>
                </ul>
                <p>
                  The qualifying examination must be from CHSE, Odisha or an equivalent board approved by the Pharmacy Council of India (PCI).
                </p>
                <p className="font-medium">Important Notes:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Students must pass each subject (theory and practical) individually.</li>
                  <li>Vocational course passouts are not eligible for admission.</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="bpharm">
              <AccordionTrigger className="text-lg font-semibold">B.Pharm: Bachelor of Pharmacy</AccordionTrigger>
              <AccordionContent className="space-y-4 text-gray-700">
                <p>
                  Applicants must have completed 10+2 with the following subjects:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>English</li>
                  <li>Physics</li>
                  <li>Chemistry</li>
                  <li>Mathematics (PCM) and/or Biology (PCB/PCMB)</li>
                </ul>
                <p>
                  The qualifying examination must be recognized by the Association of Indian Universities (AIU) or an equivalent board.
                </p>
                <p className="font-medium mt-4">Lateral Entry to B.Pharm (3rd Semester):</p>
                <p>
                  Students who have passed D.Pharm from institutions approved by the Pharmacy Council of India (PCI) are eligible for lateral entry to the 3rd semester of the B.Pharm program.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="dmlt">
              <AccordionTrigger className="text-lg font-semibold">DMLT: Diploma in Medical Laboratory Technology</AccordionTrigger>
              <AccordionContent className="space-y-4 text-gray-700">
                <p>
                  Applicants must have completed +2 Science with the following subjects:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Physics</li>
                  <li>Chemistry</li>
                  <li>Biology or Mathematics</li>
                </ul>
                <p className="font-medium">Important Note:</p>
                <p>
                  All subjects must be passed individually to be eligible for admission.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          
          <div className="mt-12 bg-gray-50 p-6 rounded-lg border">
            <h3 className="text-xl font-semibold mb-4">Application Process</h3>
            <ol className="list-decimal pl-5 space-y-3">
              <li>
                <span className="font-medium">Fill out the application form:</span> Complete the online application form or download the form from our website and submit it in person.
              </li>
              <li>
                <span className="font-medium">Submit required documents:</span> Submit all required documents including academic transcripts, proof of identity, and passport-sized photographs.
              </li>
              <li>
                <span className="font-medium">Pay the application fee:</span> Pay the non-refundable application fee as specified on the application form.
              </li>
              <li>
                <span className="font-medium">Entrance examination (if applicable):</span> Some programs may require an entrance examination. Details will be provided after application submission.
              </li>
              <li>
                <span className="font-medium">Interview (if applicable):</span> Shortlisted candidates may be called for an interview.
              </li>
              <li>
                <span className="font-medium">Admission confirmation:</span> Successful candidates will receive an admission offer letter with details on fee payment and registration.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default EligibilityPage;
