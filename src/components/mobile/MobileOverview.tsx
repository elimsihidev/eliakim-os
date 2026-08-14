import { motion } from "framer-motion";
import {
  Palette,
  Clapperboard,
  MonitorPlay,
  Megaphone,
  BookOpen,
  Boxes,
} from "lucide-react";

const skills = [
  {
    icon: <Palette size={28} />,
    title: "Graphic Design",
    desc: "Brand identities, marketing visuals and social media creatives.",
  },
  {
    icon: <Clapperboard size={28} />,
    title: "Motion Graphics",
    desc: "Animations, reels, explainers and campaign assets.",
  },
  {
    icon: <MonitorPlay size={28} />,
    title: "Video Editing",
    desc: "Short-form, long-form and commercial video editing.",
  },
  {
    icon: <Megaphone size={28} />,
    title: "Social Media",
    desc: "Content creation, strategy and campaign execution.",
  },
  {
    icon: <BookOpen size={28} />,
    title: "Content Strategy",
    desc: "Building stories that connect brands with people.",
  },
  {
    icon: <Boxes size={28} />,
    title: "Brand Storytelling",
    desc: "Turning ideas into memorable visual experiences.",
  },
];

const tools = [
  {
    name: "After Effects",
    icon: "/icons/ae.png",
  },
  {
    name: "Photoshop",
    icon: "/icons/ps.png",
  },
  {
    name: "Illustrator",
    icon: "/icons/ai.png",
  },
  {
    name: "DaVinci Resolve",
    icon: "/icons/resolve.png",
  },
  {
    name: "Blender",
    icon: "/icons/blender.png",
  },
];

export default function MobileOverview() {
  return (
    <section className="bg-[#050505] px-6 py-20">

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl font-black text-white"
      >
        OVERVIEW
      </motion.h2>

      <motion.h3
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: .1 }}
        viewport={{ once: true }}
        className="mt-5 text-3xl font-bold leading-tight text-white"
      >
        Crafting ideas into
        <br />
        stories that move
        <br />
        people.
      </motion.h3>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: .2 }}
        viewport={{ once: true }}
        className="mt-6 text-gray-400 leading-8"
      >
        I help brands communicate through design, motion,
        content and digital strategy—creating visuals that
        connect, engage and leave a lasting impression.
      </motion.p>

      {/* Skills */}

      <div className="mt-14 space-y-5">

        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * .08 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-white/10 bg-[#111111] p-6"
          >
            <div className="text-cyan-400">
              {skill.icon}
            </div>

            <h4 className="mt-5 text-xl font-semibold text-white">
              {skill.title}
            </h4>

            <p className="mt-3 leading-7 text-gray-400">
              {skill.desc}
            </p>

          </motion.div>
        ))}

      </div>

      {/* Tools */}

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-20"
      >

        <h3 className="text-3xl font-bold text-white">
          TOOLS
        </h3>

        <div className="mt-8 grid grid-cols-3 gap-4">

          {tools.map((tool, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: .9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * .1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center rounded-2xl border border-white/10 bg-[#111111] p-5"
            >
              <img
                src={tool.icon}
                alt={tool.name}
                className="h-12 w-12 object-contain"
              />

              <span className="mt-3 text-center text-sm text-gray-300">
                {tool.name}
              </span>

            </motion.div>
          ))}

        </div>

      </motion.div>

    </section>
  );
}