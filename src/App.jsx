
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Hero from "./sections/hero/Hero";
import About from "./sections/about/About";
import Services from "./sections/services/Services";
import Work from "./sections/work/Work";
import CustomCursor from "./components/common/CustomCursor";
import ProjectOngoing from "./sections/ProjectOngoing";
import Contact from "./sections/contact/ContactMe";

import { useDarkMode } from "./hooks/useDarkMode";

function HomePage({ darkMode, toggleDarkMode }) {
  return (
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
  );
}

function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white px-6 text-center text-gray-900 dark:bg-[#0A0A0A] dark:text-white">
      <h1 className="text-4xl font-bold">404</h1>
      <p className="mt-3 text-gray-600 dark:text-gray-400">
        Halaman yang kamu cari tidak ditemukan.
      </p>
      <a
        href="/"
        className="mt-6 rounded-full bg-pink-500 px-6 py-3 font-medium text-white transition hover:bg-pink-600"
      >
        Kembali ke Home
      </a>
    </main>
  );
}

export default function App() {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white text-[#101828] dark:bg-[#0A0A0A] dark:text-white">
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

          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
