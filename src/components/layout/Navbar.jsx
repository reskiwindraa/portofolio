
import { useState, useEffect } from "react";
import profileimage from "../../assets/profile.png";

const links = [
  { id: "aboutme", label: "About Me", href: "#me" },
  { id: "work", label: "Projects", href: "#projects" },
  { id: "contact", label: "Contact", href: "#contact" },
];

const SunIcon = () => (
  <svg
    width="21"
    height="21"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.65 17.65l1.42 1.42M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.65 6.35l1.42-1.42" />
  </svg>
);

const MoonIcon = () => (
  <svg
    width="21"
    height="21"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M20.9 13A8.5 8.5 0 0 1 11 3.1 8.5 8.5 0 1 0 20.9 13Z" />
  </svg>
);

const MenuIcon = ({ open }) => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    aria-hidden="true"
  >
    {open ? (
      <path d="M6 6l12 12M18 6L6 18" />
    ) : (
      <path d="M4 7h16M4 12h16M4 17h16" />
    )}
  </svg>
);

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("aboutme");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [dark, setDark] = useState(() =>
    document.documentElement.classList.contains("dark")
  );

  // Navbar background saat scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Sinkronisasi dark mode
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  const toggleTheme = () => {
    setDark((current) => !current);
  };

  // Active menu mengikuti section yang sedang dilihat
  useEffect(() => {
    const updateActiveLink = () => {
      let currentSection = "aboutme";

      links.forEach((link) => {
        const section = document.querySelector(link.href);

        if (
          section &&
          section.getBoundingClientRect().top <= 140
        ) {
          currentSection = link.id;
        }
      });

      const atBottom =
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight - 2;

      if (atBottom) {
        currentSection = "contact";
      }

      setActiveLink(currentSection);
    };

    updateActiveLink();

    window.addEventListener("scroll", updateActiveLink, {
      passive: true,
    });
    window.addEventListener("resize", updateActiveLink);

    return () => {
      window.removeEventListener("scroll", updateActiveLink);
      window.removeEventListener("resize", updateActiveLink);
    };
  }, []);

  // Tutup menu dengan tombol Escape
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleNavigate = (link) => {
    setActiveLink(link.id);
    setMobileMenuOpen(false);
  };

  const renderLink = (link, mobile = false) => {
    const isActive = activeLink === link.id;

    return (
      <li key={link.id}>
        <a
          href={link.href}
          onClick={() => handleNavigate(link)}
          aria-current={isActive ? "location" : undefined}
          className={`
            group relative flex items-center
            font-medium transition-colors duration-300
            ${
              mobile
                ? "w-full justify-between rounded-xl px-4 py-3 text-base"
                : "px-3 py-2 pb-4 text-base md:px-5"
            }
            ${
              isActive
                ? "text-pink-500"
                : "text-gray-500 hover:text-pink-500 dark:text-gray-400 dark:hover:text-pink-400"
            }
            ${
              mobile && isActive
                ? "bg-pink-50 dark:bg-pink-400/10"
                : ""
            }
          `}
        >
          {/* Animated 3D text */}
          <span className="block [perspective:700px]">
            <span
              className="
                relative block
                [transform-style:preserve-3d]
                transition-transform duration-700
                [transition-timing-function:cubic-bezier(0.2,1.4,0.4,1)]
                group-hover:[transform:translateY(-3px)_rotateX(180deg)_rotateY(12deg)_scale(1.04)]
                group-focus-visible:[transform:translateY(-3px)_rotateX(180deg)_rotateY(12deg)_scale(1.04)]
                motion-reduce:transition-none
              "
            >
              <span className="block [backface-visibility:hidden]">
                {link.label}
              </span>

              <span
                className="
                  absolute inset-0 block
                  [transform:rotateX(180deg)_rotateY(-12deg)]
                  [backface-visibility:hidden]
                  text-pink-500
                "
                aria-hidden="true"
              >
                {link.label}
              </span>
            </span>
          </span>

          {/* Mobile active indicator */}
          {mobile && isActive && (
            <span
              className="h-2 w-2 rounded-full bg-pink-400"
              aria-hidden="true"
            />
          )}

          {/* Desktop underline */}
          {!mobile && (
            <span
              className={`
                absolute bottom-1 left-3 right-3
                h-[3px] origin-left overflow-hidden rounded-full
                transition-transform duration-500
                ease-[cubic-bezier(0.2,1.4,0.4,1)]
                group-hover:scale-x-100
                group-focus-visible:scale-x-100
                md:left-5 md:right-5
                ${
                  isActive
                    ? "scale-x-100 bg-pink-300"
                    : "scale-x-0 bg-transparent"
                }
              `}
            >
              <span
                className={`
                  block h-full w-3 rounded-full
                  transition-all duration-500
                  group-hover:w-full
                  group-focus-visible:w-full
                  ${isActive ? "bg-pink-400" : "bg-pink-300"}
                `}
              />
            </span>
          )}
        </a>
      </li>
    );
  };

  return (
    <nav
      className={`
        fixed inset-x-0 top-0 z-50 w-full
        border-b transition-all duration-300
        ${
          scrolled
            ? "border-pink-200/70 bg-white/90 shadow-lg shadow-pink-200/10 backdrop-blur-xl dark:border-violet-400/20 dark:bg-gray-950/90 dark:shadow-violet-950/20"
            : "border-gray-100 bg-white dark:border-gray-800 dark:bg-gray-950"
        }
      `}
    >
      {/* Navbar header */}
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-3 sm:px-8 md:px-10 lg:px-[110px]">
        {/* Avatar */}
        <a
          href="#top"
          aria-label="Kembali ke halaman utama"
          onClick={() => {
            setActiveLink("aboutme");
            setMobileMenuOpen(false);
          }}
          className="shrink-0 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-400"
        >
          <img
            src={profileimage}
            alt="Foto profil"
            className="h-10 w-10 rounded-full bg-emerald-100 object-cover sm:h-11 sm:w-11"
          />
        </a>

        {/* Desktop navigation */}
        <ul className="hidden items-center gap-2 md:flex md:gap-4 lg:gap-6">
          {links.map((link) => renderLink(link))}
        </ul>

        {/* Theme and mobile menu controls */}
        <div className="flex shrink-0 items-center gap-2 sm:gap-3 md:gap-4">
          {/* Light / Dark toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={
              dark ? "Aktifkan light mode" : "Aktifkan dark mode"
            }
            aria-pressed={dark}
            title={dark ? "Switch to light mode" : "Switch to dark mode"}
            className={`
              theme-toggle flex h-10 w-10 items-center justify-center
              rounded-xl border transition-all duration-300
              hover:-translate-y-0.5 hover:scale-105
              active:scale-95 sm:h-11 sm:w-11
              ${
                dark
                  ? "border-amber-300/30 bg-amber-300/10 text-amber-300 hover:bg-amber-300 hover:text-gray-950"
                  : "border-indigo-200 bg-indigo-50 text-indigo-600 hover:border-indigo-500 hover:bg-indigo-600 hover:text-white"
              }
            `}
          >
            {dark ? <SunIcon /> : <MoonIcon />}
          </button>

          {/* Hamburger: mobile only */}
          <button
            type="button"
            onClick={() =>
              setMobileMenuOpen((current) => !current)
            }
            aria-label={
              mobileMenuOpen ? "Tutup menu navigasi" : "Buka menu navigasi"
            }
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            className="
              flex h-10 w-10 items-center justify-center
              rounded-xl border border-black/10
              text-gray-700 transition-all duration-300
              hover:bg-pink-50 hover:text-pink-500
              dark:border-white/10 dark:text-white
              dark:hover:bg-white/10
              md:hidden
            "
          >
            <MenuIcon open={mobileMenuOpen} />
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      <div
        id="mobile-navigation"
        className={`
          grid overflow-hidden border-t border-black/5
          transition-[grid-template-rows,opacity] duration-300 ease-out
          dark:border-white/10 md:hidden
          ${
            mobileMenuOpen
              ? "grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0"
          }
        `}
        aria-hidden={!mobileMenuOpen}
        inert={!mobileMenuOpen}
      >
        <div className="overflow-hidden">
          <div className="px-5 pb-5 pt-3 sm:px-8">
            <ul className="flex flex-col gap-1">
              {links.map((link) => renderLink(link, true))}
            </ul>

          
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
