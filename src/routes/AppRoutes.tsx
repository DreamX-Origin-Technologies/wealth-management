import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import type { ReactElement } from "react";
import AppLayout from "@/components/layout/AppLayout";
import ScrollToTop from "@/components/layout/ScrollToTop";
import LandingPage from "@/pages/LandingPage";
import FinancialDoctorPage from "@/pages/FinancialDoctorPage";
import AgentRecruitmentPage from "@/pages/AgentRecruitmentPage";
import LifeHealthPage from "@/pages/LifeHealthPage";
import ServicesPage from "@/pages/ServicesPage";
import ConsultationPage from "@/pages/ConsultationPage";

const withLayout = (element: ReactElement) => <AppLayout>{element}</AppLayout>;

export default function AppRoutes() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={withLayout(<LandingPage />)} />
        <Route path="/financial-doctor" element={withLayout(<FinancialDoctorPage />)} />
        <Route path="/agent-recruitment" element={withLayout(<AgentRecruitmentPage />)} />
        <Route path="/life-health" element={withLayout(<LifeHealthPage />)} />
        <Route path="/services" element={withLayout(<ServicesPage />)} />
        <Route path="/consultation" element={withLayout(<ConsultationPage />)} />
      </Routes>
    </Router>
  );
}
