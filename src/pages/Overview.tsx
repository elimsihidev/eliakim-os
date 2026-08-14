import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MapPin, GraduationCap, Briefcase } from "lucide-react";

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
    <section className="relative h-full w-full overflow-hidden text-white">
      <div className="absolute inset-0">
        <div className="relative h-full w-full">

          {/* ABOUT ME */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="absolute left-[6.8%] top-[16%] w-[60%] max-w-255"
          >
            {/* TITLE */}
            <h1 className="mb-6 text-[34px] font-bold leading-none tracking-[-0.045em] text-white">
              About me
            </h1>

            {/* DESCRIPTION */}
            <div className="w-full text-justify text-[16px] font-normal leading-[1.55] tracking-[-0.012em] text-white/75">
              <div className="flex flex-col gap-5">

                {/* PARAGRAPH 1 */}
                <p>
                  I'm Eliakim, a content creator and creative designer based
                  in Dar es Salaam, Tanzania. I work across graphic design,
                  motion design, content creation and digital storytelling,
                  combining creativity with communication to turn ideas into
                  visuals and experiences that people can actually connect
                  with.
                </p>

                {/* PARAGRAPH 2 */}
                <p>
                  My background in Public Relations and Advertising taught me
                  to look beyond how something looks and think about{" "}
                  <strong className="font-semibold text-white">
                    why it exists, who it is speaking to, and what it needs
                    people to feel or do.
                  </strong>{" "}
                  That perspective has shaped the way I approach creative work.
                  Whether I'm designing a campaign, creating social content,
                  animating a visual or building a brand story, I care about
                  making the message as strong as the execution.
                </p>

                {/* PARAGRAPH 3 */}
                <p>
                  I've always been drawn to the space where{" "}
                  <strong className="font-semibold text-white">
                    design and storytelling meet.
                  </strong>{" "}
                  A good visual can grab attention, but a good idea gives that
                  visual a reason to exist. That's why I enjoy moving between
                  different forms of creative work — from static design and
                  motion graphics to social media and campaign development.
                  Each one gives me another way to communicate an idea.
                </p>

                {/* PARAGRAPH 4 */}
                <p>
                  A lot of my work has been shaped by working with brands,
                  media and marketing teams, where creativity has to meet real
                  objectives. I've learned that the best work isn't necessarily
                  the loudest or most complicated. Sometimes it's the clearest
                  idea, executed with enough intention that people understand
                  it without needing to be told what they're looking at.
                </p>

                {/* PARAGRAPH 5 */}
                <p>
                  I'm constantly experimenting, learning and pushing my
                  creative range. I work primarily with tools like After
                  Effects, Photoshop, Illustrator, DaVinci Resolve and other
                  digital creative tools, but the tools are only part of the
                  process.{" "}
                  <strong className="font-semibold text-white">
                    The real work starts with the idea.
                  </strong>{" "}
                  For me, design isn't just about making things look good.
                  It's about{" "}
                  <strong className="font-semibold text-white">
                    making ideas visible, memorable and meaningful.
                  </strong>
                </p>

              </div>
            </div>
          </motion.div>

          {/* RIGHT — MORE ABOUT ME */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.45,
              delay: 0.08,
              ease: "easeOut",
            }}
            className="absolute right-[6.5%] top-[16%] w-[420px]"
          >
            <div className="relative w-full overflow-hidden rounded-[28px] border border-white/12 bg-white/[0.018] px-6 py-6 backdrop-blur-xl">

              <div className="pointer-events-none absolute -right-25 -top-20 h-60 w-60 rounded-full bg-cyan-400/2.5 blur-[100px]" />

              <div className="relative z-10">

                {/* TITLE */}
                <h2 className="text-[34px] font-bold leading-none tracking-[-0.045em] text-cyan-400">
                  More about me
                </h2>

                {/* BORN IN */}
                <div className="mt-8 flex items-start gap-3">
                  <MapPin
                    size={18}
                    className="mt-1 shrink-0 text-cyan-400"
                  />

                  <div>
                    <p className="text-[12px] uppercase tracking-[0.11em] text-white/35">
                      Born in
                    </p>

                    <p className="mt-1 text-[19px] font-semibold text-white/90">
                      Arusha, Tanzania
                    </p>
                  </div>
                </div>

                {/* ZODIAC */}
                <div className="mt-6 flex items-start gap-3">
                  <span className="mt-0.5 flex h-[18px] w-[18px] shrink-0 items-center justify-center text-[18px] leading-none text-cyan-400">
                    ♑
                  </span>

                  <div>
                    <p className="text-[12px] uppercase tracking-[0.11em] text-white/35">
                      Zodiac
                    </p>

                    <p className="mt-1 text-[19px] font-semibold text-white/90">
                      Capricorn
                    </p>
                  </div>
                </div>

                {/* EDUCATION */}
                <div className="mt-6 flex items-start gap-3">
                  <GraduationCap
                    size={18}
                    className="mt-1 shrink-0 text-cyan-400"
                  />

                  <div>
                    <p className="text-[12px] uppercase tracking-[0.11em] text-white/35">
                      Education
                    </p>

                    <p className="mt-1 text-[19px] font-semibold text-white/90">
                      University of Dar es Salaam
                    </p>
                  </div>
                </div>

                {/* CURRENTLY */}
                <div className="mt-6 flex items-start gap-3">
                  <Briefcase
                    size={18}
                    className="mt-1 shrink-0 text-cyan-400"
                  />

                  <div>
                    <p className="text-[12px] uppercase tracking-[0.11em] text-white/35">
                      Currently
                    </p>

                    <p className="mt-1 text-[19px] font-semibold leading-[1.3] text-white/90">
                      Assistant graphic designer
                    </p>
                  </div>
                </div>

                {/* DIVIDER */}
                <div className="mt-6 h-px w-full bg-white/10" />

                {/* STRAVA */}
                <div className="mt-5">
                  <p className="text-[12px] uppercase tracking-[0.11em] text-white/35">
                    Running - Last 4 weeks
                  </p>

                  <div className="mt-3 w-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025]">

                    {error && (
                      <div className="p-4">
                        <p className="text-sm text-white/40">
                          Couldn't load Strava stats right now.
                        </p>

                        <button
                          onClick={() => {
                            setError(false);
                            setStats(null);

                            fetch("/api/strava-stats")
                              .then((res) => {
                                if (!res.ok) {
                                  throw new Error("Failed to load");
                                }

                                return res.json();
                              })
                              .then(setStats)
                              .catch(() => setError(true));
                          }}
                          className="mt-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300"
                        >
                          Try again
                        </button>
                      </div>
                    )}

                    {!error && !stats && (
                      <p className="p-4 text-sm text-white/40">
                        Loading activity…
                      </p>
                    )}

                    {stats && (
                      <div>

                        {/* HEADER */}
                        <div className="flex items-center gap-3 border-b border-white/10 px-4 py-4">

                          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-cyan-400/10">
                            <span className="text-cyan-400">♧</span>
                          </div>

                          <div>
                            <p className="text-[14px] font-semibold text-white/90">
                              Eliakim's Running
                            </p>

                            <p className="text-[11px] text-white/40">
                              Last 4 weeks
                            </p>
                          </div>

                        </div>

                        {/* MAIN STATS */}
                        <div className="grid grid-cols-3 border-b border-white/10">

                          <div className="px-3 py-4 text-center">
                            <p className="text-[21px] font-bold text-white">
                              {stats.recent.runCount}
                            </p>

                            <p className="text-[10px] uppercase tracking-wider text-white/40">
                              Runs
                            </p>
                          </div>

                          <div className="border-x border-white/10 px-3 py-4 text-center">
                            <p className="text-[21px] font-bold text-white">
                              {stats.recent.runDistanceKm}
                            </p>

                            <p className="text-[10px] uppercase tracking-wider text-white/40">
                              KM
                            </p>
                          </div>

                          <div className="px-3 py-4 text-center">
                            <p className="text-[21px] font-bold text-white">
                              {stats.recent.totalTimeHours}h{" "}
                              {stats.recent.totalTimeMinutes}m
                            </p>

                            <p className="text-[10px] uppercase tracking-wider text-white/40">
                              Time
                            </p>
                          </div>

                        </div>

                        {/* SECONDARY STATS */}
                        <div className="grid grid-cols-2 border-b border-white/10">

                          <div className="flex items-center gap-3 px-4 py-4">

                            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-cyan-400/10">
                              <span className="text-cyan-400">◷</span>
                            </div>

                            <div>
                              <p className="text-[16px] font-semibold text-white/90">
                                {stats.recent.avgPace}
                              </p>

                              <p className="text-[10px] uppercase tracking-wider text-white/40">
                                Avg pace
                              </p>
                            </div>

                          </div>

                          <div className="flex items-center gap-3 border-l border-white/10 px-4 py-4">

                            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-cyan-400/10">
                              <span className="text-cyan-400">⌁</span>
                            </div>

                            <div>
                              <p className="text-[16px] font-semibold text-white/90">
                                {stats.recent.totalElevation.toLocaleString()}
                              </p>

                              <p className="text-[10px] uppercase tracking-wider text-white/40">
                                Elevation
                              </p>
                            </div>

                          </div>

                        </div>

                        {/* STRAVA LINK */}
                        <a
                          href="https://www.strava.com/athletes"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center py-3 text-[11px] font-semibold text-cyan-400 transition-colors hover:text-cyan-300"
                        >
                          View activity on Strava ↗
                        </a>

                      </div>
                    )}

                  </div>
                </div>

              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}