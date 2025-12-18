"use client"

import { ProductGrid } from "@/components/product-grid"
import { motion } from "framer-motion"

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-background pt-20 sm:pt-24 md:pt-28">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-foreground">
            Our Products
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our premium selection of craft beverages made with the finest ingredients.
          </p>
        </motion.div>
      </div>

      <ProductGrid />
    </main>
  )
}
