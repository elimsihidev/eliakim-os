import { useState } from "react";
import { motion } from "framer-motion";
import { projects } from "../../data/portfolio";

function ProjectMedia({ image, title, color }: { image?: string; title: string; color: string }) {
  const [failed, setFailed] = useState(false);

  if (!image || failed) {
    return (
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at 75% 18%, ${color}88, transparent 32%), linear-gradient(145deg, #1a1d1f 0%, #0b0d0e 70%, ${color}33 100%)`,
        }}
      >
        <span className="absolute bottom-[-1.8rem] right-4 text-[10rem] font-semibold leading-none text-white/[0.06]">
          {title.charAt(0)}
        </span>
      </div>
    );
  }

  return (
    <img
      src={image}
      alt={`${title} project preview`}
      width={1200}
      height={900}
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
    />
  );
}

export default function MobileProjects() {
  return (
    <section id="projects" className="scroll-mt-5 bg-[#08090a] px-6 py-16 text-white sm:px-8 sm:py-20">
      <div className="mx-auto max-w-3xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="display-title text-center text-[3rem] text-white sm:text-[4rem]"
        >
          Projects
        </motion.h2>
        <p className="section-copy mt-7 max-w-xl text-center mx-auto">
          A selection of creative work across content, motion, design and digital storytelling.
        </p>

        <div className="mt-10 space-y-12">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.07, duration: 0.5 }}
              viewport={{ once: true, amount: 0.15 }}
              className="group block"
            >
              <a 
                href={project.link || "#"} 
                target={project.link ? "_blank" : undefined}
                rel={project.link ? "noopener noreferrer" : undefined}
                className="block"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-[1.2rem] bg-[#141719] sm:aspect-[3/2]">
                  <ProjectMedia image={project.image} title={project.title} color={project.color} />
                </div>
                
                <div className="mt-6 px-1">
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <h3 
                      style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
                      className="text-[1.4rem] font-bold uppercase tracking-tight text-white sm:text-[1.8rem]"
                    >
                      {project.title}
                    </h3>
                    <span className="text-white/30 text-[1.2rem] font-light">—</span>
                    <p className="text-[1.1rem] text-white/50 font-medium">
                      {project.category}
                    </p>
                  </div>
                  
                  <div className="mt-4 flex items-center gap-2 text-[0.75rem] font-bold uppercase tracking-[0.2em] text-cyan-400">
                    <span>View Project</span>
                    <span className="text-[1rem]">↗</span>
                  </div>
                </div>
              </a>
            </motion.article>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 flex justify-center"
        >
          <a
            href="https://behance.net/elimsihi"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-center overflow-hidden rounded-full border border-white/20 px-10 py-5 transition-all duration-300 hover:border-cyan-400/50"
          >
            <span className="relative z-10 text-[0.9rem] font-bold uppercase tracking-[0.25em] text-white transition-colors duration-300 group-hover:text-cyan-400">
              View All Work
            </span>
            <div className="absolute inset-0 z-0 translate-y-full bg-white/5 transition-transform duration-300 group-hover:translate-y-0" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
