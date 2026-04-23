import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"
import { cn } from "@/lib/utils"

interface PortfolioGalleryProps {
  title?: string;
  archiveButton?: {
    text: string;
    href: string;
  };
  images?: Array<{
    src: string;
    alt: string;
    title?: string;
  }>;
  className?: string;
  maxHeight?: number;
  spacing?: string;
  onImageClick?: (index: number) => void;
  pauseOnHover?: boolean;
  marqueeRepeat?: number;
}

export function PortfolioGallery({
  title = "Browse my certificates",
  archiveButton = {
    text: "View all certificates",
    href: "#"
  },
  images: customImages,
  className = "",
  maxHeight = 120,
  spacing = "-space-x-48 md:-space-x-64",
  onImageClick,
  pauseOnHover = true,
  marqueeRepeat = 4
}: PortfolioGalleryProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  
  const defaultImages = [
    { src: "/certificates/cert-1.jpg", alt: "Certificate 1" },
    { src: "/certificates/cert-2.jpg", alt: "Certificate 2" },
    { src: "/certificates/cert-3.jpg", alt: "Certificate 3" },
    { src: "/certificates/cert-4.jpg", alt: "Certificate 4" },
    { src: "/certificates/cert-5.jpg", alt: "Certificate 5" },
    { src: "/certificates/cert-6.jpg", alt: "Certificate 6" },
  ]
  
  const images = customImages || defaultImages

  return (
    <section
      aria-label={title}
      className={`relative py-20 px-4 ${className}`}
      id="certificates-gallery"
    >
      <div className="max-w-7xl mx-auto rounded-2xl border overflow-hidden" style={{ borderColor: 'var(--border-dark)' }}>
        {/* Header Section */}
        <div className="relative z-10 text-center pt-16 pb-8 px-8">
          <span className="section-label justify-center mx-auto mb-4">GALLERY</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-balance" style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-dark)' }}>{title}</h2>

          <a
            href={archiveButton.href}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full font-medium transition-colors group mb-12"
            style={{ backgroundColor: 'var(--text-dark)', color: 'var(--bg-dark)' }}
          >
            <span>{archiveButton.text}</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Desktop 3D overlapping layout - hidden on mobile */}
        <div className="hidden md:block relative overflow-hidden h-[400px] -mb-[200px]">
          <div className={`flex ${spacing} pb-8 pt-40 items-end justify-center`}>
            {images.map((image, index) => {
              const totalImages = images.length
              const middle = Math.floor(totalImages / 2)
              const distanceFromMiddle = Math.abs(index - middle)
              const staggerOffset = maxHeight - distanceFromMiddle * 20

              const zIndex = totalImages - index

              const isHovered = hoveredIndex === index
              const isOtherHovered = hoveredIndex !== null && hoveredIndex !== index

              const yOffset = isHovered ? -120 : isOtherHovered ? 0 : -staggerOffset

              return (
                <motion.div
                  key={index}
                  className="group cursor-pointer flex-shrink-0"
                  style={{
                    zIndex: zIndex,
                  }}
                  initial={{
                    transform: `perspective(5000px) rotateY(-45deg) translateY(200px)`,
                    opacity: 0,
                  }}
                  animate={{
                    transform: `perspective(5000px) rotateY(-45deg) translateY(${yOffset}px)`,
                    opacity: 1,
                  }}
                  transition={{
                    duration: 0.2,
                    delay: index * 0.05,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                  onHoverStart={() => setHoveredIndex(index)}
                  onHoverEnd={() => setHoveredIndex(null)}
                  onClick={() => onImageClick?.(index)}
                >
                  <div
                    className="relative aspect-video w-64 md:w-80 lg:w-96 rounded-xl overflow-hidden transition-transform duration-300 group-hover:scale-105 border border-white/10"
                    style={{
                      boxShadow: `
                        rgba(0, 0, 0, 0.2) 0px 10px 30px,
                        rgba(0, 0, 0, 0.4) 0px 20px 40px
                      `,
                    }}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover object-center"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Mobile marquee layout */}
        <div className="block md:hidden relative pb-16">
          <div
            className={cn(
              "group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)]",
              "flex-row"
            )}
          >
            {Array(marqueeRepeat)
              .fill(0)
              .map((_, i) => (
                <div
                  key={i}
                  className={cn(
                    "flex shrink-0 justify-around [gap:var(--gap)]",
                    "animate-marquee flex-row",
                    {
                      "group-hover:[animation-play-state:paused]": pauseOnHover,
                    }
                  )}
                >
                  {images.map((image, index) => (
                    <div
                      key={`${i}-${index}`}
                      className="group cursor-pointer flex-shrink-0 mx-2"
                      onClick={() => onImageClick?.(index)}
                    >
                      <div
                        className="relative aspect-video w-64 rounded-xl overflow-hidden transition-transform duration-300 group-hover:scale-105 border border-white/10"
                        style={{
                          boxShadow: `
                            rgba(0, 0, 0, 0.2) 0px 10px 30px
                          `,
                        }}
                      >
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-full object-cover object-center"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  )
}
