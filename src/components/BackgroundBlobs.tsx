import { motion } from "framer-motion";

export default function BackgroundBlobs() {
  return (
    <>
      {/* Top Left Glow */}
      <motion.div
        animate={{
          x: [0, 20, 0],
          y: [0, 15, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          left-[60px]
          top-[80px]
          h-[420px]
          w-[420px]
          rounded-full
          bg-cyan-400/8
          blur-[170px]
        "
      />

      {/* Bottom Right Glow */}
      <motion.div
        animate={{
          x: [0, -20, 0],
          y: [0, -15, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          right-[40px]
          bottom-[40px]
          h-[500px]
          w-[500px]
          rounded-full
          bg-cyan-500/6
          blur-[190px]
        "
      />

      {/* Center Ambient Glow */}
      <motion.div
        animate={{
          opacity: [0.15, 0.3, 0.15],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[260px]
          w-[260px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-cyan-300/5
          blur-[120px]
        "
      />
    </>
  );
}