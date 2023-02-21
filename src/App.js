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
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
