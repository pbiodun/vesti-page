import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Suspense } from "react";
// import { useTranslation } from "react-i18next";
import Home from "./pages/Home";

// function Home() {
//   const { t, i18n } = useTranslation("common");
//   return <h1>{t("welcome.title")}</h1>;
// }

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
