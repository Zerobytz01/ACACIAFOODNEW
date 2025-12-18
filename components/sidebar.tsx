"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import {
    Home,
    ShoppingBag,
    Info,
    Mail,
    Menu,
    X,
    Facebook,
    Twitter,
    Instagram,
    Youtube
} from "lucide-react"
import { cn } from "@/lib/utils"
// import { Button } from "@/components/ui/button"

const menuItems = [
    { href: "/", label: "Home", icon: Home },
    { href: "/products", label: "Products", icon: ShoppingBag },
    { href: "/about", label: "About", icon: Info },
    { href: "/contact", label: "Contact", icon: Mail },
]

export function Sidebar() {
    const [isOpen, setIsOpen] = useState(false)
    const pathname = usePathname()

    return (
        <>
            {/* Mobile Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-primary text-primary-foreground rounded-full shadow-lg"
            >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Sidebar Container */}
            <motion.aside
                className={cn(
                    "fixed top-0 left-0 bottom-0 z-40 w-64 bg-card border-r border-border/50 shadow-xl lg:translate-x-0 transition-transform duration-300 ease-in-out",
                    isOpen ? "translate-x-0" : "-translate-x-full"
                )}
            >
                <div className="flex flex-col h-full">
                    {/* Logo Area */}
                    <div className="p-8 flex items-center justify-center border-b border-border/50">
                        <Link href="/" className="block relative w-full h-12">
                            {/* Replace with actual Logo image if available, using text for now or simple img tag */}
                            <img src="/acacia_logo.png" alt="Acacia Foods" className="h-10 mx-auto object-contain" />
                        </Link>
                    </div>

                    {/* Navigation Links */}
                    <nav className="flex-1 py-8 px-4 space-y-2">
                        {menuItems.map((item) => {
                            const Icon = item.icon
                            const isActive = pathname === item.href

                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className={cn(
                                        "flex items-center gap-4 px-4 py-3 rounded-lg transition-all duration-200 group",
                                        isActive
                                            ? "bg-primary text-primary-foreground shadow-md"
                                            : "hover:bg-muted text-foreground/80 hover:text-foreground"
                                    )}
                                >
                                    <Icon size={20} className={cn(isActive ? "text-primary-foreground" : "text-primary/70 group-hover:text-primary")} />
                                    <span className="font-medium">{item.label}</span>
                                </Link>
                            )
                        })}
                    </nav>

                    {/* Footer / Socials */}
                    <div className="p-6 border-t border-border/50 bg-muted/20">
                        <div className="flex justify-center gap-4 text-primary/60">
                            <Link href="#" className="hover:text-primary transition-colors"><Facebook size={18} /></Link>
                            <Link href="#" className="hover:text-primary transition-colors"><Twitter size={18} /></Link>
                            <Link href="#" className="hover:text-primary transition-colors"><Instagram size={18} /></Link>
                        </div>
                        <div className="mt-4 text-center text-xs text-muted-foreground">
                            © {new Date().getFullYear()} Acacia Foods
                        </div>
                    </div>
                </div>
            </motion.aside>

            {/* Overlay for mobile */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-30 lg:hidden backdrop-blur-sm"
                    onClick={() => setIsOpen(false)}
                />
            )}
        </>
    )
}
