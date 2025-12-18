"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"
import Image from "next/image"
import { testimonialsContent as testimonials } from "@/data/content"

export default function TestimonialsLaCroix() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [direction, setDirection] = useState(0)
    const ref = useRef(null)
    const isInView = useInView(ref, { once: false, amount: 0.3 })

    const nextTestimonial = () => {
        setDirection(1)
        setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }

    const prevTestimonial = () => {
        setDirection(-1)
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    }

    useEffect(() => {
        const interval = setInterval(nextTestimonial, 8000)
        return () => clearInterval(interval)
    }, [])

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 300 : -300,
            opacity: 0,
            scale: 0.9
        }),
        center: {
            x: 0,
            opacity: 1,
            scale: 1
        },
        exit: (direction: number) => ({
            x: direction < 0 ? 300 : -300,
            opacity: 0,
            scale: 0.9
        })
    }

    return (
        <section ref={ref} className="py-12 sm:py-16 md:py-20 lg:py-32 bg-gradient-to-b from-background via-muted/10 to-background relative overflow-hidden">
            {/* Animated Background Elements - Hidden on mobile for performance */}
            <div className="hidden md:block">
                <motion.div
                    className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"
                    animate={{
                        x: [0, 50, 0],
                        y: [0, 30, 0],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div
                    className="absolute bottom-20 right-10 w-64 h-64 bg-secondary/5 rounded-full blur-3xl"
                    animate={{
                        x: [0, -50, 0],
                        y: [0, -30, 0],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
            </div>

            <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-8 sm:mb-12 md:mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 px-4">
                        What Our <span className="text-primary">Customers Say</span>
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
                        Don't just take our word for it - hear from our satisfied customers.
                    </p>
                </motion.div>

                <div className="max-w-5xl mx-auto">
                    <div className="relative">
                        <AnimatePresence mode="wait" custom={direction}>
                            <motion.div
                                key={currentIndex}
                                custom={direction}
                                variants={slideVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{
                                    x: { type: "spring", stiffness: 300, damping: 30 },
                                    opacity: { duration: 0.3 },
                                    scale: { duration: 0.3 }
                                }}
                                className="bg-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16 shadow-xl sm:shadow-2xl border border-border/50 relative overflow-hidden"
                            >
                                {/* Decorative Corner - Hidden on mobile */}
                                <div className="hidden sm:block absolute top-0 right-0 w-32 sm:w-40 h-32 sm:h-40 bg-primary/5 rounded-bl-full" />

                                <div className="flex flex-col items-center text-center relative z-10">
                                    {/* Quote Icon */}
                                    <motion.div
                                        initial={{ scale: 0, rotate: -180 }}
                                        animate={{ scale: 1, rotate: 0 }}
                                        transition={{ duration: 0.5, delay: 0.2 }}
                                        className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 sm:mb-8"
                                    >
                                        <Quote className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-primary" />
                                    </motion.div>

                                    {/* Stars */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3 }}
                                        className="flex gap-1 mb-4 sm:mb-6"
                                    >
                                        {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ opacity: 0, scale: 0 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ delay: 0.4 + i * 0.1 }}
                                            >
                                                <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-yellow-400" />
                                            </motion.div>
                                        ))}
                                        {[...Array(5 - testimonials[currentIndex].rating)].map((_, i) => (
                                            <Star key={i + testimonials[currentIndex].rating} className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground/30" />
                                        ))}
                                    </motion.div>

                                    {/* Content - Responsive font sizes */}
                                    <motion.blockquote
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.5 }}
                                        className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium mb-6 sm:mb-8 leading-relaxed max-w-3xl px-4"
                                    >
                                        "{testimonials[currentIndex].content}"
                                    </motion.blockquote>

                                    {/* Avatar and Info */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.6 }}
                                        className="flex flex-col items-center"
                                    >
                                        <div className="relative w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 rounded-full overflow-hidden mb-3 sm:mb-4 border-4 border-primary/20 shadow-lg">
                                            <Image
                                                src={testimonials[currentIndex].avatar || "/placeholder.svg"}
                                                alt={testimonials[currentIndex].name}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <p className="font-bold text-lg sm:text-xl">{testimonials[currentIndex].name}</p>
                                        <p className="text-muted-foreground text-sm sm:text-base">{testimonials[currentIndex].role}</p>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Navigation - Touch friendly */}
                        <div className="flex items-center justify-center gap-3 sm:gap-4 mt-6 sm:mt-8 md:mt-10">
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={prevTestimonial}
                                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-card border-2 border-border hover:border-primary hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all duration-300 shadow-md touch-manipulation"
                                aria-label="Previous testimonial"
                            >
                                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                            </motion.button>

                            <div className="flex gap-1.5 sm:gap-2">
                                {testimonials.map((_, index) => (
                                    <motion.button
                                        key={index}
                                        onClick={() => {
                                            setDirection(index > currentIndex ? 1 : -1)
                                            setCurrentIndex(index)
                                        }}
                                        whileHover={{ scale: 1.2 }}
                                        className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 touch-manipulation ${index === currentIndex ? "w-6 sm:w-8 bg-primary" : "w-1.5 sm:w-2 bg-muted-foreground/30"
                                            }`}
                                        aria-label={`Go to testimonial ${index + 1}`}
                                    />
                                ))}
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={nextTestimonial}
                                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-card border-2 border-border hover:border-primary hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all duration-300 shadow-md touch-manipulation"
                                aria-label="Next testimonial"
                            >
                                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                            </motion.button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
