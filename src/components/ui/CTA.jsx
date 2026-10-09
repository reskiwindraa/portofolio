import { ArrowRight } from "lucide-react";

import profileImage from "../../assets/profile.png";
import ScrollReveal from "../../components/common/ScrollReveal";

export default function CTA() {
  return (
    <section
      className="
        mx-auto
        max-w-[1180px]
        px-5
        py-10
        lg:px-0
        lg:py-16
      "
    >
      <ScrollReveal direction="scale">
        <div
          className="
            group
            flex
            items-center
            justify-between
            gap-4
            rounded-full
            bg-[#EAF2FF]
            px-4
            py-3
            transition-all
            duration-500
            hover:-translate-y-1
            hover:scale-[1.01]
            hover:shadow-xl
            dark:bg-[#151C2B]
          "
        >
          {/* Profile + Text */}
          <div className="flex items-center gap-3">
            <div
              className="
                h-9
                w-9
                overflow-hidden
                rounded-full
                bg-[#FFE8EE]
                transition-transform
                duration-500
                group-hover:scale-110
                group-hover:rotate-6
              "
            >
              <img
                src={profileImage}
                alt="Reski"
                className="
                  h-full
                  w-full
                  object-cover
                  transition-transform
                  duration-500
                  group-hover:scale-110
                "
              />
            </div>

            <span
              className="
                text-[13px]
                font-bold
                dark:text-white
                lg:text-[14px]
              "
            >
              Have a project in mind?
            </span>
          </div>

          {/* Contact Button */}
          <a
            href="#contact"
            className="
              group/button
              flex
              items-center
              gap-1
              rounded-full
              border
              border-blue-500
              px-3
              py-1.5
              text-[11px]
              font-semibold
              text-blue-600
              transition-all
              duration-300
              hover:bg-blue-500
              hover:px-4
              hover:text-white
            "
          >
            Contact Me

            <ArrowRight
              size={11}
              className="
                transition-transform
                duration-300
                group-hover/button:translate-x-1
              "
            />
          </a>
        </div>
      </ScrollReveal>
    </section>
  );
}