import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { experience } from "../data/experience";

interface ExperienceProps {
  setPage?: (page: number) => void;
}

export default function Experience({ setPage }: ExperienceProps) {
  return (
    <section className="relative h-full w-full overflow-hidden text-white">
      <div className="absolute inset-0 flex flex-col items-center">
        <div
          className="absolute left-1/2 top-17.5 -translate-x-1/2 grid w-[calc(100%-100px)] max-w-362.5 grid-cols-3 grid-rows-2 gap-x-7 gap-y-7 px-0"
          style={{
            height: "calc(100% - 180px)",
            minHeight: "430px",
          }}
        >
          {experience.slice(0, 6).map((item, index) => (
            <motion.div
              key={`${item.company}-${index}`}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.08, ease: "easeOut" }}
              whileHover={{ y: -4 }}
              className="group relative flex h-full min-h-47.5 flex-col items-center justify-center overflow-hidden rounded-2xl border border-white/[0.14] bg-linear-to-br from-white/16 via-white/10 to-white/6 shadow-[inset_0_1px_0_rgba(255,255,255,0.10),0_12px_40px_rgba(0,0,0,0.18)] backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/50 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.14),0_15px_45px_rgba(0,0,0,0.25),0_0_30px_rgba(0,210,255,0.08)]"
            >
              <div className="pointer-events-none absolute top-[-35%] left-[15%] h-[65%] w-[70%] rounded-full bg-white/[0.07] blur-3xl transition-all duration-500 group-hover:bg-cyan-300/8" />

              <div className="pointer-events-none absolute bottom-[-30%] left-[20%] h-[55%] w-[60%] rounded-full bg-cyan-400/2.5 blur-3xl transition-all duration-500 group-hover:bg-cyan-400/[0.07]" />

              <div className="pointer-events-none absolute inset-px rounded-[15px] border border-white/[0.035] bg-linear-to-b from-white/2.5 to-transparent" />

              {/* COMPANY */}
              <div className="absolute top-6.5 left-0 right-0 z-10 px-5 text-center">
                <p className="text-[14px] font-bold uppercase tracking-widest text-white/70 transition-colors duration-300 group-hover:text-white">
                  {item.company}
                </p>
              </div>

              {/* ROLE + DESCRIPTION */}
              <div className="relative z-10 flex w-full flex-1 flex-col items-center justify-center gap-3 px-8 text-center">
                <h3 className="max-w-[92%] text-[26px] font-bold leading-[1.2] tracking-tight text-white transition-all duration-300 group-hover:text-white">
                  {item.role}
                </h3>

                <p className="max-w-[90%] text-[13px] font-medium leading-[1.55] text-white/55 transition-colors duration-300 group-hover:text-white/70">
                  {item.description}
                </p>
              </div>

              {/* PERIOD */}
              <div className="absolute bottom-6.5 left-0 right-0 z-10 text-center">
                <p className="text-[11px] font-semibold tracking-[-0.01em] text-white/45 transition-colors duration-300 group-hover:text-cyan-300/75">
                  {item.period}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* LET'S WORK TOGETHER */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.65, ease: "easeOut" }}
          className="absolute bottom-6.25 left-0 right-0 z-30 flex h-12 items-center justify-center"
        >
          <button
            type="button"
            onClick={() => setPage?.(4)}
            className="group flex items-center gap-2 text-[14px] font-bold text-cyan-400 transition-all duration-300 hover:text-cyan-300"
          >
            <span>Let's work together</span>
            <ArrowUpRight
              size={16}
              strokeWidth={2}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </button>
        </motion.div>
      </div>
    </section>
  );
}