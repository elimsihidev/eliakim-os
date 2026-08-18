import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

const nav = [
  { label: "Home", id: "home" },
  { label: "Overview", id: "overview" },
  { label: "Projects", id: "projects" },
  { label: "Experience", id: "experience" },
  { label: "Contact", id: "contact" },
];

function scrollToSection(id: string) {
  const container = document.querySelector<HTMLElement>("main[data-mobile-scroll]");
  const target = document.getElementById(id);
  if (!container || !target) return;

  const top =
    target.getBoundingClientRect().top -
    container.getBoundingClientRect().top +
    container.scrollTop -
    88;

  container.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
  window.history.replaceState(null, "", `#${id}`);
}

export default function MobileNavbar() {
  const [open, setOpen] = useState(false);
  const [logoText, setLogoText] = useState("ELIAKIM");
  const [hidden, setHidden] = useState(false);
  // We need to target the mobile scroll container
  const containerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const findContainer = () => {
      const el = document.querySelector("main[data-mobile-scroll]");
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
      
      // Show only at top (threshold of 20px)
      if (currentScrollY > 20) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      
    };

    // Try to find container immediately
    if (!findContainer()) {
      // If not found, retry a few times
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
      
      // Human-like typing/deleting delay
      const humanDelay = (base: number) => base + Math.random() * 100;

      while (isMounted) {
        // Initial state: ELIAKIM stays for 3 seconds
        setLogoText("ELIAKIM");
        await wait(3000);
        if (!isMounted) break;
        
        // 1. Remove "AKIM" (ELIAKIM -> ELI)
        for (let i = 6; i >= 3; i--) {
          setLogoText("ELIAKIM".substring(0, i));
          await wait(humanDelay(100));
        }
        
        // ELI stays for 5 seconds
        await wait(5000);
        if (!isMounted) break;
        
        // 2. Remove "ELI" (ELI -> "")
        for (let i = 2; i >= 0; i--) {
          setLogoText("ELI".substring(0, i));
          await wait(humanDelay(80));
        }
        
        await wait(600);
        
        // 3. Type "ELI" ("" -> ELI)
        for (let i = 1; i <= 3; i++) {
          setLogoText("ELI".substring(0, i));
          await wait(humanDelay(150));
        }
        
        // ELI stays for 3 seconds
        await wait(3000);
        if (!isMounted) break;
        
        // 4. Remove "ELI" (ELI -> "")
        for (let i = 2; i >= 0; i--) {
          setLogoText("ELI".substring(0, i));
          await wait(humanDelay(80));
        }
        
        await wait(600);
        
        // 5. Type "ELIAKIM" ("" -> ELIAKIM)
        for (let i = 1; i <= 7; i++) {
          setLogoText("ELIAKIM".substring(0, i));
          await wait(humanDelay(180));
        }
        
        // Final ELIAKIM stays for 5 seconds before repeating
        await wait(5000);
      }
    };
    
    sequence();
    return () => { isMounted = false; };
  }, []);

  const navigate = (id: string) => {
    scrollToSection(id);
    setOpen(false);
  };

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
    <>
      <motion.header 
        variants={{
          visible: { y: 0, opacity: 1 },
          hidden: { y: "-100%", opacity: 0 },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-auto fixed inset-x-0 top-0 z-50 px-6 py-4 transition-all duration-500 sm:px-8 bg-transparent pt-10 sm:pt-12"
      >
        <div className="flex items-center justify-between">
          <button
            type="button"
            onClick={() => navigate("home")}
            style={{ fontFamily: "'HelloSeoul', sans-serif" }}
            className="pointer-events-auto text-[1.25rem] leading-none text-white transition-opacity hover:opacity-70"
            aria-label="Go to home"
          >
            {renderLogo()}
          </button>

          <button
            type="button"
            onClick={() => setOpen(true)}
            className="pointer-events-auto inline-flex items-center justify-center rounded-[8px] border border-white/10 bg-white/[0.03] px-5 py-2 text-[0.72rem] font-medium tracking-wide text-white/70 backdrop-blur-md transition-all hover:border-white/20 hover:text-white active:scale-95"
            aria-label="Open navigation"
          >
            Menu
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#08090a] px-6 text-white"
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute right-8 top-10 inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white transition-transform hover:scale-110 active:scale-90"
              aria-label="Close navigation"
            >
              <X size={20} strokeWidth={1.5} />
            </button>

            <nav className="flex flex-col items-center space-y-8" aria-label="Mobile navigation">
              {nav.map((item, index) => (
                <motion.button
                  key={item.id}
                  type="button"
                  onClick={() => navigate(item.id)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-[2.2rem] font-bold tracking-tight transition-colors hover:text-cyan-400"
                >
                  {item.label}
                </motion.button>
              ))}
            </nav>

            <p className="absolute bottom-10 text-[0.7rem] font-medium tracking-[0.1em] text-white/20">
              © 2026 Eliakim Msihi
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
