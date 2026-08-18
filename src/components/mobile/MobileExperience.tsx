import { motion } from "framer-motion";
import { experience } from "../../data/experience";

export default function MobileExperience() {
  return (
    <section id="experience" className="scroll-mt-5 bg-[#08090a] px-6 py-16 pb-0 text-white sm:px-8 sm:py-24 sm:pb-0">
      <div className="mx-auto max-w-3xl">
        <motion.h2
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="display-title text-center text-[2.2rem] text-white sm:text-[3rem]"
        >
          Work <span className="text-cyan-400">History</span>
        </motion.h2>

        <div className="mt-12 divide-y divide-white/10 border-y border-white/10">
          {experience.map((item, index) => (
            <motion.article
              key={`${item.company}-${item.period}`}
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.06, duration: 0.45 }}
              viewport={{ once: true, amount: 0.18 }}
              className="py-7 sm:py-8"
            >
              <div className="flex items-start justify-between gap-4">
                <p className="text-[0.68rem] font-medium uppercase tracking-[0.14em] text-white/55">{item.company}</p>
                <p className="text-right text-[0.65rem] leading-5 text-white/35">{item.period}</p>
              </div>
              <h3 className="mt-5 max-w-[22rem] text-[1.55rem] font-semibold leading-[1.08] tracking-[-0.035em] text-white/92 sm:text-[1.85rem]">{item.role}</h3>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-white/48">{item.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
