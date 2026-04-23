import { useState, useRef, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

const navItems = [
  { label: "HOME", href: "#home", highlight: true },
  { label: "ABOUT", href: "#about" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "EDUCATION", href: "#education" },
  { label: "CERTIFICATIONS", href: "#certifications" },
  { label: "CONTACT", href: "#contact" },
];

export default function Navbar() {
  const { isDark, toggle } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMenuOpen &&
        menuRef.current &&
        buttonRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  const bg = isDark ? "rgba(0,0,0,0.75)" : "rgba(248,248,248,0.8)";
  const textCol = isDark ? "#fff" : "#0a0a0a";

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 px-6 py-5 transition-all duration-300"
      style={{
        backdropFilter: scrolled ? "blur(14px)" : "none",
        backgroundColor: scrolled ? bg : "transparent",
        borderBottom: scrolled
          ? `1px solid ${isDark ? "#1a1a1a" : "#e5e5e5"}`
          : "none",
      }}
    >
      <nav className="flex items-center justify-between max-w-screen-2xl mx-auto">
        {/* Menu Button */}
        <div className="relative">
          <button
            ref={buttonRef}
            type="button"
            className="p-2 transition-colors duration-300 z-50"
            style={{ color: isDark ? "#737373" : "#6b7280" }}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            onMouseEnter={(e) => (e.currentTarget.style.color = textCol)}
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = isDark ? "#737373" : "#6b7280")
            }
          >
            {isMenuOpen ? (
              <X className="w-7 h-7" strokeWidth={2} />
            ) : (
              <Menu className="w-7 h-7" strokeWidth={2} />
            )}
          </button>

          {isMenuOpen && (
            <div
              ref={menuRef}
              className="absolute top-full left-0 w-[220px] shadow-2xl mt-2 ml-2 p-4 rounded-xl z-[100] border"
              style={{
                backgroundColor: isDark ? "#0a0a0a" : "#fff",
                borderColor: isDark ? "#1a1a1a" : "#e5e5e5",
              }}
            >
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block text-base font-bold tracking-tight py-2 px-3 rounded-lg cursor-pointer transition-colors duration-300"
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    color: item.highlight
                      ? "#C3E41D"
                      : isDark
                      ? "#fff"
                      : "#0a0a0a",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#C3E41D";
                    e.currentTarget.style.background = isDark
                      ? "rgba(195,228,29,0.06)"
                      : "rgba(195,228,29,0.08)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = item.highlight
                      ? "#C3E41D"
                      : isDark
                      ? "#fff"
                      : "#0a0a0a";
                    e.currentTarget.style.background = "transparent";
                  }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          )}
        </div>

        {/* Signature */}
        <a
          href="#home"
          className="text-4xl select-none cursor-pointer transition-opacity hover:opacity-70"
          style={{
            color: textCol,
            fontFamily: "'Brush Script MT', 'Lucida Handwriting', cursive",
          }}
        >
          A
        </a>

        {/* Theme Toggle */}
        <button
          type="button"
          onClick={toggle}
          className="relative w-14 h-7 rounded-full hover:opacity-80 transition-opacity"
          style={{
            backgroundColor: isDark ? "#1a1a1a" : "#e5e5e5",
          }}
          aria-label="Toggle theme"
        >
          <div
            className="absolute top-0.5 left-0.5 w-6 h-6 rounded-full transition-transform duration-300"
            style={{
              backgroundColor: isDark ? "#fff" : "#0a0a0a",
              transform: isDark ? "translateX(1.75rem)" : "translateX(0)",
            }}
          />
        </button>
      </nav>
    </header>
  );
}
