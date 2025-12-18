"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import Image from "next/image"

const menuItems = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
    { href: "/contact", label: "Contact Us" },
]

export function HamburgerMenu() {
    const [isOpen, setIsOpen] = useState(false)
    const [showHeader, setShowHeader] = useState(false)
    const pathname = usePathname()

    // Track scroll position - show header after hero section
    useEffect(() => {
        const handleScroll = () => {
            // Show header after scrolling past hero section (approximately 80vh)
            const heroHeight = window.innerHeight * 0.8
            setShowHeader(window.scrollY > heroHeight)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [isOpen])

    // Close menu on route change
    useEffect(() => {
        setIsOpen(false)
    }, [pathname])

    return (
        <>
            {/* Fixed Header - Appears after hero section */}
            <motion.header
                initial={{ y: -100 }}
                animate={{
                    y: showHeader ? 0 : -100,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-lg border-b border-border/30 shadow-sm"
            >
                <div className="container mx-auto px-4 sm:px-6 md:px-8">
                    <div className="flex items-center justify-between h-14 sm:h-16 md:h-20">
                        {/* Logo */}
                        <Link href="/" className="relative z-50 flex-shrink-0">
                            <Image
                                src="/acacia_logo.png"
                                alt="Acacia Foods"
                                width={100}
                                height={32}
                                className="h-7 sm:h-8 md:h-10 w-auto"
                                priority
                            />
                        </Link>

                        {/* Hamburger Button */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="relative z-50 w-10 h-10 flex flex-col items-center justify-center gap-1.5 group touch-manipulation"
                            aria-label="Toggle menu"
                        >
                            <motion.span
                                animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                                className="w-6 h-0.5 bg-foreground transition-colors group-hover:bg-primary"
                            />
                            <motion.span
                                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                                className="w-6 h-0.5 bg-foreground transition-colors group-hover:bg-primary"
                            />
                            <motion.span
                                animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                                className="w-6 h-0.5 bg-foreground transition-colors group-hover:bg-primary"
                            />
                        </button>
                    </div>
                </div>
            </motion.header>

            {/* Floating Menu Button - Visible during hero section */}
            <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: showHeader ? 0 : 1 }}
                transition={{ duration: 0.3 }}
                onClick={() => setIsOpen(!isOpen)}
                className="fixed top-4 right-4 sm:top-6 sm:right-6 md:top-8 md:right-8 z-50 w-12 h-12 rounded-full bg-background/80 backdrop-blur-md shadow-lg flex items-center justify-center group touch-manipulation"
                aria-label="Toggle menu"
                style={{ pointerEvents: showHeader ? 'none' : 'auto' }}
            >
                <div className="flex flex-col items-center justify-center gap-1.5">
                    <motion.span
                        animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                        className="w-6 h-0.5 bg-foreground transition-colors group-hover:bg-primary"
                    />
                    <motion.span
                        animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                        className="w-6 h-0.5 bg-foreground transition-colors group-hover:bg-primary"
                    />
                    <motion.span
                        animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                        className="w-6 h-0.5 bg-foreground transition-colors group-hover:bg-primary"
                    />
                </div>
            </motion.button>

            {/* Full-Screen Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-40 bg-background overflow-y-auto"
                    >
                        {/* Animated background pattern */}
                        <div className="absolute inset-0 opacity-5">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_var(--primary)_1px,_transparent_1px)] bg-[length:24px_24px]" />
                        </div>

                        {/* Menu Content */}
                        <div className="relative min-h-full flex items-center justify-center px-4 py-20">
                            <nav className="text-center w-full">
                                {/* Acacia Logo */}
                                <motion.div
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 }}
                                    className="mb-12 sm:mb-16"
                                >
                                    <Image
                                        src="/acacia_logo.png"
                                        alt="Acacia Foods"
                                        width={200}
                                        height={64}
                                        className="h-16 sm:h-20 md:h-24 w-auto mx-auto"
                                    />
                                </motion.div>

                                {/* Menu Items */}
                                <motion.ul
                                    className="space-y-6 sm:space-y-8"
                                    initial="closed"
                                    animate="open"
                                    variants={{
                                        open: {
                                            transition: { staggerChildren: 0.1, delayChildren: 0.2 }
                                        },
                                        closed: {
                                            transition: { staggerChildren: 0.05, staggerDirection: -1 }
                                        }
                                    }}
                                >
                                    {menuItems.map((item, index) => {
                                        const isActive = pathname === item.href

                                        return (
                                            <motion.li
                                                key={item.href}
                                                variants={{
                                                    open: {
                                                        y: 0,
                                                        opacity: 1,
                                                        transition: {
                                                            y: { stiffness: 1000, velocity: -100 }
                                                        }
                                                    },
                                                    closed: {
                                                        y: 50,
                                                        opacity: 0,
                                                        transition: {
                                                            y: { stiffness: 1000 }
                                                        }
                                                    }
                                                }}
                                            >
                                                <Link
                                                    href={item.href}
                                                    className={`block text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold transition-all duration-300 ${isActive
                                                            ? "text-primary"
                                                            : "text-foreground/60 hover:text-primary hover:scale-105"
                                                        }`}
                                                >
                                                    {item.label}
                                                </Link>
                                            </motion.li>
                                        )
                                    })}
                                </motion.ul>

                                {/* Tagline */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 }}
                                    className="mt-12 sm:mt-16"
                                >
                                    <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-medium italic">
                                        "Refreshing Excellence in Every Sip"
                                    </p>
                                </motion.div>
                            </nav>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
