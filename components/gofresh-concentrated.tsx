"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useInView } from "react-intersection-observer"
import { Button } from "./ui/button"
import Link from "next/link"

const goFreshConcentrated = [
  {
    id: 1,
    name: "GoFresh Orange Concentrate",
    description:
      "Loved by both kids and adults, Rich in Vitamin C and fiber, oranges are a nutritional powerhouse, promoting digestive health and enhancing overall immunity.",
    image: "/GoFresh_Orange_500x500.png?height=400&width=400",
    calories: "Calories 80",
    totalFat: "Total Fat 0g",
    totalFatPercent: "0%",
    transFat: "Trans Fat 0g",
  },
  {
    id: 2,
    name: "GoFresh Pineapple Concentrate",
    description:
      "Beyond its delectable taste, it serves as a potent storehouse of immense nutritional value. Pineapples are your secret to radiant skin, thanks to their ability to combat the effects of extreme heat.",
    image: "/GoFresh_Pine_500x500_1_dCmzPkH.png?height=400&width=400",
    calories: "Calories 75",
    totalFat: "Total Fat 0g",
    totalFatPercent: "0%",
    transFat: "Trans Fat 0g",
  },
  {
    id: 3,
    name: "GoFresh Tropical Concentrate",
    description:
      "A vibrant mix of tropical fruits that brings flavor and nutrition together. Great for boosting energy naturally.",
    image: "/GoFresh_Tropical_500x500_1.png?height=400&width=400",
    calories: "Calories 90",
    totalFat: "Total Fat 0g",
    totalFatPercent: "0%",
    transFat: "Trans Fat 0g",
  },
  {
    id: 4,
    name: "GoFresh Peach Squash",
    description:
      "From juices to smoothies, salads, and desserts, peaches are a versatile delight. For active children with busy schedules, a glass of Peach Juice can provide both calming and rejuvenating benefits.",
    image: "/GoFresh_Peach_Squash.png?height=400&width=400",
    calories: "Calories 85",
    totalFat: "Total Fat 0g",
    totalFatPercent: "0%",
    transFat: "Trans Fat 0g",
  },
]

export default function GoFreshConcentrated() {
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

  // Animation variants
  const titleVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], staggerChildren: 0.2 },
    },
  }

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 80, scale: 0.8, rotateX: 15 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  }

  const imageFloatAnimation = {
    y: [-5, 5, -5],
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
  }

  return (
    <section className="py-8 md:py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Animated Title Section */}
        <motion.div
          ref={titleRef}
          variants={titleVariants}
          initial="hidden"
          animate={titleInView ? "visible" : "hidden"}
          className="text-center mb-8 md:mb-12"
        >
          <motion.h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-green-500">
            GoFresh Concentrated Drinks
          </motion.h2>
          <motion.p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
            Premium concentrated drink mixes for the perfect refreshing beverage every time.
          </motion.p>
        </motion.div>

        {/* Product Grid */}
        <motion.div
          ref={gridRef}
          variants={containerVariants}
          initial="hidden"
          animate={gridInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {goFreshConcentrated.map((product) => (
            <motion.div
              key={product.id}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              className="relative flex flex-col"
            >
              {/* Protruding Image */}
              <motion.div
                animate={imageFloatAnimation}
                whileHover={{ scale: 1.05 }}
                className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
              >
                <div className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full overflow-hidden shadow-lg bg-white">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </motion.div>

              {/* Card Body */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden mt-16 sm:mt-20 flex-grow">
                <div className="p-4 sm:p-5 md:p-6 h-full flex flex-col">
                  <h3 className="font-bold text-base sm:text-lg md:text-xl text-gray-900 text-center mb-3">
                    {product.name}
                  </h3>

                  <div className="space-y-1 text-xs sm:text-sm text-gray-600 mb-4">
                    <div>{product.calories}</div>
                    <div className="flex justify-between">
                      <span>{product.totalFat}</span>
                      <span>{product.totalFatPercent}</span>
                    </div>
                    <div>{product.transFat}</div>
                  </div>

                  <div className="mt-auto pt-2 text-xs sm:text-sm text-gray-700 text-center">
                    {product.description}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <Link href="/goFreshConcentratedProducts">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-12 text-center"
          >
            <Button className="bg-green-600 hover:bg-green-700 text-white shadow-lg px-8 py-3 rounded-md">
              View All Products
            </Button>
          </motion.div>
        </Link>
      </div>
    </section>
  )
}