import { useState } from "react";
import { motion } from "framer-motion";

import Navbar from "./Navbar";
import SocialLinks from "./SocialLinks";
import FloatingApps from "./FloatingApps";

import Home from "../pages/Home";
import Overview from "../pages/Overview";
import Projects from "../pages/Projects";
import Experience from "../pages/Experience";
import Contact from "../pages/Contact";

const pages = [
  Home,
  Overview,
  Projects,
  Experience,
  Contact,
];

export default function Desktop() {
  const [page, setPage] = useState(0);

  return (
    <div
      className="relative min-h-screen overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2200)",
      }}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Glass Window */}
      <div
        className="
          absolute
          overflow-hidden
          rounded-[40px]
          border
          border-white/10
          shadow-2xl
        "
        style={{
          top: "clamp(1rem,2vw,2rem)",
          left: "clamp(1rem,2vw,2rem)",
          right: "clamp(1rem,2vw,2rem)",
          bottom: "clamp(1rem,2vw,2rem)",

          backgroundImage: `
            linear-gradient(
              90deg,
              rgba(10,10,10,.88) 0%,
              rgba(10,10,10,.84) 15%,
              rgba(10,10,10,.76) 30%,
              rgba(10,10,10,.60) 50%,
              rgba(10,10,10,.42) 68%,
              rgba(10,10,10,.20) 85%,
              rgba(10,10,10,0) 100%
            ),
            url('/profile-bg.png')
          `,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundBlendMode: "multiply",
          backgroundColor: "rgba(255,255,255,.08)",
          backdropFilter: "blur(28px)",
        }}
      >
        {/* Navbar */}
        <Navbar page={page} setPage={setPage} />

        {/* Floating Apps */}
        {page === 0 && <FloatingApps />}

        {/* Pages */}
        <div
          className="absolute left-0 right-0 bottom-0 overflow-visible"
          style={{
            top: "clamp(5rem,7.5vh,6rem)",
          }}
        >
          <motion.div
            className="flex h-full w-[500%] overflow-hidden"
            animate={{
              x: `-${page * 100}%`,
            }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 20,
            }}
          >
            {pages.map((Page, index) => (
              <div
                key={index}
                className="h-full w-full shrink-0"
              >
                <Page setPage={setPage} />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Social Links */}
        <div
          className="absolute left-1/2 z-50 -translate-x-1/2"
          style={{
            bottom: "clamp(0.8rem,2vh,2rem)",
          }}
        >
          <SocialLinks />
        </div>
      </div>
    </div>
  );
}