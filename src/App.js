import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import ZambiaHome from "./pages/ZM/ZambiaHome";
import GhanaHome from "./pages/GH/GhanaHome";
import MexicoHome from "./pages/MX/MexicoHome";
import NavBar from "./containers/NavBar";

// function Home() {
//   const { t, i18n } = useTranslation("common");
//   return <h1>{t("welcome.title")}</h1>;
// }

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/virtual-card" element={<VirtualCard />} />
        <Route path="/globalgeng-card" element={<GlobalGengCard />} />
        <Route path="/wallets" element={<WalletsPage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/tos" element={<Disclosures />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/aml" element={<Aml />} />
        <Route path="/migration-fries" element={<MigrationFries />} />
        <Route path="/migration-services" element={<MigrationServices />} />
        <Route path="/zm" element={<ZambiaHome />} />
        <Route path="/gh" element={<GhanaHome />} />
        <Route path="/mx" element={<MexicoHome />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
