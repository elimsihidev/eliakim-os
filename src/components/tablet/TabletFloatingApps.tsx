import { motion } from "framer-motion";

import ae from "../../assets/icons/after-effects.svg";
import blender from "../../assets/icons/blender.svg";
import davinci from "../../assets/icons/davinci.svg";
import illustrator from "../../assets/icons/illustrator.svg";
import photoshop from "../../assets/icons/photoshop.svg";

const apps = [
  { icon: ae, name: "After Effects" },
  { icon: blender, name: "Blender" },
  { icon: davinci, name: "DaVinci Resolve" },
  { icon: illustrator, name: "Illustrator" },
  { icon: photoshop, name: "Photoshop" },
];

export default function TabletFloatingApps() {
  return (
    <div className="flex flex-wrap items-center gap-3 border-t border-white/10 pt-5">
      <span className="mr-2 text-[0.64rem] font-medium uppercase tracking-[0.18em] text-white/40">
        Tools
      </span>
      {apps.map((app, index) => (
        <motion.div
          key={app.name}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 + index * 0.06, duration: 0.3 }}
          title={app.name}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.03]"
        >
          <img
            src={app.icon}
            alt={app.name}
            width={16}
            height={16}
            loading="lazy"
            decoding="async"
            className="h-4 w-4 object-contain opacity-65"
          />
        </motion.div>
      ))}
    </div>
  );
}
