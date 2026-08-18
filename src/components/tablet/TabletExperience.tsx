import { motion } from "framer-motion";
import { experience } from "../../data/experience";

export default function TabletExperience() {
  return (
    <section className="min-h-full bg-[#08090a] px-10 py-10 pb-0 text-white lg:px-14 lg:pb-0">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full text-center mb-12"
        >
          <h1 className="display-title text-[3rem] text-white lg:text-[4rem]">
            Work <span className="text-cyan-400">History</span>
          </h1>
          <p className="mt-6 mx-auto max-w-xl text-[1.2rem] text-white/50">
            Creative roles, collaborations and projects that have shaped my practice as a designer and content creator.
          </p>
        </motion.div>

        <div className="mt-10 divide-y divide-white/10 border-y border-white/10">
          {experience.map((item, index) => {
            let role = item.role;
            if (item.company === "Mlimani Media") role = "Content Producer";
            if (item.company === "Serengeti Bytes") role = "Social Media Specialist";

            return (
              <motion.article
                key={`${item.company}-${item.period}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="grid grid-cols-[minmax(0,1fr)_minmax(12rem,0.5fr)] gap-8 py-10"
              >
                <div className="min-w-0">
                  <p className="text-[0.8rem] font-bold uppercase tracking-[0.2em] text-cyan-400">
                    {item.company}
                  </p>
                  <h2 className="display-title mt-4 text-[2.5rem] leading-[1.05] tracking-tight text-white lg:text-[3rem]">
                    {role}
                  </h2>
                  <p className="mt-6 max-w-2xl text-[1.1rem] leading-relaxed text-white/50">
                    {item.description}
                  </p>
                </div>

              <div className="flex items-start justify-end pt-1 text-right">
                <p className="text-[0.64rem] font-medium uppercase leading-5 tracking-[0.12em] text-white/38">
                  {item.period}
                </p>
              </div>
            </motion.article>
              );
          })}
        </div>


      </div>
    </section>
  );
}
