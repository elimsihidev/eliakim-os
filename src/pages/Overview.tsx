import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  GraduationCap,
  Briefcase,
  Footprints,
  Bike,
} from "lucide-react";

interface StravaStats {
  recent: {
    runCount: number;
    runDistanceKm: number;
    rideCount: number;
    rideDistanceKm: number;
  };
  allTime: {
    runDistanceKm: number;
    rideDistanceKm: number;
  };
}

export default function Overview() {
  const [stats, setStats] = useState<StravaStats | null>(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadStravaStats = async () => {
      try {
        setLoading(true);
        setError(false);

        /*
         * Use the same domain the portfolio is currently running on.
         * This should call:
         *
         * https://elimishi.vercel.app/api/strava-stats
         */
        const apiUrl = `${window.location.origin}/api/strava-stats`;

        console.log("Fetching Strava:", apiUrl);

        const response = await fetch(`${apiUrl}?t=${Date.now()}`, {
          method: "GET",
          cache: "no-store",
          headers: {
            Accept: "application/json",
          },
        });

        console.log("Strava response status:", response.status);
        console.log("Strava response URL:", response.url);

        /*
         * Read the response as text first.
         * This lets us see the real response if something goes wrong.
         */
        const rawResponse = await response.text();

        console.log("Strava raw response:", rawResponse);

        if (!response.ok) {
          throw new Error(
            `API error ${response.status}: ${rawResponse}`
          );
        }

        let data: StravaStats;

        try {
          data = JSON.parse(rawResponse);
        } catch {
          throw new Error(
            `API did not return valid JSON. Response: ${rawResponse.substring(
              0,
              300
            )}`
          );
        }

        console.log("Strava parsed data:", data);

        /*
         * Make sure the response contains the structure
         * expected by this component.
         */
        if (!data?.recent || !data?.allTime) {
          throw new Error(
            "Strava returned an unexpected data structure."
          );
        }

        setStats(data);
      } catch (err) {
        console.error("STRAVA FRONTEND ERROR:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    loadStravaStats();
  }, []);

  return (
    <section className="relative h-full w-full overflow-hidden text-white">
      <div className="absolute inset-0">
        <div className="relative h-full w-full">

          {/* =====================================================
              ABOUT ME
          ====================================================== */}

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
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


          {/* =====================================================
              RIGHT — MORE ABOUT ME
          ====================================================== */}

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

              {/* Background glow */}

              <div className="pointer-events-none absolute -right-25 -top-20 h-60 w-60 rounded-full bg-cyan-400/2.5 blur-[100px]" />

              <div className="relative z-10">

                {/* =================================================
                    TITLE
                ================================================== */}

                <h2 className="text-[34px] font-bold leading-none tracking-[-0.045em] text-cyan-400">
                  More about me
                </h2>


                {/* =================================================
                    BORN IN
                ================================================== */}

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


                {/* =================================================
                    EDUCATION
                ================================================== */}

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


                {/* =================================================
                    CURRENTLY
                ================================================== */}

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


                {/* =================================================
                    DIVIDER
                ================================================== */}

                <div className="mt-6 h-px w-full bg-white/10" />


                {/* =================================================
                    STRAVA
                ================================================== */}

                <div className="mt-5">

                  <p className="text-[12px] uppercase tracking-[0.11em] text-white/35">
                    Strava (last 4 weeks)
                  </p>


                  <div className="mt-3 w-full rounded-2xl border border-white/10 bg-white/[0.025] p-4">

                    {/* =================================================
                        LOADING
                    ================================================== */}

                    {loading && !stats && (
                      <div className="flex items-center gap-3">

                        <div className="h-4 w-4 animate-spin rounded-full border-2 border-white/20 border-t-cyan-400" />

                        <p className="text-sm text-white/40">
                          Loading activity…
                        </p>

                      </div>
                    )}


                    {/* =================================================
                        ERROR
                    ================================================== */}

                    {error && !stats && (
                      <div>

                        <p className="text-sm text-red-400">
                          Strava connection failed.
                        </p>

                        <button
                          type="button"
                          onClick={() => window.location.reload()}
                          className="mt-3 text-xs font-semibold text-cyan-400 transition hover:text-cyan-300"
                        >
                          Try again
                        </button>

                      </div>
                    )}


                    {/* =================================================
                        STRAVA DATA
                    ================================================== */}

                    {stats && (
                      <div className="flex flex-col gap-4">

                        {/* =========================
                            RUNNING
                        ========================== */}

                        <div className="flex items-center justify-between">

                          <div className="flex items-center gap-3">

                            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-cyan-400/10">

                              <Footprints
                                size={18}
                                className="text-cyan-400"
                              />

                            </div>


                            <div>

                              <p className="text-[13px] uppercase tracking-[0.08em] text-white/35">
                                Running
                              </p>

                              <p className="mt-0.5 text-[15px] font-medium text-white/85">
                                {stats.recent.runCount} runs
                              </p>

                            </div>

                          </div>


                          <div className="text-right">

                            <p className="text-[20px] font-bold text-white">

                              {stats.recent.runDistanceKm}

                              <span className="ml-1 text-[12px] font-medium text-white/40">
                                km
                              </span>

                            </p>

                          </div>

                        </div>


                        {/* =========================
                            CYCLING
                        ========================== */}

                        <div className="flex items-center justify-between">

                          <div className="flex items-center gap-3">

                            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-cyan-400/10">

                              <Bike
                                size={18}
                                className="text-cyan-400"
                              />

                            </div>


                            <div>

                              <p className="text-[13px] uppercase tracking-[0.08em] text-white/35">
                                Cycling
                              </p>

                              <p className="mt-0.5 text-[15px] font-medium text-white/85">
                                {stats.recent.rideCount} rides
                              </p>

                            </div>

                          </div>


                          <div className="text-right">

                            <p className="text-[20px] font-bold text-white">

                              {stats.recent.rideDistanceKm}

                              <span className="ml-1 text-[12px] font-medium text-white/40">
                                km
                              </span>

                            </p>

                          </div>

                        </div>

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