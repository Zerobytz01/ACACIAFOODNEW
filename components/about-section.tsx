"use client"

import { useEffect } from "react"
import Image from "next/image"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Leaf, Droplets, Award } from "lucide-react"

import { aboutContent } from "@/data/content"

export default function AboutSection() {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{aboutContent.title}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {aboutContent.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div ref={ref} initial="hidden" animate={controls} variants={containerVariants} className="space-y-6">
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold mb-2">{aboutContent.features?.[0]?.title}</h3>
              <p className="text-muted-foreground">
                {aboutContent.features?.[0]?.description}
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold mb-2">{aboutContent.features?.[1]?.title}</h3>
              <p className="text-muted-foreground">
                {aboutContent.features?.[1]?.description}
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="grid grid-cols-3 gap-4 pt-4">
              <div className="flex flex-col items-center text-center">
                <div className="bg-primary/10 p-3 rounded-full mb-3">
                  <Leaf className="h-6 w-6 text-[#19a64a]" />
                </div>
                <h4 className="font-medium">Natural Ingredients</h4>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="bg-primary/10 p-3 rounded-full mb-3">
                  <Droplets className="h-6 w-6 text-[#19a64a]" />
                </div>
                <h4 className="font-medium">Pure Sources</h4>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="bg-primary/10 p-3 rounded-full mb-3">
                  <Award className="h-6 w-6 text-[#19a64a]" />
                </div>
                <h4 className="font-medium">Award Winning</h4>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8 }}
            className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-xl"
          >
            <Image
              src={aboutContent.image}
              alt={aboutContent.title}
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
