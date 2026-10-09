import profileImage from "../../assets/hero-image.png";

import ScrollReveal from "../../components/common/ScrollReveal";

/* ---------- Ikon sosial (inline SVG, tanpa dependensi tambahan) ---------- */
const DribbbleIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M19.1 4.9C15.4 8.2 9.6 9.4 4.2 8.6" />
    <path d="M14.5 2.4c-3.3 5.2-4.4 11.4-3.3 19.4" />
    <path d="M2.2 13.2c6-.6 12-.4 19.4 2.2" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" />
  </svg>
);

const MediumIcon = () => (
  <span className="font-serif text-[28px] font-black leading-none text-black">M</span>
);

const LinkedinIcon = () => (
  <span className="flex h-[30px] w-[30px] items-center justify-center rounded-[7px] bg-black text-[17px] font-extrabold leading-none text-white">
    in
  </span>
);

const socials = [
  {
    label: "Dribbble",
    href: "https://dribbble.com/Kkiiii",
    icon: <DribbbleIcon />,
    style: "bg-[#FFF1F2] text-[#FF8FB1] hover:bg-[#FFE0E6]",
    iconColor: "text-[#FF8FB1]",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/resstudio_/",
    icon: <InstagramIcon />,
    style: "bg-[#EAF2FF] text-[#3B82F6] hover:bg-[#D8E8FF]",
    iconColor: "text-[#3B82F6]",
  },
  {
    label: "Medium",
    href: "https://medium.com/@reskiwindra",
    icon: <MediumIcon />,
    style: "bg-[#FFF1F2] text-[#FF8FB1] hover:bg-[#FFE0E6]",
  },
  {
    label: "Linkedin",
    href: "https://www.linkedin.com/in/reskiwindradiaksa/?isSelfProfile=true",
    icon: <LinkedinIcon />,
    style: "bg-[#FFF1F2] text-[#FF8FB1] hover:bg-[#FFE0E6]",
  },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="mx-auto max-w-[1180px] px-5 pb-10 pt-28 lg:px-0 lg:pt-32"
    >
      <div className="grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
        {/* ============ KIRI: FOTO ============ */}
        <ScrollReveal direction="left">
          <div
            className="
              group relative mx-auto flex h-[420px] w-full max-w-[460px]
              items-end justify-center overflow-hidden
              rounded-4xl bg-[#FDEB90]
              transition-all duration-700 hover:shadow-2xl
              lg:h-[520px] lg:max-w-none
            "
          >
            {/* lingkaran pink di belakang foto */}
            <div
              className="
                absolute bottom-[-18%] left-1/2 h-[78%] aspect-square
                -translate-x-1/2 rounded-full bg-[#FFD3E0]
                transition-transform duration-700 group-hover:scale-105
              "
            />

            {/* foto (PNG transparan) */}
            <img
              src={profileImage}
              alt="Reski Windradiaksa"
              className="
                relative z-10 h-[92%] w-auto max-w-full object-contain
                object-bottom transition-transform duration-700
                group-hover:scale-105
              "
            />
          </div>
        </ScrollReveal>

        {/* ============ KANAN: TEKS ============ */}
        <ScrollReveal direction="right" delay={200}>
          <div className="flex flex-col">
            <h1
              className="
                text-[40px] font-extrabold leading-[1.15] tracking-[-1.5px]
                text-[#101828] transition-colors duration-500
                dark:text-white md:text-[56px] lg:text-[64px]
              "
            >
              Reski Windradiaksa
            </h1>

            <h2
              className="
                mt-6 max-w-[760px] text-[40px] font-extrabold leading-[1.2]
                tracking-[-1.5px] text-[#101828] transition-colors duration-500
                dark:text-white md:text-[56px] lg:text-[64px]
              "
            >
              Good design should feel simple.
            </h2>

            <p
              className="
                mt-8 max-w-[680px] text-[16px] leading-[1.6] text-[#101828]
                dark:text-gray-300 md:text-[18px]
              "
            >
              UI/UX Designer dan Frontend Developer dengan pengalaman 2 tahun
              dalam merancang dan mengembangkan produk digital yang modern,
              intuitif, dan berorientasi pada pengguna.
            </p>

            {/* tombol sosial media */}
            <div className="mt-8 flex flex-wrap gap-4">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className={`
                    flex items-center gap-3 rounded-2xl px-6 py-2
                    text-[16px] font-bold transition-all duration-300
                    hover:-translate-y-1 hover:shadow-md md:text-[24px]
                    ${s.style}
                  `}
                >
                  <span className={s.iconColor}>{s.icon}</span>
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}