import { Mail, ArrowUpRight } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { useFadeIn } from "@/hooks/useFadeIn";

const LinkedinIcon = (props: any) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const GithubIcon = (props: any) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const socials = [
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    href: "https://linkedin.com/in/akshat-yadav-614a56379",
    color: "#0A66C2",
    dynamicColor: false,
  },
  {
    icon: GithubIcon,
    label: "GitHub",
    href: "https://github.com/",
    dynamicColor: true,
  },
  {
    icon: Mail,
    label: "Email",
    href: "mailto:hello@akshatyadav.com",
    dynamicColor: true,
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
                const hoverColor = s.dynamicColor ? (isDark ? "#ffffff" : "#000000") : s.color;
                (e.currentTarget as HTMLElement).style.borderColor = hoverColor!;
                (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 30px ${hoverColor}15`;
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
                style={{ color: s.dynamicColor ? (isDark ? "var(--text-dark)" : "var(--text-light)") : s.color }}
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
                style={{ color: s.dynamicColor ? (isDark ? "var(--text-dark)" : "var(--text-light)") : s.color }}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
