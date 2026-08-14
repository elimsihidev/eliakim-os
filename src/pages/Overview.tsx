import { motion } from "framer-motion";

export default function Overview() {
  return (
    <section className="relative h-full w-full overflow-hidden text-white">
      <div className="absolute inset-0">
        <div className="relative h-full w-full">

          {/* =====================================================
              ABOUT ME
          ===================================================== */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.45,
              ease: "easeOut",
            }}
            className="
              absolute
              left-[6.8%]
              top-[16%]
              w-[60%]
              max-w-[1020px]
            "
          >
            {/* TITLE */}
            <h1
              className="
                text-[34px]
                font-bold
                leading-none
                tracking-[-0.045em]
                text-white
              "
            >
              About me
            </h1>

            {/* DESCRIPTION */}
            <div
              className="
                w-full
                text-justify
                text-[16px]
                font-normal
                leading-[1.55]
                tracking-[-0.012em]
                text-white/75
                pt-[50px]
              "
            >
              <div className="flex flex-col gap-[20px]">

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
          ===================================================== */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.45,
              delay: 0.08,
              ease: "easeOut",
            }}
            className="
              absolute
              right-[6.5%]
              top-[10%]
              w-[300px]
            "
          >
            <div
              className="
                relative
                h-[590px]
                w-full
                overflow-hidden
                rounded-[28px]
                border
                border-white/[0.12]
                bg-white/[0.018]
                px-5
                py-5
                backdrop-blur-xl
              "
            >

              {/* SUBTLE GLOW */}
              <div
                className="
                  pointer-events-none
                  absolute
                  -right-[100px]
                  -top-[80px]
                  h-[240px]
                  w-[240px]
                  rounded-full
                  bg-cyan-400/[0.025]
                  blur-[100px]
                "
              />

              <div className="relative z-10">

                {/* CARD TITLE */}
                <h2
                  className="
                    text-[26px]
                    font-normal
                    leading-none
                    tracking-[-0.045em]
                    text-white/90
                  "
                >
                  More about me
                </h2>


                {/* BASED IN */}
                <div className="mt-5">
                  <p
                    className="
                      text-[12px]
                      uppercase
                      tracking-[0.11em]
                      text-white/35
                    "
                  >
                    Based in
                  </p>

                  <p
                    className="
                      mt-1
                      text-[17px]
                      font-medium
                      text-white/80
                    "
                  >
                    Dar es Salaam, Tanzania
                  </p>
                </div>


                {/* EDUCATION */}
                <div className="mt-5">
                  <p
                    className="
                      text-[12px]
                      uppercase
                      tracking-[0.11em]
                      text-white/35
                    "
                  >
                    Education
                  </p>

                  <p
                    className="
                      mt-1
                      text-[17px]
                      font-medium
                      text-white/80
                    "
                  >
                    University of Dar es Salaam
                  </p>
                </div>


                {/* CURRENTLY */}
                <div className="mt-5">
                  <p
                    className="
                      text-[12px]
                      uppercase
                      tracking-[0.11em]
                      text-white/35
                    "
                  >
                    Currently
                  </p>

                  <p
                    className="
                      mt-1
                      text-[17px]
                      font-medium
                      leading-[1.3]
                      text-white/80
                    "
                  >
                    Assistant graphic designer,
                    <br />
                    Ashton Media
                  </p>
                </div>


                {/* DIVIDER */}
                <div className="mt-5 h-px w-full bg-white/[0.10]" />


                {/* STRAVA */}
                <div className="mt-4">

                  <p
                    className="
                      text-[12px]
                      uppercase
                      tracking-[0.11em]
                      text-white/35
                    "
                  >
                    Strava
                  </p>

                  <div
                    className="
                      mt-3
                      w-full
                      overflow-hidden
                      rounded-[16px]
                    "
                  >
                    <iframe
                      title="Strava Activity Summary"
                      src="https://www.strava.com/athletes/131041578/activity-summary/ba66b372f687e133784e4260f53ecad91317a5f6"
                      height="160"
                      width="100%"
                      frameBorder="0"
                      allowTransparency
                      scrolling="no"
                      className="block w-full"
                    />
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