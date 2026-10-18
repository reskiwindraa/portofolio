
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Hero from "./sections/hero/Hero";
import About from "./sections/about/About";
import Services from "./sections/services/Services";
import Work from "./sections/work/Work";
import CustomCursor from "./components/common/CustomCursor";
import ProjectOngoing from "./sections/ProjectOngoing";
import Contact from "./sections/contact/ContactMe"

import { useDarkMode } from "./hooks/useDarkMode";

function HomePage({ darkMode, toggleDarkMode }) {
  return (
    <>
    <div id="top">
      <Navbar
        darkMode={darkMode}
        onToggleDarkMode={toggleDarkMode}
      />

      <main>
        <CustomCursor />
        <Hero />
        <About />
        <Services />
        <Work darkMode={darkMode} />
        <Contact />
      </main>

      <Footer />
      </div>
    </>
  );
}

export default function App() {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white text-[#101828] dark:bg-[#0A0A0A] dark:text-white">
        <CustomCursor />
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                darkMode={darkMode}
                toggleDarkMode={toggleDarkMode}
              />
            }
          />

          <Route
            path="/project-ongoing"
            element={<ProjectOngoing />}
          />

          <Route
            path="*"
            element={<ProjectOngoing />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
