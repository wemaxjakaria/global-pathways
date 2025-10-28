"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Award, Clock, Globe2, HeartHandshake, Shield, TrendingUp } from "lucide-react"
import { motion, useScroll, useTransform } from "motion/react"
import { useInView } from "motion/react"
import { useRef } from "react"

const reasons = [
  {
    icon: Award,
    title: "Expert Consultants",
    description:
      "Our team consists of certified education consultants with years of experience in international admissions.",
  },
  {
    icon: Globe2,
    title: "Global Network",
    description: "Partnerships with 500+ universities across 50+ countries worldwide.",
  },
  {
    icon: TrendingUp,
    title: "98% Success Rate",
    description: "Proven track record of successful university admissions and visa approvals.",
  },
  {
    icon: HeartHandshake,
    title: "Personalized Support",
    description: "One-on-one guidance tailored to your unique academic goals and aspirations.",
  },
  {
    icon: Clock,
    title: "Fast Processing",
    description: "Streamlined application process ensuring timely submissions and quick turnarounds.",
  },
  {
    icon: Shield,
    title: "Trusted Partner",
    description: "Transparent pricing, no hidden fees, and complete support throughout your journey.",
  },
]

export function WhyChooseUs() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"])

  return (
    <section id="about" ref={ref} className="py-24 relative overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-white/95 to-accent/20 z-10" />
        <img src="/world-map-with-connected-dots-showing-global-educa.jpg" alt="Global network" className="w-full h-full object-cover opacity-30" />
      </motion.div>

      <div className="container mx-auto px-4 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Why Choose <span className="text-primary-foreground bg-primary px-2 rounded-lg">GlobalPathways</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Your trusted partner in achieving international education dreams
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full bg-white/90 backdrop-blur-sm hover:bg-white transition-all duration-300 border-2 hover:border-primary/30">
                <CardContent className="p-8 text-center">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6"
                  >
                    <reason.icon className="w-10 h-10 text-primary-foreground" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{reason.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
