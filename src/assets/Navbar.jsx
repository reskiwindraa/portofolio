import { useEffect, useState } from "react";
import { Moon, Sun, Copy, Check, ArrowUpRight } from "lucide-react";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [copied, setCopied] = useState(false);

  // Load theme saat pertama kali
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (
      savedTheme === "dark" ||
      (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  // Toggle theme
  const toggleTheme = () => {
    const newTheme = !darkMode;

    setDarkMode(newTheme);

    if (newTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  // Copy email
  const copyEmail = async () => {
    await navigator.clipboard.writeText("hello@yourname.com");

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <nav className=" w-full pt-4">
      <div
        className="
          flex items-center justify-between
          rounded-full
          border border-black
          bg-neutral-900
          px-4
          py-4
          shadow-lg
          transition-colors
          dark:border-white/10
          dark:bg-neutral-900
        "
      >
        {/* Logo */}
        <a
          href="/"
          className="
            flex h-12 w-12
            items-center justify-center
            rounded-full
            bg-white
            text-black
            transition-transform
            hover:scale-105
          "
        >
          {/* Ganti dengan logo kamu */}
          <span className="text-xl font-bold">R</span>
        </a>

        {/* Navigation */}
        <div className="hidden items-center gap-10 md:flex">
            <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="
              flex h-12 w-12
              items-center justify-center
              rounded-full
              bg-white
              text-black
              transition-all
              hover:scale-105
              active:scale-95
            "
          >
            {darkMode ? (
              <Sun size={20} strokeWidth={2} />
            ) : (
              <Moon size={20} strokeWidth={2} />
            )}
          </button>

          <a
            href="#about-me"
            className="
              text-lg font-medium
              text-white
              transition-opacity
              hover:opacity-60
            "
          >
            About Me
          </a>

          <a
            href="#work"
            className="
              text-lg font-medium
              text-white
              transition-opacity
              hover:opacity-60
            "
          >
            Work
          </a>

          <a
            href="#contact"
            className="
              text-lg font-medium
              text-white
              transition-opacity
              hover:opacity-60
            "
          >
            Contact
          </a>
        </div>

        
      </div>
    </nav>
  );
};

export default Navbar;
