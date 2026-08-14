import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const nav = [
  { label: "Home", id: "home" },
  { label: "Overview", id: "overview" },
  { label: "Projects", id: "projects" },
  { label: "Experience", id: "experience" },
  { label: "Contact", id: "contact" },
];

export default function MobileNavbar() {
  const [open, setOpen] = useState(false);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setOpen(false);
  };

  return (
    <>
      {/* Floating Navbar */}

      <div
        className="
        absolute
        top-5
        left-5
        right-5
        z-50
        flex
        items-center
        justify-between
        pointer-events-none
        "
      >
        {/* Logo */}

        <button
          onClick={() => scrollToSection("home")}
          className="
          pointer-events-auto
          flex
          h-11
          px-4
          items-center
          justify-center
          rounded-full
          border
          border-white/10
          bg-black/35
          backdrop-blur-3xl
          shadow-xl
          text-white
          font-black
          text-[1.4rem]
          tracking-tighter
          transition-all
          duration-300
          hover:border-cyan-400/30
          "
        >
          EM
        </button>

        {/* Menu */}

        <button
          onClick={() => setOpen(true)}
          className="
          pointer-events-auto
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-full
          border
          border-white/10
          bg-black/35
          backdrop-blur-3xl
          shadow-xl
          transition-all
          duration-300
          hover:border-cyan-400/30
          hover:bg-black/50
          "
        >
          <Menu
            size={20}
            color="white"
            strokeWidth={2.2}
          />
        </button>
      </div>

      {/* Fullscreen Menu */}

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="
            fixed
            inset-0
            z-100
            bg-black/90
            backdrop-blur-3xl
            "
          >
            {/* Close */}

            <button
              onClick={() => setOpen(false)}
              className="
              absolute
              top-5
              right-5
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              border
              border-white/10
              bg-black/35
              backdrop-blur-3xl
              shadow-xl
              transition-all
              duration-300
              hover:border-cyan-400/30
              hover:bg-black/50
              "
            >
              <X
                size={20}
                color="white"
                strokeWidth={2.2}
              />
            </button>

            {/* Navigation */}

            <div
              className="
              flex
              h-full
              flex-col
              items-center
              justify-center
              gap-9
              "
            >
              {nav.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="
                  text-[2.3rem]
                  font-bold
                  text-white
                  transition-colors
                  duration-300
                  hover:text-cyan-400
                  "
                >
                  {item.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}