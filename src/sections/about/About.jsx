import { ArrowRight } from "lucide-react";

import ScrollReveal from "../../components/common/ScrollReveal";

export default function About() {
  return (
    <section
      id="about"
      className="
        mx-auto
        grid
        max-w-[1180px]
        gap-6
        px-5
        py-10
        lg:grid-cols-[1fr_1.9fr]
        lg:gap-10
        lg:px-0
        lg:py-16
      "
    >
      {/* TITLE */}
      <ScrollReveal direction="left">
        <div>
          <h2
            className="
              text-[44px]
              font-extrabold
              leading-none
              tracking-[-1.5px]
              text-[#101828]
              transition-transform
              duration-500
              hover:translate-x-1
              dark:text-white
              lg:text-4xl
            "
          >
            Info
          </h2>

          <a
            href="#"
            className="
              group
              mt-8
              inline-flex
              items-center
              gap-3
              text-[16px]
              font-semibold
              text-blue-500
              transition-colors
              duration-300
              hover:text-blue-600
            "
          >
            See my resume

            <ArrowRight
              size={20}
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />
          </a>
        </div>
      </ScrollReveal>

      {/* CONTENT */}
      <ScrollReveal direction="right" delay={150}>
        <div
          className="
            max-w-[760px]
            text-[18px]
            leading-[1.6]
            text-[#101828]
            dark:text-gray-300
            lg:text-[20px]
          "
        >
          <p>
            I'm a UI/UX Designer who enjoys turning complex problems into
            simple, meaningful experiences.
          </p>

          <p className="mt-4">
            I work across mobile, web, and enterprise products, combining UX
            thinking, visual design, and design systems to create interfaces
            that are easy to understand and practical to build.
          </p>
        </div>
      </ScrollReveal>
    </section>
  );
}