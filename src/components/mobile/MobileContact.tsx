import { motion } from "framer-motion";
import { Calendar, Send, ArrowUpRight } from "lucide-react";

export default function MobileContact() {
  return (
    <section id="contact" className="scroll-mt-5 bg-[#08090a] px-6 py-16 text-white sm:px-8 sm:py-24">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Title */}
          <h2 className="display-title text-center text-[2.8rem] tracking-[-0.02em] sm:text-[3.6rem]">
            Let's <span className="text-cyan-400">Talk</span>
          </h2>
          
          {/* Subtitle */}
          <p className="mt-8 max-w-md mx-auto text-center text-[0.95rem] leading-relaxed text-white/40">
            Have a project, opportunity or idea in mind? Tell me what you are building and I'll get back to you.
          </p>
        </motion.div>

        {/* Contact Info Grid */}
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6">
            <p className="text-[0.65rem] font-bold uppercase tracking-[0.15em] text-white/20">Email</p>
            <p className="mt-2 font-medium text-white/80">elimsihi@gmail.com</p>
          </div>
          <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6">
            <p className="text-[0.65rem] font-bold uppercase tracking-[0.15em] text-white/20">Phone</p>
            <p className="mt-2 font-medium text-white/80">+255 739 923 733</p>
          </div>
        </div>

        {/* Quick Action */}
        <div className="mt-4 flex items-center justify-between rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.02] p-6">
          <div>
            <p className="text-[0.65rem] font-bold uppercase tracking-[0.15em] text-cyan-400/60">Quick Action</p>
            <p className="mt-2 font-bold text-white">Schedule a meeting</p>
          </div>
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 text-cyan-400">
            <Calendar size={20} strokeWidth={1.5} />
          </div>
        </div>

        {/* Message Form Card */}
        <div className="mt-10 rounded-[2rem] border border-white/5 bg-[#0c0d0e] p-8">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-xl font-bold text-white">Send a message</h3>
              <p className="mt-1 text-sm text-white/30">I usually reply within a few working days.</p>
            </div>
            <Send size={20} className="text-cyan-400/60" strokeWidth={1.5} />
          </div>

          <form action="https://formspree.io/f/xvgzlowq" method="POST" className="mt-10 space-y-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label className="text-[0.65rem] font-bold uppercase tracking-[0.15em] text-white/20">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your full name"
                  className="mt-2 w-full rounded-xl border border-white/5 bg-white/[0.02] px-5 py-4 text-sm text-white placeholder:text-white/10 focus:border-cyan-400/50 focus:outline-none"
                />
              </div>
              <div>
                <label className="text-[0.65rem] font-bold uppercase tracking-[0.15em] text-white/20">Email *</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="you@example.com"
                  className="mt-2 w-full rounded-xl border border-white/5 bg-white/[0.02] px-5 py-4 text-sm text-white placeholder:text-white/10 focus:border-cyan-400/50 focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label className="text-[0.65rem] font-bold uppercase tracking-[0.15em] text-white/20">Company</label>
                <input
                  type="text"
                  name="company"
                  placeholder="Your company"
                  className="mt-2 w-full rounded-xl border border-white/5 bg-white/[0.02] px-5 py-4 text-sm text-white placeholder:text-white/10 focus:border-cyan-400/50 focus:outline-none"
                />
              </div>
              <div>
                <label className="text-[0.65rem] font-bold uppercase tracking-[0.15em] text-white/20">Subject *</label>
                <input
                  type="text"
                  name="subject"
                  required
                  placeholder="What can I help with?"
                  className="mt-2 w-full rounded-xl border border-white/5 bg-white/[0.02] px-5 py-4 text-sm text-white placeholder:text-white/10 focus:border-cyan-400/50 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="text-[0.65rem] font-bold uppercase tracking-[0.15em] text-white/20">Message *</label>
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Tell me a little about the project..."
                className="mt-2 w-full resize-none rounded-xl border border-white/5 bg-white/[0.02] px-5 py-4 text-sm text-white placeholder:text-white/10 focus:border-cyan-400/50 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-400 py-4 text-sm font-bold text-[#08090a] transition-transform hover:scale-[1.01] active:scale-[0.99]"
            >
              Send message <ArrowUpRight size={18} strokeWidth={2.5} />
            </button>
          </form>
        </div>

        {/* Footer */}
        <div className="mt-24 border-t border-white/5 pt-12 pb-6 text-center">
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.2em] text-white/20">Find me online</p>
          
          <div className="mt-8 flex flex-row flex-wrap justify-center gap-x-6 gap-y-4 px-4 sm:gap-x-8">
            {[
              { label: "LinkedIn", href: "https://linkedin.com/in/elimsihi" },
              { label: "Instagram", href: "https://instagram.com/elimsihi" },
              { label: "Behance", href: "https://behance.net/elimsihi" },
              { label: "TikTok", href: "https://tiktok.com/@elitalked" },
              { label: "X", href: "https://x.com/elimsihi" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[0.75rem] font-bold text-white/40 transition-colors hover:text-cyan-400 sm:text-[0.8rem]"
              >
                {link.label}
              </a>
            ))}
          </div>

          <p className="mt-12 text-[0.65rem] font-medium tracking-[0.05em] text-white/20">
            © 2026 Eliakim Msihi
          </p>
        </div>
      </div>
    </section>
  );
}
