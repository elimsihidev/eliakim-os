import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TypingRolesProps {
  setPage: (page: number) => void;
}

const items = [
  "Content Creator",
  "Graphic Designer",
  "Motion Graphics Designer",
  "Social Media Specialist",
  "Brand Storyteller",
  "Explore My Story",
];

export default function TypingRoles({ setPage }: TypingRolesProps) {
  const [index, setIndex] = useState(0);

  const isCTA = index === items.length - 1;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, isCTA ? 8000 : 4000);

    return () => clearTimeout(timeout);
  }, [index, isCTA]);

  return (
    <div
      className="
        overflow-visible

        2xl:h-14
        2xl:w-[460px]
      "
      style={{
        height: "clamp(2.6rem,4vh,3rem)",
        width: "clamp(18rem,26vw,24rem)",
      }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={items[index]}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{
            duration: 0.45,
            ease: "easeInOut",
          }}
        >
          {isCTA ? (
            <button
              onClick={() => setPage(1)}
              className="
                group
                flex
                items-center
                gap-3
                font-semibold
                text-cyan-400

                2xl:text-[32px]
                2xl:gap-4
              "
              style={{
                fontSize: "clamp(1.2rem,1.5vw,1.5rem)",
              }}
            >
              Explore My Story

              <span className="transition-transform duration-300 group-hover:translate-x-2">
                →
              </span>
            </button>
          ) : (
            <h2
              className="
                font-semibold
                tracking-wide
                text-white

                2xl:text-[32px]
              "
              style={{
                fontSize: "clamp(1.2rem,1.5vw,1.5rem)",
              }}
            >
              {items[index]}
            </h2>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}