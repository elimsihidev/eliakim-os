import { motion } from "framer-motion";

import ae from "../../assets/icons/after-effects.svg";
import blender from "../../assets/icons/blender.svg";
import davinci from "../../assets/icons/davinci.svg";
import illustrator from "../../assets/icons/illustrator.svg";
import photoshop from "../../assets/icons/photoshop.svg";

interface MobileFloatingAppsProps {
  horizontal?: boolean;
}

const apps = [
  { icon: ae, name: "After Effects" },
  { icon: blender, name: "Blender" },
  { icon: davinci, name: "DaVinci Resolve" },
  { icon: illustrator, name: "Illustrator" },
  { icon: photoshop, name: "Photoshop" },
];

export default function MobileFloatingApps({
  horizontal = false,
}: MobileFloatingAppsProps) {
  return (
    <div
      className={
        horizontal
          ? `
            w-full
            flex
            justify-center
            items-center
            gap-4
            px-6
            py-4
          `
          : `
            absolute
            right-5
            top-1/2
            -translate-y-1/2
            z-30
            flex
            flex-col
            gap-4
          `
      }
    >
      {apps.map((app, index) => (
        <motion.div
          key={app.name}
          initial={{
            opacity: 0,
            scale: 0.7,
            y: horizontal ? 50 : 0,
            x: horizontal ? 0 : 40,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -5, 0],
            x: 0,
          }}
          transition={{
            delay: 1 + index * 0.1,
            type: "spring",
            stiffness: 180,
            damping: 18,
            y: {
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          whileHover={{
            scale: 1.08,
          }}
          className="group relative"
        >
          <div
            className="
              absolute
              inset-0
              rounded-full
              bg-cyan-400/20
              blur-xl
              opacity-0
              group-hover:opacity-100
              transition
            "
          />

          <div
            className="
              relative
              flex
              items-center
              justify-center
              h-12
              w-12
              rounded-full
              border
              border-white/10
              bg-white/10
              backdrop-blur-2xl
              shadow-xl
            "
          >
            <img
              src={app.icon}
              alt={app.name}
              className="h-7 w-7"
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
}