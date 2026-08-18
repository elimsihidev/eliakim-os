import { useState } from "react";
import { motion } from "framer-motion";
import { projects } from "../../data/portfolio";

function ProjectVisual({
  image,
  title,
  color,
}: {
  image?: string;
  title: string;
  color: string;
}) {
  const [failed, setFailed] = useState(false);

  if (!image || failed) {
    return (
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at 78% 20%, ${color}70, transparent 34%), linear-gradient(145deg, #17191a 0%, #08090a 72%, ${color}28 100%)`,
        }}
      >
        <span className="absolute -right-8 -top-12 text-[12rem] font-light leading-none text-white/[0.06]">
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
      height={800}
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
    />
  );
}

export default function TabletProjects() {
  return (
    <section id="projects" className="min-h-full bg-[#08090a] px-10 py-12 text-white lg:px-14 lg:py-16">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center"
        >
          <h1 className="display-title text-[5rem] text-white lg:text-[6.5rem]">
            Projects
          </h1>
          <p className="mt-8 mx-auto max-w-2xl text-[1.3rem] leading-relaxed text-white/50">
            A selection of creative work across content, motion, design and digital storytelling.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-2 gap-x-8 gap-y-16">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group"
            >
              <a 
                href={project.link || "#"} 
                target={project.link ? "_blank" : undefined}
                rel={project.link ? "noopener noreferrer" : undefined}
                className="block"
              >
                <div className="relative aspect-[3/2] overflow-hidden rounded-[1.5rem] bg-[#141719]">
                  <ProjectVisual image={project.image} title={project.title} color={project.color} />
                </div>
                
                <div className="mt-8 px-2">
                  <div className="flex items-baseline gap-4">
                    <h2 
                      style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
                      className="text-[2.2rem] font-bold uppercase tracking-tight text-white lg:text-[2.8rem]"
                    >
                      {project.title}
                    </h2>
                    <span className="text-white/20 text-[2rem] font-light">—</span>
                    <p className="text-[1.4rem] text-white/40 font-medium">
                      {project.category}
                    </p>
                  </div>
                  
                  <div className="mt-5 flex items-center gap-3 text-[0.9rem] font-bold uppercase tracking-[0.25em] text-cyan-400">
                    <span>View Project</span>
                    <span className="text-[1.2rem]">↗</span>
                  </div>
                </div>
              </a>
            </motion.article>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 flex justify-center"
        >
          <a
            href="https://behance.net/elimsihi"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-center overflow-hidden rounded-full border border-white/10 px-16 py-8 transition-all duration-500 hover:border-cyan-400/40"
          >
            <span className="relative z-10 text-[1.2rem] font-bold uppercase tracking-[0.3em] text-white transition-colors duration-500 group-hover:text-cyan-400">
              View All Work
            </span>
            <div className="absolute inset-0 z-0 translate-y-full bg-white/[0.03] transition-transform duration-500 group-hover:translate-y-0" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
