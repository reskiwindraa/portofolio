import { useState, useEffect } from "react";
import profileimage from "../../assets/nav-image.png";

const links = [
  { id: "me", label: "Me", href: "#me" },
  { id: "work", label: "Work", href: "#work" },
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
  >
    <path d="M20.9 13A8.5 8.5 0 0 1 11 3.1 8.5 8.5 0 1 0 20.9 13Z" />
  </svg>
);

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("me");
  const [dark, setDark] = useState(() =>
    document.documentElement.classList.contains("dark"),
  );

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  const toggleTheme = () => setDark((current) => !current);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 w-full border-b transition-all duration-300 ${
        scrolled
          ? "border-pink-200/70 bg-white/85 shadow-lg shadow-pink-200/10 backdrop-blur-xl dark:border-violet-400/20 dark:bg-gray-950/85 dark:shadow-violet-950/20"
          : "border-gray-100 bg-white dark:border-gray-800 dark:bg-gray-950"
      }`}
    >
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-3 md:px-10 lg:px-[110px]">
        {/* Avatar */}
        <a
          href="#me"
          aria-label="Kembali ke halaman utama"
          className="group relative rounded-full bg-gradient-to-br from-pink-300 via-rose-200 to-yellow-200 p-[3px] shadow-md shadow-pink-300/20 transition-all duration-300 hover:-translate-y-1 hover:rotate-6 hover:scale-110 hover:shadow-xl hover:shadow-pink-400/40 dark:from-violet-500 dark:via-fuchsia-400 dark:to-cyan-300 dark:hover:shadow-violet-500/40"
        >
          <img
            src={profileimage}
            alt="Foto profil"
            className="h-10 w-10 rounded-full bg-emerald-100 object-cover md:h-11 md:w-11"
          />
        </a>

        {/* Menu kanan */}
        <div className="flex items-center gap-3 sm:gap-5 md:gap-8">
          {/* Toggle Light / Dark */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={dark ? "Aktifkan light mode" : "Aktifkan dark mode"}
            aria-pressed={dark}
            title={dark ? "Switch to light mode" : "Switch to dark mode"}
            className={`theme-toggle flex h-10 w-10 items-center justify-center rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:rotate-3 hover:scale-110 active:translate-y-0 active:scale-95 md:h-11 md:w-11 ${
              dark
                ? "border-amber-300/30 bg-amber-300/10 text-amber-300 shadow-md shadow-amber-400/10 hover:border-amber-300 hover:bg-amber-300 hover:text-gray-950 hover:shadow-lg hover:shadow-amber-400/25"
                : "border-indigo-200 bg-indigo-50 text-indigo-600 shadow-md shadow-indigo-200/30 hover:border-indigo-500 hover:bg-indigo-600 hover:text-white hover:shadow-lg hover:shadow-indigo-400/30"
            }`}
          >
            <span className="transition-transform duration-500 hover:rotate-45">
              {dark ? <SunIcon /> : <MoonIcon />}
            </span>
          </button>

          {/* Navigation */}

          <ul className="flex items-center gap-2 md:gap-6">
            {links.map((link) => {
              const isActive = activeLink === link.id;

              const colors = {
                me: {
                  text: "text-pink-500",
                  hover: "group-hover:text-pink-500",
                  line: "bg-pink-300",
                  dot: "bg-yellow-400",
                },
                work: {
                  text: "text-teal-600 dark:text-teal-400",
                  hover:
                    "group-hover:text-teal-600 dark:group-hover:text-teal-400",
                  line: "bg-teal-300",
                  dot: "bg-orange-400",
                },
                contact: {
                  text: "text-violet-500",
                  hover: "group-hover:text-violet-500",
                  line: "bg-violet-300",
                  dot: "bg-cyan-300",
                },
              };

              const color = colors[link.id];

              return (
                <li key={link.id}>
                  <a
                    href={link.href}
                    onClick={() => setActiveLink(link.id)}
                    className={`group relative block px-3 py-2 pb-4 text-base font-medium md:px-5 ${
                      isActive ? color.text : "text-gray-500 dark:text-gray-400"
                    }`}
                  >
                    {/* 3D text flip */}

                    {/* 3D dynamic text flip */}
                    <span className="block [perspective:700px]">
                      <span
                        className="
                          relative block
                          [transform-style:preserve-3d]
                          transition-transform duration-700
                          [transition-timing-function:cubic-bezier(0.2,1.4,0.4,1)]
                          group-hover:[transform:translateY(-3px)_rotateX(180deg)_rotateY(12deg)_scale(1.08)]
                          group-focus-visible:[transform:translateY(-3px)_rotateX(180deg)_rotateY(12deg)_scale(1.08)]
                          motion-reduce:transition-none
                        "
                      >
                        {/* Sisi depan */}
                        <span
                          className="
                            block [backface-visibility:hidden] transition-colors duration-300\
                            group-hover:text-pink-500 group-focus-visible:text-pink-500
                          "
                        >
                          {link.label}
                        </span>

                        {/* Sisi belakang */}
                        <span
                          className={`
        absolute inset-0 block
        [transform:rotateX(180deg)_rotateY(-12deg)]
        [backface-visibility:hidden]
        ${color.text}
      `}
                          aria-hidden="true"
                        >
                          {link.label}
                        </span>
                      </span>
                    </span>

                    {/* Garis bawah yang ikut berubah */}

                    {/* Animated underline */}
                    <span
                      className={`
                        absolute bottom-1 left-3 right-3
                        h-[3px] origin-left overflow-hidden rounded-full
                        transition-all duration-500
                        ease-[cubic-bezier(0.2,1.4,0.4,1)]
                        group-hover:scale-x-100
                        group-hover:shadow-[0_0_12px_currentColor]
                        group-focus-visible:scale-x-100
                        md:left-5 md:right-5
                        ${isActive ? `${color.line} scale-x-100` : "scale-x-0 bg-transparent"}
                      `}
                    >
                      <span
                        className={`
                          block h-full w-3 rounded-full
                          transition-all duration-500
                          ease-[cubic-bezier(0.2,1.4,0.4,1)]
                          group-hover:w-full
                          group-focus-visible:w-full
                          ${color.dot}
                        `}
                      />
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
