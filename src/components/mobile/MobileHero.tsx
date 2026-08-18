import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const roles = [
  "Graphic Designer",
  "Content Creator",
  "Brand Storyteller",
  "Motion Graphics Designer",
  "Social Media Specialist",
];

export default function MobileHero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 4000);

    return () => clearTimeout(timer);
  }, [index]);

  return (
    <section id="home" className="relative flex min-h-[100svh] flex-col items-center justify-start overflow-hidden bg-[#08090a] px-6 text-white sm:px-8">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/profile-mobile.png"
          alt="Portrait of Eliakim Msihi, Creative Multimedia Specialist"
          width={1200}
          height={1600}
          fetchPriority="high"
          decoding="async"
          className="h-full w-full object-cover opacity-70 grayscale"
          style={{ objectPosition: '50% 60%' }}
        />
        {/* Dark vignette/gradient overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#08090a]/90 via-[#08090a]/40 to-[#08090a]" />
      </div>
      
      <div className="relative z-10 mt-40 flex w-full flex-col items-center text-center sm:mt-48">
        {/* User's Custom Typing Roles Animation */}
        <div className="mb-4 h-6 w-full overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={roles[index]}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.3 }}
              className="flex items-center justify-center w-full"
            >
              <span className="text-[14px] font-semibold text-white whitespace-nowrap text-center uppercase tracking-[0.1em]">
                {roles[index]}
              </span>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Main Title - Line 1 */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="display-title text-[2.8rem] font-black leading-[1.1] tracking-[-0.04em] sm:text-[4.5rem]"
        >
          <span className="text-white">Content </span>
          <span className="text-cyan-400">Plug</span>
        </motion.h1>

        {/* Main Title - Line 2 */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="display-title text-[2.8rem] font-black leading-[1.1] tracking-[-0.04em] text-white sm:text-[4.5rem]"
        >
          for Brands & Stories
        </motion.h1>


      </div>

      {/* Explore Work Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-16 left-1/2 -translate-x-1/2"
      >
        <a 
          href="#projects"
          className="text-[16px] font-bold tracking-[0.05em] text-cyan-400 hover:text-cyan-300 transition-colors"
        >
          Explore My Work
        </a>
      </motion.div>
    </section>
  );
}
