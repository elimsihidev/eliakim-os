import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  GraduationCap,
  Briefcase,
  ArrowUpRight,
  Timer,
  Mountain,
} from "lucide-react";

interface StravaStats {
  athlete: {
    id: number;
    firstname: string;
    lastname: string;
  };

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
        if (!res.ok) {
          throw new Error("Failed to load");
        }

        return res.json();
      })
      .then((data) => {
        setStats(data);
        setError(false);
      })
      .catch(() => {
        setError(true);
      });
  }, []);

  return (
    <div className="h-full w-full overflow-y-auto px-8 pt-16 pb-8 no-scrollbar lg:px-16 lg:pt-24 lg:pb-12">
      <div className="mx-auto flex min-h-full max-w-7xl items-start py-2">

        <div className="grid w-full grid-cols-1 gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:gap-14">

          {/* =====================================================
              LEFT SIDE — ABOUT ME
          ====================================================== */}

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.45,
              ease: "easeOut",
            }}
            className="space-y-6"
          >
            <h1 className="mb-6 text-[34px] font-bold leading-none tracking-[-0.045em] text-white">
              About me
            </h1>

            <div className="space-y-5 text-justify text-[16px] font-normal leading-[1.55] tracking-[-0.012em] text-white/75">

              <p>
                I'm Eliakim, a content creator and creative designer based
                in Dar es Salaam, Tanzania. I work across graphic design,
                motion design, content creation and digital storytelling,
                combining creativity with communication to turn ideas into
                visuals and experiences that people can actually connect
                with.
              </p>

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

              <p>
                A lot of my work has been shaped by working with brands,
                media and marketing teams, where creativity has to meet real
                objectives. I've learned that the best work isn't necessarily
                the loudest or most complicated. Sometimes it's the clearest
                idea, executed with enough intention that people understand it
                without needing to be told what they're looking at.
              </p>

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
          </motion.div>


          {/* =====================================================
              RIGHT SIDE — MORE ABOUT ME
          ====================================================== */}

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.45,
              delay: 0.08,
              ease: "easeOut",
            }}
            className="lg:sticky lg:top-4"
          >

            <div className="rounded-[28px] border border-white/12 bg-white/[0.018] p-6 backdrop-blur-xl">

              {/* TITLE */}

              <h2 className="mb-8 text-[28px] font-bold leading-none tracking-[-0.045em] text-cyan-400">
                More about me
              </h2>


              {/* =================================================
                  PERSONAL DETAILS
              ================================================== */}

              <div className="space-y-5">

                {/* BORN IN */}

                <div className="flex items-start gap-3">

                  <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan-400/10 text-cyan-400">
                    <MapPin size={16} />
                  </div>

                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-white/40">
                      Born in
                    </p>

                    <p className="text-[17px] font-semibold text-white">
                      Arusha, Tanzania
                    </p>
                  </div>

                </div>


                {/* ZODIAC */}

                <div className="flex items-start gap-3">

                  <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan-400/10 text-cyan-400">

                    <span className="text-base font-bold">
                      ♑
                    </span>

                  </div>

                  <div>

                    <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-white/40">
                      Zodiac
                    </p>

                    <p className="text-[17px] font-semibold text-white">
                      Capricorn
                    </p>

                  </div>

                </div>


                {/* EDUCATION */}

                <div className="flex items-start gap-3">

                  <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan-400/10 text-cyan-400">
                    <GraduationCap size={16} />
                  </div>

                  <div>

                    <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-white/40">
                      Education
                    </p>

                    <p className="text-[17px] font-semibold text-white">
                      University of Dar es Salaam
                    </p>

                  </div>

                </div>


                {/* CURRENTLY */}

                <div className="flex items-start gap-3">

                  <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan-400/10 text-cyan-400">
                    <Briefcase size={16} />
                  </div>

                  <div>

                    <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-white/40">
                      Currently
                    </p>

                    <p className="text-[17px] font-semibold leading-tight text-white">
                      Assistant Graphic Designer
                    </p>

                  </div>

                </div>

              </div>


              {/* DIVIDER */}

              <div className="my-5 h-px w-full bg-white/10" />


              {/* =================================================
                  STRAVA
              ================================================== */}

              <div className="space-y-3">

                <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-white/40">
                  Running • Last 4 Weeks
                </p>


                <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]">

                  {error ? (

                    <div className="px-4 py-6 text-center">

                      <p className="mb-2 text-xs text-white/30">
                        Sync paused
                      </p>

                      <button
                        onClick={() => window.location.reload()}
                        className="text-[10px] font-bold uppercase tracking-wider text-cyan-400 transition-colors hover:text-cyan-300"
                      >
                        Retry
                      </button>

                    </div>

                  ) : !stats ? (

                    <div className="flex items-center justify-center py-8">

                      <div className="h-4 w-4 animate-spin rounded-full border-2 border-cyan-400 border-t-transparent" />

                    </div>

                  ) : (

                    <div>

                      {/* =================================================
                          MAIN STATS
                      ================================================== */}

                      <div className="grid grid-cols-3 text-center">

                        {/* RUNS */}

                        <div className="px-2 py-5">

                          <p className="text-xl font-black text-white">
                            {stats.recent.runCount}
                          </p>

                          <p className="text-[9px] font-bold uppercase tracking-wider text-white/40">
                            Runs
                          </p>

                        </div>


                        {/* DISTANCE */}

                        <div className="border-x border-white/10 px-2 py-5">

                          <p className="text-xl font-black text-white">
                            {stats.recent.runDistanceKm}
                          </p>

                          <p className="text-[9px] font-bold uppercase tracking-wider text-white/40">
                            KM
                          </p>

                        </div>


                        {/* TIME */}

                        <div className="px-2 py-5">

                          <p className="text-xl font-black text-white">
                            {stats.recent.totalTimeHours}h{" "}
                            {String(
                              stats.recent.totalTimeMinutes
                            ).padStart(2, "0")}m
                          </p>

                          <p className="text-[9px] font-bold uppercase tracking-wider text-white/40">
                            Time
                          </p>

                        </div>

                      </div>


                      {/* =================================================
                          SECONDARY STATS
                      ================================================== */}

                      <div className="grid grid-cols-2 border-t border-white/10">

                        {/* AVG PACE */}

                        <div className="flex items-center gap-3 px-4 py-4">

                          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cyan-400/10 text-cyan-400">

                            <Timer size={15} />

                          </div>

                          <div>

                            <p className="text-sm font-bold text-white">
                              {stats.recent.avgPace}
                              <span className="ml-1 text-[10px] font-medium text-white/40">
                                /km
                              </span>
                            </p>

                            <p className="text-[9px] font-bold uppercase tracking-wider text-white/40">
                              Avg Pace
                            </p>

                          </div>

                        </div>


                        {/* ELEVATION */}

                        <div className="flex items-center gap-3 border-l border-white/10 px-4 py-4">

                          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cyan-400/10 text-cyan-400">

                            <Mountain size={15} />

                          </div>

                          <div>

                            <p className="text-sm font-bold text-white">
                              {stats.recent.totalElevation.toLocaleString()}
                              <span className="ml-1 text-[10px] font-medium text-white/40">
                                m
                              </span>
                            </p>

                            <p className="text-[9px] font-bold uppercase tracking-wider text-white/40">
                              Elevation
                            </p>

                          </div>

                        </div>

                      </div>


                      {/* =================================================
                          STRAVA BUTTON
                      ================================================== */}

                      <a
                        href={
                          stats.athlete?.id
                            ? `https://www.strava.com/athletes/${stats.athlete.id}`
                            : "https://www.strava.com"
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex w-full items-center justify-center gap-2 border-t border-white/10 py-3 text-[10px] font-bold uppercase tracking-widest text-cyan-400 transition-colors hover:bg-cyan-400/5"
                      >

                        View activity on Strava

                        <ArrowUpRight size={12} />

                      </a>

                    </div>

                  )}

                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </div>
  );
}