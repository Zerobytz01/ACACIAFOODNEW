"use client"

import { ContactForm } from "@/components/contact-form"
import { ContactInfo } from "@/components/contact-info"
import { motion } from "framer-motion"
import Image from "next/image"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background pt-20 sm:pt-24 md:pt-28">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-foreground">
            Contact Us
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Have questions or feedback? We'd love to hear from you.
          </p>
        </motion.div>

        {/* Contact Form and Info */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <ContactInfo />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <ContactForm />
          </motion.div>
        </div>

        {/* Halal Certification Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-card rounded-2xl p-8 md:p-12 border border-border shadow-lg mb-16"
        >
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="flex-shrink-0">
              <div className="relative w-32 h-32 md:w-40 md:h-40 bg-white rounded-lg p-4">
                <Image
                  src="/halal_logo.png"
                  alt="ZAMHA - Zambian Halaal Certifiers"
                  fill
                  className="object-contain p-2"
                  sizes="160px"
                  onError={(e) => {
                    // Fallback if image doesn't exist
                    const target = e.target as HTMLImageElement
                    target.style.display = 'none'
                  }}
                />
              </div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Halal Certified Products</h2>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                All our products are <strong className="text-foreground">Halal certified</strong> by ZAMHA (Zambian Halaal Certifiers).
                We are committed to providing high-quality beverages that meet the highest standards of Halal compliance,
                ensuring our products are suitable for Muslim consumers worldwide.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
