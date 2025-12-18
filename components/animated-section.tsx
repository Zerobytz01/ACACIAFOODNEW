"use client"

import { useEffect, useRef, ReactNode } from "react"
import { motion, useInView, useAnimation } from "framer-motion"

interface AnimatedSectionProps {
    children: ReactNode
    className?: string
    delay?: number
}

export function AnimatedSection({ children, className = "", delay = 0 }: AnimatedSectionProps) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: false, amount: 0.3 })
    const controls = useAnimation()

    useEffect(() => {
        if (isInView) {
            controls.start("visible")
        }
    }, [isInView, controls])

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={{
                hidden: { opacity: 0, y: 50 },
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                        duration: 0.6,
                        delay: delay,
                        ease: "easeOut"
                    }
                }
            }}
            className={className}
        >
            {children}
        </motion.div>
    )
}

export function FadeInUp({ children, className = "", delay = 0 }: AnimatedSectionProps) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: false, amount: 0.3 })

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay }}
            className={className}
        >
            {children}
        </motion.div>
    )
}

export function ScaleIn({ children, className = "", delay = 0 }: AnimatedSectionProps) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: false, amount: 0.3 })

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay }}
            className={className}
        >
            {children}
        </motion.div>
    )
}
