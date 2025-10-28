"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, GraduationCap } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/#services" },
    { name: "Study Abroad", href: "/study-abroad" },
    { name: "About", href: "/#about" },
    { name: "Process", href: "/#process" },
    { name: "Contact", href: "/#contact" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all border-none duration-300 ${
        isScrolled ? "glass backdrop-blur-md shadow-modern-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-3 group">
              <Image src="/brand.jpeg" alt="Global Pathways" width={60} height={60} />
            </Link>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative group"
                onMouseEnter={() => setHoveredItem(item.name)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <Link href={item.href} className={`${isScrolled ? "text-foreground" : "text-white"} hover:text-primary transition-colors font-medium group-hover:scale-105 transition-transform`}>
                  {item.name}
                </Link>
                <div
                  className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${
                    hoveredItem === item.name ? "w-full" : "w-0"
                  }`}
                />
              </div>
            ))}
          </nav>

          <div className="hidden md:block">
            <Link href="/#contact">
              <Button className="gradient-primary text-white hover:shadow-modern-lg group">
                Get Started
                <span className="ml-2">→</span>
              </Button>
            </Link>
          </div>

          <button className="md:hidden text-foreground" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link href="/#contact">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 w-full">Get Started</Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
