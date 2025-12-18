"use client"

import HeroLaCroix from "@/components/hero-lacroix"
import AboutSectionLaCroix from "@/components/about-section-lacroix"
import { ProductGrid } from "@/components/product-grid"
import TestimonialsLaCroix from "@/components/testimonials-lacroix"
import Newsletter from "@/components/newsletter"
import { ContactForm } from "@/components/contact-form"
import { motion } from "framer-motion"

export default function Home() {
  return (
    <main className="overflow-hidden">
      <HeroLaCroix />
      <AboutSectionLaCroix />

      {/* Products Section */}
      <section id="products" className="py-12 sm:py-16 md:py-20 lg:py-32 bg-background">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16 md:mb-20"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-foreground px-4">
              Our Products
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
              Discover our premium selection of craft beverages made with the finest ingredients.
            </p>
          </motion.div>
        </div>
        <ProductGrid />
      </section>

      <TestimonialsLaCroix />

      {/* Contact Section */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Get in <span className="text-primary">Touch</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto"
          >
            <ContactForm />
          </motion.div>
        </div>
      </section>

      <Newsletter />
    </main>
  )
}
