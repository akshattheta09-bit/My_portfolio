import {
  BrainCircuit,
  TrendingUp,
  Briefcase,
  Wrench,
  ArrowRight,
} from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { useFadeIn } from "@/hooks/useFadeIn";

const interests = [
  {
    icon: BrainCircuit,
    title: "AI & Automation",
    desc: "Building intelligent systems that automate workflows and improve decision-making through practical AI applications.",
  },
  {
    icon: TrendingUp,
    title: "Quantitative Thinking",
    desc: "Exploring data-driven and quantitative approaches to problem-solving. Bronze Level in the WorldQuant Challenge.",
  },
  {
    icon: Briefcase,
    title: "Business & Freelance",
    desc: "Understanding how technology intersects with business growth, scalability, and entrepreneurship.",
  },
  {
    icon: Wrench,
    title: "Scalable Systems",
    desc: "Designing solutions that start small and can expand into larger, impactful tools over time.",
  },
];

export default function About() {
  const { isDark } = useTheme();
  const fadeOne = useFadeIn();
  const fadeTwo = useFadeIn();
  const fadeThree = useFadeIn();

  return (
    <section id="about" className="section">
      <div
        ref={fadeOne.ref}
        className={`fade-section ${fadeOne.visible ? "visible" : ""}`}
      >
        <span className="section-label">ABOUT</span>
        <h2 className="section-title">
          Aspiring builder.<br />
          Learning by doing.
        </h2>
      </div>

      <div
        ref={fadeTwo.ref}
        className={`fade-section ${fadeTwo.visible ? "visible" : ""} mt-8 grid grid-cols-1 lg:grid-cols-5 gap-12`}
      >
        {/* Text Column */}
        <div className="lg:col-span-3 space-y-6">
          <p className="section-text">
            I am a B.Tech student in Data Science and Machine Learning at Lovely Professional University
            (with upGrad collaboration), with a growing interest in building practical and scalable digital systems.
          </p>
          <p className="section-text">
            My work so far has been centered around exploring how software and automation can solve real-world problems
            in simple and efficient ways. I have built several small to mid-scale projects, including tools for task management,
            data extraction, and basic application systems.
          </p>
          <p className="section-text">
            I am an aspiring entrepreneur and technology enthusiast with a strong interest in artificial intelligence,
            automation, and scalable digital systems. My focus is on building practical solutions that leverage AI
            to improve efficiency, decision-making, and business growth.
          </p>

          {/* How I Work */}
          <div
            className="mt-10 p-6 rounded-2xl border"
            style={{
              background: isDark
                ? "rgba(195,228,29,0.03)"
                : "rgba(195,228,29,0.05)",
              borderColor: isDark
                ? "rgba(195,228,29,0.1)"
                : "rgba(195,228,29,0.15)",
            }}
          >
            <h3
              className="text-sm font-bold tracking-widest uppercase mb-3"
              style={{
                fontFamily: "'Fira Code', monospace",
                color: "#C3E41D",
              }}
            >
              How I Work
            </h3>
            <p
              className="text-sm leading-relaxed"
              style={{ color: isDark ? "#a3a3a3" : "#6b7280" }}
            >
              I prefer a hands-on and iterative approach to learning. I start with small ideas,
              build simple versions, and improve them over time. I focus on clarity, functionality,
              and understanding the core problem before adding complexity. I value consistency
              over intensity and aim to build a strong foundation by continuously experimenting,
              learning, and refining my work.
            </p>
          </div>

          {/* Current Direction */}
          <div
            className="p-6 rounded-2xl border"
            style={{
              background: isDark
                ? "rgba(255,255,255,0.02)"
                : "rgba(0,0,0,0.02)",
              borderColor: isDark ? "#1a1a1a" : "#e5e5e5",
            }}
          >
            <h3
              className="text-sm font-bold tracking-widest uppercase mb-3"
              style={{
                fontFamily: "'Fira Code', monospace",
                color: "#C3E41D",
              }}
            >
              Current Direction
            </h3>
            <p
              className="text-sm leading-relaxed"
              style={{ color: isDark ? "#a3a3a3" : "#6b7280" }}
            >
              Currently exploring the intersection of automation, intelligent systems, and
              scalable digital tools. I am interested in how small systems can be expanded
              into larger, more useful solutions over time. I am also gradually exploring
              areas like data-driven decision making and quantitative approaches, with the
              goal of applying them in practical scenarios.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 mt-4 text-sm font-medium transition-colors"
              style={{ color: "#C3E41D" }}
            >
              Let's connect <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Interest Cards */}
        <div
          ref={fadeThree.ref}
          className={`fade-section ${fadeThree.visible ? "visible" : ""} lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4`}
        >
          {interests.map((item) => (
            <div key={item.title} className="card group">
              <item.icon
                className="w-6 h-6 mb-4 transition-colors duration-300"
                style={{ color: "#C3E41D" }}
              />
              <h4
                className="text-base font-semibold mb-2"
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  color: isDark ? "#fff" : "#0a0a0a",
                }}
              >
                {item.title}
              </h4>
              <p
                className="text-sm leading-relaxed"
                style={{ color: isDark ? "#737373" : "#6b7280" }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
