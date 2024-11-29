import { Routes, Route } from "react-router-dom";

import NavbarComponent from "./components/NavbarComponent";
import FooterComponent from "./components/FooterComponent";

import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import SkillsPage from "./pages/SkillsPage";
import FaqPage from "./pages/FaqPage";
import SyaratKetenPage from "./pages/SyaratKetenPage";
import FeedsPage from "./pages/FeedsPage";
import LoginPage from "./pages/FeedsPage";

function App() {
  return (
    <div>
      <NavbarComponent />

      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/project" Component={ProjectPage} />
        <Route path="/skills" Component={SkillsPage} />
        <Route path="/faq" Component={FaqPage} />
        <Route path="/syaratketen" Component={SyaratKetenPage} />
        <Route path="/feeds" Component={FeedsPage} />
        <Route path="/login" Component={LoginPage} />
      </Routes>

      <FooterComponent />
    </div>
  );
}

export default App;
