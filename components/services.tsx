"use client"

import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, FileText, Plane, BookOpen, Users, CheckCircle, Ticket } from "lucide-react"
import { motion, useScroll, useTransform } from "motion/react"
import { useInView } from "motion/react"
import { useRef } from "react"

const services = [
  {
    icon: GraduationCap,
    title: "University Applications",
    description:
      "Expert guidance through the entire university application process, from selecting the right institutions to submitting compelling applications.",
    features: ["University Selection", "Application Review", "Essay Assistance", "Document Preparation"],
  },
  {
    icon: FileText,
    title: "Student Visa Processing",
    description:
      "Comprehensive visa application support ensuring all documentation is complete and accurate for a smooth approval process.",
    features: ["Visa Documentation", "Interview Preparation", "Application Tracking", "Legal Compliance"],
  },
  {
    icon: Plane,
    title: "Travel & Work Visas",
    description:
      "Assistance with various visa types including tourist, work permits, and immigration services for your global journey.",
    features: ["Work Permits", "Tourist Visas", "Immigration Support", "Visa Extensions"],
  },
  {
    icon: BookOpen,
    title: "Test Preparation",
    description:
      "Comprehensive coaching for IELTS, TOEFL, GRE, GMAT, and other standardized tests required for international admissions.",
    features: ["IELTS/TOEFL Prep", "GRE/GMAT Coaching", "Practice Tests", "Score Improvement"],
  },
  {
    icon: Users,
    title: "Career Counseling",
    description:
      "Personalized career guidance to help you choose the right course and university aligned with your career goals.",
    features: ["Career Assessment", "Course Selection", "Industry Insights", "Future Planning"],
  },
  {
    icon: CheckCircle,
    title: "Post-Arrival Support",
    description:
      "Continued support after you reach your destination, including accommodation, banking, and settling-in assistance.",
    features: ["Accommodation Help", "Banking Setup", "Local Orientation", "Ongoing Support"],
  },
  {
    icon: Ticket,
    title: "Air Ticket Booking",
    description:
      "Expert assistance with flight bookings, finding the best deals, and ensuring smooth travel arrangements for your international journey.",
    features: ["Flight Search", "Best Price Guarantee", "Travel Insurance", "Baggage Assistance"],
  },
]

export function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })
  const y = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"])

  return (
    <section 
      id="services" 
      ref={ref} 
      className="py-24 relative overflow-hidden"
      style={{
        backgroundImage: "url('/modern-university-campus-with-international-studen.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-white/80 z-10" />
      
      <div className="container mx-auto px-4 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-block mb-6"
          >
            <span className="glass px-6 py-3 rounded-full text-sm font-semibold text-primary border border-primary/20 shadow-modern">
              🚀 Comprehensive Solutions
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Our <span className="text-gradient">Comprehensive</span> Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            End-to-end support for your international education journey with expert guidance every step of the way
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group"
            >
              <Card className="h-full hover:shadow-modern-xl p-0 transition-all duration-500 border-2 hover:border-primary/50 group glass backdrop-blur-sm overflow-hidden">
                <CardContent className="p-8 relative">
                  {/* Gradient background on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10">
                    <motion.div 
                      className="w-16 h-16 gradient-primary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-modern"
                      whileHover={{ rotate: 5 }}
                    >
                      <service.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    
                    <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <motion.li 
                          key={feature} 
                          className="flex items-center gap-3 text-sm text-foreground"
                          initial={{ opacity: 0, x: -10 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: 0.8 + index * 0.1 + featureIndex * 0.05 }}
                        >
                          <div className="w-2 h-2 gradient-primary rounded-full flex-shrink-0" />
                          <span className="group-hover:text-primary transition-colors">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
