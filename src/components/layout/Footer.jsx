
import ScrollReveal from "../common/ScrollReveal";

const ArrowUpRight = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M7 17 17 7" />
    <path d="M7 7h10v10" />
  </svg>
);

const MailIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
);

export default function Footer() {
  const socialLinks = [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/reskiwindradiaksa/?isSelfProfile=true",
    },
    {
      label: "GitHub",
      href: "https://github.com/reskiwindraa",
    },
  ];

  return (
    <footer className="border-t border-pink-300 bg-pink-50 text-gray-950 transition-colors duration-300 dark:border-pink-300 dark:bg-[#0A0A0A] dark:text-white">
      <div className="mx-auto max-w-[1180px] px-6 sm:px-10 lg:px-0">
        <div className="grid grid-cols-1 gap-12 py-12 md:grid-cols-2 md:items-end md:py-16 lg:py-20">
          {/* Identity */}
          <ScrollReveal>
            <div>
              <a
                href="#top"
                className="group inline-flex items-center gap-2"
              >
                <span className="text-xl font-bold tracking-tight sm:text-2xl">
                  Reski Windradiaksa
                </span>

                <span className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
                  <ArrowUpRight />
                </span>
              </a>

              <p className="mt-3 text-sm text-neutral-500 dark:text-neutral-400 sm:text-base">
                UI/UX Designer & Frontend Developer
              </p>

              <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">
                Palembang, Indonesia
              </p>
            </div>
          </ScrollReveal>

          {/* Contact */}
          <ScrollReveal>
            <div className="md:ml-auto md:w-fit">
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400">
                Have a project in mind?
              </p>

              <a
                href="mailto:reskiwindrao04@gmail.com"
                className="group inline-flex items-center gap-3 border-b border-neutral-300 pb-2 text-base font-medium transition-colors duration-300 hover:border-neutral-900 dark:border-neutral-700 dark:hover:border-white sm:text-lg"
              >
                <MailIcon />
                <span>Let’s work together</span>

                <span className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
                  <ArrowUpRight />
                </span>
              </a>

              <p className="mt-3 text-sm text-neutral-500 dark:text-neutral-400">
                Open for new opportunities.
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-5 border-t border-pink-300 py-6 dark:border-pink-300 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs leading-relaxed text-neutral-500 dark:text-neutral-400 sm:text-sm">
            © {new Date().getFullYear()} Reski Windradiaksa.
            <span className="ml-1">
              Made with love & a little curiosity.
            </span>
          </p>

          <div className="flex items-center gap-5">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-neutral-500 transition-colors duration-300 hover:text-black dark:text-neutral-400 dark:hover:text-white"
              >
                {social.label}
                <span className="ml-1 inline-block transition-transform duration-300 hover:-translate-y-1 hover:translate-x-1">
                  <ArrowUpRight />
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
