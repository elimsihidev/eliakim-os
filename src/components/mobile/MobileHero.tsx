import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import MobileTypingRoles from "./MobileTypingRoles";
import MobileFloatingApps from "./MobileFloatingApps";

export default function MobileHero() {

  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end end"],
  });

  /*
  ----------------------------------------
  HERO EXIT
  ----------------------------------------
  */

  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -300]
  );

  const roleY = useTransform(
    scrollYProgress,
    [0, .28],
    [0, -240]
  );

  const roleOpacity = useTransform(
    scrollYProgress,
    [0, .18],
    [1, 0]
  );

  const headingY = useTransform(
    scrollYProgress,
    [0, .32],
    [0, -280]
  );

  const headingOpacity = useTransform(
    scrollYProgress,
    [0, .22],
    [1, 0]
  );

  /*
  ----------------------------------------
  HERO ENTER
  ----------------------------------------
  */

  const ctaY = useTransform(
    scrollYProgress,
    [.25, .42],
    [140, 0]
  );

  const ctaOpacity = useTransform(
    scrollYProgress,
    [.25, .42],
    [0, 1]
  );

  const descY = useTransform(
    scrollYProgress,
    [.40, .58],
    [120, 0]
  );

  const descOpacity = useTransform(
    scrollYProgress,
    [.40, .58],
    [0, 1]
  );

  const appsY = useTransform(
    scrollYProgress,
    [.55, .75],
    [120, 0]
  );

  const appsOpacity = useTransform(
    scrollYProgress,
    [.55, .75],
    [0, 1]
  );

  return (

    <section
      id="home"
      ref={heroRef}
      className="
      relative
      h-[220vh]
      "
    >

      <div
        className="
        sticky
        top-0
        h-screen
        overflow-hidden
        "
      >

        {/* Portrait */}

        <motion.img

          src="/profile.png"

          alt="Portrait"

          style={{
            y: imageY,
          }}

          className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
          object-[58%_42%]
          scale-105
          grayscale
          "
        />

        {/* Overlays */}

        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top,rgba(0,0,0,.98),rgba(0,0,0,.55),rgba(0,0,0,.08))",
          }}
        />

        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right,rgba(0,0,0,.45),transparent)",
          }}
        />

        {/* Role */}

        <motion.div

          style={{
            y: roleY,
            opacity: roleOpacity,
          }}

          className="
          absolute
          top-20
          left-1/2
          -translate-x-1/2
          z-20
          "

        >

          <div
            className="
            flex
            items-center
            justify-center
            w-[235px]
            h-10
            rounded-full
            border
            border-white/10
            bg-[#2d2d2d]/90
            backdrop-blur-xl
            shadow-lg
            "
          >

            <MobileTypingRoles />

          </div>

        </motion.div>

        {/* Heading */}

        <motion.div

          style={{
            y: headingY,
            opacity: headingOpacity,
          }}

          className="
          absolute
          top-40
          left-0
          w-full
          px-8
          z-20
          "

        >

          <h1
            className="
            text-center
            font-black
            leading-[0.9]
            tracking-[-0.045em]
            "
          >

            <span
              className="
              block
              text-cyan-400
              text-[2.55rem]
              "
            >
              Content Plug
            </span>

            <span
              className="
              block
              mt-1
              text-white
              text-[2.25rem]
              "
            >
              for Brands & Stories.
            </span>

          </h1>

        </motion.div>
                {/* Explore Button */}

                <motion.div

style={{
  y: ctaY,
  opacity: ctaOpacity,
}}

className="
absolute
left-0
top-[62%]
w-full
flex
justify-center
z-20
"

>

<button

  onClick={() => {
    document
      .getElementById("overview")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  }}

  className="
  rounded-full
  border
  border-cyan-400/20
  bg-cyan-400/15
  backdrop-blur-xl
  px-8
  py-3
  text-cyan-300
  font-semibold
  transition-all
  duration-300
  hover:bg-cyan-400/25
  "

>

  Explore My Story →

</button>

</motion.div>

{/* Description */}

<motion.div

style={{
  y: descY,
  opacity: descOpacity,
}}

className="
absolute
left-0
top-[74%]
w-full
px-8
z-20
"

>

<p
  className="
  mx-auto
  max-w-[305px]
  text-center
  text-gray-300
  text-[1rem]
  leading-8
  "
>

  Helping brands communicate through
  content, design, motion and digital
  strategy.

</p>

</motion.div>

{/* Floating Apps */}

<motion.div

style={{
  y: appsY,
  opacity: appsOpacity,
}}

className="
absolute
left-0
bottom-10
w-full
flex
justify-center
z-20
"

>

<MobileFloatingApps horizontal />

</motion.div>

</div>

{/* Scroll Spacer */}

<div
className="
h-screen
"
/>    </section>

);
}