import { Code2, MonitorPlay, KanbanSquare, BrainCircuit } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { useFadeIn } from "@/hooks/useFadeIn";

const services = [
  {
    icon: BrainCircuit,
    title: "Data Science & AI",
    desc: "Developing intelligent, data-driven solutions and automation models to solve real-world problems efficiently.",
  },
  {
    icon: MonitorPlay,
    title: "Video Editing & Production",
    desc: "Delivering high-quality video editing and post-production services for various clients with a focus on creative direction.",
  },
  {
    icon: Code2,
    title: "Digital Systems",
    desc: "Building scalable web applications, task management tools, and practical software solutions from the ground up.",
  },
  {
    icon: KanbanSquare,
    title: "Project Management",
    desc: "Managing timelines, corporate outreach, and client communication to ensure smooth project execution and delivery.",
  },
];

export default function Services() {
  const { isDark } = useTheme();
  const fade = useFadeIn();

  return (
    <section id="services" className="section">
      <div
        ref={fade.ref}
        className={`fade-section ${fade.visible ? "visible" : ""}`}
      >
        <span className="section-label">EXPERTISE</span>
        <h2 className="section-title">What I Do.</h2>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              className="card group hover:-translate-y-2 transition-all duration-500"
            >
              <div className="mb-6 inline-flex p-4 rounded-full" style={{ backgroundColor: isDark ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.03)' }}>
                <service.icon
                  className="w-8 h-8"
                  style={{ color: isDark ? 'var(--text-dark)' : 'var(--text-light)' }}
                  strokeWidth={1.5}
                />
              </div>
              <h3
                className="text-2xl font-semibold mb-3"
                style={{
                  fontFamily: "var(--font-heading)",
                  color: isDark ? "#fff" : "#0a0a0a",
                }}
              >
                {service.title}
              </h3>
              <p
                className="text-base leading-relaxed"
                style={{ color: isDark ? "#a3a3a3" : "#6b7280" }}
              >
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
