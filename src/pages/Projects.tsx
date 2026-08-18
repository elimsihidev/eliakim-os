import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "../data/portfolio";

export default function Projects() {
  return (
    <div className="relative h-full w-full overflow-hidden">

      {/* Scrollable project area */}
      <div className="absolute inset-0 overflow-y-auto px-16 pb-32 pt-16 no-scrollbar lg:px-24">

        <div className="mx-auto max-w-7xl">

          {/* Main portfolio statement */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
            }}
            className="mb-9 flex w-full justify-center text-center"
          >
            <h1 className="text-[14px] font-semibold leading-none tracking-[0.12em] text-cyan-400 lg:text-[16px]">
              CONTENT. DESIGN. MEDIA. MOTION. STRATEGY.
            </h1>
          </motion.div>

          {/* Projects */}
          <div className="grid grid-cols-1 gap-6 pb-20 md:grid-cols-2 lg:grid-cols-3">

            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.5,
                  ease: "easeOut",
                }}
                className="group relative aspect-[4/5] overflow-hidden rounded-[28px] border border-white/10 bg-neutral-950"
              >

                {/* Project background */}
                {project.image ? (
                  <>
                    {/* Actual project image */}
                    <img
                      src={project.image}
                      alt={`${project.title} project preview`}
                      width={800}
                      height={1000}
                      loading="lazy"
                      decoding="async"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Initial letter overlay on image */}
                    <div
                      aria-hidden="true"
                      className="absolute -right-8 -top-14 z-[1] text-[16rem] font-black leading-none transition-transform duration-700 group-hover:scale-105"
                      style={{
                        color: `${project.color}18`,
                      }}
                    >
                      {project.title.charAt(0)}
                    </div>
                  </>
                ) : (
                  <>
                    {/* Gradient background for projects without images */}
                    <div
                      className="absolute inset-0 transition-transform duration-700 group-hover:scale-110"
                      style={{
                        background: `
                          radial-gradient(
                            circle at 75% 18%,
                            ${project.color}66,
                            transparent 35%
                          ),
                          linear-gradient(
                            145deg,
                            #111111 0%,
                            #050505 60%,
                            ${project.color}22 100%
                          )
                        `,
                      }}
                    />

                    {/* Initial letter for projects without images */}
                    <div
                      aria-hidden="true"
                      className="absolute -right-8 -top-14 z-[1] text-[16rem] font-black leading-none transition-transform duration-700 group-hover:scale-105"
                      style={{
                        color: `${project.color}12`,
                      }}
                    >
                      {project.title.charAt(0)}
                    </div>
                  </>
                )}

                {/* Dark overlay */}
                <div className="absolute inset-0 z-[2] bg-gradient-to-t from-black via-black/50 to-transparent opacity-95" />

                {/* Project information */}
                <div className="absolute inset-x-0 bottom-0 z-[3] p-7">

                  {/* Category */}
                  <span
                    className="mb-3 block text-[11px] font-bold uppercase tracking-[0.2em]"
                    style={{
                      color: project.color,
                    }}
                  >
                    {project.category}
                  </span>

                  {/* Project title */}
                  <h2 className="mb-2 text-3xl font-bold leading-tight text-white">
                    {project.title}
                  </h2>

                  {/* Project type */}
                  <p className="mb-4 text-sm text-neutral-400">
                    {project.type}
                  </p>

                  {/* Description appears on hover */}
                  <p className="max-h-0 overflow-hidden text-sm leading-6 text-neutral-400 opacity-0 transition-all duration-300 group-hover:max-h-24 group-hover:opacity-100">
                    {project.description}
                  </p>

                  {/* View project */}
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 flex items-center gap-3 text-sm font-bold text-white"
                    >
                      <span
                        className="flex h-10 w-10 items-center justify-center rounded-full text-black"
                        style={{
                          backgroundColor: project.color,
                        }}
                      >
                        <ArrowUpRight size={19} />
                      </span>

                      <span>View project</span>
                    </a>
                  ) : (
                    <div className="mt-6 flex items-center gap-3 text-sm font-bold text-white">

                      <span
                        className="flex h-10 w-10 items-center justify-center rounded-full text-black"
                        style={{
                          backgroundColor: project.color,
                        }}
                      >
                        <ArrowUpRight size={19} />
                      </span>

                      <span>View project</span>

                    </div>
                  )}

                </div>
              </motion.article>
            ))}

          </div>
        </div>
      </div>
    </div>
  );
}