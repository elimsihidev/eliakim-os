import { motion } from "framer-motion";

import ae from "../assets/icons/after-effects.svg";
import figma from "../assets/icons/figma.svg";
import davinci from "../assets/icons/davinci.svg";
import illustrator from "../assets/icons/illustrator.svg";
import photoshop from "../assets/icons/photoshop.svg";

const apps = [
  { icon: ae, name: "After Effects" },
  { icon: figma, name: "Figma" },
  { icon: davinci, name: "DaVinci Resolve" },
  { icon: illustrator, name: "Illustrator" },
  { icon: photoshop, name: "Photoshop" },
];

export default function FloatingApps() {
  return (
    <div
      className="
        absolute
        z-30
        flex
        flex-col

        2xl:right-44
        2xl:gap-9
      "
      style={{
        right: "clamp(6rem, 9vw, 10rem)",
        top: "50%",
        transform: "translateY(-50%)",
        gap: "clamp(1rem, 1.5vw, 1.75rem)",
      }}
    >
      {apps.map((app, index) => (
        <motion.div
          key={app.name}
          initial={{
            x: 90,
            opacity: 0,
            scale: 0.7,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
            y: [0, -6, 0],
          }}
          transition={{
            delay: 0.6 + index,
            type: "spring",
            stiffness: 180,
            damping: 18,
            y: {
              delay: 5.8,
              duration: 3 + index * 0.3,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          whileHover={{
            scale: 1.15,
            y: -4,
          }}
          className="group relative"
        >
          {/* Glow */}
          <div
            className="
              absolute
              inset-0
              rounded-full
              bg-cyan-400/20
              blur-xl
              opacity-0
              transition-all
              duration-300
              group-hover:opacity-100
            "
          />

          {/* Glass Circle */}
          <div
            className="
              relative
              flex
              items-center
              justify-center
              rounded-full
              border
              border-white/10
              bg-white/8
              backdrop-blur-2xl
              shadow-[0_12px_30px_rgba(0,0,0,.35)]
              transition-all
              duration-300
              group-hover:border-cyan-400/50
              group-hover:bg-white/15

              2xl:w-20
              2xl:h-20
            "
            style={{
              width: "clamp(4rem, 4.5vw, 4.5rem)",
              height: "clamp(4rem, 4.5vw, 4.5rem)",
            }}
          >
            <img
              src={app.icon}
              alt={app.name}
              className="2xl:w-12 2xl:h-12"
              style={{
                width: "clamp(2.2rem, 2.5vw, 2.8rem)",
                height: "clamp(2.2rem, 2.5vw, 2.8rem)",
              }}
            />
          </div>

          {/* Tooltip */}
          <div
            className="
              pointer-events-none
              absolute
              top-1/2
              -translate-y-1/2
              whitespace-nowrap
              rounded-xl
              border
              border-white/10
              bg-black/70
              px-3
              py-2
              text-white
              opacity-0
              transition-all
              duration-300
              group-hover:opacity-100

              2xl:right-28
              2xl:text-base
              2xl:px-4
              2xl:py-3
            "
            style={{
              right: "clamp(5.2rem, 6vw, 6rem)",
              fontSize: "clamp(.85rem, .9vw, .95rem)",
            }}
          >
            {app.name}
          </div>
        </motion.div>
      ))}
    </div>
  );
}