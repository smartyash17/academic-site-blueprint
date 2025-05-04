import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

// Import new pages
import ChaimansDeskPage from "./pages/About/ChairmansDeskPage";
import BoardMembersPage from "./pages/About/BoardMembersPage";
import ServiceRulesPage from "./pages/About/ServiceRulesPage";
import CoursesPage from "./pages/Courses/CoursesPage";
import EligibilityPage from "./pages/Courses/EligibilityPage";
import PharmacyCoursesPage from "./pages/Courses/Pharmacy/PharmacyCoursesPage";
import NursingCoursesPage from "./pages/Courses/Nursing/NursingCoursesPage";
import ParamedicalCoursesPage from "./pages/Courses/Paramedical/ParamedicalCoursesPage";
import SyllabusPage from "./pages/Syllabus/SyllabusPage";
import FeesPage from "./pages/Fees/FeesPage";
import QuestionBanksPage from "./pages/QuestionBanks/QuestionBanksPage";
import CommitteesPage from "./pages/CommitteesPage";
import FacultiesPage from "./pages/FacultiesPage";
import FacilitiesPage from "./pages/Facilities/FacilitiesPage";
import LaboratoryPage from "./pages/Facilities/LaboratoryPage";
import EquipmentPage from "./pages/Facilities/EquipmentPage";
import LibraryPage from "./pages/Facilities/LibraryPage";
import TransportationPage from "./pages/Facilities/TransportationPage";
import HostelPage from "./pages/Facilities/HostelPage";
import ContactPage from "./pages/ContactPage";
import AdmissionsPage from "./pages/AdmissionsPage";
import ResearchPage from "./pages/ResearchPage";
import GalleryPage from "./pages/GalleryPage";
import NewsEventsPage from "./pages/NewsEventsPage";
import PlacementPage from "./pages/PlacementPage";
import CareerPage from "./pages/CareerPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          
          {/* About Us Section */}
          <Route path="/about/chairmans-desk" element={<ChaimansDeskPage />} />
          <Route path="/about/board-members" element={<BoardMembersPage />} />
          <Route path="/about/service-rules" element={<ServiceRulesPage />} />
          
          {/* Courses Section */}
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/courses/eligibility" element={<EligibilityPage />} />
          <Route path="/courses/pharmacy" element={<PharmacyCoursesPage />} />
          <Route path="/courses/nursing" element={<NursingCoursesPage />} />
          <Route path="/courses/paramedical" element={<ParamedicalCoursesPage />} />
          
          {/* Syllabus Section */}
          <Route path="/syllabus" element={<SyllabusPage />} />
          <Route path="/syllabus/:department" element={<SyllabusPage />} />
          
          {/* Fees Structure */}
          <Route path="/fees" element={<FeesPage />} />
          <Route path="/fees/:department" element={<FeesPage />} />
          
          {/* Question Banks */}
          <Route path="/question-banks" element={<QuestionBanksPage />} />
          <Route path="/question-banks/:department" element={<QuestionBanksPage />} />
          
          {/* Other Main Sections */}
          <Route path="/committees" element={<CommitteesPage />} />
          <Route path="/faculties" element={<FacultiesPage />} />
          
          {/* Facilities Section */}
          <Route path="/facilities" element={<FacilitiesPage />} />
          <Route path="/facilities/laboratory" element={<LaboratoryPage />} />
          <Route path="/facilities/equipment" element={<EquipmentPage />} />
          <Route path="/facilities/library" element={<LibraryPage />} />
          <Route path="/facilities/transportation" element={<TransportationPage />} />
          <Route path="/facilities/hostel" element={<HostelPage />} />
          
          {/* Additional Pages */}
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/apply" element={<AdmissionsPage />} />
          <Route path="/research" element={<ResearchPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/news" element={<NewsEventsPage />} />
          <Route path="/placement" element={<PlacementPage />} />
          <Route path="/career" element={<CareerPage />} />
          
          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
