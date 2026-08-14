import { motion } from "framer-motion";

const projects = [
  {
    title: "Serengeti Bytes",
    category: "Social Media",
    type: "Campaign Design",
    image: "/projects/serengeti.jpg",
    color: "#F97316",
    link: "#",
  },
  {
    title: "Expensive Store",
    category: "Fashion",
    type: "Brand Campaign",
    image: "/projects/expensive.jpg",
    color: "#444",
    link: "#",
  },
  {
    title: "Fountain Gate FC",
    category: "Sports",
    type: "Creative Direction",
    image: "/projects/fountaingate.jpg",
    color: "#00C8FF",
    link: "#",
  },
  {
    title: "CRDB Bank",
    category: "Photography",
    type: "Behind the Scenes",
    image: "/projects/crdb.jpg",
    color: "#00B140",
    link: "#",
  },
  {
    title: "Jackpot City Casino",
    category: "Photography",
    type: "Behind the Scenes",
    image: "/projects/jackpot.jpg",
    color: "#8B5CF6",
    link: "#",
  },
];

export default function MobileProjects() {
  return (
    <section className="px-6 py-20">

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl font-black leading-tight mb-3"
      >
        Selected <span className="text-cyan-400">Projects</span>
      </motion.h2>

      <p className="text-neutral-400 mb-10 leading-7">
        Strategy, motion, design and storytelling brought together into
        campaigns that people actually remember.
      </p>

      <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-5 no-scrollbar">

        {projects.map((project, index) => (

          <motion.a
            href={project.link}
            key={index}
            whileTap={{ scale: .97 }}
            className="snap-center min-w-[88vw] rounded-4xl overflow-hidden bg-neutral-900 border border-white/5"
          >

            <div className="relative h-105">

              <img
                src={project.image}
                className="absolute inset-0 w-full h-full object-cover"
              />

              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(0,0,0,.95), rgba(0,0,0,.15), transparent)",
                }}
              />

              <div
                className="absolute inset-0"
                style={{
                  boxShadow: `inset 0 0 120px ${project.color}20`,
                }}
              />

              <div className="absolute bottom-8 left-8 right-8">

                <p
                  className="uppercase text-sm font-semibold mb-2 tracking-widest"
                  style={{ color: project.color }}
                >
                  {project.category}
                </p>

                <h3 className="text-3xl font-bold mb-2">
                  {project.title}
                </h3>

                <p className="text-neutral-300">
                  {project.type}
                </p>

                <div className="mt-8 flex justify-between items-center">

                  <span className="text-neutral-400">
                    Tap anywhere to explore
                  </span>

                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center text-black text-2xl font-bold"
                    style={{
                      background: project.color,
                    }}
                  >
                    ↗
                  </div>

                </div>

              </div>

            </div>

          </motion.a>

        ))}

      </div>

    </section>
  );
}