import { Calendar, MapPin, ExternalLink } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { useFadeIn } from "@/hooks/useFadeIn";

const experiences = [
  {
    role: "Corporate Outreach",
    org: "LPU School of Computer Science Engineering",
    type: "Part-time",
    period: "Aug 2025 – Present",
    location: "Punjab, India · On-site",
    description:
      "Contributing to corporate outreach initiatives, bridging connections between the university and industry partners to create opportunities for students and faculty.",
    tags: ["Communication", "Networking", "Event Management"],
  },
  {
    role: "Member — RISC",
    org: "Robotics and Intelligent System Community (LPU)",
    type: "Part-time",
    period: "Aug 2025 – Present",
    location: "Punjab, India · On-site",
    description:
      "Collaborated with a team of developers to design, program, and implement various AI-driven projects and hardware integrations. Contributing to group-based initiatives related to artificial intelligence and system development.",
    tags: ["AI", "Robotics", "Team Collaboration", "Hardware"],
  },
  {
    role: "Freelance Video Editor & Manager",
    org: "Independent",
    type: "Freelance",
    period: "Ongoing",
    location: "Remote",
    description:
      "Handled video editing and managerial tasks for various clients, delivering high-quality content and ensuring smooth project execution. Managed timelines, creative direction, and client communication.",
    tags: ["Video Editing", "Project Management", "Freelance", "Communication"],
  },
];

export default function Experience() {
  const { isDark } = useTheme();
  const fade = useFadeIn();

  return (
    <section id="experience" className="section">
      <div
        ref={fade.ref}
        className={`fade-section ${fade.visible ? "visible" : ""}`}
      >
        <span className="section-label">EXPERIENCE</span>
        <h2 className="section-title">
          Where I've contributed.
        </h2>

        <div className="mt-12 space-y-6">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="card group relative overflow-hidden"
            >
              {/* Accent line */}
              <div
                className="absolute top-0 left-0 w-1 h-full rounded-l-2xl transition-all duration-300"
                style={{
                  background: "linear-gradient(to bottom, var(--text-dark), transparent)",
                  opacity: 0.5,
                }}
              />

              <div className="pl-5">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h3
                      className="text-xl font-bold"
                      style={{
                        fontFamily: "'Outfit', sans-serif",
                        color: isDark ? "#fff" : "#0a0a0a",
                      }}
                    >
                      {exp.role}
                    </h3>
                    <p
                      className="text-sm font-medium mt-1 flex items-center gap-2"
                      style={{ color: isDark ? "var(--text-dark)" : "var(--text-light)" }}
                    >
                      {exp.org}
                      <ExternalLink className="w-3 h-3 opacity-50" />
                    </p>
                  </div>
                  <span className="tag">{exp.type}</span>
                </div>

                <div
                  className="flex flex-wrap gap-4 text-xs mb-4"
                  style={{ color: isDark ? "#737373" : "#9ca3af" }}
                >
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" /> {exp.period}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" /> {exp.location}
                  </span>
                </div>

                <p
                  className="text-sm leading-relaxed mb-5"
                  style={{ color: isDark ? "#a3a3a3" : "#6b7280" }}
                >
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
