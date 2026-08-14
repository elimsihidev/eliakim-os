import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
} from "lucide-react";

interface ContactProps {
  setPage?: (page: number) => void;
}

export default function Contact({ setPage: _setPage }: ContactProps) {
  return (
    <section className="relative h-full w-full overflow-hidden text-white">

      {/* =========================================================
          MAIN CONTACT LAYOUT
      ========================================================= */}

      <div
        className="
          absolute
          inset-0

          flex
          items-center
          justify-center
        "
      >

        <div
          className="
            grid

            w-[calc(100%-140px)]
            h-[calc(100%-80px)]

            grid-cols-1
            gap-[55px]

            lg:grid-cols-[1fr_1.35fr]

            items-center
          "
        >

          {/* =====================================================
              LEFT CONTACT INFORMATION
          ===================================================== */}

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
            className="
              flex
              h-full
              w-full

              flex-col

              items-center
              justify-center

              text-center
            "
          >

            {/* TITLE */}

            <h1
              className="
                text-[48px]
                font-normal
                leading-none

                tracking-[-0.055em]

                text-white

                lg:text-[58px]
              "
            >
              Contact
            </h1>


            {/* INTRO */}

            <p
              className="
                mt-5

                max-w-[430px]

                text-[18px]
                leading-[1.55]

                tracking-[-0.025em]

                text-white/55
              "
            >
              Have a project or idea in mind? Let's create something worth
              remembering.
            </p>


            {/* =================================================
                CONTACT CARDS
            ================================================= */}

            <div
              className="
                mt-8

                flex
                w-full

                max-w-[430px]

                flex-col
                gap-4
              "
            >

              {/* EMAIL */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 12,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.35,
                  delay: 0.1,
                }}
                className="
                  flex

                  min-h-[82px]
                  w-full

                  items-center

                  gap-4

                  rounded-[20px]

                  border
                  border-white/[0.11]

                  bg-white/[0.025]

                  px-5

                  text-left

                  backdrop-blur-xl

                  transition-all
                  duration-300

                  hover:border-cyan-400/40
                  hover:bg-white/[0.045]
                "
              >

                <div
                  className="
                    flex
                    h-[40px]
                    w-[40px]
                    shrink-0

                    items-center
                    justify-center

                    rounded-full

                    border
                    border-cyan-400/45

                    bg-cyan-400/[0.035]

                    text-cyan-400
                  "
                >
                  <Mail
                    size={17}
                    strokeWidth={1.6}
                  />
                </div>


                <div>

                  <p
                    className="
                      text-[10px]
                      font-medium

                      uppercase
                      tracking-[0.13em]

                      text-white/35
                    "
                  >
                    Email
                  </p>

                  <p
                    className="
                      mt-1

                      text-[17px]
                      font-medium

                      tracking-[-0.02em]

                      text-white/80
                    "
                  >
                    elimsihi@gmail.com
                  </p>

                </div>

              </motion.div>


              {/* PHONE */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 12,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.35,
                  delay: 0.15,
                }}
                className="
                  flex

                  min-h-[82px]
                  w-full

                  items-center

                  gap-4

                  rounded-[20px]

                  border
                  border-white/[0.11]

                  bg-white/[0.025]

                  px-5

                  text-left

                  backdrop-blur-xl

                  transition-all
                  duration-300

                  hover:border-cyan-400/40
                  hover:bg-white/[0.045]
                "
              >

                <div
                  className="
                    flex
                    h-[40px]
                    w-[40px]
                    shrink-0

                    items-center
                    justify-center

                    rounded-full

                    border
                    border-cyan-400/45

                    bg-cyan-400/[0.035]

                    text-cyan-400
                  "
                >
                  <Phone
                    size={17}
                    strokeWidth={1.6}
                  />
                </div>


                <div>

                  <p
                    className="
                      text-[10px]
                      font-medium

                      uppercase
                      tracking-[0.13em]

                      text-white/35
                    "
                  >
                    Phone
                  </p>

                  <p
                    className="
                      mt-1

                      text-[17px]
                      font-medium

                      tracking-[-0.02em]

                      text-white/80
                    "
                  >
                    +255 739 923 733
                  </p>

                </div>

              </motion.div>


              {/* LOCATION */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 12,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.35,
                  delay: 0.2,
                }}
                className="
                  flex

                  min-h-[82px]
                  w-full

                  items-center

                  gap-4

                  rounded-[20px]

                  border
                  border-white/[0.11]

                  bg-white/[0.025]

                  px-5

                  text-left

                  backdrop-blur-xl

                  transition-all
                  duration-300

                  hover:border-cyan-400/40
                  hover:bg-white/[0.045]
                "
              >

                <div
                  className="
                    flex
                    h-[40px]
                    w-[40px]
                    shrink-0

                    items-center
                    justify-center

                    rounded-full

                    border
                    border-cyan-400/45

                    bg-cyan-400/[0.035]

                    text-cyan-400
                  "
                >
                  <MapPin
                    size={17}
                    strokeWidth={1.6}
                  />
                </div>


                <div>

                  <p
                    className="
                      text-[10px]
                      font-medium

                      uppercase
                      tracking-[0.13em]

                      text-white/35
                    "
                  >
                    Location
                  </p>

                  <p
                    className="
                      mt-1

                      text-[17px]
                      font-medium

                      tracking-[-0.02em]

                      text-white/80
                    "
                  >
                    Dar es Salaam, Tanzania
                  </p>

                </div>

              </motion.div>

            </div>

          </motion.div>


          {/* =====================================================
              RIGHT — MESSAGE FORM
          ===================================================== */}

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
              delay: 0.1,
              ease: "easeOut",
            }}
            className="
              flex

              h-full
              w-full

              items-center
              justify-center
            "
          >

            <div
              className="
                relative

                h-[82%]
                w-full

                rounded-[24px]

                border
                border-white/[0.11]

                bg-white/[0.025]

                p-7

                backdrop-blur-xl

                lg:p-8
              "
            >

              {/* SUBTLE GLOW */}

              <div
                className="
                  pointer-events-none

                  absolute

                  -right-[100px]
                  -top-[100px]

                  h-[280px]
                  w-[280px]

                  rounded-full

                  bg-cyan-400/[0.035]

                  blur-[100px]
                "
              />


              {/* FORM CONTENT */}

              <div
                className="
                  relative

                  flex
                  h-full

                  flex-col
                "
              >

                {/* TITLE */}

                <h2
                  className="
                    text-[27px]
                    font-medium

                    leading-none

                    tracking-[-0.045em]

                    text-white/90
                  "
                >
                  Send a message
                </h2>


                {/* FORM */}

                <form
                  action="https://formspree.io/f/xpparwgo"
                  method="POST"

                  className="
                    mt-7

                    flex
                    flex-1

                    flex-col
                  "
                >

                  {/* NAME */}

                  <div>

                    <label
                      htmlFor="name"
                      className="
                        mb-2

                        block

                        text-[10px]
                        font-medium

                        uppercase
                        tracking-[0.13em]

                        text-white/35
                      "
                    >
                      Name
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"

                      placeholder="Your name"

                      required

                      className="
                        h-[58px]
                        w-full

                        rounded-[15px]

                        border
                        border-white/[0.11]

                        bg-white/[0.025]

                        px-5

                        text-[16px]

                        text-white

                        outline-none

                        placeholder:text-white/25

                        transition-all
                        duration-300

                        focus:border-cyan-400/45
                        focus:bg-white/[0.04]
                      "
                    />

                  </div>


                  {/* EMAIL */}

                  <div className="mt-5">

                    <label
                      htmlFor="email"
                      className="
                        mb-2

                        block

                        text-[10px]
                        font-medium

                        uppercase
                        tracking-[0.13em]

                        text-white/35
                      "
                    >
                      Email
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"

                      placeholder="you@email.com"

                      required

                      className="
                        h-[58px]
                        w-full

                        rounded-[15px]

                        border
                        border-white/[0.11]

                        bg-white/[0.025]

                        px-5

                        text-[16px]

                        text-white

                        outline-none

                        placeholder:text-white/25

                        transition-all
                        duration-300

                        focus:border-cyan-400/45
                        focus:bg-white/[0.04]
                      "
                    />

                  </div>


                  {/* MESSAGE */}

                  <div className="mt-5">

                    <label
                      htmlFor="message"
                      className="
                        mb-2

                        block

                        text-[10px]
                        font-medium

                        uppercase
                        tracking-[0.13em]

                        text-white/35
                      "
                    >
                      Message
                    </label>

                    <textarea
                      id="message"
                      name="message"

                      placeholder="Tell me about your project..."

                      required

                      className="
                        h-[125px]
                        w-full

                        resize-none

                        rounded-[15px]

                        border
                        border-white/[0.11]

                        bg-white/[0.025]

                        px-5
                        py-4

                        text-[16px]
                        leading-[1.45]

                        text-white

                        outline-none

                        placeholder:text-white/25

                        transition-all
                        duration-300

                        focus:border-cyan-400/45
                        focus:bg-white/[0.04]
                      "
                    />

                  </div>


                  {/* BUTTON */}

                  <button
                    type="submit"

                    className="
                      mt-5

                      flex
                      h-[58px]
                      w-full

                      shrink-0

                      items-center
                      justify-center

                      gap-2

                      rounded-[15px]

                      bg-cyan-400

                      text-[16px]
                      font-semibold

                      text-black

                      transition-all
                      duration-300

                      hover:bg-cyan-300

                      hover:shadow-[0_0_35px_rgba(34,211,238,0.18)]
                    "
                  >

                    <span>
                      Send message
                    </span>

                    <ArrowRight
                      size={18}
                      strokeWidth={1.8}
                    />

                  </button>


                  {/* EMPTY FLEX SPACE */}

                  <div className="flex-1" />

                </form>

              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}