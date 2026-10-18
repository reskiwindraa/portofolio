
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowUpRight,
  LayoutGrid,
  Sparkles,
  Heart,
  Paintbrush,
  WandSparkles,
} from "lucide-react";

export default function ProjectOngoing() {
  return (
    <main className="relative flex h-screen w-screen items-center justify-center overflow-hidden bg-[#FFF8FA] px-5 py-16 text-[#29202B] dark:bg-[#191218] dark:text-white sm:px-8">

      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 8, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute -left-20 top-20 h-64 w-64 rounded-full bg-pink-200/40 blur-3xl dark:bg-pink-500/10"
        />

        <motion.div
          animate={{ y: [0, 25, 0], rotate: [0, -8, 0] }}
          transition={{ duration: 7, repeat: Infinity }}
          className="absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-purple-200/40 blur-3xl dark:bg-purple-500/10"
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-3xl">

        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 flex items-center justify-between"
        >
          <a href="/" className="text-xl font-extrabold tracking-tight">
            reski<span className="text-pink-500">.</span>
          </a>

          <span className="rounded-full border border-pink-200 px-3 py-2 text-[10px] font-bold tracking-[0.15em] text-pink-500 dark:border-pink-900 sm:text-xs">
            UNDER CONSTRUCTION
          </span>
        </motion.header>

        {/* Main content */}
        <div className="flex flex-col items-center text-center">

          {/* Animated illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 150, damping: 14 }}
            className="relative mb-10 flex h-36 w-36 items-center justify-center rounded-[2rem] bg-[#F8DFE9] dark:bg-[#3A2431]"
          >
            <motion.div
              animate={{ rotate: [0, -8, 8, 0], y: [0, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <Paintbrush
                size={64}
                strokeWidth={1.5}
                className="text-pink-500"
              />
            </motion.div>

            <motion.div
              animate={{ rotate: [0, 15, 0], scale: [1, 1.15, 1] }}
              transition={{ duration: 2.5, repeat: Infinity }}
              className="absolute -right-3 -top-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-pink-500 shadow-lg dark:bg-[#4A3040]"
            >
              <Sparkles size={24} />
            </motion.div>

            <motion.div
              animate={{ y: [0, -7, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute -bottom-3 -left-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[#DFF5E8] text-emerald-600 shadow-md"
            >
              <Heart size={20} />
            </motion.div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-pink-500"
          >
            A little work in progress
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="max-w-2xl text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl"
          >
            Oops! Pixels
            <br />
            <span className="text-pink-500">at work.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="mt-6 max-w-lg text-sm leading-7 text-neutral-600 dark:text-gray-300 sm:text-base"
          >
            This project is getting a little makeover. We're moving
            pixels around, fixing tiny details, and arguing with
            spacing. It's a designer thing. 👀
          </motion.p>

          {/* Fun design process */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="mt-9 flex items-center gap-3 sm:gap-5"
          >
            <div className="rounded-2xl border border-pink-100 bg-white p-4 shadow-sm dark:border-white/10 dark:bg-white/5">
              <LayoutGrid className="text-pink-500" size={25} />
            </div>

            <span className="text-xl text-pink-300">+</span>

            <div className="rounded-2xl border border-pink-100 bg-white p-4 shadow-sm dark:border-white/10 dark:bg-white/5">
              <WandSparkles className="text-purple-500" size={25} />
            </div>

            <span className="text-xl text-pink-300">=</span>

            <div className="rounded-2xl bg-[#F8DFE9] p-4 dark:bg-[#3A2431]">
              <Heart className="text-pink-500" size={25} />
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-5 text-xs italic text-neutral-500 dark:text-gray-400"
          >
            Good design takes time. Bad kerning takes longer.
          </motion.p>

          {/* Back button */}
          <motion.a
            href="/#projects"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="group mt-10 inline-flex items-center gap-3 rounded-full bg-[#29202B] px-6 py-4 text-sm font-semibold text-white transition-colors hover:bg-pink-500 dark:bg-white dark:text-[#29202B] dark:hover:bg-pink-500 dark:hover:text-white"
          >
            <ArrowLeft
              size={18}
              className="transition-transform group-hover:-translate-x-1"
            />
            Back to projects
            <ArrowUpRight
              size={16}
              className="ml-1 opacity-50 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </motion.a>
        </div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="mt-20 text-center text-[10px] font-medium tracking-[0.18em] text-neutral-400"
        >
          CURRENT STATUS: POLISHING PIXELS ✦
        </motion.footer>
      </div>
    </main>
  );
}
