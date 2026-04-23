import { Mail, Linkedin, Github, ArrowUpRight } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { useFadeIn } from "@/hooks/useFadeIn";

const socials = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/akshat-yadav-614a56379",
    color: "#0A66C2",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/",
    color: "#C3E41D",
  },
  {
    icon: Mail,
    label: "Email",
    href: "mailto:hello@akshatyadav.com",
    color: "#C3E41D",
  },
];

export default function Contact() {
  const { isDark } = useTheme();
  const fade = useFadeIn();

  return (
    <section id="contact" className="section">
      <div
        ref={fade.ref}
        className={`fade-section ${fade.visible ? "visible" : ""}`}
      >
        <span className="section-label">CONTACT</span>
        <h2 className="section-title">
          Let's work together.
        </h2>
        <p className="section-text mb-12">
          I'm always open to interesting conversations, collaboration opportunities,
          freelance work, or just a friendly hello. Feel free to reach out.
        </p>

        <div className="flex flex-wrap gap-4">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-6 py-4 rounded-2xl border transition-all duration-300 hover:-translate-y-1 text-decoration-none"
              style={{
                background: isDark
                  ? "rgba(255,255,255,0.02)"
                  : "rgba(0,0,0,0.02)",
                borderColor: isDark ? "#1a1a1a" : "#e5e5e5",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = s.color;
                (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 30px ${s.color}15`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = isDark
                  ? "#1a1a1a"
                  : "#e5e5e5";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              <s.icon
                className="w-5 h-5 transition-colors"
                style={{ color: s.color }}
              />
              <span
                className="font-medium text-sm"
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  color: isDark ? "#fff" : "#0a0a0a",
                }}
              >
                {s.label}
              </span>
              <ArrowUpRight
                className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ color: s.color }}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
