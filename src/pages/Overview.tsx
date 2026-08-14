import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MapPin, GraduationCap, Briefcase, ArrowUpRight } from "lucide-react";

interface StravaStats {
  recent: {
    runCount: number;
    runDistanceKm: number;
    totalTimeHours: number;
    totalTimeMinutes: number;
    avgPace: string;
    totalElevation: number;
  };
  allTime: {
    runDistanceKm: number;
  };
}

export default function Overview() {
  const [stats, setStats] = useState<StravaStats | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("/api/strava-stats")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load");
        return res.json();
      })
      .then(setStats)
      .catch(() => setError(true));
  }, []);

  return (
    <div className="h-full w-full overflow-y-auto px-8 pt-16 pb-8 no-scrollbar lg:px-16 lg:pt-24 lg:pb-12">
      <div className="mx-auto flex min-h-full max-w-7xl items-start py-2">
        <div className="grid w-full grid-cols-1 gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:gap-14">
          
          {/* Left Side: About Me Narrative */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="space-y-6"
          >
            <h1 className="text-[34px] font-bold leading-none tracking-[-0.045em] text-white mb-6">
              About me
            </h1>
            
            <div className="space-y-5 text-[16px] font-normal leading-[1.55] tracking-[-0.012em] text-white/75 text-justify">
              <p>
                I'm Eliakim, a content creator and creative designer based in Dar es Salaam, Tanzania. I work across graphic design, motion design, content creation and digital storytelling, combining creativity with communication to turn ideas into visuals and experiences that people can actually connect with.
              </p>
              
              <p>
                My background in Public Relations and Advertising taught me to look beyond how something looks and think about <strong className="font-semibold text-white">why it exists, who it is speaking to, and what it needs people to feel or do.</strong> That perspective has shaped the way I approach creative work. Whether I'm designing a campaign, creating social content, animating a visual or building a brand story, I care about making the message as strong as the execution.
              </p>
              
              <p>
                I've always been drawn to the space where <strong className="font-semibold text-white">design and storytelling meet.</strong> A good visual can grab attention, but a good idea gives that visual a reason to exist. That's why I enjoy moving between different forms of creative work — from static design and motion graphics to social media and campaign development. Each one gives me another way to communicate an idea.
              </p>
              
              <p>
                A lot of my work has been shaped by working with brands, media and marketing teams, where creativity has to meet real objectives. I've learned that the best work isn't necessarily the loudest or most complicated. Sometimes it's the clearest idea, executed with enough intention that people understand it without needing to be told what they're looking at.
              </p>
              
              <p>
                I'm constantly experimenting, learning and pushing my creative range. I work primarily with tools like After Effects, Photoshop, Illustrator, DaVinci Resolve and other digital creative tools, but the tools are only part of the process. <strong className="font-semibold text-white">The real work starts with the idea.</strong> For me, design isn't just about making things look good. It's about <strong className="font-semibold text-white">making ideas visible, memorable and meaningful.</strong>
              </p>
            </div>
          </motion.div>

          {/* Right Side: Compact Stats & Info Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45, delay: 0.08, ease: "easeOut" }}
            className="lg:sticky lg:top-4"
          >
            <div className="rounded-[28px] border border-white/12 bg-white/[0.018] p-6 backdrop-blur-xl">
              <h2 className="text-[28px] font-bold leading-none tracking-[-0.045em] text-cyan-400 mb-8">
                More about me
              </h2>

              <div className="space-y-5">
                {/* Personal Details - Labels/Values White/Neutral */}
                <div className="space-y-5">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan-400/10 text-cyan-400">
                      <MapPin size={16} />
                    </div>
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-white/40">Born in</p>
                      <p className="text-[17px] font-semibold text-white">Arusha, Tanzania</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan-400/10 text-cyan-400">
                      <span className="text-base font-bold text-cyan-400">♑</span>
                    </div>
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-white/40">Zodiac</p>
                      <p className="text-[17px] font-semibold text-white">Capricorn</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan-400/10 text-cyan-400">
                      <GraduationCap size={16} />
                    </div>
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-white/40">Education</p>
                      <p className="text-[17px] font-semibold text-white">University of Dar es Salaam</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan-400/10 text-cyan-400">
                      <Briefcase size={16} />
                    </div>
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-white/40">Currently</p>
                      <p className="text-[17px] font-semibold text-white leading-tight">Assistant Graphic Designer</p>
                    </div>
                  </div>
                </div>

                <div className="h-px w-full bg-white/10" />

                {/* Strava Section - Values White */}
                <div className="space-y-3">
                  <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-white/40">Running • Last 4 Weeks</p>

                  <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
                    {error ? (
                      <div className="text-center py-1">
                        <p className="text-xs text-white/30 mb-2">Sync paused</p>
                        <button onClick={() => window.location.reload()} className="text-[10px] font-bold text-cyan-400 hover:text-cyan-300 uppercase tracking-wider">Retry</button>
                      </div>
                    ) : !stats ? (
                      <div className="flex items-center justify-center py-2">
                        <div className="h-4 w-4 animate-spin rounded-full border-2 border-cyan-400 border-t-transparent" />
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <div className="grid grid-cols-3 gap-2 text-center">
                          <div>
                            <p className="text-xl font-black text-white">{stats.recent.runCount}</p>
                            <p className="text-[9px] font-bold uppercase tracking-wider text-white/40">Runs</p>
                          </div>
                          <div className="border-x border-white/10">
                            <p className="text-xl font-black text-white">{stats.recent.runDistanceKm}</p>
                            <p className="text-[9px] font-bold uppercase tracking-wider text-white/40">KM</p>
                          </div>
                          <div>
                            <p className="text-xl font-black text-white">{stats.recent.totalTimeHours}h</p>
                            <p className="text-[9px] font-bold uppercase tracking-wider text-white/40">Time</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  <a 
                    href="https://www.strava.com/athletes" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 py-2.5 text-[10px] font-bold uppercase tracking-widest text-cyan-400/50 transition-colors hover:bg-cyan-400/5 hover:text-cyan-400"
                  >
                    View Strava Activity <ArrowUpRight size={12} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
   );
}
