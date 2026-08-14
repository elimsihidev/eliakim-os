import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Calendar, ArrowRight } from "lucide-react";
import MobileSocials from "./MobileSocials";

const scheduleHref =
  "mailto:elimsihi@gmail.com?subject=Schedule%20a%20creative%20consultation&body=Hi%20Eliakim%2C%0A%0AI%27d%20like%20to%20schedule%20a%20creative%20consultation.%20My%20preferred%20date%20and%20time%20are%3A%0A%0A";

export default function MobileContact() {
  return (
    <section id="contact" className="px-6 py-24 bg-[#050505]">
      <div className="max-w-2xl mx-auto space-y-12">
        
        {/* Intro */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-black text-white mb-6"
          >
            LET'S <span className="text-cyan-400">TALK!</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-neutral-400 text-lg leading-relaxed"
          >
            Have a project in mind or just want to say hi? 
            I'm always open to new opportunities and collaborations.
          </motion.p>
        </div>

        {/* Info Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/5 border border-white/10 rounded-[40px] p-8 backdrop-blur-xl"
        >
          <div className="space-y-4">
            <div className="flex items-center gap-5 p-4 bg-white/5 border border-white/5 rounded-2xl">
              <div className="w-10 h-10 rounded-xl bg-cyan-400/10 flex items-center justify-center text-cyan-400">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest">Email</p>
                <p className="text-base text-white font-medium">elimsihi@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-5 p-4 bg-white/5 border border-white/5 rounded-2xl">
              <div className="w-10 h-10 rounded-xl bg-cyan-400/10 flex items-center justify-center text-cyan-400">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest">Phone</p>
                <p className="text-base text-white font-medium">+255 739 923 733</p>
              </div>
            </div>

            <div className="flex items-center gap-5 p-4 bg-white/5 border border-white/5 rounded-2xl">
              <div className="w-10 h-10 rounded-xl bg-cyan-400/10 flex items-center justify-center text-cyan-400">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest">Location</p>
                <p className="text-base text-white font-medium">Dar es Salaam, Tanzania</p>
              </div>
            </div>

            <a href={scheduleHref} className="w-full flex items-center gap-5 p-4 bg-white/5 border border-white/5 rounded-2xl text-left mt-4 transition-colors hover:border-cyan-400/35 hover:bg-white/[0.07]">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white">
                <Calendar size={20} />
              </div>
              <div>
                <p className="text-base text-white font-bold">Schedule a Meeting</p>
                <p className="text-xs text-neutral-500">Request a creative consultation by email</p>
              </div>
              <ArrowRight size={18} className="ml-auto text-neutral-500" />
            </a>
          </div>
        </motion.div>

        {/* Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
          className="bg-white/5 border border-white/10 rounded-[40px] p-8 backdrop-blur-xl"
        >
          <h3 className="text-2xl font-black text-white mb-8">Send a Message</h3>
          
          <form action="https://formspree.io/f/xpparwgo" method="POST" className="space-y-5">
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest">Full Name *</label>
              <input 
                type="text" 
                name="name"
                required
                placeholder="Your full name"
                className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-neutral-600 focus:outline-none focus:border-cyan-400/50 transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest">Email Address *</label>
              <input 
                type="email" 
                name="email"
                required
                placeholder="your.email@example.com"
                className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-neutral-600 focus:outline-none focus:border-cyan-400/50 transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest">Company</label>
              <input 
                type="text" 
                name="company"
                placeholder="Your company name"
                className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-neutral-600 focus:outline-none focus:border-cyan-400/50 transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest">Subject *</label>
              <input 
                type="text" 
                name="subject"
                required
                placeholder="What's this about?"
                className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-neutral-600 focus:outline-none focus:border-cyan-400/50 transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest">Message *</label>
              <textarea 
                name="message"
                required
                rows={4}
                placeholder="Tell me about your project..."
                className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-neutral-600 focus:outline-none focus:border-cyan-400/50 transition-colors resize-none"
              />
            </div>

            <button 
              type="submit"
              className="w-full py-5 bg-cyan-400 text-black rounded-xl font-black text-lg flex items-center justify-center gap-3 active:scale-95 transition-all"
            >
              Send Message
              <ArrowRight size={20} />
            </button>
          </form>
        </motion.div>

        <div className="text-center pt-8">
          <p className="text-neutral-500 uppercase tracking-[0.2em] text-[10px] font-bold mb-6">
            Find me on
          </p>
          <MobileSocials />
          <p className="mt-16 text-neutral-600 text-xs font-medium">
            © {new Date().getFullYear()} Eliakim Msihi. Built with passion.
          </p>
        </div>
      </div>
    </section>
  );
}
