"use client"

import { useEffect, useState, useCallback } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion, useAnimation, useScroll, useTransform } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Link from "next/link"

const products = [
  {
    id: 1,
    name: "GoFresh Orange Squash",
    description: "Favorite fruit flavor cherished for generations.",
    image: "/GoFresh_Orange_500x500.png?height=400&width=400",
    calories: "Calories",
    totalFat: "Total Fat 15g",
    totalFatPercent: "19%",
    transFat: "Trans Fat 0g",
  },
  {
    id: 2,
    name: "Yes Orange Mango",
    description: "A vibrant blend of citrus fruits with a hint of mint.",
    image: "/Yess_Original_Mango_700x700.png?height=400&width=400",
    calories: "Calories",
    totalFat: "Total Fat 12g",
    totalFatPercent: "15%",
    transFat: "Trans Fat 0g",
  },
  {
    id: 3,
    name: "Yes Drink Fruit Punch",
    description: "Our fruit punch combines the bold flavors of pineapple",
    image: "/Yess_Fruit_Punch700x700.png?height=400&width=400",
    calories: "Calories",
    totalFat: "Total Fat 18g",
    totalFatPercent: "23%",
    transFat: "Trans Fat 0g",
  },
  {
    id: 4,
    name: "Tango Pina",
    description: "Beyond its irresistibly delicious taste.",
    image: "/Flamingo_Tango_500x500_2.png?height=400&width=400",
    calories: "Calories",
    totalFat: "Total Fat 14g",
    totalFatPercent: "18%",
    transFat: "Trans Fat 0g",
  },
]

