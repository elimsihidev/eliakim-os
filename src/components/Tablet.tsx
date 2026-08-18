import { useState, useEffect } from "react";
import TabletNavbar from "./tablet/TabletNavbar";
import TabletHome from "./tablet/TabletHome";
import TabletOverview from "./tablet/TabletOverview";
import TabletProjects from "./tablet/TabletProjects";
import TabletExperience from "./tablet/TabletExperience";
import TabletContact from "./tablet/TabletContact";

function scrollToSection(id: string) {
  const container = document.querySelector<HTMLElement>("main[data-tablet-scroll]");
  const target = document.getElementById(id);
  if (!container || !target) return;

  const top =
    target.getBoundingClientRect().top -
    container.getBoundingClientRect().top +
    container.scrollTop -
    80;

  container.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
}

export default function Tablet() {
  const [activePage, setActivePage] = useState(0);

  useEffect(() => {
    const container = document.querySelector("main[data-tablet-scroll]");
    if (!container) return;

    const handleScroll = () => {
      const sections = ["home", "overview", "projects", "experience", "contact"];
      const scrollPos = container.scrollTop + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActivePage(i);
          break;
        }
      }
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="responsive-shell relative h-[100dvh] w-full overflow-hidden bg-[#08090a] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_75%_10%,rgba(34,211,238,0.08),transparent_32%),linear-gradient(135deg,#08090a_0%,#0b0c0d_100%)]" />

      <div className="relative z-10 h-full">
        <TabletNavbar 
          page={activePage} 
          setPage={(idx) => {
            const sections = ["home", "overview", "projects", "experience", "contact"];
            scrollToSection(sections[idx]);
          }} 
        />

        <main 
          data-tablet-scroll
          className="absolute inset-0 z-0 overflow-y-auto overscroll-contain scroll-smooth pb-0 no-scrollbar"
        >
          <div id="home"><TabletHome setPage={(idx) => scrollToSection(["home", "overview", "projects", "experience", "contact"][idx])} /></div>
          <div id="overview"><TabletOverview /></div>
          <div id="projects"><TabletProjects /></div>
          <div id="experience"><TabletExperience /></div>
          <div id="contact"><TabletContact /></div>
        </main>
      </div>
    </div>
  );
}
