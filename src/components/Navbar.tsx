import { useState, useRef, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

const navItems = [
  { label: "HOME", href: "#home", highlight: true },
  { label: "ABOUT", href: "#about" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "EDUCATION", href: "#education" },
  { label: "SKILLS", href: "#skills" },
  { label: "EXPERTISE", href: "#services" },
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
        <div>
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

        </div>

        {/* Sliding Sidebar Menu */}
        <>
          {/* Backdrop */}
          <div
            className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[90] transition-opacity duration-300 ${
              isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Sidebar */}
          <div
            ref={menuRef}
            className={`fixed top-0 left-0 bottom-0 w-[300px] max-w-[80vw] z-[100] shadow-2xl transition-transform duration-500 cubic-bezier(0.16, 1, 0.3, 1) border-r flex flex-col`}
            style={{
              backgroundColor: isDark ? "#050505" : "#fafafa",
              borderColor: isDark ? "#1f1f1f" : "#eaeaea",
              transform: isMenuOpen ? "translateX(0)" : "translateX(-100%)",
            }}
          >
            <div className="flex items-center justify-between p-6 border-b" style={{ borderColor: isDark ? "#1f1f1f" : "#eaeaea" }}>
              <span className="font-bold text-lg tracking-widest" style={{ fontFamily: 'var(--font-heading)', color: textCol }}>NAVIGATION</span>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 rounded-full transition-colors hover:bg-black/5 dark:hover:bg-white/5"
              >
                <X className="w-6 h-6" style={{ color: textCol }} />
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto py-8 px-6 flex flex-col gap-2">
              {navItems.map((item, i) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="group flex items-center justify-between text-lg font-medium tracking-wide py-4 px-4 rounded-xl cursor-pointer transition-all duration-300"
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    color: item.highlight ? "var(--text-dark)" : (isDark ? "#a3a3a3" : "#555555"),
                    transform: isMenuOpen ? "translateX(0)" : "translateX(-20px)",
                    opacity: isMenuOpen ? 1 : 0,
                    transitionDelay: `${i * 50}ms`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = isDark ? "#ffffff" : "#000000";
                    e.currentTarget.style.background = isDark
                      ? "rgba(255,255,255,0.05)"
                      : "rgba(0,0,0,0.05)";
                    e.currentTarget.style.paddingLeft = "1.5rem";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = item.highlight ? "var(--text-dark)" : (isDark ? "#a3a3a3" : "#555555");
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.paddingLeft = "1rem";
                  }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </>

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
          className="relative w-16 h-8 rounded-full hover:opacity-80 transition-opacity"
          style={{ backgroundColor: isDark ? "hsl(0 0% 15%)" : "hsl(0 0% 90%)" }}
          aria-label="Toggle theme"
        >
          <div
            className="absolute top-1 left-1 w-6 h-6 rounded-full transition-transform duration-300"
            style={{
              backgroundColor: isDark ? "hsl(0 0% 100%)" : "hsl(0 0% 10%)",
              transform: isDark ? "translateX(2rem)" : "translateX(0)",
            }}
          />
        </button>
      </nav>
    </header>
  );
}
