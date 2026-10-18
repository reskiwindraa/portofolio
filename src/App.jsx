import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Hero from "./sections/hero/Hero";
import About from "./sections/about/About";
import Services from "./sections/services/Services";
import Work from "./sections/work/Work";

import { useDarkMode } from "./hooks/useDarkMode";

export default function App() {
  const {
    darkMode,
    toggleDarkMode,
  } = useDarkMode();

  return (
    <div className="min-h-screen bg-white text-[#101828] dark:bg-[#0A0A0A] dark:text-white">
      <Navbar
        darkMode={darkMode}
        onToggleDarkMode={toggleDarkMode}
      />

      <main>
        <Hero />
        <About />
        <Services />
        <Work darkMode={darkMode} />
      </main>

      <Footer />
    </div>
  );
}