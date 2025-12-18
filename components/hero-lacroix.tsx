"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { heroContent } from "@/data/content"

export default function HeroLaCroix() {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [direction, setDirection] = useState(0)

    // Auto-play slider
    useEffect(() => {
        const timer = setInterval(() => {
            setDirection(1)
            setCurrentSlide((prev) => (prev + 1) % heroContent.length)
        }, 6000)

        return () => clearInterval(timer)
    }, [])

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
        })
    }

    const paginate = (newDirection: number) => {
        setDirection(newDirection)
        setCurrentSlide((prev) => {
            const next = prev + newDirection
            if (next < 0) return heroContent.length - 1
            if (next >= heroContent.length) return 0
            return next
        })
    }

    return (
        <div className="relative w-full">
            {/* Full-Width Image Slider */}
            <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden bg-muted">
                <AnimatePresence initial={false} custom={direction}>
                    <motion.div
                        key={currentSlide}
                        custom={direction}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                            x: { type: "spring", stiffness: 300, damping: 30 },
                            opacity: { duration: 0.2 }
                        }}
                        className="absolute inset-0"
                    >
                        <Image
                            src={heroContent[currentSlide].image}
                            alt={heroContent[currentSlide].title}
                            fill
                            priority={currentSlide === 0}
                            className="object-cover"
                            sizes="100vw"
                        />
                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/80" />
                    </motion.div>
                </AnimatePresence>

                {/* Navigation Arrows - Hidden on mobile */}
                <button
                    onClick={() => paginate(-1)}
                    className="hidden sm:flex absolute left-2 md:left-4 lg:left-8 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 items-center justify-center text-white hover:bg-white/20 transition-all"
                    aria-label="Previous slide"
                >
                    <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
                </button>
                <button
                    onClick={() => paginate(1)}
                    className="hidden sm:flex absolute right-2 md:right-4 lg:right-8 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 items-center justify-center text-white hover:bg-white/20 transition-all"
                    aria-label="Next slide"
                >
                    <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
                </button>

                {/* Slide Indicators */}
                <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2">
                    {heroContent.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                setDirection(index > currentSlide ? 1 : -1)
                                setCurrentSlide(index)
                            }}
                            className={`h-1 rounded-full transition-all ${index === currentSlide
                                ? "w-6 md:w-8 bg-white"
                                : "w-1 bg-white/50 hover:bg-white/75"
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>

            {/* Text Content Slider Below Image */}
            <div className="relative bg-background py-8 sm:py-12 md:py-16 lg:py-20">
                <div className="container mx-auto px-4 sm:px-6 md:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentSlide}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5 }}
                            >
                                <motion.p
                                    className="text-xs sm:text-sm font-semibold text-primary tracking-widest uppercase mb-3 md:mb-4"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.2 }}
                                >
                                    Acacia Foods
                                </motion.p>

                                <motion.h1
                                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-6 leading-tight"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                >
                                    {heroContent[currentSlide].title}{" "}
                                    <span className="text-secondary">
                                        {heroContent[currentSlide].highlight}
                                    </span>
                                </motion.h1>

                                <motion.p
                                    className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto mb-6 md:mb-8 px-4"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                >
                                    {heroContent[currentSlide].description}
                                </motion.p>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 }}
                                    className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 px-4"
                                >
                                    <a
                                        href="#products"
                                        className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-all hover:scale-105 shadow-lg text-center text-sm md:text-base"
                                    >
                                        Explore Products
                                    </a>
                                    <a
                                        href="#about"
                                        className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 border-2 border-primary text-primary rounded-full font-semibold hover:bg-primary hover:text-primary-foreground transition-all text-center text-sm md:text-base"
                                    >
                                        Learn More
                                    </a>
                                </motion.div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </div>
    )
}
