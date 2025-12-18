"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

import { testimonialsContent as testimonials } from "@/data/content"

export default function Testimonials() {
	const [currentIndex, setCurrentIndex] = useState(0)
	const [ref, inView] = useInView({
		triggerOnce: false,
		threshold: 0.1,
	})

	const nextTestimonial = () => {
		setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
	}

	const prevTestimonial = () => {
		setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
	}

	useEffect(() => {
		const interval = setInterval(() => {
			nextTestimonial()
		}, 8000)

		return () => clearInterval(interval)
	}, [])

	return (
		<section ref={ref} className="py-16 md:py-24 bg-background">
			<div className="container mx-auto px-4">
				<div className="text-center mb-12">
					<h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
					<p className="text-muted-foreground max-w-2xl mx-auto">
						Don't just take our word for it - hear from our satisfied customers about their experience with our
						beverages.
					</p>
				</div>

				<div className="relative max-w-4xl mx-auto">
					<AnimatePresence mode="wait">
						<motion.div
							key={currentIndex}
							initial={{ opacity: 0, x: 50 }}
							animate={{ opacity: 1, x: 0 }}
							exit={{ opacity: 0, x: -50 }}
							transition={{ duration: 0.5 }}
							className="bg-primary rounded-xl p-8 md:p-12 shadow-lg"
						>
							<div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
								<div className="shrink-0">
									<div className="relative h-20 w-20 rounded-full overflow-hidden">
										<Image
											src={testimonials[currentIndex].avatar || "/placeholder.svg"}
											alt={testimonials[currentIndex].name}
											fill
											className="object-cover"
										/>
									</div>
								</div>
								<div className="flex-1">
									<div className="flex mb-2">
										{[...Array(testimonials[currentIndex].rating)].map((_, i) => (
											<Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
										))}
										{[...Array(5 - testimonials[currentIndex].rating)].map((_, i) => (
											<Star key={i + testimonials[currentIndex].rating} className="h-5 w-5 text-white" />
										))}
									</div>
									<blockquote className="text-lg md:text-xl italic mb-4 text-white">
										"{testimonials[currentIndex].content}"
									</blockquote>
									<div>
										<p className="font-semibold text-white">{testimonials[currentIndex].name}</p>
										<p className="text-sm text-white">{testimonials[currentIndex].role}</p>
									</div>
								</div>
							</div>
						</motion.div>
					</AnimatePresence>

					<div className="flex justify-center mt-8 gap-2">
						<Button variant="outline" size="icon" onClick={prevTestimonial}>
							<ChevronLeft className="h-5 w-5" />
						</Button>
						{testimonials.map((_, index) => (
							<Button
								key={index}
								variant={index === currentIndex ? "default" : "outline"}
								size="sm"
								className={`w-8 h-8 p-0 rounded-full ${index === currentIndex ? "" : "opacity-50"}`}
								onClick={() => setCurrentIndex(index)}
							>
								{index + 1}
							</Button>
						))}
						<Button variant="outline" size="icon" onClick={nextTestimonial}>
							<ChevronRight className="h-5 w-5" />
						</Button>
					</div>
				</div>
			</div>
		</section>
	)
}
