import { useState, useCallback } from "react";
import { ThemeContext } from "@/context/ThemeContext";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function App() {
  const [isDark, setIsDark] = useState(true);

  const toggle = useCallback(() => {
    setIsDark((prev) => {
      const next = !prev;
      if (next) {
        document.body.classList.remove("light");
      } else {
        document.body.classList.add("light");
      }
      return next;
    });
  }, []);

  return (
    <ThemeContext.Provider value={{ isDark, toggle }}>
      <Navbar />
      <Hero />
      <div className="divider" />
      <About />
      <div className="divider" />
      <Experience />
      <div className="divider" />
      <Education />
      <div className="divider" />
      <Certifications />
      <div className="divider" />
      <Contact />
      <Footer />
    </ThemeContext.Provider>
  );
}
