import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Briefcase,
  Clapperboard,
  GraduationCap,
  MapPin,
  Mountain,
  Timer,
  Palette,
  Megaphone,
  BookOpen,
  Quote,
} from "lucide-react";

interface StravaStats {
  athlete: { id: number };
  recent: {
    runCount: number;
    runDistanceKm: number;
    totalTimeHours: number;
    totalTimeMinutes: number;
    avgPace: string;
    totalElevation: number;
  };
  allTime: { runDistanceKm: number };
}

const skills = [
  { 
    title: "Graphic Design", 
    desc1: "Bold visual identities and marketing creative that make a brand instantly recognizable.",
    desc2: "From logos to social assets, every visual is built to grab attention and hold it.",
    icon: Palette 
  },
  { 
    title: "Motion Graphics", 
    desc1: "Animation and motion assets that give static ideas movement and momentum.",
    desc2: "Reels, explainers, and campaign visuals designed to be watched, not just seen.",
    icon: Clapperboard 
  },
  { 
    title: "Storytelling", 
    desc1: "Narratives shaped around what a brand needs people to feel — not just what it wants to say.",
    desc2: "The thinking layer beneath every visual, campaign, and piece of content.",
    icon: Quote 
  },
  { 
    title: "Social Media", 
    desc1: "Content creation and campaign execution built for how people actually scroll and engage.",
    desc2: "Turning a feed into a conversation, with strategy behind every post.",
    icon: Megaphone 
  },
  { 
    title: "Content Strategy", 
    desc1: "Research and planning that connects a brand's message to the right audience, at the right moment.",
    desc2: "The roadmap that keeps content consistent and campaigns on-purpose.",
    icon: BookOpen 
  },
];

