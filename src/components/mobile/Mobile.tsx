import { useEffect } from "react";
import MobileHero from "./MobileHero";
import MobileNavbar from "./MobileNavbar";
import MobileOverview from "./MobileOverview";
import MobileProjects from "./MobileProjects";
import MobileExperience from "./MobileExperience";
import MobileContact from "./MobileContact";

function scrollToHashTarget(hash = window.location.hash) {
  const id = hash.slice(1);
  if (!id) return;

  const container = document.querySelector<HTMLElement>("main[data-mobile-scroll]");
  const target = document.getElementById(id);
  if (!container || !target) return;

  const top =
    target.getBoundingClientRect().top -
    container.getBoundingClientRect().top +
    container.scrollTop -
    88;

  container.scrollTo({ top: Math.max(0, top), behavior: "instant" });
}

export default function Mobile() {
  useEffect(() => {
    const initialHash = window.location.hash;
    if (initialHash) {
      window.history.replaceState(null, "", window.location.pathname + window.location.search);
    }

    const frame = requestAnimationFrame(() => scrollToHashTarget(initialHash));
    const retry = window.setTimeout(() => scrollToHashTarget(initialHash), 350);
    const finalRetry = window.setTimeout(() => scrollToHashTarget(initialHash), 900);
    const handleHashChange = () => scrollToHashTarget();
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      cancelAnimationFrame(frame);
      window.clearTimeout(retry);
      window.clearTimeout(finalRetry);
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <div
      className="responsive-shell relative h-[100dvh] w-full overflow-hidden bg-[#08090a] text-white"
      style={{
        backgroundImage: "url('/images/profile-mobile.png')",
        backgroundPosition: "center top",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute inset-0 bg-[#08090a]/82" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#08090a]/65 via-[#08090a]/90 to-[#08090a]" />

      <div className="relative h-full overflow-hidden">
        <MobileNavbar />

        <main
          data-mobile-scroll
          className="absolute inset-0 z-0 overflow-y-auto overscroll-contain scroll-smooth pb-0 [-webkit-overflow-scrolling:touch] no-scrollbar"
        >
          <MobileHero />
          <MobileOverview />
          <MobileProjects />
          <MobileExperience />
          <MobileContact />
        </main>
      </div>
    </div>
  );
}
