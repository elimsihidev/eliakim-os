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

  const Page = pages[page];

  return (
    <div
      className="relative min-h-screen overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2200)",
      }}
    >
      {/* Outer background */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Main glass window */}
      <div
        className="absolute inset-[clamp(1rem,2vw,2rem)] overflow-hidden rounded-[40px] border border-white/10 shadow-2xl"
        style={{
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
        <Navbar
          page={page}
          setPage={setPage}
        />

        {/* Floating Adobe / Blender / DaVinci apps */}
        {page === 0 && <FloatingApps />}

        {/* Current page */}
        <main className="absolute inset-x-0 bottom-0 top-18 overflow-hidden">
          <motion.div
            key={page}
            className="h-full w-full"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.35,
              ease: "easeOut",
            }}
          >
            <Page setPage={setPage} />
          </motion.div>
        </main>


        {/* Social links — hidden on Overview, Projects, Experience */}
        {page !== 1 && page !== 2 && page !== 3 && (
          <div className="absolute bottom-[clamp(0.8rem,2vh,2rem)] left-1/2 z-50 -translate-x-1/2">
            <SocialLinks />
          </div>
        )}

      </div>
    </div>
  );
}