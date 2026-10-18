
import { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValueEvent,
} from "framer-motion";

import ScrollReveal from "../../components/common/ScrollReveal";
import Button from "../../components/common/Button";

export default function About() {
  const marqueeRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: marqueeRef,
    offset: ["start end", "end start"],
  });

  const topX = useSpring(
    useTransform(scrollYProgress, [0, 1], [-180, 180]),
    {
      stiffness: 100,
      damping: 25,
    },
  );

  const bottomX = useSpring(
    useTransform(scrollYProgress, [0, 1], [180, -180]),
    {
      stiffness: 100,
      damping: 25,
    },
  );

  const [isExpanded, setIsExpanded] = useState(true);

  const { scrollY } = useScroll();

  const scaleX = useSpring(1, {
    stiffness: 100,
    damping: 24,
    mass: 0.7,
  });

  useMotionValueEvent(scrollY, "change", (current) => {
    const previous = scrollY.getPrevious();

    if (previous === undefined) return;

    if (current > previous + 1) {
      setIsExpanded(false);
    } else if (current < previous - 1) {
      setIsExpanded(true);
    }
  });

  scaleX.set(isExpanded ? 1 : 0.62);

  return (
    <div className="flex min-h-screen w-full flex-col items-center overflow-hidden bg-gradient-to-t from-white via-white to-pink-50 dark:from-gray-950 dark:via-gray-950 dark:to-gray-950">
      {/* EXPERTISE MARQUEE */}
      <section
        ref={marqueeRef}
        className="flex w-full flex-col justify-center overflow-hidden py-8 sm:py-12 lg:py-16"
        aria-label="Design expertise"
      >
        <div className="flex flex-col gap-2 sm:gap-3">
          <motion.h2
            style={{ x: topX }}
            className="whitespace-nowrap text-left text-[clamp(1.4rem,5.4vw,4.2rem)] font-bold leading-[1.15] tracking-[-0.045em] text-pink-300 will-change-transform dark:text-white"
          >
            User Experience Design · Interaction Design
          </motion.h2>

          <motion.h2
            style={{ x: bottomX }}
            className="whitespace-nowrap text-right text-[clamp(1.4rem,5.4vw,4.2rem)] font-bold leading-[1.15] tracking-[-0.045em] text-gray-950 will-change-transform dark:text-pink-300"
          >
            Product Design · User Research
          </motion.h2>
        </div>
      </section>

      {/* ABOUT CONTENT */}
      <section
        id="me"
        className="mx-auto grid w-full max-w-7xl grid-cols-1 items-start gap-6 px-5 pb-12 sm:gap-8 sm:px-8 sm:pb-16 md:px-10 lg:grid-cols-[0.8fr_1.7fr] lg:items-center lg:gap-12 lg:px-12 lg:pb-20 xl:gap-20 xl:px-16"
      >
        {/* TITLE */}
        <ScrollReveal direction="left">
          <div className="flex flex-col items-start gap-4 sm:gap-5">
            <h2 className="text-3xl font-extrabold leading-tight tracking-[-1.5px] text-gray-950 transition-transform duration-500 hover:translate-x-1 dark:text-white sm:text-4xl lg:text-4xl xl:text-5xl">
              About Me
            </h2>

            <Button
  href="/assets/resume.pdf"
  variant="pink"
  size="sm"
  arrow
  download="Resume-Reski-Windradiaks a.pdf"
>
  See my resume
</Button>
          </div>
        </ScrollReveal>

        {/* CONTENT */}
        <ScrollReveal direction="right" delay={150}>
          <div className="max-w-3xl text-base leading-relaxed text-gray-700 dark:text-gray-300 sm:text-lg sm:leading-[1.75]">
            <p>
              I'm a UI/UX Designer passionate about turning complex problems
              into intuitive, meaningful, and user-centered experiences.
            </p>

            <p className="mt-4 sm:mt-5">
              I work across mobile, web, and enterprise applications, combining
              UX strategy, visual design, and design systems to create
              interfaces that are intuitive, consistent, and practical to
              implement. With a background in frontend development, I bridge
              the gap between design and development to deliver thoughtful
              digital experiences that balance user needs, business goals, and
              technical feasibility.
            </p>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
