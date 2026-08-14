import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  GraduationCap,
  Briefcase,
  Footprints,
  Timer,
  Mountain,
} from "lucide-react";

interface StravaStats {
  recent: {
    runCount: number;
    runDistanceKm: number;
    movingTimeSeconds: number;
    elevationGainMeters: number;
    paceSecondsPerKm: number;
  };

  allTime: {
    runDistanceKm: number;
    movingTimeSeconds: number;
    elevationGainMeters: number;
  };
}

// --------------------------------------------------
// Format moving time
// Example: 34820 seconds → 9h 40m
// --------------------------------------------------

function formatTime(seconds: number) {
  if (!seconds || seconds <= 0) {
    return "0h 00m";
  }

  const hours = Math.floor(seconds / 3600);

  const minutes = Math.floor(
    (seconds % 3600) / 60
  );

  if (hours === 0) {
    return `${minutes}m`;
  }

  return `${hours}h ${minutes
    .toString()
    .padStart(2, "0")}m`;
}

// --------------------------------------------------
// Format pace
// Example: 307 seconds → 5:07 /km
// --------------------------------------------------

function formatPace(seconds: number) {
  if (!seconds || seconds <= 0) {
    return "--:--";
  }

  const minutes = Math.floor(seconds / 60);

  const remainingSeconds = seconds % 60;

  return `${minutes}:${remainingSeconds
    .toString()
    .padStart(2, "0")}`;
}

