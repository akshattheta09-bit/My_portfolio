import { ArrowRight, Award } from "lucide-react"
import { useTheme } from "@/context/ThemeContext"

interface PortfolioGalleryProps {
  title?: string;
  archiveButton?: {
    text: string;
    href: string;
  };
  items?: Array<{
    title: string;
  }>;
  className?: string;
}

export function PortfolioGallery({
  title = "Browse my certificates",
  archiveButton = {
    text: "View all certificates",
    href: "#"
  },
  items: customItems,
  className = "",
}: PortfolioGalleryProps) {
  const { isDark } = useTheme();
  
  const defaultItems = [
    { title: "Introduction to Containers w/ Docker, Kubernetes & OpenShift" },
    { title: "Django Web Framework" },
    { title: "Introduction to Databases for Back-End Development" },
    { title: "Introduction to Back-End Development" },
    { title: "Version Control" },
    { title: "Programming in Python" },
  ]
  
  const items = customItems || defaultItems

  return (
    <section
      aria-label={title}
      className={`section relative flex flex-col items-center w-full ${className}`}
      id="certificates-gallery"
    >
      <div className="w-full max-w-5xl mx-auto rounded-2xl border overflow-hidden bg-transparent" style={{ borderColor: isDark ? 'var(--border-dark)' : 'var(--border-light)' }}>
        {/* Header Section */}
        <div className="relative z-10 text-center pt-16 pb-12 px-8 flex flex-col items-center">
          <span className="section-label justify-center mx-auto mb-4">GALLERY</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-balance text-center" style={{ fontFamily: 'var(--font-heading)', color: isDark ? 'var(--text-dark)' : 'var(--text-light)' }}>{title}</h2>

          <a
            href={archiveButton.href}
            className="inline-flex items-center justify-center gap-3 px-6 py-3 rounded-full font-medium transition-colors group mb-8"
            style={{ backgroundColor: isDark ? 'var(--text-dark)' : 'var(--text-light)', color: isDark ? 'var(--bg-dark)' : 'var(--bg-light)' }}
          >
            <span>{archiveButton.text}</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Centered Grid Layout */}
        <div className="px-6 md:px-12 pb-20 flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl">
            {items.map((item, index) => (
              <div
                key={index}
                className="group relative rounded-xl transition-all duration-300 hover:-translate-y-2 border p-8 flex flex-col items-center text-center justify-center min-h-[160px]"
                style={{
                  backgroundColor: isDark ? 'var(--surface-dark)' : 'var(--surface-light)',
                  borderColor: isDark ? 'var(--border-dark)' : 'var(--border-light)',
                  color: isDark ? 'var(--text-dark)' : 'var(--text-light)',
                  boxShadow: isDark ? '0 10px 30px rgba(0,0,0,0.5)' : '0 10px 30px rgba(0,0,0,0.05)'
                }}
              >
                <Award className="w-6 h-6 mb-4 opacity-50 transition-opacity group-hover:opacity-100" />
                <h3 className="font-semibold text-lg leading-snug" style={{ fontFamily: 'var(--font-heading)' }}>
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