export default function FeaturedProducts() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  
  // Scroll-based animations
  const { scrollYProgress } = useScroll()
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const titleScale = useTransform(scrollYProgress, [0, 0.2], [0.8, 1])
  const titleOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1])

  // Enhanced intersection observer for different sections
  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
    rootMargin: '-50px 0px',
  })

  const [carouselRef, carouselInView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
    rootMargin: '-100px 0px',
  })

  const [buttonRef, buttonInView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
    rootMargin: '-50px 0px',
  })

  const controls = useAnimation()
  const titleControls = useAnimation()
  const buttonControls = useAnimation()

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % products.length)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + products.length) % products.length)
  }, [])

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return
    
    const interval = setInterval(() => {
      nextSlide()
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, nextSlide])

  // Animation triggers
  useEffect(() => {
    if (titleInView) {
      titleControls.start("visible")
    }
  }, [titleControls, titleInView])

  useEffect(() => {
    if (carouselInView) {
      controls.start("visible")
    } else {
      controls.start("hidden")
    }
  }, [controls, carouselInView])

  useEffect(() => {
    if (buttonInView) {
      buttonControls.start("visible")
    }
  }, [buttonControls, buttonInView])

  // Get visible products for carousel (show 3 cards)
  const getVisibleProducts = () => {
    const visibleProducts = []
    for (let i = 0; i < 3; i++) {
      const index = (currentSlide + i) % products.length
      visibleProducts.push({ ...products[index], displayIndex: i })
    }
    return visibleProducts
  }

  // Animation variants
  const titleVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
        staggerChildren: 0.2,
      },
    },
  }

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  }

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.8,
      rotateX: 15,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  const buttonVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: 0.3,
      },
    },
  }

  const floatingAnimation = {
    y: [-10, 10, -10],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  }

  const imageFloatAnimation = {
    y: [-5, 5, -5],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  }

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-green-50 to-green-100 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div 
        className="absolute inset-0 opacity-10"
        style={{ y: backgroundY }}
      >
        <div className="absolute top-20 left-10 w-32 h-32 bg-green-300 rounded-full blur-xl"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-green-400 rounded-full blur-lg"></div>
        <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-green-200 rounded-full blur-2xl"></div>
      </motion.div>

      {/* Fixed Navigation Buttons */}
      <motion.div
        whileHover={{ scale: 1.1, x: -5 }}
        whileTap={{ scale: 0.95 }}
        className="left-4 top-1/2 transform -translate-y-1/2 z-50"
      >
        <Button
          variant="ghost"
          size="icon"
          onClick={prevSlide}
          className="bg-white/90 hover:bg-white shadow-xl rounded-full backdrop-blur-sm border border-white/20 transition-all duration-300 w-12 h-12"
        >
          <ChevronLeft className="w-6 h-6" />
        </Button>
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.1, x: 5 }}
        whileTap={{ scale: 0.95 }}
        className="right-4 top-1/2 transform -translate-y-1/2 z-50"
      >
        <Button
          variant="ghost"
          size="icon"
          onClick={nextSlide}
          className="bg-white/90 hover:bg-white shadow-xl rounded-full backdrop-blur-sm border border-white/20 transition-all duration-300 w-12 h-12"
        >
          <ChevronRight className="w-6 h-6" />
        </Button>
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced title section */}
        <motion.div
          ref={titleRef}
          variants={titleVariants}
          initial="hidden"
          animate={titleControls}
          className="text-center mb-12"
          style={{ scale: titleScale, opacity: titleOpacity }}
        >
          <motion.h2 
            variants={titleVariants}
            className="text-4xl md:text-6xl font-bold text-green-700 mb-4 relative"
          >
            <motion.span
              animate={floatingAnimation}
              className="inline-block"
            >
              Featured Products
            </motion.span>
            <motion.div
              className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-green-500 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            />
          </motion.h2>
          
          <motion.p 
            variants={titleVariants}
            className="text-gray-600 max-w-2xl mx-auto mb-2"
          >
            Explore our most popular beverages crafted with premium ingredients for exceptional taste.
          </motion.p>
          
          <motion.div variants={titleVariants}>
            <Button 
              variant="link" 
              className="text-gray-900 p-0 h-auto font-medium underline hover:text-green-700 transition-colors duration-300"
            >
              VIEW ALL PRODUCTS
            </Button>
          </motion.div>
        </motion.div>

        {/* Enhanced carousel with protruding images */}
        <motion.div
          ref={carouselRef}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="relative mt-24" // Added top margin to make room for protruding images
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <div className="flex items-center justify-center">
            {/* Enhanced cards with protruding images */}
            <div className="flex space-x-8 justify-center">
              {getVisibleProducts().map((product, index) => (
                <motion.div
                  key={`${product.id}-${currentSlide}`}
                  variants={cardVariants}
                  className="relative pt-24" // Added top padding to make room for the image
                  whileHover={{ 
                    y: -10,
                    transition: { duration: 0.3 }
                  }}
                >
                  {/* Protruding image */}
                  <motion.div 
                    className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
                    animate={imageFloatAnimation}
                    whileHover={{ scale: 1.05, y: "-55%" }}
                  >
                    <div className="relative w-48 h-48">
                      <div className="absolute inset-0 bg-white rounded-full shadow-lg opacity-20 blur-md scale-90"></div>
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        fill
                        className="object-contain drop-shadow-xl"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Rj5m4xbDLdpkZFuYmjjVmRZEKOhKsrKQQQQCCOoNZ/9k="
                      />
                    </div>
                  </motion.div>

                  {/* Card body */}
                  <div className="bg-white w-80 h-[400px] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform-gpu">
                    <div className="p-6 h-full flex flex-col relative overflow-hidden">
                      <div className="relative z-10">
                        {/* Product info - moved down to make room for image */}
                        <div className="pt-16 space-y-4"> {/* Added top padding */}
                          <motion.h3 
                            className="font-bold text-lg text-gray-900 text-center"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                          >
                            {product.name}
                          </motion.h3>

                          {/* Nutrition info */}
                          <motion.div 
                            className="space-y-2 text-sm text-gray-600"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.5, staggerChildren: 0.1 }}
                          >
                            {[
                              { label: product.calories },
                              { label: product.totalFat, value: product.totalFatPercent },
                              { label: product.transFat }
                            ].map((item, idx) => (
                              <motion.div
                                key={idx}
                                className="flex justify-between"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.4 + idx * 0.1, duration: 0.3 }}
                              >
                                <span>{item.label}</span>
                                {item.value && <span>{item.value}</span>}
                              </motion.div>
                            ))}
                          </motion.div>

                          {/* Add to basket button */}
                          <motion.div
                            className="mt-auto pt-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.5 }}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <Button className="w-full bg-green-600 hover:bg-green-700 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300">
                              ADD TO BASKET
                            </Button>
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Carousel indicators */}
          <motion.div 
            className="flex justify-center mt-8 space-x-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            {products.map((_, index) => (
              <motion.button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-green-600 scale-125' : 'bg-green-300 hover:bg-green-400'
                }`}
                onClick={() => setCurrentSlide(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </motion.div>
        </motion.div>

        {/* Enhanced bottom button */}
        <motion.div 
          ref={buttonRef}
          variants={buttonVariants}
          initial="hidden"
          animate={buttonControls}
          className="mt-12 text-center"
        >
          <Link href="/products">
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg" 
                className="bg-green-600 hover:bg-green-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-3"
              >
                View All Products
              </Button>
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}