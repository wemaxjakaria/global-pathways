"use client"

import { GraduationCap, Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react"
import { motion } from "motion/react"
import Image from "next/image"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-foreground via-foreground to-primary/20 text-background py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent" />
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
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <motion.div 
              className="flex items-center gap-3 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Link href="/" className="flex items-center gap-3 group">
              <Image src="/brand.jpeg" alt="Global Pathways" width={60} height={60} />
            </Link>
            </motion.div>
            <motion.p 
              className="text-background/70 leading-relaxed mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Your trusted partner in achieving international education dreams. We guide students every step of the way with expert support and personalized solutions.
            </motion.p>
            <motion.div 
              className="flex gap-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {[
                { Icon: Facebook, color: "text-white", bgColor: "bg-blue-500", hoverBg: "hover:bg-blue-600" },
                { Icon: Twitter, color: "text-white", bgColor: "bg-sky-500", hoverBg: "hover:bg-sky-600" },
                { Icon: Instagram, color: "text-white", bgColor: "bg-pink-500", hoverBg: "hover:bg-pink-600" },
                { Icon: Linkedin, color: "text-white", bgColor: "bg-blue-600", hoverBg: "hover:bg-blue-700" },
                { Icon: Youtube, color: "text-white", bgColor: "bg-red-500", hoverBg: "hover:bg-red-600" }
              ].map(({ Icon, color, bgColor, hoverBg }, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className={`w-12 h-12 ${bgColor} ${hoverBg} rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-modern ${color}`}
                  whileHover={{ y: -2 }}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-bold mb-6 text-gradient">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "About Us", "Services", "Universities", "Blog", "Contact"].map((link, index) => (
                <motion.li 
                  key={link}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                >
                  <a href="#" className="text-background/70 hover:text-primary transition-colors flex items-center gap-2 group">
                    <span className="w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-bold mb-6 text-gradient">Services</h4>
            <ul className="space-y-3">
              {[
                "University Applications",
                "Student Visas",
                "Work Permits",
                "Test Preparation",
                "Career Counseling",
                "Post-Arrival Support",
              ].map((service, index) => (
                <motion.li 
                  key={service}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                >
                  <a href="#" className="text-background/70 hover:text-primary transition-colors flex items-center gap-2 group">
                    <span className="w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-lg font-bold mb-6 text-gradient">Contact Info</h4>
            <div className="space-y-4">
              <motion.div 
                className="flex items-center gap-3"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-background/70 text-sm">globalpathwaysinfobd@gmail.com</span>
              </motion.div>
              <motion.div 
                className="flex items-center gap-3"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 }}
              >
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-background/70 text-sm">01858-149958</span>
              </motion.div>
              <motion.div 
                className="flex items-center gap-3"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.6 }}
              >
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-background/70 text-sm">ECB Chottor.
                Dhaka Cantonment,Dhaka-1206.</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="border-t border-background/20 pt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/70 text-sm">© 2025 GlobalPathways. All rights reserved.</p>
            <div className="flex gap-6 text-sm">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((link, index) => (
                <motion.a 
                  key={link}
                  href="#" 
                  className="text-background/70 hover:text-primary transition-colors group"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  whileHover={{ y: -2 }}
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
