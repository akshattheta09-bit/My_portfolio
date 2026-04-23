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
              className="font-bold text-[72px] sm:text-[110px] md:text-[150px] lg:text-[190px] leading-[0.8] tracking-tighter uppercase justify-center whitespace-nowrap"
              style={{
                color: "#C3E41D",
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
              className="font-bold text-[72px] sm:text-[110px] md:text-[150px] lg:text-[190px] leading-[0.8] tracking-tighter uppercase justify-center whitespace-nowrap"
              style={{
                color: "#C3E41D",
                fontFamily: "'Fira Code', monospace",
              }}
            />
          </div>

          {/* Profile Picture Overlay */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <div
              className="w-[60px] h-[100px] sm:w-[85px] sm:h-[144px] md:w-[105px] md:h-[178px] lg:w-[120px] lg:h-[200px] rounded-full overflow-hidden shadow-2xl transition-transform duration-300 hover:scale-110 cursor-pointer"
              style={{
                border: `2px solid ${isDark ? "rgba(195,228,29,0.3)" : "rgba(195,228,29,0.5)"}`,
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=500&fit=crop&crop=face"
                alt="Akshat Yadav"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Tagline */}
      <div className="absolute bottom-16 sm:bottom-20 md:bottom-24 lg:bottom-32 left-1/2 -translate-x-1/2 w-full px-6">
        <div className="flex justify-center">
          <BlurText
            text="Building practical solutions with AI, automation & scalable systems."
            delay={120}
            animateBy="words"
            direction="top"
            className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] text-center transition-colors duration-300"
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
          className="w-5 h-5 md:w-7 md:h-7 transition-colors duration-300"
          style={{
            color: isDark ? "#737373" : "#9ca3af",
            animation: "chevron-bounce 2s ease-in-out infinite",
          }}
        />
      </button>
    </section>
  );
}
