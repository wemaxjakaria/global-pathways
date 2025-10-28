"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { motion, AnimatePresence } from "motion/react"
import { useInView } from "motion/react"
import { useRef, useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    name: "Priya Sharma",
    country: "India → UK",
    university: "University of Oxford",
    image: "/indian-female-student-smiling.png",
    text: "GlobalPathways made my dream of studying at Oxford a reality. Their guidance through the application process was invaluable, and the visa support was seamless.",
    rating: 5,
  },
  {
    name: "Ahmed Hassan",
    country: "Pakistan → Canada",
    university: "University of Toronto",
    image: "/pakistani-male-student-smiling.jpg",
    text: "The team at GlobalPathways was incredibly supportive throughout my journey. From university selection to visa approval, everything was handled professionally.",
    rating: 5,
  },
  {
    name: "Maria Rodriguez",
    country: "Philippines → Australia",
    university: "University of Melbourne",
    image: "/filipino-female-student-smiling.jpg",
    text: "I was overwhelmed with the application process, but GlobalPathways simplified everything. Their expertise and personalized attention made all the difference.",
    rating: 5,
  },
]

export function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  const nextTestimonial = () => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  // Auto-carousel effect
  useEffect(() => {
    if (!isHovered && isInView) {
      const interval = setInterval(() => {
        setDirection(1)
        setCurrentIndex((prev) => (prev + 1) % testimonials.length)
      }, 3000) // Change every 4 seconds

      return () => clearInterval(interval)
    }
  }, [isHovered, isInView, testimonials.length])

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  return (
    <section ref={ref} className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Success Stories from Our Students
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Hear from students who achieved their dreams with our guidance
          </p>
        </motion.div>

        <div 
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="overflow-hidden">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
              >
                <Card className="hover:shadow-xl transition-all duration-300 border-2 border-primary/30">
                  <CardContent className="p-8 md:p-12">
                    <div className="flex gap-1 mb-6 justify-center">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <Star key={i} className="w-6 h-6 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-8 leading-relaxed text-lg md:text-xl italic text-center">
                      "{testimonials[currentIndex].text}"
                    </p>
                    <div className="flex items-center gap-4 justify-center">
                      <img
                        src={testimonials[currentIndex].image || "/placeholder.svg"}
                        alt={testimonials[currentIndex].name}
                        className="w-20 h-20 rounded-full object-cover border-4 border-primary/20"
                      />
                      <div className="text-left">
                        <div className="font-bold text-foreground text-lg">{testimonials[currentIndex].name}</div>
                        <div className="text-sm text-muted-foreground">{testimonials[currentIndex].country}</div>
                        <div className="text-sm text-primary font-semibold">
                          {testimonials[currentIndex].university}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              onClick={prevTestimonial}
              variant="outline"
              size="icon"
              className="rounded-full w-12 h-12 border-2 border-primary/30 hover:bg-primary hover:text-primary-foreground transition-all bg-transparent"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1)
                    setCurrentIndex(index)
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex ? "bg-primary w-8" : "bg-primary/30 hover:bg-primary/50"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <Button
              onClick={nextTestimonial}
              variant="outline"
              size="icon"
              className="rounded-full w-12 h-12 border-2 border-primary/30 hover:bg-primary hover:text-primary-foreground transition-all bg-transparent"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
