import {
  ArrowRight,
  ArrowUpRight,
  Sun,
  Moon,
  Search,
  Layers3,
  PlaySquare,
  MousePointer2,
} from "lucide-react";

import { useEffect, useRef, useState } from "react";
import profileImage from "./assets/profile.png";
import photoprofile from "./assets/profile-image.png";
import pillarsImage from "./assets/project-pillars.png";
import sapaImage from "./assets/project-sapa.png";
import designSystemImage from "./assets/project-design-system.png";

const services = [
  {
    number: "001",
    title: "UX Design",
    description: "Creating experiences that make sense.",
    detail:
      "I design intuitive user flows and interactions by understanding user needs, business goals, and real-world problems.",
    icon: Search,
  },
  {
    number: "002",
    title: "UI Design",
    description: "Turning ideas into clear, engaging interfaces.",
    detail:
      "I design clean and purposeful interfaces with strong visual hierarchy, consistency, and attention to detail.",
    icon: MousePointer2,
  },
  {
    number: "003",
    title: "Design Systems",
    description: "Building consistency at scale.",
    detail:
      "I create structured design systems with reusable components, tokens, and guidelines to keep products consistent and efficient.",
    icon: Layers3,
  },
  {
    number: "004",
    title: "Prototyping",
    description: "Bringing ideas to life before they are built.",
    detail:
      "I create interactive prototypes to visualize user flows, test interactions, and communicate design concepts clearly.",
    icon: PlaySquare,
  },
];

const projects = [
  // Dark-mode backgrounds/accent colors are intentionally kept in the project data
  // so the colorful project cards retain their visual identity in both themes.
  {
    title: "Pilllars Web Design",
    description: "Creating experiences that make sense.",
    image: pillarsImage,
    background: "#B7A9FF",
    darkBackground: "#29234A",
    accent: "#6548F5",
    darkAccent: "#B8AAFF",
    items: [
      "Customer rating flow",
      "CS / Teller / Security assessment",
      "Branch management",
      "Staff schedule integration",
      "Feedback & suggestions",
      "Analytics dashboard",
    ],
  },
  {
    title: "BSB SAPA",
    description:
      "A digital customer satisfaction platform designed to collect and manage feedback across branch services.",
    image: sapaImage,
    background: "#FFF08B",
    darkBackground: "#454019",
    accent: "#A89400",
    darkAccent: "#F5DF65",
    items: [
      "Customer rating flow",
      "CS / Teller / Security assessment",
      "Branch management",
      "Staff schedule integration",
      "Feedback & suggestions",
      "Analytics dashboard",
    ],
  },
  {
    title: "Design System Bank Sumsel Babel",
    description: "Creating experiences that make sense.",
    image: designSystemImage,
    background: "#FFD1DB",
    darkBackground: "#482630",
    accent: "#F35C7D",
    darkAccent: "#FF91AA",
    items: [
      "Color tokens",
      "Typography",
      "Buttons & components",
      "Input states",
      "Spacing system",
      "Design guidelines",
    ],
  },
];
function ScrollReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -60px 0px",
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const directionClass = {
    up: "translate-y-10",
    down: "-translate-y-10",
    left: "translate-x-10",
    right: "-translate-x-10",
    scale: "scale-90",
  };

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`
        transform-gpu
        transition-all
        duration-700
        ease-[cubic-bezier(0.22,1,0.36,1)]
        ${
          visible
            ? "translate-x-0 translate-y-0 scale-100 opacity-100"
            : `opacity-0 ${directionClass[direction]}`
        }
        ${className}
      `}
    >
      {children}
    </div>
  );
}

