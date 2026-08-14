import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Calendar, ArrowRight } from "lucide-react";

const scheduleHref =
  "mailto:elimsihi@gmail.com?subject=Schedule%20a%20creative%20consultation&body=Hi%20Eliakim%2C%0A%0AI%27d%20like%20to%20schedule%20a%20creative%20consultation.%20My%20preferred%20date%20and%20time%20are%3A%0A%0A";

const contactDetails = [
  { label: "Email", value: "elimsihi@gmail.com", icon: Mail },
  { label: "Phone", value: "+255 739 923 733", icon: Phone },
  { label: "Location", value: "Dar es Salaam, Tanzania", icon: MapPin },
];

export default function Contact() {
  return (
    <div className="h-full w-full overflow-y-auto px-8 py-4 no-scrollbar lg:px-16">
      <div className="mx-auto flex min-h-full max-w-7xl items-center py-2">
        <div className="grid w-full grid-cols-1 gap-6 lg:grid-cols-[0.9fr_1.15fr] lg:gap-8">
          {/* Left card: Let's Talk */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="rounded-[32px] border border-white/10 bg-white/[0.045] p-7 backdrop-blur-xl lg:p-8"
          >
            <h1 className="mb-4 text-5xl font-black leading-none text-white lg:text-6xl">
              LET'S <span className="text-cyan-400">TALK!</span>
            </h1>
            <p className="mb-7 max-w-xl text-base leading-relaxed text-neutral-400 lg:text-[17px]">
              Have a project, opportunity, or idea in mind? I’m open to meaningful collaborations in motion design, content creation, and visual storytelling.
            </p>

            <div className="space-y-3">
              {contactDetails.map(({ label, value, icon: Icon }) => (
                <div
                  key={label}
                  className="group flex items-center gap-4 rounded-2xl border border-white/[0.07] bg-white/[0.045] p-4 transition-colors hover:border-cyan-400/35 hover:bg-white/[0.07]"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400 transition-colors group-hover:bg-cyan-400 group-hover:text-black">
                    <Icon size={20} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-neutral-500">
                      {label}
                    </p>
                    <p className="truncate text-[15px] font-medium text-white lg:text-base">
                      {value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-7 border-t border-white/[0.08] pt-6">
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.16em] text-neutral-500">
                Quick action
              </p>
              <a
                href={scheduleHref}
                className="group flex items-center gap-4 rounded-2xl border border-white/[0.07] bg-white/[0.045] p-4 transition-colors hover:border-cyan-400/35 hover:bg-white/[0.07]"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-white transition-colors group-hover:bg-white group-hover:text-black">
                  <Calendar size={20} />
                </div>
                <div>
                  <p className="text-base font-bold text-white">Schedule a Meeting</p>
                  <p className="text-xs text-neutral-500">Request a creative consultation by email</p>
                </div>
                <ArrowRight size={18} className="ml-auto text-neutral-500 transition-transform group-hover:translate-x-1 group-hover:text-cyan-400" />
              </a>
            </div>
          </motion.div>

          {/* Right card: Message form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="rounded-[32px] border border-white/10 bg-white/[0.045] p-7 backdrop-blur-xl lg:p-8"
          >
            <h2 className="mb-7 text-3xl font-black text-white lg:text-4xl">
              Send a <span className="text-cyan-400">Message</span>
            </h2>

            <form action="https://formspree.io/f/xpparwgo" method="POST" className="space-y-4">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="space-y-1.5">
                  <label htmlFor="contact-name" className="text-[10px] font-bold uppercase tracking-[0.16em] text-neutral-500">Full Name *</label>
                  <input id="contact-name" type="text" name="name" required placeholder="Your full name" className="w-full rounded-xl border border-white/10 bg-white/[0.045] px-4 py-3.5 text-sm text-white outline-none placeholder:text-neutral-600 transition-colors focus:border-cyan-400/50" />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="contact-email" className="text-[10px] font-bold uppercase tracking-[0.16em] text-neutral-500">Email Address *</label>
                  <input id="contact-email" type="email" name="email" required placeholder="your.email@example.com" className="w-full rounded-xl border border-white/10 bg-white/[0.045] px-4 py-3.5 text-sm text-white outline-none placeholder:text-neutral-600 transition-colors focus:border-cyan-400/50" />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="contact-company" className="text-[10px] font-bold uppercase tracking-[0.16em] text-neutral-500">Company</label>
                <input id="contact-company" type="text" name="company" placeholder="Your company name" className="w-full rounded-xl border border-white/10 bg-white/[0.045] px-4 py-3.5 text-sm text-white outline-none placeholder:text-neutral-600 transition-colors focus:border-cyan-400/50" />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="contact-subject" className="text-[10px] font-bold uppercase tracking-[0.16em] text-neutral-500">Subject *</label>
                <input id="contact-subject" type="text" name="subject" required placeholder="What's this about?" className="w-full rounded-xl border border-white/10 bg-white/[0.045] px-4 py-3.5 text-sm text-white outline-none placeholder:text-neutral-600 transition-colors focus:border-cyan-400/50" />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="contact-message" className="text-[10px] font-bold uppercase tracking-[0.16em] text-neutral-500">Message *</label>
                <textarea id="contact-message" name="message" required rows={4} placeholder="Tell me about your project or opportunity..." className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.045] px-4 py-3.5 text-sm leading-relaxed text-white outline-none placeholder:text-neutral-600 transition-colors focus:border-cyan-400/50" />
              </div>

              <button type="submit" className="group flex w-full items-center justify-center gap-3 rounded-xl bg-cyan-400 py-4 text-base font-black text-black transition-all hover:bg-cyan-300 hover:shadow-[0_0_32px_rgba(34,211,238,0.25)]">
                Send Message
                <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
