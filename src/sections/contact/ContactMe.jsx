import { motion } from "framer-motion";
import Button from "../../components/common/Button";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative flex h-screen items-center overflow-hidden bg-pink-50/20 px-6 py-24 text-gray-950 transition-colors duration-300 dark:bg-gray-950 dark:text-white sm:px-10 lg:min-h-[720px] lg:px-[5.5%]"
    >
      <div className="mx-auto grid w-full max-w-[1600px] grid-cols-1 items-center gap-16 lg:grid-cols-[1.2fr_0.8fr] lg:gap-12">
        {/* Left: Heading */}
        <div className="relative">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-9xl text-pink-300 font-bold leading-[0.88] tracking-[-0.075em]"
          >
            Let’s
            <br />
            work
            <br />
            together
          </motion.h2>

          {/* Decorative arrow */}
          <motion.div
            initial={{ opacity: 0, x: -15, y: -15 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="mt-12 flex justify-center lg:mt-16 lg:translate-x-12 text-pink-300"
          >
            <svg
              width="46"
              height="46"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M7 7L20 20" />
              <path d="M9 20H20V9" />
            </svg>
          </motion.div>
        </div>

        {/* Right: Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="flex flex-col items-start lg:ml-auto lg:w-full lg:max-w-[570px] lg:translate-y-5"
        >
          <Button
            href="mailto:your-email@example.com"
            variant="pink"
            size="md"
            arrow
          >
            Get In Touch
          </Button>

          <p className="mt-8 max-w-[590px] text-xl font-semibold leading-relaxed tracking-[-0.025em] text-[#5D5D66] dark:text-gray-400 sm:text-2xl">
            Open to new opportunities. Let’s create something meaningful together.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
