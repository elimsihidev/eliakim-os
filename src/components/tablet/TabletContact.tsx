import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";

const scheduleHref =
  "mailto:elimsihi@gmail.com?subject=Schedule%20a%20creative%20consultation&body=Hi%20Eliakim%2C%0A%0AI%27d%20like%20to%20schedule%20a%20creative%20consultation.%20My%20preferred%20date%20and%20time%20are%3A%0A%0A";

const contactDetails = [
  { label: "Email", value: "elimsihi@gmail.com", icon: Mail },
  { label: "Phone", value: "+255 739 923 733", icon: Phone },
  { label: "Location", value: "Dar es Salaam, Tanzania", icon: MapPin },
];

export default function TabletContact() {
  return (
    <section className="min-h-full bg-[#08090a] px-10 py-10 text-white lg:px-14">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-[0.82fr_1.18fr] gap-14"
        >
          <div>
            <h1 className="display-title text-[3.2rem] text-white lg:text-[4.4rem]">
              Let's <span className="text-cyan-400">Talk</span>
            </h1>
            <p className="mt-8 max-w-sm text-[1.2rem] leading-relaxed text-white/50">
              Have a project, opportunity or idea in mind? I'm open to meaningful collaborations in content, design and visual storytelling.
            </p>

            <div className="mt-10 divide-y divide-white/10 border-y border-white/10">
              {contactDetails.map((detail) => {
                const Icon = detail.icon;
                return (
                  <div key={detail.label} className="flex items-center gap-4 py-5">
                    <Icon size={16} className="text-cyan-400" />
                    <div>
                      <p className="text-[0.58rem] font-medium uppercase tracking-[0.18em] text-white/35">
                        {detail.label}
                      </p>
                      <p className="mt-1 text-[0.92rem] font-medium text-white">
                        {detail.value}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <a
              href={scheduleHref}
              className="group mt-9 flex items-center justify-between border-b border-white/10 py-5 text-[0.68rem] font-medium uppercase tracking-[0.15em] transition-colors hover:border-cyan-400/50"
            >
              Schedule a meeting
              <ArrowRight size={17} className="text-cyan-400 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-[3rem] border border-white/10 bg-[#0c0d0e] p-12 shadow-2xl"
          >
            <div className="flex items-end justify-between gap-6 border-b border-white/10 pb-8">
              <div>
                <p className="text-[0.8rem] font-bold uppercase tracking-[0.2em] text-cyan-400">
                  Start a conversation
                </p>
                <h2 className="display-title mt-4 text-[2.5rem] tracking-tight text-white">
                  Send a message
                </h2>
              </div>
              <span className="text-right text-[0.7rem] font-bold uppercase tracking-[0.2em] text-white/30">
                I reply by email
              </span>
            </div>

            <form
              action="https://formspree.io/f/xpparwgo"
              method="POST"
              className="grid grid-cols-2 gap-x-6 gap-y-6 pt-7"
            >
              <Field label="Full Name *" name="name" placeholder="Your full name" required />
              <Field label="Email *" name="email" type="email" placeholder="your.email@example.com" required />
              <Field label="Company" name="company" placeholder="Your company name" />
              <Field label="Subject *" name="subject" placeholder="What can I help with?" required />
              <label className="col-span-2 space-y-2">
                <span className="text-[0.6rem] font-medium uppercase tracking-[0.16em] text-white/38">
                  Message *
                </span>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full resize-none border-b border-white/15 bg-transparent px-0 py-3 text-[0.9rem] text-white outline-none transition-colors placeholder:text-white/22 focus:border-cyan-400"
                />
              </label>
              <button
                type="submit"
                className="col-span-2 flex items-center justify-center gap-3 rounded-full bg-cyan-400 px-6 py-4 text-[0.68rem] font-medium uppercase tracking-[0.15em] text-[#061014] transition-transform hover:-translate-y-0.5 active:translate-y-0"
              >
                Send message <ArrowRight size={17} />
              </button>
            </form>
          </motion.div>
        </motion.div>

        <div className="mt-20 border-t border-white/10 pt-16 pb-8 text-center">
          <p className="text-[0.7rem] font-bold uppercase tracking-[0.25em] text-white/20">
            Find me online
          </p>
          <div className="mt-10 flex flex-row flex-wrap items-center justify-center gap-x-10 gap-y-4 px-6">
            {[
              { label: "LinkedIn", href: "https://linkedin.com/in/elimsihi" },
              { label: "Instagram", href: "https://instagram.com/elimsihi" },
              { label: "Behance", href: "https://behance.net/elimsihi" },
              { label: "TikTok", href: "https://tiktok.com/@elitalked" },
              { label: "X", href: "https://x.com/elimsihi" },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[0.85rem] font-bold uppercase tracking-[0.15em] text-white/40 transition-colors hover:text-cyan-400"
              >
                {social.label}
                <ArrowUpRight size={14} />
              </a>
            ))}
          </div>
          <p className="mt-16 text-[0.7rem] font-medium tracking-[0.1em] text-white/20">
            © {new Date().getFullYear()} Eliakim Msihi
          </p>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  placeholder,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  placeholder: string;
  type?: "text" | "email";
  required?: boolean;
}) {
  return (
    <label className="space-y-2">
      <span className="text-[0.6rem] font-medium uppercase tracking-[0.16em] text-white/38">
        {label}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="w-full border-b border-white/15 bg-transparent px-0 py-3 text-[0.9rem] text-white outline-none transition-colors placeholder:text-white/22 focus:border-cyan-400"
      />
    </label>
  );
}
