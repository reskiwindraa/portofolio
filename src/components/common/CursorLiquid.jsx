import { motion, useSpring } from "framer-motion";

export default function CursorLiquid({ x, y, visible }) {
  const smoothX = useSpring(x, { stiffness: 90, damping: 20, mass: 0.7 });
  const smoothY = useSpring(y, { stiffness: 90, damping: 20, mass: 0.7 });

  const morph = {
    scale: [1, 1.08, 0.96, 1],
    rotate: [0, 12, -8, 0],
    borderRadius: [
      "42% 58% 65% 35% / 45% 40% 60% 55%",
      "58% 42% 38% 62% / 55% 60% 40% 45%",
      "45% 55% 58% 42% / 38% 50% 50% 62%",
      "42% 58% 65% 35% / 45% 40% 60% 55%",
    ],
  };

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none absolute left-0 top-0 z-0"
      style={{
        x: smoothX,
        y: smoothY,
        translateX: "-50%",
        translateY: "-50%",
        opacity: visible ? 1 : 0,
      }}
      transition={{ opacity: { duration: 0.2 } }}
    >
      <motion.div
        className="relative h-48 w-48 overflow-hidden bg-[radial-gradient(ellipse_at_30%_22%,#fff7fb_0%,#ffc5e0_18%,#fb78bd_42%,#ec4899_65%,#9d174d_100%)] shadow-[inset_-18px_-20px_30px_rgba(131,24,67,0.45),inset_12px_12px_25px_rgba(255,255,255,0.7),0_20px_60px_rgba(236,72,153,0.35)] md:h-64 md:w-64"
        animate={morph}
        transition={{
          scale: { duration: 5, repeat: Infinity, ease: "easeInOut" },
          rotate: { duration: 7, repeat: Infinity, ease: "easeInOut" },
          borderRadius: { duration: 6, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        <div className="absolute left-[15%] top-[12%] h-[28%] w-[48%] rotate-[-35deg] rounded-[50%] bg-gradient-to-br from-white/90 via-white/35 to-transparent blur-[3px]" />
        <div className="absolute right-[13%] top-[38%] h-[20%] w-[18%] rounded-full bg-pink-100/50 blur-md" />
        <div className="absolute -bottom-[20%] -left-[10%] h-[60%] w-[120%] rounded-full bg-fuchsia-950/20 blur-2xl" />
        <div className="absolute bottom-[23%] left-[27%] h-3 w-10 rotate-[-25deg] rounded-full bg-white/40 blur-sm" />
      </motion.div>
    </motion.div>
  );
}
