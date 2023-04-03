import { Routes, Route } from "react-router-dom";
// import { Suspense } from "react";
// import { useTranslation } from "react-i18next";
import Home from "./pages/Home";
import VirtualCard from "./pages/VirtualCard";
import Footer from "./containers/Footer";
import GlobalGengCard from "./pages/GlobalGengCard";
import WalletsPage from "./pages/WalletsPage";
import AboutUs from "./pages/AboutUs";
import CareersPage from "./pages/CareersPage";
import Disclosures from "./pages/Disclosures";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Aml from "./pages/Aml";
import MigrationFries from "./pages/MigrationFries";
import MigrationServices from "./pages/MigrationServices";
import NigeriaHome from "./pages/NG/NigeriaHome";
import ZambiaHome from "./pages/ZM/ZambiaHome";
import GhanaHome from "./pages/GH/GhanaHome";
import MexicoHome from "./pages/MX/MexicoHome";
import NavBar from "./containers/NavBar";
import ScrollToTop from "./components/ScrollToTop";
import MigrationPost from "./pages/MigrationPost";
import ErrorPage from "./pages/ErrorPage";
import Faqs from "./pages/Faqs";
import NewsRoom from "./pages/NewsRoom";
import Team from "./pages/Team";
import TestimonialPage from "./pages/TestimonialPage";
import FinancialServices from "./pages/FinancialServices";
import CardsPage from "./pages/CardsPage";

// function Home() {
//   const { t, i18n } = useTranslation("common");
//   return <h1>{t("welcome.title")}</h1>;
// }

function App() {
  return (
    <>
      <ScrollToTop />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/virtual-card" element={<VirtualCard />} />
        <Route path="/globalgeng-card" element={<GlobalGengCard />} />
        <Route path="/wallets" element={<WalletsPage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/team" element={<Team />} />
        <Route path="/tos" element={<Disclosures />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/aml" element={<Aml />} />
        <Route path="/migration-fries" element={<MigrationFries />} />
        <Route path="/migration-services" element={<MigrationServices />} />
        <Route path="/financial-services" element={<FinancialServices />} />
        <Route path="/cards" element={<CardsPage />} />
        <Route path="/testimonials" element={<TestimonialPage />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/news-room" element={<NewsRoom />} />
        <Route path="/ng" element={<NigeriaHome />} />
        <Route path="/gh" element={<GhanaHome />} />
        <Route path="/zm" element={<ZambiaHome />} />
        <Route path="/mx" element={<MexicoHome />} />
        <Route path="/migration-post/:postId" element={<MigrationPost />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
