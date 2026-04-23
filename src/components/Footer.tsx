import { Heart } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

export default function Footer() {
  const { isDark } = useTheme();

  return (
    <footer
      className="py-10 px-6 text-center border-t"
      style={{
        borderColor: isDark ? "#0f0f0f" : "#e5e5e5",
      }}
    >
      <p
        className="text-xs flex items-center justify-center gap-1.5"
        style={{
          fontFamily: "'Fira Code', monospace",
          color: isDark ? "#404040" : "#a3a3a3",
        }}
      >
        © {new Date().getFullYear()} Akshat Yadav. Built with{" "}
        <Heart className="w-3 h-3 inline" style={{ color: "#C3E41D" }} />{" "}
        and curiosity.
      </p>
    </footer>
  );
}
