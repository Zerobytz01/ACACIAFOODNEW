"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronRight, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { heroContent } from "@/data/content"

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto-play for the image slider (top part)
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroContent.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const content = heroContent[currentSlide]

  return (
    <div className="relative w-full flex flex-col">
      {/* 1. Full-Width Image Slider (No Overlay Text) */}
      <div
        className="relative w-full h-[50vh] md:h-[65vh] overflow-hidden bg-gray-900"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={content.id}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 w-full h-full"
          >
            <Image
              src={content.image}
              alt={content.title}
              fill
              priority
              className="object-cover"
            />
            {/* Subtle gradient overlay at bottom to blend with text section if needed */}
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent" />
          </motion.div>
        </AnimatePresence>

        {/* Simple indicators on the image */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {heroContent.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-2 h-2 rounded-full transition-all ${currentSlide === idx ? "bg-white w-6" : "bg-white/50"}`}
            />
          ))}
        </div>
      </div>

      {/* 2. Text Content Slider (Below the image) */}
      <div className="w-full bg-background border-b border-border/40">
        <div className="container mx-auto px-6 py-12 md:py-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">

            <div className="flex-1 max-w-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`text-${content.id}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-sm font-semibold text-primary tracking-widest uppercase mb-2">
                    Acacia Foods
                  </h2>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 leading-tight">
                    {content.title} <span className="text-secondary">{content.highlight}</span>
                  </h1>
                  <p className="text-muted-foreground text-lg md:text-xl max-w-lg">
                    {content.description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Action Area */}
            <div className="flex items-center gap-4">
              <Link href="/products">
                <Button size="lg" className="rounded-full px-8 h-14 text-base shadow-xl bg-primary hover:bg-primary/90">
                  Explore Products <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>

              {/* Controls for manual navigation */}
              <div className="flex gap-2">
                {heroContent.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`w-12 h-1 rounded-full transition-colors ${currentSlide === idx ? "bg-secondary" : "bg-muted"}`}
                  />
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
