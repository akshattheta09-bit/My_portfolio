import { ChevronDown } from "lucide-react";
import BlurText from "@/components/ui/BlurText";
import { useTheme } from "@/context/ThemeContext";

export default function Hero() {
  const { isDark } = useTheme();

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col"
      style={{
        backgroundColor: isDark ? "#000" : "#f8f8f8",
      }}
    >
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: isDark
            ? "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.03) 1px, transparent 0)"
            : "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.03) 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Main Name — Center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-4">
        <div className="relative text-center">
          <div>
            <BlurText
              text="AKSHAT"
              delay={100}
              animateBy="letters"
              direction="top"
              className="font-bold text-[100px] sm:text-[140px] md:text-[180px] lg:text-[210px] leading-[0.75] tracking-tighter uppercase justify-center whitespace-nowrap"
              style={{
                color: isDark ? "var(--text-dark)" : "var(--text-light)",
                fontFamily: "'Fira Code', monospace",
              }}
            />
          </div>
          <div>
            <BlurText
              text="YADAV"
              delay={100}
              animateBy="letters"
              direction="top"
              className="font-bold text-[100px] sm:text-[140px] md:text-[180px] lg:text-[210px] leading-[0.75] tracking-tighter uppercase justify-center whitespace-nowrap"
              style={{
                color: isDark ? "var(--text-dark)" : "var(--text-light)",
                fontFamily: "'Fira Code', monospace",
              }}
            />
          </div>
        </div>
      </div>

      {/* Tagline */}
      <div className="absolute bottom-16 sm:bottom-20 md:bottom-24 lg:bottom-32 xl:bottom-36 left-1/2 -translate-x-1/2 w-full px-6">
        <div className="flex justify-center">
          <BlurText
            text="Building practical AI solutions & scalable systems."
            delay={150}
            animateBy="words"
            direction="top"
            className="text-[15px] sm:text-[18px] md:text-[20px] lg:text-[22px] text-center transition-colors duration-300"
            style={{
              fontFamily: "'Antic', sans-serif",
              color: isDark ? "#737373" : "#6b7280",
            }}
          />
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        type="button"
        className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 transition-colors duration-300"
        aria-label="Scroll down"
        onClick={() =>
          document
            .getElementById("about")
            ?.scrollIntoView({ behavior: "smooth" })
        }
      >
        <ChevronDown
          className="w-5 h-5 md:w-8 md:h-8 transition-colors duration-300 text-neutral-500 hover:text-black dark:hover:text-white"
          style={{
            color: isDark ? "#737373" : "#9ca3af",
            animation: "chevron-bounce 2s ease-in-out infinite",
          }}
        />
      </button>
    </section>
  );
}