export default function Overview() {
  const [stats, setStats] =
    useState<StravaStats | null>(null);

  const [error, setError] = useState(false);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    fetch("/api/strava-stats")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to load Strava");
        }

        return res.json();
      })
      .then((data) => {
        setStats(data);
        setError(false);
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <section className="relative h-full w-full overflow-hidden text-white">
      <div className="absolute inset-0">
        <div className="relative h-full w-full">

          {/* ==========================================
              ABOUT ME
          ========================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: -20,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.45,
              ease: "easeOut",
            }}
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
                  I'm Eliakim, a content creator and
                  creative designer based in Dar es
                  Salaam, Tanzania. I work across graphic
                  design, motion design, content creation
                  and digital storytelling, combining
                  creativity with communication to turn
                  ideas into visuals and experiences that
                  people can actually connect with.
                </p>

                {/* PARAGRAPH 2 */}

                <p>
                  My background in Public Relations and
                  Advertising taught me to look beyond how
                  something looks and think about{" "}
                  <strong className="font-semibold text-white">
                    why it exists, who it is speaking to,
                    and what it needs people to feel or do.
                  </strong>{" "}
                  That perspective has shaped the way I
                  approach creative work. Whether I'm
                  designing a campaign, creating social
                  content, animating a visual or building a
                  brand story, I care about making the
                  message as strong as the execution.
                </p>

                {/* PARAGRAPH 3 */}

                <p>
                  I've always been drawn to the space where{" "}
                  <strong className="font-semibold text-white">
                    design and storytelling meet.
                  </strong>{" "}
                  A good visual can grab attention, but a
                  good idea gives that visual a reason to
                  exist. That's why I enjoy moving between
                  different forms of creative work — from
                  static design and motion graphics to
                  social media and campaign development.
                  Each one gives me another way to
                  communicate an idea.
                </p>

                {/* PARAGRAPH 4 */}

                <p>
                  A lot of my work has been shaped by
                  working with brands, media and marketing
                  teams, where creativity has to meet real
                  objectives. I've learned that the best
                  work isn't necessarily the loudest or
                  most complicated. Sometimes it's the
                  clearest idea, executed with enough
                  intention that people understand it
                  without needing to be told what they're
                  looking at.
                </p>

                {/* PARAGRAPH 5 */}

                <p>
                  I'm constantly experimenting, learning
                  and pushing my creative range. I work
                  primarily with tools like After Effects,
                  Photoshop, Illustrator, DaVinci Resolve
                  and other digital creative tools, but
                  the tools are only part of the process.{" "}
                  <strong className="font-semibold text-white">
                    The real work starts with the idea.
                  </strong>{" "}
                  For me, design isn't just about making
                  things look good. It's about{" "}
                  <strong className="font-semibold text-white">
                    making ideas visible, memorable and
                    meaningful.
                  </strong>
                </p>

              </div>
            </div>
          </motion.div>


          {/* ==========================================
              RIGHT — MORE ABOUT ME
          ========================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: 20,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.45,
              delay: 0.08,
              ease: "easeOut",
            }}
            className="absolute right-[6.5%] top-[16%] w-[420px]"
          >

            <div className="relative w-full overflow-hidden rounded-[28px] border border-white/12 bg-white/[0.018] px-6 py-6 backdrop-blur-xl">

              {/* Glow */}

              <div className="pointer-events-none absolute -right-25 -top-20 h-60 w-60 rounded-full bg-cyan-400/2.5 blur-[100px]" />

              <div className="relative z-10">

                {/* ==================================
                    TITLE
                ================================== */}

                <h2 className="text-[34px] font-bold leading-none tracking-[-0.045em] text-cyan-400">
                  More about me
                </h2>


                {/* ==================================
                    BORN IN
                ================================== */}

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


                {/* ==================================
                    EDUCATION
                ================================== */}

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


                {/* ==================================
                    CURRENTLY
                ================================== */}

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
                      Assistant graphic designer,
                      <br />
                      Ashton Media
                    </p>

                  </div>
                </div>


                {/* ==================================
                    DIVIDER
                ================================== */}

                <div className="mt-7 h-px w-full bg-white/10" />


                {/* ==================================
                    STRAVA HEADER
                ================================== */}

                <div className="mt-5">

                  <div className="flex items-center justify-between">

                    <p className="text-[12px] font-semibold uppercase tracking-[0.11em] text-white/40">
                      Running · Last 4 weeks
                    </p>

                  </div>


                  {/* ==================================
                      STRAVA SUMMARY CARD
                  ================================== */}

                  <div className="mt-3 overflow-hidden rounded-[20px] border border-white/10 bg-white/[0.025]">

                    {loading && (
                      <div className="p-5">

                        <p className="text-sm text-white/40">
                          Loading activity…
                        </p>

                      </div>
                    )}


                    {error && (
                      <div className="p-5">

                        <p className="text-sm text-white/40">
                          Couldn't load Strava stats
                          right now.
                        </p>

                        <button
                          onClick={() => {
                            setError(false);
                            setLoading(true);

                            fetch("/api/strava-stats")
                              .then((res) => {
                                if (!res.ok) {
                                  throw new Error(
                                    "Failed"
                                  );
                                }

                                return res.json();
                              })
                              .then((data) => {
                                setStats(data);
                              })
                              .catch(() => {
                                setError(true);
                              })
                              .finally(() => {
                                setLoading(false);
                              });
                          }}
                          className="mt-3 text-sm font-semibold text-cyan-400 transition-opacity hover:opacity-70"
                        >
                          Try again
                        </button>

                      </div>
                    )}


                    {stats && !error && (

                      <div>

                        {/* ==================================
                            HEADER
                        ================================== */}

                        <div className="px-5 pt-5">

                          <div className="flex items-center gap-3">

                            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-cyan-400/10">

                              <Footprints
                                size={18}
                                className="text-cyan-400"
                              />

                            </div>

                            <div>

                              <p className="text-[15px] font-semibold text-white/90">
                                Eliakim's Running
                              </p>

                              <p className="text-[11px] text-white/35">
                                Last 4 weeks
                              </p>

                            </div>

                          </div>

                        </div>


                        {/* ==================================
                            MAIN THREE STATS
                        ================================== */}

                        <div className="grid grid-cols-3 gap-2 px-4 py-5">

                          {/* RUNS */}

                          <div className="text-center">

                            <p className="text-[25px] font-bold tracking-[-0.04em] text-white">
                              {stats.recent.runCount}
                            </p>

                            <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.12em] text-white/35">
                              Runs
                            </p>

                          </div>


                          {/* DISTANCE */}

                          <div className="border-x border-white/10 text-center">

                            <p className="text-[25px] font-bold tracking-[-0.04em] text-white">
                              {stats.recent.runDistanceKm}
                            </p>

                            <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.12em] text-white/35">
                              KM
                            </p>

                          </div>


                          {/* TIME */}

                          <div className="text-center">

                            <p className="text-[25px] font-bold tracking-[-0.04em] text-white">
                              {formatTime(
                                stats.recent
                                  .movingTimeSeconds
                              )}
                            </p>

                            <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.12em] text-white/35">
                              Time
                            </p>

                          </div>

                        </div>


                        {/* ==================================
                            SECONDARY STATS
                        ================================== */}

                        <div className="border-t border-white/10 px-5 py-4">

                          <div className="grid grid-cols-2 gap-4">

                            {/* PACE */}

                            <div className="flex items-center gap-3">

                              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-cyan-400/10">

                                <Timer
                                  size={17}
                                  className="text-cyan-400"
                                />

                              </div>

                              <div>

                                <p className="text-[17px] font-bold text-white/90">
                                  {formatPace(
                                    stats.recent
                                      .paceSecondsPerKm
                                  )}{" "}
                                  <span className="text-[10px] font-medium text-white/35">
                                    /km
                                  </span>
                                </p>

                                <p className="text-[9px] font-semibold uppercase tracking-[0.1em] text-white/35">
                                  Avg pace
                                </p>

                              </div>

                            </div>


                            {/* ELEVATION */}

                            <div className="flex items-center gap-3">

                              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-cyan-400/10">

                                <Mountain
                                  size={17}
                                  className="text-cyan-400"
                                />

                              </div>

                              <div>

                                <p className="text-[17px] font-bold text-white/90">
                                  {stats.recent.elevationGainMeters.toLocaleString()}{" "}
                                  <span className="text-[10px] font-medium text-white/35">
                                    m
                                  </span>
                                </p>

                                <p className="text-[9px] font-semibold uppercase tracking-[0.1em] text-white/35">
                                  Elevation
                                </p>

                              </div>

                            </div>

                          </div>

                        </div>


                        {/* ==================================
                            STRAVA LINK
                        ================================== */}

                        <a
                          href="https://www.strava.com/athletes"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center border-t border-white/10 px-5 py-3 text-[11px] font-semibold text-cyan-400 transition-colors hover:bg-white/[0.03]"
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