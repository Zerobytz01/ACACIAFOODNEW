"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useInView } from "react-intersection-observer"
import { Button } from "./ui/button"
import Link from "next/link"

const frutaDrinks = [
  {
    id: 1,
    name: "Fruta Mango",
    description: " Fruta-Mango is a symphony of sun-ripened mangoes, bursting with vibrant flavor. Dive into the lush, tropical taste that lingers on your palate, making it the ultimate choice for mango aficionados. ",
    image: "/Fruta_Mango_700x700_new_mMSmIpY.png?height=400&width=400",
    calories: "Calories 120",
    totalFat: "Total Fat 0g",
    totalFatPercent: "0%",
    transFat: "Trans Fat 0g",
  },
  {
    id: 2,
    name: "Fruta Orange",
    description: "Fruta-Orange brings you the zesty brightness of oranges in a bottle. With its tangy and citrusy notes, it's a vibrant and revitalizing choice that adds a ray of sunshine to your day. ",
    image: "/Fruta_Orange_700x700_new_e8lUANJ.png?height=400&width=400",
    calories: "Calories 110",
    totalFat: "Total Fat 0g",
    totalFatPercent: "0%",
    transFat: "Trans Fat 0g",
  },
  {
    id: 3,
    name: "Fruta Mixed Fruit",
    description: "For those who crave variety, Fruta-Mixed is the answer. This delightful concoction combines a medley of fruits, delivering a harmonious blend of flavors that's both refreshing and invigorating. Explore the fruity fusion in every sip.",
    image: "/Fruta_Mixed_Fruit_700x700_new.png?height=400&width=400",
    calories: "Calories 100",
    totalFat: "Total Fat 0g",
    totalFatPercent: "0%",
    transFat: "Trans Fat 0g",
  },
  {
    id: 4,
    name: "Fruta Guava",
    description: "Indulge in the tropical delight of Fruta-Guava. This exquisite blend captures the exotic essence of guava, delivering a burst of fruity sweetness with each sip. Discover the taste of paradise in every bottle. ",
    image: "/Fruta_Guava_700x700_new_GfE5x5Z.png?height=400&width=400",
    calories: "Calories 115",
    totalFat: "Total Fat 0g",
    totalFatPercent: "0%",
    transFat: "Trans Fat 0g",
  },
]

export default function FrutaDrinksCategory() {
  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: "-50px 0px",
  })

  const [gridRef, gridInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: "-100px 0px",
  })

  const titleVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
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
        delayChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 80,
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

  const imageFloatAnimation = {
    y: [-5, 5, -5],
    transition: {
      duration: 4,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut",
    },
  }

  return (
    <section className="py-8 md:py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Animated Title Section */}
        <motion.div
          ref={titleRef}
          variants={titleVariants}
          initial="hidden"
          animate={titleInView ? "visible" : "hidden"}
          className="text-center mb-8 md:mb-12"
        >
          <motion.h2
            variants={titleVariants}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-green-500"
          >
            Fruta Drinks
          </motion.h2>
          <motion.p variants={titleVariants} className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-4">
            Natural fruit flavors crafted with real fruit extracts for an authentic taste experience.
          </motion.p>
        </motion.div>

        {/* Animated Grid */}
        <motion.div
          ref={gridRef}
          variants={containerVariants}
          initial="hidden"
          animate={gridInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mt-16 sm:mt-20 md:mt-24"
        >
          {frutaDrinks.map((product, index) => (
            <motion.div
              key={product.id}
              variants={cardVariants}
              className="relative pt-16 sm:pt-20 md:pt-24"
              whileHover={{
                y: -10,
                transition: { duration: 0.3 },
              }}
            >
              {/* Protruding image */}
              <motion.div
                className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
                animate={imageFloatAnimation}
                whileHover={{ scale: 1.05, y: "-55%" }}
              >
                <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48">
                  <div className="absolute inset-0 bg-white rounded-full shadow-lg opacity-20 blur-md scale-90"></div>
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-contain drop-shadow-xl"
                    loading="lazy"
                    sizes="(max-width: 640px) 128px, (max-width: 768px) 160px, 192px"
                  />
                </div>
              </motion.div>

              {/* Card body */}
              <div className="bg-white w-full h-[350px] sm:h-[380px] md:h-[400px] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform-gpu">
                <div className="p-4 sm:p-5 md:p-6 h-full flex flex-col relative overflow-hidden">
                  <div className="relative z-10">
                    <div className="pt-12 sm:pt-14 md:pt-16 space-y-3 sm:space-y-4">
                      <motion.h3
                        className="font-bold text-base sm:text-lg md:text-xl text-gray-900 text-center leading-tight"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                      >
                        {product.name}
                      </motion.h3>

                      <motion.div
                        className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-600"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                      >
                        <div className="flex justify-between">
                          <span>{product.calories}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>{product.totalFat}</span>
                          <span>{product.totalFatPercent}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>{product.transFat}</span>
                        </div>
                      </motion.div>

                      {/* Description with fading green background */}
                      <motion.div
                        className="mt-auto pt-3 sm:pt-4 -mx-4 sm:-mx-5 md:-mx-6 -mb-4 sm:-mb-5 md:-mb-6 px-4 sm:px-5 md:px-6 pb-4 sm:pb-5 md:pb-6 bg-gradient-to-t from-green-50 via-green-25 to-transparent"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                      >
                        <p className="text-xs sm:text-sm text-gray-700 text-center leading-relaxed font-medium">
                          {product.description}
                        </p>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        {/* Enhanced bottom button */}
                
          <Link href="/products">
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 sm:mt-10 md:mt-12 text-center"
            >
              <Button 
                size="lg" 
                className="bg-green-600 hover:bg-green-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-3"
              >
                View All Products
              </Button>
            </motion.div>
          </Link>
      </div>
    </section>
  )
}
