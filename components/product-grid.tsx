"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { products, type Product } from "@/data/products"

// Category label colors
const categoryColors: Record<string, { bg: string; text: string }> = {
  "Yes Water": { bg: "bg-blue-500", text: "text-white" },
  "GoFresh Concentrated": { bg: "bg-green-500", text: "text-white" },
  "Yes Flavoured Drinks": { bg: "bg-purple-500", text: "text-white" },
  "Fruta Drinks": { bg: "bg-orange-500", text: "text-white" },
  "Flamingo Carbonated": { bg: "bg-pink-500", text: "text-white" },
  "Yes Soda": { bg: "bg-yellow-500", text: "text-gray-900" },
  "GoFresh Ready To Go": { bg: "bg-teal-500", text: "text-white" },
}

export function ProductGrid() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  return (
    <section id="products" ref={ref} className="py-12 sm:py-16 md:py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        {/* Products Grid - LaCroix Style (3 columns) - All Products */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {products.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}

function ProductCard({ product, index }: { product: Product; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })

  const categoryColor = categoryColors[product.category] || { bg: "bg-primary", text: "text-primary-foreground" }

  return (
    <motion.div
      ref={ref}
      layout
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
      transition={{
        duration: 0.5,
        delay: index * 0.05,
        ease: "easeOut"
      }}
      className="group relative bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-border/50"
    >
      {/* Image Container - LaCroix Style (4:5 aspect ratio) */}
      <div className="relative aspect-[4/5] w-full bg-gradient-to-br from-muted/20 to-background overflow-hidden">
        <motion.div
          className="relative w-full h-full p-4 sm:p-6 md:p-8 flex items-center justify-center"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain drop-shadow-2xl"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </motion.div>

        {/* Gradient Overlay on Hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Animated Category Label - Top Left */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
          transition={{
            duration: 0.6,
            delay: index * 0.1 + 0.3,
            type: "spring",
            stiffness: 100
          }}
          className="absolute top-4 left-4 z-10"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className={`${categoryColor.bg} ${categoryColor.text} px-4 py-2 rounded-lg font-bold text-xs sm:text-sm shadow-lg`}
          >
            {product.category}
          </motion.div>
        </motion.div>
      </div>

      {/* Content Section - LaCroix Style */}
      <div className="p-4 sm:p-5 md:p-6">
        {/* Product Name */}
        <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 sm:mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2">
          {product.name}
        </h3>

        {/* Description */}
        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2 mb-3 sm:mb-4">
          {product.description}
        </p>

        {/* CTA Link */}
        <motion.a
          href="#"
          className="inline-flex items-center gap-2 text-primary font-semibold text-sm group/link touch-manipulation"
          whileHover={{ x: 4 }}
          transition={{ duration: 0.2 }}
        >
          <span>Learn More</span>
          <motion.span
            className="transition-transform"
            animate={{ x: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            →
          </motion.span>
        </motion.a>
      </div>
    </motion.div>
  )
}
