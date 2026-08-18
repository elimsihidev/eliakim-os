import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const roles = [
  "Graphic Designer",
  "Content Creator",
  "Brand Storyteller",
  "Motion Graphics Designer",
  "Social Media Specialist",
];

interface TabletHomeProps {
  setPage: (page: number) => void;
}

export default function TabletHome({ setPage }: TabletHomeProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 4000);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <section className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden bg-[#08090a] px-10 text-white lg:px-14">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/profile-bg.png"
          alt="Portrait of Eliakim Msihi, Creative Multimedia Specialist"
          width={1600}
          height={1200}
          fetchPriority="high"
          decoding="async"
          className="h-full w-full object-cover opacity-60 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#08090a]/90 via-[#08090a]/50 to-[#08090a]" />
      </div>
      
      <div className="relative z-10 flex w-full flex-col items-center text-center">
        {/* Typing Roles */}
        <div className="mb-6 h-8 w-full overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={roles[index]}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className="flex items-center justify-center w-full"
            >
              <span className="text-[1.1rem] font-semibold text-white uppercase tracking-[0.2em]">
                {roles[index]}
              </span>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="display-title text-[5.5rem] font-black leading-[1] tracking-[-0.04em] lg:text-[7.5rem]"
        >
          <span className="text-white">Content </span>
          <span className="text-cyan-400">Plug</span>
        </motion.h1>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="display-title text-[5.5rem] font-black leading-[1] tracking-[-0.04em] text-white lg:text-[7.5rem]"
        >
          for Brands & Stories
        </motion.h1>

        {/* Explore Work Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="mt-20"
        >
          <button 
            onClick={() => setPage(2)}
            className="text-[1.2rem] font-bold tracking-[0.1em] text-cyan-400 hover:text-cyan-300 transition-colors uppercase"
          >
            Explore My Work
          </button>
        </motion.div>
      </div>
    </section>
  );
}