function Navbar({ darkMode, setDarkMode }) {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-100/80 bg-white/90 backdrop-blur-md transition-colors duration-300 dark:border-white/10 dark:bg-[#0A0A0A]/90">
      <div className="mx-auto flex h-[64px] max-w-[1180px] items-center justify-between px-5 lg:px-0">

        <a
          href="#home"
          className="
            group
            flex h-10 w-10 items-center justify-center
            overflow-hidden rounded-full bg-[#FFE8EE]
            transition-all duration-500
            hover:scale-110
            hover:rotate-6
            hover:shadow-lg
          "
        >
          <img
            src={profileImage}
            alt="Reski"
            className="
              h-full w-full object-cover
              transition-transform duration-500
              group-hover:scale-110
            "
          />
        </a>

        <nav className="flex items-center gap-7 text-[13px] font-medium text-gray-500 dark:text-gray-400 lg:text-[14px]">

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="
              flex h-9 w-9 items-center justify-center
              rounded-full border border-orange-400
              text-orange-400
              transition-all duration-300
              hover:scale-110
              hover:rotate-12
              hover:bg-orange-50
              active:scale-95
              dark:border-orange-300
              dark:text-orange-300
              dark:hover:bg-orange-950
            "
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <Sun
                size={15}
                className="transition-transform duration-500"
              />
            ) : (
              <Moon
                size={15}
                className="transition-transform duration-500"
              />
            )}
          </button>

          {[
            ["Me", "#about"],
            ["Work", "#work"],
            ["Contact", "#contact"],
          ].map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="
                group relative
                transition-colors duration-300
                hover:text-black
                dark:hover:text-white
              "
            >
              {label}

              <span
                className="
                  absolute -bottom-1 left-0 h-[1px] w-0
                  bg-current
                  transition-all duration-300
                  group-hover:w-full
                "
              />
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section
      id="home"
      className="mx-auto max-w-[1180px] px-5 pt-4 lg:px-0"
    >
      <div
        className="
          grid overflow-hidden rounded-[20px]
          bg-[#DDF2EC]
          transition-colors duration-500
          dark:bg-[#142421]
          lg:grid-cols-[1fr_1fr_1fr]
        "
      >

        {/* LEFT */}
        <ScrollReveal
          direction="left"
          className="flex flex-col justify-center p-7 lg:p-8"
        >
          <h1
            className="
              max-w-[500px]
              text-[40px] font-bold leading-[1]
              tracking-[-2.5px]
              text-[#101828]
              transition-all duration-700
              hover:tracking-[-3px]
              dark:text-white
              lg:text-[54px]
            "
          >
            Hi, I'm Reski

            <span
  className="
    mt-2
    block
    w-fit
    origin-bottom-left
    animate-[bounce_2s_infinite]
  "
>
  👋
</span>
          </h1>

          <p
            className="
              mt-6 max-w-[430px]
              text-[16px] leading-[1.6]
              text-gray-600
              transition-colors duration-300
              hover:text-gray-900
              dark:text-gray-300
              dark:hover:text-white
              lg:text-[17px]
            "
          >
            UI/UX Designer turning complex problems into simple digital
            experiences.
          </p>

          <p
            className="
              mt-2 max-w-[340px]
              text-[14px] leading-[1.6]
              text-gray-600
              dark:text-gray-300
              lg:text-[15px]
            "
          >
            I design intuitive digital products across mobile, web, and
            enterprise platforms — from user flows and wireframes to scalable
            design systems.
          </p>

          <div className="mt-4 flex items-center gap-5">

            <a
              href="#work"
              className="
                group flex items-center gap-2
                text-[14px] font-semibold text-blue-600
                transition-all duration-300
                hover:gap-3 hover:text-blue-700
              "
            >
              View My Work

              <ArrowRight
                size={15}
                className="
                  transition-transform duration-300
                  group-hover:translate-x-1
                "
              />
            </a>

            <a
              href="#"
              className="
                group flex items-center gap-1
                text-[13px] font-semibold text-blue-600
                transition-all duration-300
                hover:gap-2
              "
            >
              View My Resume

              <ArrowRight
                size={13}
                className="
                  transition-transform duration-300
                  group-hover:translate-x-1
                "
              />
            </a>

          </div>
        </ScrollReveal>


        {/* IMAGE */}
        <ScrollReveal
          direction="scale"
          delay={150}
          className="
            flex items-end justify-center
            px-5 pt-5
            lg:items-center lg:px-0
          "
        >
          <div
            className="
              group
              h-[230px] w-full max-w-[230px]
              overflow-hidden rounded-[13px]
              bg-[#FFF4F4]
              transition-all duration-700
              hover:-translate-y-3
              hover:rotate-2
              hover:shadow-2xl
              lg:h-[230px] lg:w-[230px]
            "
          >
            <img
              src={photoprofile}
              alt="Reski Windradiaksa"
              className="
                h-full w-full object-cover object-top
                transition-transform duration-700
                group-hover:scale-110
              "
            />
          </div>
        </ScrollReveal>


        {/* RIGHT */}
        <ScrollReveal
          direction="right"
          delay={300}
          className="flex items-center p-7 lg:p-8"
        >
          <h2
            className="
              max-w-[260px]
              text-[32px] font-extrabold
              leading-[1.25]
              tracking-[-1.5px]
              text-[#101828]
              transition-all duration-500
              hover:tracking-[-2px]
              dark:text-white
              lg:text-[38px]
            "
          >
            Good design
            <br />
            should feel
            <br />

            <span className="inline-block transition-transform duration-500 hover:translate-x-2">
              simple.
            </span>
          </h2>
        </ScrollReveal>

      </div>
    </section>
  );
}

function About() {
  return (
    <section
      id="about"
      className="
        mx-auto grid max-w-[1180px]
        gap-7 px-5 py-10
        lg:grid-cols-[180px_1fr]
        lg:px-0 lg:py-16
      "
    >

      <ScrollReveal direction="left">
        <div>
          <h2
            className="
              text-[30px] font-bold
              tracking-[-1.5px]
              transition-transform duration-500
              hover:translate-x-1
              dark:text-white
            "
          >
            Who am I?
          </h2>

          <a
            href="#"
            className="
              group mt-4 inline-flex
              items-center gap-1
              text-[13px] font-semibold text-blue-600
            "
          >
            View My Resume

            <ArrowRight
              size={13}
              className="
                transition-transform duration-300
                group-hover:translate-x-1
              "
            />
          </a>
        </div>
      </ScrollReveal>


      <ScrollReveal direction="right" delay={150}>
        <div
          className="
            max-w-[700px]
            text-[15px]
            leading-[1.7]
            text-gray-700
            dark:text-gray-300
            lg:text-[16px]
          "
        >
          <p>
            I’m a UI/UX Designer who enjoys turning complex problems into
            simple, meaningful experiences.
          </p>

          <p className="mt-3">
            I work across mobile, web, and enterprise products, combining UX
            thinking, visual design, and design systems to create interfaces
            that are easy to understand and practical to build.
          </p>

          <ul className="mt-4 space-y-1.5">
            {[
              "Based in Palembang, Indonesia",
              "Experience 2+ Years",
              "Currently Banking & Enterprise Products",
            ].map((item, index) => (
              <li
                key={item}
                className="
                  transition-transform duration-300
                  hover:translate-x-2
                "
                style={{
                  transitionDelay: `${index * 50}ms`,
                }}
              >
                • {item}
              </li>
            ))}
          </ul>
        </div>
      </ScrollReveal>

    </section>
  );
}

function Services() {
  return (
    <section className="mx-auto max-w-[1180px] px-5 lg:px-0">

      <ScrollReveal>
        <h2
          className="
            mb-3 text-[16px] font-bold
            dark:text-white
            lg:text-[18px]
          "
        >
          Service
        </h2>
      </ScrollReveal>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">

        {services.map((service, index) => {
          const Icon = service.icon;

          return (
            <ScrollReveal
              key={service.number}
              delay={index * 100}
            >
              <article
                className="
                  group
                  min-h-[270px]
                  rounded-[16px]
                  border border-blue-400
                  bg-[#FFF5F5]
                  p-5

                  transition-all duration-500
                  ease-out

                  hover:-translate-y-3
                  hover:scale-[1.02]
                  hover:shadow-2xl

                  dark:border-blue-400/60
                  dark:bg-[#1A1113]
                "
              >

                <span
                  className="
                    font-mono text-[11px]
                    text-gray-400
                    transition-colors duration-300
                    group-hover:text-blue-500
                  "
                >
                  {service.number}
                </span>


                <div
                  className="
                    mt-3 flex h-[70px]
                    items-center

                    transition-all duration-500
                    group-hover:translate-x-2
                    group-hover:scale-110
                    group-hover:-rotate-3
                  "
                >
                  <Icon
                    size={58}
                    strokeWidth={1.5}
                    className="
                      text-[#DE7A7F]
                      transition-colors duration-300
                      group-hover:text-[#F35C7D]
                    "
                  />
                </div>


                <h3
                  className="
                    mt-4 text-[17px]
                    font-semibold
                    tracking-[-0.3px]
                    text-[#101828]

                    transition-transform duration-300
                    group-hover:translate-x-1

                    dark:text-white
                    lg:text-[19px]
                  "
                >
                  {service.title}
                </h3>


                <p
                  className="
                    mt-2 text-[14px]
                    font-medium leading-[1.5]
                    text-gray-800

                    transition-colors duration-300
                    group-hover:text-gray-950

                    dark:text-gray-200
                  "
                >
                  {service.description}
                </p>


                <p
                  className="
                    mt-2 text-[13px]
                    leading-[1.6]
                    text-gray-600
                    dark:text-gray-400
                  "
                >
                  {service.detail}
                </p>

              </article>
            </ScrollReveal>
          );
        })}

      </div>
    </section>
  );
}

function Work({ darkMode }) {
  return (
    <section
      id="work"
      className="mx-auto max-w-[1180px] px-5 pt-12 lg:px-0 lg:pt-20"
    >

      <ScrollReveal>
        <h2 className="mb-3 text-[16px] font-bold dark:text-white lg:text-[18px]">
          Work
        </h2>
      </ScrollReveal>


      <div className="space-y-4">

        {projects.map((project, index) => (
          <ScrollReveal
            key={project.title}
            direction={index % 2 === 0 ? "left" : "right"}
            delay={index * 100}
          >

            <article
              className="
                group
                grid gap-4
                overflow-hidden
                rounded-[20px]
                p-4

                transition-all duration-700
                hover:-translate-y-2
                hover:shadow-2xl

                lg:grid-cols-[1.1fr_0.9fr]
                lg:p-5
              "
              style={{
                backgroundColor: darkMode
                  ? project.darkBackground
                  : project.background,
              }}
            >

              {/* IMAGE */}
              <div
                className="
                  group/image
                  overflow-hidden
                  rounded-[9px]
                  bg-white
                "
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="
                    block h-full w-full
                    object-cover

                    transition-transform
                    duration-1000
                    ease-out

                    group-hover/image:scale-110
                  "
                />
              </div>


              {/* CONTENT */}
              <div
                className="
                  flex flex-col
                  justify-center
                  py-3
                  lg:pr-5
                "
                style={{
                  color: darkMode
                    ? project.darkAccent
                    : project.accent,
                }}
              >

                <span
                  className="
                    mb-2 text-[11px]
                    font-mono opacity-60
                  "
                >
                  0{index + 1}
                </span>


                <h3
                  className="
                    text-[19px]
                    font-bold
                    transition-transform duration-500
                    group-hover:translate-x-2
                    lg:text-[24px]
                  "
                >
                  {project.title}
                </h3>


                <p className="mt-2 text-[13px] leading-[1.6] lg:text-[14px]">
                  {project.description}
                </p>


                <ul className="mt-3 space-y-1.5 text-[12px] leading-[1.6] lg:text-[13px]">
                  {project.items.map((item, itemIndex) => (
                    <li
                      key={item}
                      className="
                        transition-transform duration-300
                        hover:translate-x-2
                      "
                      style={{
                        transitionDelay: `${itemIndex * 30}ms`,
                      }}
                    >
                      • {item}
                    </li>
                  ))}
                </ul>


                <a
                  href="#"
                  className="
                    group/link
                    mt-5 flex w-fit
                    items-center gap-1
                    text-[13px] font-semibold
                  "
                >
                  View Project

                  <ArrowUpRight
                    size={13}
                    className="
                      transition-all duration-300
                      group-hover/link:translate-x-1
                      group-hover/link:-translate-y-1
                    "
                  />
                </a>

              </div>

            </article>

          </ScrollReveal>
        ))}

      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="mx-auto max-w-[1180px] px-5 py-10 lg:px-0 lg:py-16">

      <ScrollReveal direction="scale">

        <div
          className="
            group
            flex items-center
            justify-between gap-4
            rounded-full
            bg-[#EAF2FF]
            px-4 py-3

            transition-all duration-500

            hover:-translate-y-1
            hover:scale-[1.01]
            hover:shadow-xl

            dark:bg-[#151C2B]
          "
        >

          <div className="flex items-center gap-3">

            <div
              className="
                h-9 w-9
                overflow-hidden
                rounded-full
                bg-[#FFE8EE]

                transition-transform duration-500
                group-hover:scale-110
                group-hover:rotate-6
              "
            >
              <img
                src={profileImage}
                alt="Reski"
                className="
                  h-full w-full object-cover
                  transition-transform duration-500
                  group-hover:scale-110
                "
              />
            </div>

            <span className="text-[13px] font-bold dark:text-white lg:text-[14px]">
              Have a project in mind?
            </span>

          </div>


          <a
            href="#contact"
            className="
              group/button
              flex items-center gap-1
              rounded-full
              border border-blue-500
              px-3 py-1.5
              text-[11px]
              font-semibold
              text-blue-600

              transition-all duration-300

              hover:bg-blue-500
              hover:text-white
              hover:px-4
            "
          >
            Contact Me

            <ArrowRight
              size={11}
              className="
                transition-transform duration-300
                group-hover/button:translate-x-1
              "
            />
          </a>

        </div>

      </ScrollReveal>

    </section>
  );
}

function Footer() {
  return (
    <footer
      id="contact"
      className="
        mt-5
        overflow-hidden
        bg-[#DDF2EC]
        transition-colors duration-500
        dark:bg-[#142421]
      "
    >
      <div
        className="
          mx-auto max-w-[1180px]
          px-5 py-12
          lg:px-0 lg:py-16
        "
      >

        <ScrollReveal direction="up">

          <h2
            className="
              max-w-[900px]
              text-[22px]
              font-medium
              tracking-[-0.8px]
              transition-transform duration-500
              hover:translate-x-2
              dark:text-white
              lg:text-[26px]
            "
          >
            Let's talk about your next digital product.
          </h2>

        </ScrollReveal>


        <ScrollReveal direction="up" delay={100}>

          <p
            className="
              mt-4 max-w-[900px]
              text-[18px]
              font-medium
              leading-[1.35]
              tracking-[-0.5px]
              dark:text-gray-100
              lg:text-[20px]
            "
          >
            Whether you need a mobile app, website, design system, or simply
            want to discuss an idea, I’d love to hear about it.
          </p>

        </ScrollReveal>


        <ScrollReveal direction="up" delay={200}>

          <div className="mt-8">

            <h3 className="text-[16px] font-semibold dark:text-white lg:text-[18px]">
              Reski Windradiaksa
            </h3>

            <p className="mt-1 text-[13px] lg:text-[14px]">
              Sr UI UX Designer
            </p>

            <p className="mt-1 text-[13px] lg:text-[14px]">
              Palembang, Indonesia
            </p>

            <a
              href="mailto:reskiwindrao04@gmail.com"
              className="
                mt-4 block w-fit
                text-[14px]
                transition-all duration-300
                hover:translate-x-1
                hover:underline
                lg:text-[15px]
              "
            >
              reskiwindrao04@gmail.com
            </a>

          </div>

        </ScrollReveal>


        <ScrollReveal direction="up" delay={300}>

          <div className="mt-6 flex gap-4 text-[13px] font-medium lg:text-[14px]">

            {["Linkedin", "Dribbble", "Medium"].map(
              (item, index) => (
                <div
                  key={item}
                  className="flex items-center gap-4"
                >
                  <a
                    href="#"
                    className="
                      transition-all duration-300
                      hover:-translate-y-1
                      hover:underline
                    "
                  >
                    {item}
                  </a>

                  {index < 2 && (
                    <span className="text-pink-300">
                      ●
                    </span>
                  )}
                </div>
              )
            )}

          </div>

        </ScrollReveal>

      </div>
    </footer>
  );
}

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const html = document.documentElement;

    if (darkMode) {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-white text-[#101828] transition-colors duration-300 dark:bg-[#0a0a0a] dark:text-white">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <main>
        <Hero />
        <About />
        <Services />
        <Work darkMode={darkMode} />
        <CTA />
      </main>

      <Footer />
    </div>
  );
}