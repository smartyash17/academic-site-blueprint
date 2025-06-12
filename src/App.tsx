
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/components/AuthContext";
import ProtectedRoute from "@/components/ProtectedRoute";
import Index from "./pages/Index";
import About from "./pages/About";
import CoursesPage from "./pages/Courses/CoursesPage";
import PharmacyCoursesPage from "./pages/Courses/Pharmacy/PharmacyCoursesPage";
import NursingCoursesPage from "./pages/Courses/Nursing/NursingCoursesPage";
import ParamedicalCoursesPage from "./pages/Courses/Paramedical/ParamedicalCoursesPage";
import EligibilityPage from "./pages/Courses/EligibilityPage";
import AdmissionsPage from "./pages/AdmissionsPage";
import AuthPage from "./pages/AuthPage";
import FacilitiesPage from "./pages/Facilities/FacilitiesPage";
import HostelPage from "./pages/Facilities/HostelPage";
import TransportationPage from "./pages/Facilities/TransportationPage";
import LibraryPage from "./pages/Facilities/LibraryPage";
import LaboratoryPage from "./pages/Facilities/LaboratoryPage";
import EquipmentPage from "./pages/Facilities/EquipmentPage";
import FeesPage from "./pages/Fees/FeesPage";
import FacultiesPage from "./pages/FacultiesPage";
import NewsEventsPage from "./pages/NewsEventsPage";
import GalleryPage from "./pages/GalleryPage";
import PlacementPage from "./pages/PlacementPage";
import ContactPage from "./pages/ContactPage";
import SyllabusPage from "./pages/Syllabus/SyllabusPage";
import QuestionBanksPage from "./pages/QuestionBanks/QuestionBanksPage";
import ResearchPage from "./pages/ResearchPage";
import CareerPage from "./pages/CareerPage";
import CommitteesPage from "./pages/CommitteesPage";
import DonationPage from "./pages/DonationPage";
import ChairmansDeskPage from "./pages/About/ChairmansDeskPage";
import BoardMembersPage from "./pages/About/BoardMembersPage";
import ServiceRulesPage from "./pages/About/ServiceRulesPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/about/chairmans-desk" element={<ChairmansDeskPage />} />
            <Route path="/about/board-members" element={<BoardMembersPage />} />
            <Route path="/about/service-rules" element={<ServiceRulesPage />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/courses/pharmacy" element={<PharmacyCoursesPage />} />
            <Route path="/courses/nursing" element={<NursingCoursesPage />} />
            <Route path="/courses/paramedical" element={<ParamedicalCoursesPage />} />
            <Route path="/courses/eligibility" element={<EligibilityPage />} />
            <Route 
              path="/admissions" 
              element={
                <ProtectedRoute>
                  <AdmissionsPage />
                </ProtectedRoute>
              } 
            />
            <Route path="/facilities" element={<FacilitiesPage />} />
            <Route path="/facilities/hostel" element={<HostelPage />} />
            <Route path="/facilities/transportation" element={<TransportationPage />} />
            <Route path="/facilities/library" element={<LibraryPage />} />
            <Route path="/facilities/laboratory" element={<LaboratoryPage />} />
            <Route path="/facilities/equipment" element={<EquipmentPage />} />
            <Route path="/fees" element={<FeesPage />} />
            <Route path="/faculties" element={<FacultiesPage />} />
            <Route path="/news-events" element={<NewsEventsPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/placement" element={<PlacementPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/syllabus" element={<SyllabusPage />} />
            <Route path="/question-banks" element={<QuestionBanksPage />} />
            <Route path="/research" element={<ResearchPage />} />
            <Route path="/career" element={<CareerPage />} />
            <Route path="/committees" element={<CommitteesPage />} />
            <Route path="/donation" element={<DonationPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
