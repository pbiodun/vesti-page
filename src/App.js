import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Suspense } from "react";
// import { useTranslation } from "react-i18next";
import Home from "./pages/Home";
import VirtualCard from "./pages/VirtualCard";
import Nav from "./containers/NavBar";
import Footer from "./containers/Footer";
import GlobalGengCard from "./pages/GlobalGengCard";
import WalletsPage from "./pages/WalletsPage";
import AboutUs from "./pages/AboutUs";
import CareersPage from "./pages/CareersPage";
import Disclosures from "./pages/Disclosures";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Aml from "./pages/Aml";
import MigrationFries from "./pages/MigrationFries";

// function Home() {
//   const { t, i18n } = useTranslation("common");
//   return <h1>{t("welcome.title")}</h1>;
// }

function App() {
  return (
    <BrowserRouter>
      <Nav />
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
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
