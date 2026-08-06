import { motion } from "framer-motion";

interface NavbarProps {
  page: number;
  setPage: (page: number) => void;
}

const nav = [
  "Home",
  "Overview",
  "Projects",
  "Experience",
  "Contact",
];

export default function Navbar({ page, setPage }: NavbarProps) {
  return (
    <div
      className="
        absolute
        left-1/2
        z-50
        -translate-x-1/2

        2xl:top-10
      "
      style={{
        top: "clamp(1.2rem,2.8vh,2.5rem)",
      }}
    >
      <div
        className="
          relative
          flex
          items-center
          rounded-full
          bg-[#2d2d2d]/90
          backdrop-blur-xl
          border
          border-white/10
          shadow-xl

          2xl:h-16
          2xl:px-4
        "
        style={{
          height: "clamp(3.2rem,5vh,3.6rem)",
          paddingInline: "clamp(.6rem,1vw,.9rem)",
        }}
      >
        {nav.map((item, index) => (
          <button
            key={item}
            onClick={() => setPage(index)}
            className="
              relative
              flex
              items-center
              justify-center
              font-medium
              text-white
              transition-colors
              duration-300

              2xl:w-[132px]
              2xl:h-12
              2xl:text-[18px]
            "
            style={{
              width: "clamp(6.2rem,7vw,7.4rem)",
              height: "clamp(2.5rem,4vh,2.7rem)",
              fontSize: "clamp(.9rem,1vw,1rem)",
            }}
          >
            {page === index && (
              <motion.div
                layoutId="active-pill"
                className="absolute rounded-full bg-[#a4a4a4]"
                style={{
                  top: 4,
                  bottom: 4,
                  left: index === 0 ? 8 : 4,
                  right: index === nav.length - 1 ? 8 : 4,
                }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 35,
                }}
              />
            )}

            <span className="relative z-10">
              {item}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}