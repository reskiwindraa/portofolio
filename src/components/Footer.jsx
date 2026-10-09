import { ArrowRight } from "lucide-react";
import profileImage from "../assets/profile.png";
import ScrollReveal from "../components/common/ScrollReveal";

const socialLinks = [
  {
    label: "LinkedIn",
    href: "#",
  },
  {
    label: "Dribbble",
    href: "#",
  },
  {
    label: "Medium",
    href: "#",
  },
];

export default function Footer() {
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
        {/* Heading */}
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

        {/* Description */}
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

        {/* Profile */}
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

        {/* Social Links */}
        <ScrollReveal direction="up" delay={300}>
          <div
            className="
              mt-6
              flex gap-4
              text-[13px]
              font-medium
              lg:text-[14px]
            "
          >
            {socialLinks.map((item, index) => (
              <div
                key={item.label}
                className="flex items-center gap-4"
              >
                <a
                  href={item.href}
                  className="
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:underline
                  "
                >
                  {item.label}
                </a>

                {index < socialLinks.length - 1 && (
                  <span className="text-pink-300">
                    ●
                  </span>
                )}
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
}