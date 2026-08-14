import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "../../data/portfolio";

export default function MobileProjects() {
  return (
    <section className="px-6 py-20" id="projects">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-cyan-400"
      >
        Selected work
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-3 text-4xl font-black leading-tight text-white"
      >
        Projects that <span className="text-cyan-400">move.</span>
      </motion.h2>

      <p className="mb-10 leading-7 text-neutral-400">
        Strategy, motion, design, and storytelling brought together into campaigns people remember.
      </p>

      <div className="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto pb-5">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.08 }}
            viewport={{ once: true }}
            className="group relative min-w-[88vw] snap-center overflow-hidden rounded-[40px] border border-white/10 bg-neutral-950"
          >
            {project.image ? (
              <img
                src={project.image}
                alt={`${project.title} project preview`}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            ) : (
              <div
                aria-hidden="true"
                className="absolute inset-0"
                style={{
                  background: `radial-gradient(circle at 75% 18%, ${project.color}88, transparent 34%), linear-gradient(145deg, #111 0%, #050505 65%, ${project.color}33 100%)`,
                }}
              >
                <div className="absolute -right-4 -top-10 text-[15rem] font-black leading-none text-white/[0.05]">
                  {project.title.charAt(0)}
                </div>
              </div>
            )}

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
            <div className="relative flex min-h-[420px] flex-col justify-end p-8">
              <p className="mb-2 text-sm font-semibold uppercase tracking-widest" style={{ color: project.color }}>
                {project.category}
              </p>
              <h3 className="mb-2 text-3xl font-bold text-white">{project.title}</h3>
              <p className="text-neutral-300">{project.type}</p>
              <p className="mt-4 max-w-sm text-sm leading-6 text-neutral-400">{project.description}</p>
              <div className="mt-7 flex items-center gap-3 text-sm font-semibold text-white">
                <span className="flex h-12 w-12 items-center justify-center rounded-full text-black" style={{ background: project.color }}>
                  <ArrowUpRight size={21} />
                </span>
                <span>{project.link ? "View project" : "Case study coming soon"}</span>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
