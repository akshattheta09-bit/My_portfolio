import { ExternalLink, ShieldCheck } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { useFadeIn } from "@/hooks/useFadeIn";

const certifications = [
  {
    title: "APIs",
    issuer: "Meta",
    date: "Apr 2026",
    skills: ["Insomnia", "API Development"],
  },
  {
    title: "Django Web Framework",
    issuer: "Meta",
    date: "Feb 2026",
    skills: ["Django", "Django REST Framework"],
  },
  {
    title: "Introduction to Containers w/ Docker, Kubernetes & OpenShift",
    issuer: "IBM",
    date: "Feb 2026",
    skills: ["Docker", "Kubernetes"],
  },
  {
    title: "Introduction to Databases for Back-End Development",
    issuer: "Meta",
    date: "Jan 2026",
    skills: ["SQL", "DBMS"],
  },
  {
    title: "Introduction to Back-End Development",
    issuer: "Meta",
    date: "Nov 2025",
    skills: ["Web Development", "Internet Protocol"],
  },
  {
    title: "Version Control",
    issuer: "Meta",
    date: "Dec 2025",
    skills: ["Git", "GitHub"],
  },
  {
    title: "Programming in Python",
    issuer: "Meta",
    date: "2025",
    skills: ["Python"],
  },
];

export default function Certifications() {
  const { isDark } = useTheme();
  const fade = useFadeIn();

  const issuerColors: Record<string, string> = {
    Meta: "#0668E1",
    IBM: "#0F62FE",
  };

  return (
    <section id="certifications" className="section">
      <div
        ref={fade.ref}
        className={`fade-section ${fade.visible ? "visible" : ""}`}
      >
        <span className="section-label">CERTIFICATIONS</span>
        <h2 className="section-title">Credentials & learning.</h2>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
          {certifications.map((cert, i) => (
            <div
              key={i}
              className="card group cursor-pointer relative overflow-hidden"
            >
              {/* Issuer accent stripe */}
              <div
                className="absolute top-0 left-0 w-full h-[2px]"
                style={{
                  background: `linear-gradient(to right, ${
                    issuerColors[cert.issuer] || "var(--text-dark)"
                  }, transparent)`,
                  opacity: 0.5,
                }}
              />

              <div className="flex items-start gap-4">
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{
                    background: isDark
                      ? "rgba(255,255,255,0.05)"
                      : "rgba(0,0,0,0.04)",
                    border: `1px solid ${isDark ? "#1a1a1a" : "#e5e5e5"}`,
                  }}
                >
                  <ShieldCheck
                    className="w-5 h-5"
                    style={{
                      color: issuerColors[cert.issuer] || "var(--text-dark)",
                    }}
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <h4
                    className="text-sm font-semibold leading-tight mb-1 flex items-center gap-2"
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      color: isDark ? "#fff" : "#0a0a0a",
                    }}
                  >
                    <span className="truncate">{cert.title}</span>
                    <ExternalLink className="w-3 h-3 flex-shrink-0 opacity-0 group-hover:opacity-50 transition-opacity" />
                  </h4>
                  <p
                    className="text-xs font-medium"
                    style={{
                      color: issuerColors[cert.issuer] || "var(--text-dark)",
                    }}
                  >
                    {cert.issuer}
                  </p>
                  <p
                    className="text-[11px] mt-1"
                    style={{ color: isDark ? "#525252" : "#9ca3af" }}
                  >
                    Issued {cert.date}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {cert.skills.map((s) => (
                      <span
                        key={s}
                        className="text-[10px] font-medium px-2 py-0.5 rounded-full"
                        style={{
                          background: isDark
                            ? "rgba(255,255,255,0.05)"
                            : "rgba(0,0,0,0.04)",
                          color: isDark ? "#a3a3a3" : "#6b7280",
                          border: `1px solid ${
                            isDark ? "#1f1f1f" : "#e5e5e5"
                          }`,
                        }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
