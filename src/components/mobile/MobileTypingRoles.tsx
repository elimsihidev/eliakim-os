import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const roles = [
  "Graphic Designer",
  "Content Creator",
  "Brand Storyteller",
  "Motion Graphics Designer",
  "Social Media Specialist",
];

export default function MobileTypingRoles() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 4000);

    return () => clearTimeout(timer);
  }, [index]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={roles[index]}
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -6 }}
        transition={{ duration: 0.3 }}
        className="
        flex
        items-center
        justify-center
        w-full
        "
      >
        <span
          className="
          text-[14px]
          font-semibold
          text-white
          whitespace-nowrap
          text-center
          "
        >
          {roles[index]}
        </span>
      </motion.div>
    </AnimatePresence>
  );
}