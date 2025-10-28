"use client"

import { motion } from "motion/react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, MapPin, DollarSign, FileText } from "lucide-react"
import Link from "next/link"

const countries = [
  {
    id: "usa",
    name: "United States",
    flag: "🇺🇸",
    description: "Home to world-renowned universities and diverse academic programs",
    studyCost: "$20,000 - $50,000/year",
    livingCost: "$10,000 - $18,000/year",
    popularCities: ["New York", "Boston", "Los Angeles", "San Francisco"],
    image: "/american-university-campus-with-students.jpg",
  },
  {
    id: "uk",
    name: "United Kingdom",
    flag: "🇬🇧",
    description: "Rich academic heritage with prestigious institutions and shorter degree programs",
    studyCost: "£10,000 - £38,000/year",
    livingCost: "£12,000 - £15,000/year",
    popularCities: ["London", "Oxford", "Cambridge", "Edinburgh"],
    image: "/british-university-campus-historic-buildings.jpg",
  },
  {
    id: "canada",
    name: "Canada",
    flag: "🇨🇦",
    description: "High-quality education with affordable tuition and post-study work opportunities",
    studyCost: "CAD 15,000 - 35,000/year",
    livingCost: "CAD 10,000 - 15,000/year",
    popularCities: ["Toronto", "Vancouver", "Montreal", "Ottawa"],
    image: "/canadian-university-campus-with-maple-trees.jpg",
  },
  {
    id: "australia",
    name: "Australia",
    flag: "🇦🇺",
    description: "World-class education in a vibrant, multicultural environment",
    studyCost: "AUD 20,000 - 45,000/year",
    livingCost: "AUD 18,000 - 25,000/year",
    popularCities: ["Sydney", "Melbourne", "Brisbane", "Perth"],
    image: "/australian-university-campus-modern-architecture.jpg",
  },
  {
    id: "germany",
    name: "Germany",
    flag: "🇩🇪",
    description: "Excellent education with low or no tuition fees at public universities",
    studyCost: "€0 - €20,000/year",
    livingCost: "€10,000 - €12,000/year",
    popularCities: ["Berlin", "Munich", "Frankfurt", "Hamburg"],
    image: "/german-university-campus-traditional-architecture.jpg",
  },
  {
    id: "france",
    name: "France",
    flag: "🇫🇷",
    description: "Rich cultural experience with affordable education and research opportunities",
    studyCost: "€2,770 - €20,000/year",
    livingCost: "€9,000 - €12,000/year",
    popularCities: ["Paris", "Lyon", "Toulouse", "Marseille"],
    image: "/french-university-campus-parisian-architecture.jpg",
  },
]

export function CountryCards() {
  return (
    <section className="py-20 bg-gradient-to-br from-background via-background to-primary/5 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5" />
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="absolute top-10 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-block mb-6"
          >
            <span className="glass px-6 py-3 rounded-full text-sm font-semibold text-primary border border-primary/20 shadow-modern">
              🌍 Global Destinations
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Choose Your <span className="text-gradient">Destination</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Explore detailed information about each country to make an informed decision about your study abroad journey
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {countries.map((country, index) => (
            <motion.div
              key={country.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group"                                                                                                                                                                                                                                               
            >
              <Card className="group hover:shadow-modern-xl transition-all duration-500 overflow-hidden h-full border-2 hover:border-primary/50 glass backdrop-blur-sm">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={country.image || "/placeholder.svg"}
                    alt={country.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Floating flag animation */}
                  <motion.div
                    animate={{
                      y: [0, -5, 0],
                      rotate: [0, 2, 0],
                    }}
                    transition={{
                      duration: 3,
repeat: Number.POSITIVE_INFINITY,                                                                                                                                                               
                      ease: "easeInOut",
                    }}
                    className="absolute top-4 right-4 text-4xl"
                  >
                    {country.flag}
                  </motion.div>
                  
                  <div className="absolute bottom-4 left-4 flex items-center gap-3">
                    <h3 className="text-2xl font-bold text-white drop-shadow-lg">{country.name}</h3>
                  </div>
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                <CardContent className="p-6 relative">
                  {/* Gradient background on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-lg" />
                  
                  <div className="relative z-10">                                                                                                                                                                                                                                     
                    <p className="text-muted-foreground mb-6 text-pretty group-hover:text-foreground transition-colors">
                      {country.description}
                    </p>

                    <div className="space-y-4 mb-6">                                              
                      <motion.div 
                        className="flex items-start gap-3 p-3 rounded-lg bg-muted/50 group-hover:bg-primary/10 transition-colors"
                        whileHover={{ x: 4 }}
                      >
                        <DollarSign className="w-5 h-5 text-primary mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                        <div>
                          <div className="text-sm font-semibold text-foreground">Tuition Fees</div>
                          <div className="text-sm text-muted-foreground font-medium">{country.studyCost}</div>
                        </div>
                      </motion.div>

                      <motion.div 
                        className="flex items-start gap-3 p-3 rounded-lg bg-muted/50 group-hover:bg-primary/10 transition-colors"
                        whileHover={{ x: 4 }}
                      >
                        <FileText className="w-5 h-5 text-primary mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                        <div>
                          <div className="text-sm font-semibold text-foreground">Living Cost</div>
                          <div className="text-sm text-muted-foreground font-medium">{country.livingCost}</div>
                        </div>
                      </motion.div>

                      <motion.div 
                        className="flex items-start gap-3 p-3 rounded-lg bg-muted/50 group-hover:bg-primary/10 transition-colors"
                        whileHover={{ x: 4 }}
                      >
                        <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                        <div>
                          <div className="text-sm font-semibold text-foreground">Popular Cities</div>
                          <div className="text-sm text-muted-foreground font-medium">{country.popularCities.join(", ")}</div>
                        </div>
                      </motion.div>
                    </div>

                    <Link href={`/study-abroad/${country.id}`}>
                      <Button className="w-full gradient-primary text-white hover:shadow-modern-lg group pulse-glow">
                        View Details
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
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
