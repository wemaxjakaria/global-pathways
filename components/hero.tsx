"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Globe, Award, Users } from "lucide-react"

export function Hero() {

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-primary/50 z-10" />
        <img src="/diverse-students-studying-in-modern-university-lib.jpg" alt="Students studying" className="w-full h-full object-cover" />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block">
              <span className="glass text-white px-6 py-3 rounded-full text-sm font-semibold border border-white/20 shadow-modern">
                ✨ Your Gateway to Global Education
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight text-balance">
              Transform Your Future with{" "}
              <span className="text-gradient bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent px-2 rounded-lg inline-block">
                Global Education
              </span>
            </h1>

            <p className="text-xl text-white/90 leading-relaxed text-pretty">
              Expert guidance for university applications and visa processing. We help students achieve their dreams of
              studying abroad with personalized support every step of the way.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="gradient-primary text-white hover:shadow-modern-lg text-lg px-8 py-4 group">
                Start Your Journey
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-4 border-2 glass text-white hover:bg-white/20 backdrop-blur-sm border-white/30 hover:border-white/50 transition-all duration-300"
              >
                Learn More
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              {[
                { icon: Globe, label: "50+ Countries", value: "50+" },
                { icon: Award, label: "Success Rate", value: "98%" },
                { icon: Users, label: "Students Helped", value: "5000+" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="text-center glass rounded-xl p-6 border border-white/20 shadow-modern hover:shadow-modern-lg transition-all duration-300 group"
                >
                  <stat.icon className="w-8 h-8 mx-auto mb-3 text-white group-hover:scale-110 transition-transform" />
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-white/80">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative w-full h-[600px]">
              <div className="relative z-10 flex items-center justify-center h-full">
                <img src="/happy-diverse-students-celebrating-graduation-with.jpg" alt="Students celebrating" className="rounded-2xl shadow-2xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
