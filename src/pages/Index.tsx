
import React from "react";
import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/HomePage/AboutSection";
import FeaturedCoursesSection from "@/components/HomePage/FeaturedCoursesSection";
import StudentLifeSection from "@/components/HomePage/StudentLifeSection";
import FacilitiesSection from "@/components/HomePage/FacilitiesSection";
import CampusImagesSection from "@/components/HomePage/CampusImagesSection";
import MedicalTrainingSection from "@/components/HomePage/MedicalTrainingSection";
import CallToActionSection from "@/components/HomePage/CallToActionSection";
import NewsNotificationSection from "@/components/HomePage/NewsNotificationSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection
        title="Sarada Devi Group of Institutions"
        subtitle="Excellence in Healthcare Education - Join our prestigious institution for quality education in Pharmacy, Nursing, and Paramedical sciences."
        buttonText="Apply Now"
        buttonLink="/apply"
        backgroundImage="public/lovable-uploads/b43ad39f-f05b-470e-8ba5-1d6c7d8ce88d.png"
      />
      <AboutSection />
      <NewsNotificationSection />
      <FeaturedCoursesSection />
      <StudentLifeSection />
      <FacilitiesSection />
      <MedicalTrainingSection />
      <CallToActionSection />
    </Layout>
  );
};

export default Index;
