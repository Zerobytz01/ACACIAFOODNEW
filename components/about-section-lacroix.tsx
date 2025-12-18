"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { Sparkles, Lightbulb } from "lucide-react"
import { aboutContent } from "@/data/content"

export default function AboutSectionLaCroix() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: false, amount: 0.3 })

    return (
        <section id="about" ref={ref} className="py-12 sm:py-16 md:py-20 lg:py-32 bg-muted/10">
            <div className="container mx-auto px-4 sm:px-6 md:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-8 sm:mb-12 md:mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 px-4">
                        {aboutContent.title}
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
                        {aboutContent.description}
                    </p>
                </motion.div>

                {/* Large Hero Image */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="relative w-full mb-12 sm:mb-16 md:mb-20"
                >
                    <div className="relative aspect-[21/9] w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
                        <Image
                            src={aboutContent.image}
                            alt={aboutContent.title}
                            fill
                            className="object-cover"
                            sizes="100vw"
                            priority
                        />
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                    </div>
                </motion.div>

                {/* Feature Cards - Two Columns */}
                <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-12 sm:mb-16 md:mb-20">
                    {/* Card 1: Crafted with Passion */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        whileHover={{ y: -8 }}
                        className="group relative bg-card rounded-2xl p-6 sm:p-8 md:p-10 shadow-lg hover:shadow-2xl transition-all duration-300 border border-border/50 overflow-hidden"
                    >
                        {/* Background Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        {/* Icon */}
                        <div className="relative mb-6">
                            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <Sparkles className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
                            </div>
                        </div>

                        {/* Content */}
                        <div className="relative">
                            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 group-hover:text-primary transition-colors duration-300">
                                Crafted with Passion
                            </h3>
                            <p className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed">
                                Our beverages are crafted with passion and precision, using only the finest ingredients.
                            </p>
                        </div>

                        {/* Decorative Element */}
                        <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors duration-300" />
                    </motion.div>

                    {/* Card 2: Innovation at Heart */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        whileHover={{ y: -8 }}
                        className="group relative bg-card rounded-2xl p-6 sm:p-8 md:p-10 shadow-lg hover:shadow-2xl transition-all duration-300 border border-border/50 overflow-hidden"
                    >
                        {/* Background Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        {/* Icon */}
                        <div className="relative mb-6">
                            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <Lightbulb className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
                            </div>
                        </div>

                        {/* Content */}
                        <div className="relative">
                            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 group-hover:text-primary transition-colors duration-300">
                                Innovation at Heart
                            </h3>
                            <p className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed">
                                We continuously innovate to bring you unique flavor combinations and healthier options.
                            </p>
                        </div>

                        {/* Decorative Element */}
                        <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors duration-300" />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
