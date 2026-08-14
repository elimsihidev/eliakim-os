import MobileNavbar from "./MobileNavbar";
import MobileHero from "./MobileHero";
import MobileOverview from "./MobileOverview";
import MobileProjects from "./MobileProjects";
import MobileExperience from "./MobileExperience";
import MobileContact from "./MobileContact";
import MobileSocials from "./MobileSocials";

export default function Mobile() {
  return (
    <div
      className="
      relative
      min-h-screen
      bg-cover
      bg-center
      "
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200)",
      }}
    >
      {/* Background */}

      <div
        className="
        absolute
        inset-0
        bg-black/60
        backdrop-blur-sm
        "
      />

      {/* Glass Window */}

      <div
        className="
        absolute
        inset-3
        rounded-[35px]
        border
        border-white/10
        shadow-2xl
        overflow-hidden
        "
        style={{
          backgroundImage: `
            linear-gradient(
              180deg,
              rgba(10,10,10,.92) 0%,
              rgba(10,10,10,.82) 100%
            )
          `,
          backdropFilter: "blur(28px)",
        }}
      >
        <MobileNavbar />

        <div
          className="
          absolute
          inset-0
          pt-16
          overflow-y-auto
          scroll-smooth
          "
        >
          <section id="home">
            <MobileHero />
          </section>

          <section id="overview">
            <MobileOverview />
          </section>

          <section id="projects">
            <MobileProjects />
          </section>

          <section id="experience">
            <MobileExperience />
          </section>

          <section id="contact">
            <MobileContact />
          </section>

          <MobileSocials />
        </div>
      </div>
    </div>
  );
}