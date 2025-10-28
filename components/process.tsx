"use client"

import { Card, CardContent } from "@/components/ui/card"
import { motion } from "motion/react"
import { useInView } from "motion/react"
import { useRef } from "react"

const steps = [
  {
    number: "01",
    title: "Initial Consultation",
    description:
      "Free consultation to understand your goals, academic background, and preferences for studying abroad.",
  },
  {
    number: "02",
    title: "University Selection",
    description: "We help you shortlist universities and courses that align with your profile and career aspirations.",
  },
  {
    number: "03",
    title: "Application Preparation",
    description:
      "Comprehensive support in preparing documents, essays, and submitting applications to your chosen universities.",
  },
  {
    number: "04",
    title: "Visa Processing",
    description: "Complete assistance with visa documentation, application submission, and interview preparation.",
  },
  {
    number: "05",
    title: "Pre-Departure Briefing",
    description:
      "Orientation sessions covering travel, accommodation, banking, and what to expect in your new country.",
  },
  {
    number: "06",
    title: "Post-Arrival Support",
    description: "Continued support after you arrive, helping you settle in and succeed in your new environment.",
  },
]

export function Process() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="process" ref={ref} className="py-24 bg-secondary/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Our Simple 6-Step Process
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            From consultation to arrival, we guide you every step of the way
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full bg-card hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500" />
                <CardContent className="p-8 relative z-10">
                  <div className="text-6xl font-bold text-primary/20 mb-4">{step.number}</div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
