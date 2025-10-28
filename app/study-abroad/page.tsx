import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { StudyAbroadHero } from "@/components/study-abroad/hero"
import { CountryCards } from "@/components/study-abroad/country-cards"

export default function StudyAbroadPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <StudyAbroadHero />
      <CountryCards />
      <Footer />
    </main>
  )
}
