import { motion } from "framer-motion";
import TypingRoles from "./TypingRoles";

interface HeroProps {
  setPage: (page: number) => void;
}

export default function Hero({ setPage }: HeroProps) {
  return (
    <div className="relative h-full w-full">

      {/* Intro */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="absolute flex items-center"
        style={{
          left: "clamp(5rem, 8vw, 8rem)",
          top: "clamp(4.5rem, 7vh, 6rem)",
        }}
      >
        <span
          className="mr-4 text-cyan-400"
          style={{ fontSize: "clamp(2rem,2.2vw,2.6rem)" }}
        >
          ••
        </span>

        <span
          className="font-medium text-white"
          style={{ fontSize: "clamp(2rem,2.1vw,2.2rem)" }}
        >
          Hi, I'm Eliakim.
        </span>
      </motion.div>

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        className="absolute"
        style={{
          left: "clamp(5rem,8vw,8rem)",
          top: "clamp(9rem,18vh,11rem)",
        }}
      >
        <h1
          className="font-black leading-[0.96]"
          style={{
            fontSize: "clamp(4.8rem,6vw,5.3rem)",
          }}
        >
          <span className="text-white">The </span>

          <span className="text-cyan-400">
            Content Plug
          </span>

          <br />

          <span className="text-white">
            for Brands & Stories.
          </span>
        </h1>
      </motion.div>

      {/* Description */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.35 }}
        className="absolute"
        style={{
          left: "clamp(5rem,8vw,8rem)",
          top: "clamp(22.8rem,53vh,24.8rem)",
        }}
      >
        <p
          className="text-gray-300 2xl:max-w-190"
          style={{
            maxWidth: "620px",
            fontSize: "clamp(1.15rem,1.4vw,1.45rem)",
            lineHeight: 1.8,
          }}
        >
          Helping brands communicate through content,
          design, motion and digital strategy.
        </p>
      </motion.div>

      {/* Roles / CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.55 }}
        className="absolute"
        style={{
          left: "clamp(5rem,8vw,8rem)",
          top: "clamp(29.2rem,66vh,32rem)",
        }}
      >
        <TypingRoles setPage={setPage} />
      </motion.div>

    </div>
  );
}