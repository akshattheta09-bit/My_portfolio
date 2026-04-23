import { GraduationCap, Award } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { useFadeIn } from "@/hooks/useFadeIn";

export default function Education() {
  const { isDark } = useTheme();
  const fade = useFadeIn();

  return (
    <section id="education" className="section">
      <div
        ref={fade.ref}
        className={`fade-section ${fade.visible ? "visible" : ""}`}
      >
        <span className="section-label">EDUCATION</span>
        <h2 className="section-title">Academic foundation.</h2>

        <div className="mt-12">
          <div className="card relative overflow-hidden">
            {/* Gradient accent */}
            <div
              className="absolute top-0 right-0 w-48 h-48 rounded-full opacity-5 pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle, #C3E41D 0%, transparent 70%)",
                transform: "translate(30%, -30%)",
              }}
            />

            <div className="flex flex-col md:flex-row gap-8">
              {/* Icon */}
              <div
                className="flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center"
                style={{
                  background: isDark
                    ? "rgba(195,228,29,0.08)"
                    : "rgba(195,228,29,0.1)",
                  border: "1px solid rgba(195,228,29,0.15)",
                }}
              >
                <GraduationCap className="w-7 h-7" style={{ color: "var(--text-dark)" }} />
              </div>

              {/* Details */}
              <div className="flex-1">
                <h3
                  className="text-2xl font-bold mb-1"
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    color: isDark ? "#fff" : "#0a0a0a",
                  }}
                >
                  Lovely Professional University
                </h3>
                <p
                  className="text-sm font-medium mb-1"
                  style={{ color: "var(--text-dark)" }}
                >
                  Bachelor of Technology — Data Science and Machine Learning
                </p>
                <p
                  className="text-xs mb-4"
                  style={{ color: isDark ? "#737373" : "#9ca3af" }}
                >
                  upGrad Collaboration · Aug 2025 – Jul 2029
                </p>

                <div className="flex flex-wrap gap-6 mb-6">
                  <div
                    className="flex items-center gap-3 px-5 py-3 rounded-xl"
                    style={{
                      background: isDark
                        ? "rgba(195,228,29,0.06)"
                        : "rgba(195,228,29,0.08)",
                      border: "1px solid rgba(195,228,29,0.12)",
                    }}
                  >
                    <Award className="w-5 h-5" style={{ color: "var(--text-dark)" }} />
                    <div>
                      <p
                        className="text-2xl font-bold"
                        style={{
                          fontFamily: "'Fira Code', monospace",
                          color: "var(--text-dark)",
                        }}
                      >
                        9.21
                      </p>
                      <p
                        className="text-[10px] uppercase tracking-widest font-semibold"
                        style={{ color: isDark ? "#737373" : "#9ca3af" }}
                      >
                        Current CGPA
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {[
                    "Python",
                    "Machine Learning",
                    "Data Science",
                    "AI Systems",
                    "Backend Development",
                    "SQL",
                    "Docker",
                    "Git",
                  ].map((s) => (
                    <span key={s} className="tag">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
