import { useState } from "react";
import { motion, useMotionValue } from "framer-motion";

import profileImage from "../../assets/hero-image.png";
import ScrollReveal from "../../components/common/ScrollReveal";

/* ---------- Ikon sosial ---------- */
const DribbbleIcon = () => (
  <svg
    width="26"
    height="26"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M19.1 4.9C15.4 8.2 9.6 9.4 4.2 8.6" />
    <path d="M14.5 2.4c-3.3 5.2-4.4 11.4-3.3 19.4" />
    <path d="M2.2 13.2c6-.6 12-.4 19.4 2.2" />
  </svg>
);

const InstagramIcon = () => (
  <svg
    width="26"
    height="26"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" />
  </svg>
);

const MediumIcon = () => (
  <span className="font-serif text-[28px] font-black leading-none text-current transition-colors duration-300">
    M
  </span>
);

const LinkedinIcon = () => (
  <span className="text-current transition-colors duration-300">
    <svg
      width="30"
      height="30"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2ZM8.5 18H5.8V9.5h2.7ZM7.15 8.3a1.55 1.55 0 1 1 0-3.1 1.55 1.55 0 0 1 0 3.1ZM18.2 18h-2.7v-4.15c0-.99-.02-2.26-1.38-2.26-1.38 0-1.59 1.08-1.59 2.19V18h-2.7V9.5h2.59v1.16h.04a2.84 2.84 0 0 1 2.55-1.4c2.73 0 3.23 1.8 3.23 4.14Z" />
    </svg>
  </span>
);

const socials = [
  {
    label: "Dribbble",
    href: "https://dribbble.com/Kkiiii",
    icon: <DribbbleIcon />,
    style:
      "bg-[#FCE7F3] text-[#DB2777] hover:bg-[#F9A8D4] hover:text-[#9D174D]",
    iconColor: "text-current",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/resstudio_/",
    icon: <InstagramIcon />,
    style:
      "bg-[#F3E8FF] text-[#9333EA] hover:bg-[#E9D5FF] hover:text-[#7E22CE]",
    iconColor: "text-current",
  },
  {
    label: "Medium",
    href: "https://medium.com/@reskiwindra",
    icon: <MediumIcon />,
    style: "bg-[#F3F4F6] text-[#171717] hover:bg-[#262626] hover:text-white",
    iconColor: "text-current",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/reskiwindradiaksa/?isSelfProfile=true",
    icon: <LinkedinIcon />,
    style: "bg-[#E0F2FE] text-[#0A66C2] hover:bg-[#0A66C2] hover:text-white",
    iconColor: "text-current",
  },
];

