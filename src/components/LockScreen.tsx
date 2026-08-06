import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  onUnlock: () => void;
};

export default function LockScreen({ onUnlock }: Props) {
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState(false);
  const [showHint, setShowHint] = useState(false);

  function unlock() {
    if (answer.trim() === "3") {
      onUnlock();
      return;
    }

    setError(true);
    setTimeout(() => setError(false), 500);
  }

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-[#050505]">

      <motion.div
        animate={error ? { x: [-8, 8, -8, 8, 0] } : {}}
        transition={{ duration: 0.35 }}
        className="absolute left-1/2 top-[52%] flex -translate-x-1/2 -translate-y-1/2 flex-col items-center"
      >

        {/* Profile */}

        <img
          src="/profile.jpg"
          alt="Profile"
          className="mb-20 h-28 w-28 rounded-full border-2 border-cyan-500/70 object-cover shadow-[0_0_30px_rgba(6,182,212,.35)]"
        />

        {/* Welcome */}

        <h1 className="mb-14 text-[30px] font-semibold tracking-tight text-white">
          Karibu Tena!
        </h1>

        {/* Password Row */}

        <div className="relative flex w-[300px] justify-center">

          <input
            autoFocus
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                unlock();
              }
            }}
            placeholder="Enter Password"
            className="
              h-11
              w-[220px]
              rounded-full
              bg-gradient-to-b
              from-[#666]
              to-[#444]
              text-center
              text-[14px]
              text-white
              placeholder:text-center
              placeholder:text-gray-200
              outline-none
              transition
              focus:ring-2
              focus:ring-cyan-500/40
            "
          />

          {/* Help Button */}

          <button
            onClick={() => setShowHint(!showHint)}
            className="
              absolute
              left-[275px]
              top-1/2
              flex
              h-10
              w-10
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              border
              border-white/20
              bg-[#4d4d4d]
              text-white
              transition
              hover:bg-[#5a5a5a]
            "
          >
            ?
          </button>

          {/* Hint Popup */}

          <AnimatePresence>
            {showHint && (
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className="
                  absolute
                  top-16
                  left-[185px]
                  z-50
                  w-[190px]
                  rounded-lg
                  bg-white
                  p-3
                  text-black
                  shadow-2xl
                "
              >

                {/* Arrow */}

                <div
                  className="
                    absolute
                    -top-2
                    left-5
                    h-4
                    w-4
                    rotate-45
                    bg-white
                  "
                />

                <h3 className="text-center text-[13px] font-semibold">
                  Password Hint
                </h3>

                <p className="mt-2 text-center text-[15px] font-medium">
                  1 + 2 = ?
                </p>

                <p className="mt-2 text-center text-[11px] leading-4 text-gray-500">
                  Use the result of the
                  <br />
                  calculation as your password.
                </p>

              </motion.div>
            )}
          </AnimatePresence>

        </div>

      </motion.div>

    </div>
  );
}