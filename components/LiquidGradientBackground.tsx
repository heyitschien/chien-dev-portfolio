"use client"

import React, { useEffect, useRef, useState } from "react"
import { MeshGradient } from "@paper-design/shaders-react"

interface LiquidGradientBackgroundProps {
  children: React.ReactNode
  variant?: "hero" | "case-study"
  className?: string
}

export default function LiquidGradientBackground({ 
  children, 
  variant = "hero",
  className = "" 
}: LiquidGradientBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll as any)
  }, [])

  // Adjust speed based on scroll for parallax effect
  const speed = variant === "hero" 
    ? Math.max(0.1, 0.3 - scrollY * 0.0001)
    : 0.3

  // Light mode colors - using your brand palette
  const lightColors = ["#f8f9fa", "#4285F4", "#10b981", "#ffffff", "#e8f0fe"]
  // Dark mode colors
  const darkColors = ["#202124", "#8ab4f8", "#10b981", "#303134", "#1e3a5f"]

  return (
    <div 
      ref={containerRef} 
      className={`relative overflow-hidden ${className}`}
    >
      {/* SVG Filters for glass effect */}
      <svg className="absolute inset-0 w-0 h-0" aria-hidden="true">
        <defs>
          <filter id="glass-effect" x="-50%" y="-50%" width="200%" height="200%">
            <feTurbulence baseFrequency="0.005" numOctaves="1" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="0.3" />
            <feColorMatrix
              type="matrix"
              values="1 0 0 0 0.02
                      0 1 0 0 0.02
                      0 0 1 0 0.05
                      0 0 0 0.9 0"
              result="tint"
            />
          </filter>
        </defs>
      </svg>

      {/* Primary Gradient Layer */}
      <MeshGradient
        className="absolute inset-0 w-full h-full"
        colors={lightColors}
        speed={speed}
        backgroundColor="#f8f9fa"
      />
      
      {/* Secondary Gradient Layer (wireframe for depth) */}
      <MeshGradient
        className="absolute inset-0 w-full h-full opacity-40 dark:opacity-60"
        colors={darkColors}
        speed={speed * 0.7}
        wireframe="true"
        backgroundColor="transparent"
      />

      {children}
    </div>
  )
}

