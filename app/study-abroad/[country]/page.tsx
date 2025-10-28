import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CountryDetail } from "@/components/study-abroad/country-detail"
import { notFound } from "next/navigation"

const countries = ["usa", "uk", "canada", "australia", "germany", "france"]

export function generateStaticParams() {
  return countries.map((country) => ({
    country: country,
  }))
}

export default function CountryPage({ params }: { params: { country: string } }) {
  if (!countries.includes(params.country)) {
    notFound()
  }

  return (
    <main className="min-h-screen">
      <Header />
      <CountryDetail country={params.country} />
      <Footer />
    </main>
  )
}
