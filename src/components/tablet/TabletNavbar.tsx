import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface TabletNavbarProps {
  page: number;
  setPage: (page: number) => void;
}

const nav = ["Home", "Overview", "Projects", "Experience", "Contact"];

export default function TabletNavbar({ page, setPage }: TabletNavbarProps) {
  const [logoText, setLogoText] = useState("ELIAKIM");
  const [hidden, setHidden] = useState(false);
  const containerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const findContainer = () => {
      const el = document.querySelector("main[data-tablet-scroll]");
      if (el) {
        containerRef.current = el as HTMLElement;
        el.addEventListener("scroll", handleScroll);
        return true;
      }
      return false;
    };

    const handleScroll = () => {
      if (!containerRef.current) return;
      const currentScrollY = containerRef.current.scrollTop;
      
      // Show only at top
      if (currentScrollY > 20) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      
    };

    if (!findContainer()) {
      const interval = setInterval(() => {
        if (findContainer()) clearInterval(interval);
      }, 100);
      return () => {
        clearInterval(interval);
        if (containerRef.current) {
          containerRef.current.removeEventListener("scroll", handleScroll);
        }
      };
    }

    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  useEffect(() => {
    let isMounted = true;
    const sequence = async () => {
      const wait = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
      const humanDelay = (base: number) => base + Math.random() * 100;

      while (isMounted) {
        setLogoText("ELIAKIM");
        await wait(3000);
        if (!isMounted) break;
        
        for (let i = 6; i >= 3; i--) {
          setLogoText("ELIAKIM".substring(0, i));
          await wait(humanDelay(100));
        }
        
        await wait(5000);
        if (!isMounted) break;
        
        for (let i = 2; i >= 0; i--) {
          setLogoText("ELI".substring(0, i));
          await wait(humanDelay(80));
        }
        
        await wait(600);
        
        for (let i = 1; i <= 3; i++) {
          setLogoText("ELI".substring(0, i));
          await wait(humanDelay(150));
        }
        
        await wait(3000);
        if (!isMounted) break;
        
        for (let i = 2; i >= 0; i--) {
          setLogoText("ELI".substring(0, i));
          await wait(humanDelay(80));
        }
        
        await wait(600);
        
        for (let i = 1; i <= 7; i++) {
          setLogoText("ELIAKIM".substring(0, i));
          await wait(humanDelay(180));
        }
        
        await wait(5000);
      }
    };
    
    sequence();
    return () => { isMounted = false; };
  }, []);

  const renderLogo = () => {
    const eli = logoText.substring(0, 3);
    const akim = logoText.substring(3);
    return (
      <>
        <span>{eli}</span>
        <span className="text-cyan-400">{akim}</span>
      </>
    );
  };

  return (
    <motion.header 
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: "-100%", opacity: 0 },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-30 transition-all duration-500 px-8 py-5 lg:px-12 bg-transparent"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-8">
        <button
          type="button"
          onClick={() => setPage(0)}
          style={{ fontFamily: "'HelloSeoul', sans-serif" }}
          className="shrink-0 text-left text-[1.4rem] leading-none text-white transition-opacity hover:opacity-70"
          aria-label="Go to home"
        >
          {renderLogo()}
        </button>

        <nav className="flex items-center gap-6 md:gap-8 lg:gap-12" aria-label="Primary navigation">
          {nav.map((label, index) => {
            const active = index === page;
            return (
              <button
                key={label}
                type="button"
                onClick={() => setPage(index)}
                aria-current={active ? "page" : undefined}
                className={`group relative py-2 text-[0.72rem] font-bold uppercase tracking-[0.2em] transition-colors ${
                  active ? "text-cyan-400" : "text-white/40 hover:text-white"
                }`}
              >
                {label}
                {active && (
                  <motion.span
                    layoutId="tablet-active-nav"
                    className="absolute -bottom-1 left-0 right-0 h-px bg-cyan-400"
                  />
                )}
              </button>
            );
          })}
        </nav>

        <p className="hidden text-right text-[0.58rem] font-medium uppercase tracking-[0.16em] text-white/35 xl:block">
          Dar es Salaam
          <br />
          Tanzania / 2026
        </p>
      </div>
    </motion.header>
  );
}

export type { TabletNavbarProps };