export default function TabletOverview() {
  const [stats, setStats] = useState<StravaStats | null>(null);

  useEffect(() => {
    fetch("/api/strava-stats")
      .then((response) => {
        if (!response.ok) throw new Error("Unable to load Strava stats");
        return response.json() as Promise<StravaStats>;
      })
      .then(setStats)
      .catch(() => setStats(null));
  }, []);

  return (
    <section className="bg-[#08090a] px-10 py-16 text-white lg:px-14 lg:py-20">
      <div className="mx-auto max-w-5xl">
        {/* Transition CTA */}
        <div className="mb-32 flex flex-col items-center justify-center text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="display-title max-w-none text-[3rem] leading-[1.05]"
          >
            <span className="whitespace-nowrap text-white">Does your brand receive</span><br />
            <span className="whitespace-nowrap text-white">the attention it deserves?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-8 max-w-xl text-[1.2rem] leading-relaxed text-white/50"
          >
            I'm a creative designer with over 3+ years of experience helping brands communicate through content, design, motion and digital strategy.
          </motion.p>
          <motion.a
            href="#contact"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ 
              scale: 1.05, 
              backgroundColor: "rgba(34, 211, 238, 0.1)",
              borderColor: "rgba(34, 211, 238, 0.5)",
              boxShadow: "0 0 30px rgba(34, 211, 238, 0.2)"
            }}
            whileTap={{ scale: 0.95 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-12 rounded-full border border-cyan-400/30 bg-cyan-400/5 px-10 py-5 text-[0.9rem] font-bold uppercase tracking-[0.2em] text-cyan-400 backdrop-blur-sm transition-all"
          >
            Let's Talk
          </motion.a>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="display-title text-center text-[3.8rem] text-white lg:text-[4.6rem]"
        >
          About <span className="text-cyan-400">Eliakim</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 rounded-[3rem] border border-white/10 bg-[#0c0d0e] p-12 shadow-2xl lg:p-16"
        >
          <div className="section-copy text-justify text-[1.3rem] leading-relaxed text-white/80 space-y-6">
            <p>
              I'm <span className="font-bold text-white">Eliakim</span>, a <span className="font-bold text-white">Creative Multimedia Specialist</span> driven by a passion for turning ideas into visuals people actually feel and act on. Based in Dar es Salaam, I bring a background in Public Relations and Advertising into every frame — designing content, motion, and campaigns that don't just look good, but say something and land with the right people.
            </p>
            <p>
              I move between static design, motion graphics, and campaign development because the best creative work isn't the loudest or most complicated, it's the clearest idea, executed with enough intention that people get it without being told what they're looking at.
            </p>
          </div>

          <div className="mt-16">
            <p className="text-[0.8rem] font-bold uppercase tracking-[0.3em] text-white/30">Tools</p>
            <div className="mt-6 flex flex-wrap gap-5">
              {[
                { name: "Photoshop", color: "text-[#31A8FF]" },
                { name: "Illustrator", color: "text-[#FF9A00]" },
                { name: "After Effects", color: "text-[#9999FF]" },
                { name: "Premiere Pro", color: "text-[#9999FF]" },
                { name: "DaVinci Resolve", color: "text-[#FFD700]" }
              ].map((tool) => (
                <div 
                  key={tool.name}
                  className="flex h-20 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.02] px-8 text-[1.1rem] font-bold transition-all hover:border-white/20 hover:bg-white/[0.05]"
                >
                  <span className={tool.color}>{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* More about me Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 overflow-hidden rounded-[3rem] border border-white/10 bg-[#0c0d0e] p-12 shadow-2xl lg:p-16"
        >
          <h3 className="display-title text-center text-[2.5rem] text-cyan-400">More about me</h3>

          <div className="mt-16 grid grid-cols-2 gap-12">
            {/* Born In */}
            <div className="flex items-center gap-6">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-400">
                <MapPin size={28} strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-[0.8rem] font-bold uppercase tracking-[0.2em] text-white/30">Born in</p>
                <p className="mt-1 text-[1.5rem] font-bold text-white">Arusha, Tanzania</p>
              </div>
            </div>

            {/* Zodiac */}
            <div className="flex items-center gap-6">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#1a1525] text-[#a855f7] border border-[#a855f7]/20">
                <span className="text-3xl font-bold">♑</span>
              </div>
              <div>
                <p className="text-[0.8rem] font-bold uppercase tracking-[0.2em] text-white/30">Zodiac</p>
                <p className="mt-1 text-[1.5rem] font-bold text-white">Capricorn</p>
              </div>
            </div>

            {/* Education */}
            <div className="flex items-center gap-6">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-400">
                <GraduationCap size={28} strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-[0.8rem] font-bold uppercase tracking-[0.2em] text-white/30">Education</p>
                <p className="mt-1 text-[1.5rem] font-bold text-white">University of Dar es Salaam</p>
              </div>
            </div>

            {/* Currently */}
            <div className="flex items-center gap-6">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-400">
                <Briefcase size={28} strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-[0.8rem] font-bold uppercase tracking-[0.2em] text-white/30">Currently</p>
                <p className="mt-1 text-[1.5rem] font-bold text-white">Assistant Graphic Designer</p>
              </div>
            </div>
          </div>

          {/* Strava Section */}
          <div className="mt-20 border-t border-white/5 pt-16">
            <p className="text-center text-[0.8rem] font-bold uppercase tracking-[0.3em] text-white/30">
              Running • Last 4 weeks
            </p>

            <div className="mt-10 overflow-hidden rounded-[2.5rem] border border-white/5 bg-white/[0.01]">
              <div className="grid grid-cols-3 border-b border-white/5">
                <div className="flex flex-col items-center justify-center py-10 text-center">
                  <p className="text-4xl font-bold text-white">{stats?.recent.runCount || "12"}</p>
                  <p className="mt-2 text-[0.8rem] font-bold uppercase tracking-[0.2em] text-white/20">Runs</p>
                </div>
                <div className="flex flex-col items-center justify-center border-x border-white/5 py-10 text-center">
                  <p className="text-4xl font-bold text-white">{stats?.recent.runDistanceKm.toFixed(1) || "106.5"}</p>
                  <p className="mt-2 text-[0.8rem] font-bold uppercase tracking-[0.2em] text-white/20">KM</p>
                </div>
                <div className="flex flex-col items-center justify-center py-10 text-center">
                  <p className="text-4xl font-bold text-white">
                    {stats ? `${stats.recent.totalTimeHours}h ${stats.recent.totalTimeMinutes}m` : "9h 23m"}
                  </p>
                  <p className="mt-2 text-[0.8rem] font-bold uppercase tracking-[0.2em] text-white/20">Time</p>
                </div>
              </div>
              <div className="grid grid-cols-2">
                <div className="flex items-center justify-center gap-5 border-r border-white/5 py-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-400/5 text-cyan-400/60 border border-cyan-400/10">
                    <Timer size={20} />
                  </div>
                  <div className="text-left">
                    <p className="text-2xl font-bold text-white">{stats?.recent.avgPace || "5:17"} <span className="text-[0.8rem] font-normal text-white/30">/km</span></p>
                    <p className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-white/20">Avg Pace</p>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-5 py-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-400/5 text-cyan-400/60 border border-cyan-400/10">
                    <Mountain size={20} />
                  </div>
                  <div className="text-left">
                    <p className="text-2xl font-bold text-white">{stats?.recent.totalElevation.toLocaleString() || "1,301"} <span className="text-[0.8rem] font-normal text-white/30">m</span></p>
                    <p className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-white/20">Elevation</p>
                  </div>
                </div>
              </div>
              <a
                href={stats?.athlete?.id ? `https://www.strava.com/athletes/${stats.athlete.id}` : "https://www.strava.com"}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center border-t border-white/5 py-6 text-[0.8rem] font-bold tracking-[0.2em] text-cyan-400 transition-colors hover:bg-cyan-400/5"
              >
                VIEW ACTIVITY ON STRAVA <ArrowUpRight size={16} className="ml-2" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* What I do Section */}
        <div className="mt-32">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="display-title text-center text-[4.5rem] leading-[1.1]"
          >
            <span className="text-white">Want Your Ideas</span><br />
            <span className="text-cyan-400">Made Visible?</span>
          </motion.h2>

          <div className="mt-20 grid grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <motion.article
                key={skill.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative flex flex-col justify-between rounded-[3rem] border border-white/5 bg-[#0c0d0e] p-10 min-h-[360px]"
              >
                <div className="text-[1.15rem] leading-relaxed text-white/50 text-justify space-y-6">
                  <p>{skill.desc1}</p>
                  <p>{skill.desc2}</p>
                </div>
                
                <div className="mt-16 flex items-end justify-between">
                  <h3 className="text-[2.2rem] font-bold tracking-tight text-white leading-none">
                    {skill.title}
                  </h3>
                  
                  <a 
                    href="#contact"
                    className="flex h-20 w-20 items-center justify-center rounded-full bg-cyan-400 text-black transition-transform hover:scale-110 active:scale-95"
                  >
                    <ArrowUpRight size={32} strokeWidth={2.5} />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