export default function Hero() {
  const cursorX = useMotionValue(-300);
  const cursorY = useMotionValue(-300);
  const [cursorVisible, setCursorVisible] = useState(false);

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    cursorX.set(event.clientX - rect.left);
    cursorY.set(event.clientY - rect.top);
  };

  return (
    <section
      id="home"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setCursorVisible(true)}
      onMouseLeave={() => setCursorVisible(false)}
      className="relative isolate min-h-screen w-full overflow-hidden bg-pink-50 dark:bg-gray-950 px-5 pb-10 pt-28 lg:pt-32"
    >
      {/* Background: animated 3D pink liquid blobs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        {/* Liquid utama kiri atas */}
        <motion.div
          className="absolute -left-28 top-16 h-72 w-80 bg-gradient-to-br from-white via-pink-200 to-pink-500 opacity-75 blur-[1px] shadow-[inset_-18px_-20px_35px_rgba(190,24,93,0.24),inset_12px_12px_28px_rgba(255,255,255,0.9),0_25px_60px_rgba(236,72,153,0.2)]"
          animate={{
            borderRadius: [
              "35% 65% 62% 38% / 42% 36% 64% 58%",
              "61% 39% 36% 64% / 55% 63% 37% 45%",
              "43% 57% 68% 32% / 62% 42% 58% 38%",
              "35% 65% 62% 38% / 42% 36% 64% 58%",
            ],
            rotate: [0, 12, -8, 0],
            x: [0, 18, -8, 0],
            y: [0, 12, 24, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="absolute left-[18%] top-[12%] h-[25%] w-[48%] rotate-[-30deg] rounded-full bg-gradient-to-br from-white/90 via-white/35 to-transparent blur-md" />
        </motion.div>

        {/* Liquid kecil kanan atas */}
        <motion.div
          className="absolute right-[9%] top-12 h-36 w-44 bg-gradient-to-br from-white via-pink-200 to-fuchsia-500 opacity-80 shadow-[inset_-12px_-14px_24px_rgba(157,23,77,0.22),inset_8px_8px_20px_rgba(255,255,255,0.95),0_18px_40px_rgba(236,72,153,0.2)]"
          animate={{
            borderRadius: [
              "63% 37% 48% 52% / 42% 57% 43% 58%",
              "42% 58% 61% 39% / 58% 39% 61% 42%",
              "54% 46% 35% 65% / 45% 62% 38% 55%",
              "63% 37% 48% 52% / 42% 57% 43% 58%",
            ],
            rotate: [0, -14, 8, 0],
            y: [0, 16, -6, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.6,
          }}
        >
          <div className="absolute left-[18%] top-[12%] h-[24%] w-[42%] rotate-[-35deg] rounded-full bg-white/70 blur-md" />
        </motion.div>

        {/* Liquid besar kanan bawah */}
        <motion.div
          className="absolute -right-28 -bottom-24 h-[380px] w-[420px] bg-gradient-to-br from-white via-pink-200 to-fuchsia-600 opacity-60 shadow-[inset_-22px_-24px_40px_rgba(157,23,77,0.26),inset_12px_12px_30px_rgba(255,255,255,0.88),0_30px_70px_rgba(236,72,153,0.22)]"
          animate={{
            borderRadius: [
              "42% 58% 35% 65% / 48% 42% 58% 52%",
              "58% 42% 63% 37% / 36% 61% 39% 64%",
              "34% 66% 48% 52% / 59% 38% 62% 41%",
              "42% 58% 35% 65% / 48% 42% 58% 52%",
            ],
            rotate: [0, -10, 7, 0],
            x: [0, -18, -4, 0],
            y: [0, -14, -24, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.3,
          }}
        >
          <div className="absolute left-[20%] top-[14%] h-[22%] w-[46%] rotate-[-28deg] rounded-full bg-gradient-to-br from-white/90 to-white/5 blur-lg" />
          <div className="absolute bottom-[20%] left-[25%] h-5 w-16 rotate-[-25deg] rounded-full bg-white/35 blur-md" />
        </motion.div>

        {/* Genangan liquid kecil di tengah bawah */}
        <motion.div
          className="absolute bottom-[8%] left-[38%] h-20 w-32 bg-gradient-to-br from-white via-pink-300 to-pink-500 opacity-70 shadow-[inset_-8px_-10px_18px_rgba(190,24,93,0.22),inset_6px_6px_14px_rgba(255,255,255,0.9),0_12px_30px_rgba(236,72,153,0.18)]"
          animate={{
            borderRadius: [
              "55% 45% 62% 38% / 42% 58% 42% 58%",
              "37% 63% 43% 57% / 58% 36% 64% 42%",
              "65% 35% 52% 48% / 39% 61% 39% 61%",
              "55% 45% 62% 38% / 42% 58% 42% 58%",
            ],
            scale: [1, 1.12, 0.92, 1],
            rotate: [0, 12, -6, 0],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        >
          <div className="absolute left-[18%] top-[12%] h-[24%] w-[45%] rotate-[-25deg] rounded-full bg-white/75 blur-sm" />
        </motion.div>
      </div>

      {/* Hero content */}
      <div className="relative z-10 mx-auto grid w-full max-w-[1440px] items-center gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
        {/* Left: profile image */}
        <ScrollReveal direction="left">
          <div className="group relative mx-auto flex h-[420px] w-full max-w-[460px] items-end justify-center overflow-hidden rounded-4xl bg-[#FDEB90] transition-all duration-700 hover:shadow-2xl lg:h-[520px] lg:max-w-none">
            <div className="absolute bottom-[-18%] left-1/2 aspect-square h-[78%] -translate-x-1/2 rounded-full bg-[#FFD3E0] transition-transform duration-700 group-hover:scale-105" />
            <img
              src={profileImage}
              alt="Reski Windradiaksa"
              className="relative z-10 h-[92%] w-auto max-w-full object-contain object-bottom transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </ScrollReveal>

        {/* Right: text and social links */}
        <ScrollReveal direction="right" delay={200}>
          <div className="flex flex-col">
            <h1 className="text-[40px] font-extrabold leading-[1.15] tracking-[-1.5px] text-[#101828] transition-colors duration-500 dark:text-white md:text-[56px] lg:text-[64px]">
              Reski Windradiaksa
            </h1>
            <h2 className="mt-6 max-w-[760px] text-[40px] font-extrabold leading-[1.2] tracking-[-1.5px] text-[#101828] transition-colors duration-500 dark:text-white md:text-[56px] lg:text-[64px]">
              Good design should feel simple.
            </h2>
            <p className="mt-8 max-w-[680px] text-[16px] leading-[1.6] text-[#101828] dark:text-gray-300 md:text-[18px]">
              UI/UX Designer and Frontend Developer with 2 years of experience
              designing and building modern, intuitive, and user-centered
              digital products.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className={`group flex items-center gap-3 rounded-2xl px-6 py-2 text-[16px] font-bold transition-all duration-300 hover:-translate-y-1 hover:shadow-md md:text-[24px] ${social.style}`}
                >
                  <span className="text-current transition-colors duration-300">
                    {social.icon}
                  </span>

                  <span className="transition-colors duration-300">
                    {social.label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
