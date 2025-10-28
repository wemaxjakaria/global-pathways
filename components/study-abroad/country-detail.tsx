"use client"

import { motion } from "motion/react"
import { Button } from "@/components/ui/button"
import {
  GraduationCap,
  FileText,
  ClipboardList,
  Info,
  DollarSign,
  Home,
  Calendar,
  CheckCircle,
  ArrowLeft,
  MapPin,
  Briefcase,
} from "lucide-react"
import Link from "next/link"

const countryData: Record<string, any> = {
  usa: {
    name: "United States",
    flag: "🇺🇸",
    hero: "/american-university-campus-aerial-view.jpg",
    whyStudy: [
      "Home to many of the world's top-ranked universities",
      "Diverse range of academic programs and research opportunities",
      "Strong emphasis on practical learning and innovation",
      "Vibrant campus life with numerous extracurricular activities",
      "Optional Practical Training (OPT) for work experience",
      "Multicultural environment with students from around the world",
    ],
    documents: [
      "Valid passport",
      "I-20 form from your university",
      "SEVIS fee payment receipt",
      "Academic transcripts and certificates",
      "Standardized test scores (SAT/ACT for undergrad, GRE/GMAT for grad)",
      "English proficiency test (TOEFL/IELTS)",
      "Financial documents showing proof of funds",
      "Statement of Purpose (SOP)",
      "Letters of Recommendation (LOR)",
      "Resume/CV",
    ],
    applicationProcess: [
      {
        step: "Research & Shortlist",
        description: "Research universities and programs that match your goals and qualifications",
        timeline: "12-18 months before",
      },
      {
        step: "Prepare Tests",
        description: "Take required standardized tests (SAT/ACT/GRE/GMAT) and English proficiency tests",
        timeline: "10-12 months before",
      },
      {
        step: "Prepare Documents",
        description: "Gather transcripts, write SOP, obtain recommendation letters",
        timeline: "8-10 months before",
      },
      {
        step: "Submit Applications",
        description: "Apply to universities through their online portals before deadlines",
        timeline: "6-8 months before",
      },
      {
        step: "Receive Admission",
        description: "Wait for admission decisions and accept your offer",
        timeline: "3-6 months before",
      },
      {
        step: "Apply for Visa",
        description: "Apply for F-1 student visa and attend visa interview",
        timeline: "2-3 months before",
      },
      {
        step: "Pre-Departure",
        description: "Book flights, arrange accommodation, attend orientation",
        timeline: "1-2 months before",
      },
    ],
    importantInfo: [
      "Academic year typically runs from August/September to May",
      "F-1 visa allows you to work on-campus up to 20 hours per week",
      "OPT allows 12 months of work authorization after graduation (36 months for STEM)",
      "Health insurance is mandatory for all international students",
      "Social Security Number (SSN) required for employment",
      "Most universities have dedicated international student offices",
    ],
    studyCost: {
      tuition: "$20,000 - $50,000 per year",
      breakdown: [
        { item: "Community Colleges", cost: "$6,000 - $20,000/year" },
        { item: "Public Universities (Out-of-state)", cost: "$25,000 - $40,000/year" },
        { item: "Private Universities", cost: "$35,000 - $60,000/year" },
        { item: "Application Fees", cost: "$50 - $100 per university" },
        { item: "Visa Fees", cost: "$510 (SEVIS $350 + Visa $160)" },
      ],
    },
    livingCost: {
      average: "$10,000 - $18,000 per year",
      breakdown: [
        { item: "Accommodation", cost: "$500 - $1,500/month" },
        { item: "Food", cost: "$250 - $400/month" },
        { item: "Transportation", cost: "$50 - $150/month" },
        { item: "Books & Supplies", cost: "$500 - $1,000/year" },
        { item: "Health Insurance", cost: "$1,500 - $2,500/year" },
        { item: "Personal Expenses", cost: "$100 - $300/month" },
      ],
    },
    popularCities: ["New York", "Boston", "Los Angeles", "San Francisco", "Chicago", "Austin"],
    intakes: [
      "Fall (August/September) - Main intake",
      "Spring (January) - Limited programs",
      "Summer (May/June) - Very limited",
    ],
  },
  uk: {
    name: "United Kingdom",
    flag: "🇬🇧",
    hero: "/british-university-oxford-cambridge-historic-campu.jpg",
    whyStudy: [
      "World-renowned universities with centuries of academic excellence",
      "Shorter degree programs (3 years for undergrad, 1 year for master's)",
      "Rich cultural heritage and historical significance",
      "Graduate Route visa allows 2 years of post-study work",
      "High-quality research opportunities and facilities",
      "Gateway to Europe with excellent travel opportunities",
    ],
    documents: [
      "Valid passport",
      "CAS (Confirmation of Acceptance for Studies) from university",
      "Academic transcripts and certificates",
      "English proficiency test (IELTS/TOEFL/PTE)",
      "Financial documents (proof of funds for tuition + living)",
      "Personal Statement",
      "Letters of Recommendation",
      "CV/Resume",
      "Portfolio (for creative courses)",
      "TB test certificate (from approved clinics)",
    ],
    applicationProcess: [
      {
        step: "Research Programs",
        description: "Explore universities and courses through UCAS or direct applications",
        timeline: "12-15 months before",
      },
      {
        step: "English Proficiency",
        description: "Take IELTS or other accepted English language tests",
        timeline: "10-12 months before",
      },
      {
        step: "Prepare Application",
        description: "Write personal statement, gather references and documents",
        timeline: "8-10 months before",
      },
      {
        step: "Submit via UCAS",
        description: "Apply through UCAS for undergraduate or directly for postgraduate",
        timeline: "6-9 months before",
      },
      {
        step: "Receive Offers",
        description: "Review offers and accept your firm and insurance choices",
        timeline: "3-6 months before",
      },
      {
        step: "Student Visa",
        description: "Apply for Tier 4 (Student) visa with CAS letter",
        timeline: "2-3 months before",
      },
      {
        step: "Accommodation",
        description: "Apply for university accommodation or find private housing",
        timeline: "2-3 months before",
      },
    ],
    importantInfo: [
      "Academic year runs from September/October to June/July",
      "Can work up to 20 hours per week during term time",
      "Graduate Route allows 2 years of post-study work (3 years for PhD)",
      "NHS surcharge required for healthcare access (£470/year)",
      "UCAS application deadline: January 15 for most courses",
      "Oxbridge and medicine deadlines are earlier (October 15)",
    ],
    studyCost: {
      tuition: "£10,000 - £38,000 per year",
      breakdown: [
        { item: "Undergraduate (Classroom-based)", cost: "£10,000 - £20,000/year" },
        { item: "Undergraduate (Lab-based)", cost: "£15,000 - £25,000/year" },
        { item: "Postgraduate", cost: "£12,000 - £30,000/year" },
        { item: "MBA Programs", cost: "£20,000 - £60,000/year" },
        { item: "UCAS Application Fee", cost: "£22 (single) / £27 (multiple)" },
        { item: "Visa Fee", cost: "£363" },
      ],
    },
    livingCost: {
      average: "£12,000 - £15,000 per year",
      breakdown: [
        { item: "Accommodation", cost: "£400 - £800/month" },
        { item: "Food", cost: "£150 - £250/month" },
        { item: "Transportation", cost: "£50 - £100/month" },
        { item: "Books & Supplies", cost: "£300 - £500/year" },
        { item: "NHS Surcharge", cost: "£470/year" },
        { item: "Personal Expenses", cost: "£100 - £200/month" },
      ],
    },
    popularCities: ["London", "Oxford", "Cambridge", "Edinburgh", "Manchester", "Birmingham"],
    intakes: ["September/October - Main intake", "January/February - Limited programs"],
  },
  canada: {
    name: "Canada",
    flag: "🇨🇦",
    hero: "/canadian-university-campus-with-mountains-and-natu.jpg",
    whyStudy: [
      "High-quality education at affordable tuition rates",
      "Safe, welcoming, and multicultural society",
      "Post-Graduation Work Permit (PGWP) for up to 3 years",
      "Pathway to permanent residency through various immigration programs",
      "Excellent research facilities and innovation hubs",
      "Beautiful natural landscapes and high quality of life",
    ],
    documents: [
      "Valid passport",
      "Letter of Acceptance from DLI (Designated Learning Institution)",
      "Provincial Attestation Letter (PAL) - Required from 2024",
      "Academic transcripts and certificates",
      "English/French proficiency test (IELTS/TOEFL/TEF)",
      "Proof of financial support (GIC or bank statements)",
      "Statement of Purpose (SOP)",
      "Letters of Recommendation",
      "Resume/CV",
      "Medical examination (if required)",
    ],
    applicationProcess: [
      {
        step: "Choose Program & University",
        description: "Research DLI institutions and programs that match your goals",
        timeline: "12-15 months before",
      },
      {
        step: "Language Test",
        description: "Take IELTS, TOEFL, or other accepted language proficiency tests",
        timeline: "10-12 months before",
      },
      {
        step: "Prepare Documents",
        description: "Gather transcripts, write SOP, obtain recommendation letters",
        timeline: "8-10 months before",
      },
      {
        step: "Apply to Universities",
        description: "Submit applications directly to universities or through agents",
        timeline: "6-9 months before",
      },
      {
        step: "Receive LOA",
        description: "Accept offer and receive Letter of Acceptance",
        timeline: "3-6 months before",
      },
      {
        step: "Get PAL",
        description: "Obtain Provincial Attestation Letter from your province",
        timeline: "2-4 months before",
      },
      {
        step: "Study Permit",
        description: "Apply for study permit online with biometrics",
        timeline: "2-3 months before",
      },
    ],
    importantInfo: [
      "Academic year typically runs from September to April/May",
      "Can work up to 20 hours per week during studies (off-campus)",
      "PGWP duration depends on program length (8 months to 3 years)",
      "Provincial Attestation Letter (PAL) mandatory from January 2024",
      "Express Entry system offers pathway to permanent residency",
      "Co-op programs available in many institutions for work experience",
    ],
    studyCost: {
      tuition: "CAD 15,000 - 35,000 per year",
      breakdown: [
        { item: "Undergraduate Programs", cost: "CAD 15,000 - 30,000/year" },
        { item: "Postgraduate Programs", cost: "CAD 18,000 - 35,000/year" },
        { item: "MBA Programs", cost: "CAD 30,000 - 60,000/year" },
        { item: "Application Fees", cost: "CAD 100 - 250 per university" },
        { item: "Study Permit Fee", cost: "CAD 150" },
        { item: "Biometrics Fee", cost: "CAD 85" },
      ],
    },
    livingCost: {
      average: "CAD 10,000 - 15,000 per year",
      breakdown: [
        { item: "Accommodation", cost: "CAD 400 - 1,000/month" },
        { item: "Food", cost: "CAD 200 - 400/month" },
        { item: "Transportation", cost: "CAD 80 - 150/month" },
        { item: "Books & Supplies", cost: "CAD 500 - 1,000/year" },
        { item: "Health Insurance", cost: "CAD 600 - 900/year" },
        { item: "Personal Expenses", cost: "CAD 100 - 200/month" },
      ],
    },
    popularCities: ["Toronto", "Vancouver", "Montreal", "Ottawa", "Calgary", "Waterloo"],
    intakes: ["Fall (September) - Main intake", "Winter (January) - Major intake", "Summer (May) - Limited programs"],
  },
  australia: {
    name: "Australia",
    flag: "🇦🇺",
    hero: "/australian-university-campus-sydney-opera-house.jpg",
    whyStudy: [
      "World-class universities with strong global rankings",
      "Innovative teaching methods and cutting-edge research",
      "Post-Study Work visa for 2-4 years depending on qualification",
      "Safe, sunny, and outdoor lifestyle",
      "Multicultural society with students from 140+ countries",
      "Strong economy with excellent job opportunities",
    ],
    documents: [
      "Valid passport",
      "Confirmation of Enrolment (CoE) from university",
      "Genuine Temporary Entrant (GTE) statement",
      "Academic transcripts and certificates",
      "English proficiency test (IELTS/TOEFL/PTE)",
      "Financial capacity evidence (proof of funds)",
      "Overseas Student Health Cover (OSHC)",
      "Statement of Purpose",
      "Letters of Recommendation",
      "CV/Resume",
    ],
    applicationProcess: [
      {
        step: "Research & Select",
        description: "Choose universities and courses from CRICOS registered institutions",
        timeline: "12-15 months before",
      },
      {
        step: "English Test",
        description: "Take IELTS, TOEFL, or PTE Academic for English proficiency",
        timeline: "10-12 months before",
      },
      {
        step: "Prepare Application",
        description: "Gather documents, write GTE statement and personal statement",
        timeline: "8-10 months before",
      },
      {
        step: "Submit Applications",
        description: "Apply directly or through authorized agents",
        timeline: "6-8 months before",
      },
      {
        step: "Receive Offer",
        description: "Accept offer and pay initial tuition deposit",
        timeline: "4-6 months before",
      },
      {
        step: "Get CoE & OSHC",
        description: "Receive Confirmation of Enrolment and arrange health cover",
        timeline: "3-4 months before",
      },
      {
        step: "Student Visa",
        description: "Apply for subclass 500 student visa online",
        timeline: "2-3 months before",
      },
    ],
    importantInfo: [
      "Academic year: February to November (Semester 1 & 2)",
      "Can work up to 48 hours per fortnight during studies",
      "Post-Study Work visa: 2-4 years depending on qualification level",
      "OSHC (health insurance) mandatory for entire stay",
      "GTE statement crucial for visa approval",
      "Biometrics and health examination may be required",
    ],
    studyCost: {
      tuition: "AUD 20,000 - 45,000 per year",
      breakdown: [
        { item: "Undergraduate Programs", cost: "AUD 20,000 - 40,000/year" },
        { item: "Postgraduate Programs", cost: "AUD 22,000 - 45,000/year" },
        { item: "MBA Programs", cost: "AUD 40,000 - 70,000/year" },
        { item: "Application Fees", cost: "AUD 50 - 150 per university" },
        { item: "Student Visa Fee", cost: "AUD 710" },
        { item: "OSHC", cost: "AUD 500 - 700/year" },
      ],
    },
    livingCost: {
      average: "AUD 18,000 - 25,000 per year",
      breakdown: [
        { item: "Accommodation", cost: "AUD 800 - 1,500/month" },
        { item: "Food", cost: "AUD 300 - 500/month" },
        { item: "Transportation", cost: "AUD 100 - 200/month" },
        { item: "Books & Supplies", cost: "AUD 500 - 1,000/year" },
        { item: "Phone & Internet", cost: "AUD 50 - 100/month" },
        { item: "Personal Expenses", cost: "AUD 150 - 300/month" },
      ],
    },
    popularCities: ["Sydney", "Melbourne", "Brisbane", "Perth", "Adelaide", "Canberra"],
    intakes: ["February/March - Main intake", "July/August - Major intake", "November - Limited programs"],
  },
  germany: {
    name: "Germany",
    flag: "🇩🇪",
    hero: "/german-university-campus-traditional-architecture-.jpg",
    whyStudy: [
      "Low or no tuition fees at public universities",
      "Strong focus on research and innovation",
      "18 months post-study work visa to find employment",
      "Central location in Europe for travel opportunities",
      "High quality of life and excellent infrastructure",
      "Growing number of English-taught programs",
    ],
    documents: [
      "Valid passport",
      "University admission letter (Zulassungsbescheid)",
      "Academic transcripts and certificates (officially translated)",
      "German language proficiency (TestDaF/DSH) or English (IELTS/TOEFL)",
      "Blocked account (Sperrkonto) showing €11,208 for living expenses",
      "Health insurance (public or private)",
      "Motivation letter",
      "Letters of Recommendation",
      "CV in European format",
      "APS certificate (for certain countries)",
    ],
    applicationProcess: [
      {
        step: "Choose Program",
        description: "Search programs on DAAD database and university websites",
        timeline: "12-15 months before",
      },
      {
        step: "Language Preparation",
        description: "Learn German (B2/C1 level) or prepare for English programs",
        timeline: "10-15 months before",
      },
      {
        step: "Document Preparation",
        description: "Get documents translated and notarized, apply for APS if needed",
        timeline: "8-10 months before",
      },
      {
        step: "Apply via Uni-Assist",
        description: "Submit applications through uni-assist or directly to universities",
        timeline: "6-8 months before",
      },
      {
        step: "Receive Admission",
        description: "Wait for admission decision (Zulassungsbescheid)",
        timeline: "3-6 months before",
      },
      {
        step: "Blocked Account",
        description: "Open blocked account and deposit required amount",
        timeline: "2-3 months before",
      },
      {
        step: "Student Visa",
        description: "Apply for national visa (Type D) at German embassy",
        timeline: "2-3 months before",
      },
    ],
    importantInfo: [
      "Academic year: Winter semester (Oct) and Summer semester (Apr)",
      "Can work up to 120 full days or 240 half days per year",
      "18-month job seeker visa after graduation",
      "Public universities charge minimal semester fees (€150-350)",
      "Most bachelor's programs taught in German",
      "Residence permit required after arrival in Germany",
    ],
    studyCost: {
      tuition: "€0 - €20,000 per year",
      breakdown: [
        { item: "Public Universities (Undergrad)", cost: "€0 - €500/semester (admin fees)" },
        { item: "Public Universities (Postgrad)", cost: "€0 - €500/semester (admin fees)" },
        { item: "Private Universities", cost: "€10,000 - €20,000/year" },
        { item: "MBA Programs", cost: "€15,000 - €40,000/year" },
        { item: "Uni-assist Fee", cost: "€75 (first) + €30 (additional)" },
        { item: "Visa Fee", cost: "€75" },
      ],
    },
    livingCost: {
      average: "€10,000 - €12,000 per year",
      breakdown: [
        { item: "Accommodation", cost: "€300 - €600/month" },
        { item: "Food", cost: "€200 - €300/month" },
        { item: "Transportation", cost: "€30 - €100/month (often included in semester ticket)" },
        { item: "Books & Supplies", cost: "€200 - €400/year" },
        { item: "Health Insurance", cost: "€110/month (mandatory)" },
        { item: "Personal Expenses", cost: "€100 - €200/month" },
      ],
    },
    popularCities: ["Berlin", "Munich", "Frankfurt", "Hamburg", "Stuttgart", "Heidelberg"],
    intakes: ["Winter Semester (October) - Main intake", "Summer Semester (April) - Limited programs"],
  },
  france: {
    name: "France",
    flag: "🇫🇷",
    hero: "/french-university-campus-paris-eiffel-tower-sorbon.jpg",
    whyStudy: [
      "Affordable tuition fees at public universities",
      "Rich cultural heritage and art scene",
      "Strong emphasis on research and innovation",
      "Central location for exploring Europe",
      "Post-study work opportunities in growing economy",
      "Learn French language and culture",
    ],
    documents: [
      "Valid passport",
      "Campus France approval and interview",
      "University acceptance letter",
      "Academic transcripts and certificates (translated)",
      "French language proficiency (DELF/DALF/TCF) or English (IELTS/TOEFL)",
      "Proof of financial resources (€615/month minimum)",
      "Motivation letter in French or English",
      "Letters of Recommendation",
      "CV/Resume",
      "Health insurance coverage",
    ],
    applicationProcess: [
      {
        step: "Research Programs",
        description: "Explore programs on Campus France and university websites",
        timeline: "12-15 months before",
      },
      {
        step: "Language Preparation",
        description: "Learn French (B2 level recommended) or prepare for English programs",
        timeline: "10-12 months before",
      },
      {
        step: "Campus France",
        description: "Create account on Campus France and complete application",
        timeline: "8-10 months before",
      },
      {
        step: "Apply to Universities",
        description: "Submit applications through Campus France or directly",
        timeline: "6-8 months before",
      },
      {
        step: "Campus France Interview",
        description: "Attend interview at Campus France office",
        timeline: "4-6 months before",
      },
      {
        step: "Receive Admission",
        description: "Accept offer and receive acceptance letter",
        timeline: "3-4 months before",
      },
      {
        step: "Student Visa",
        description: "Apply for long-stay student visa (VLS-TS)",
        timeline: "2-3 months before",
      },
    ],
    importantInfo: [
      "Academic year: September to June (two semesters)",
      "Can work up to 964 hours per year (part-time)",
      "APS (temporary residence permit) allows job search after graduation",
      "Campus France procedure mandatory for most countries",
      "Public universities have very low tuition fees",
      "CVEC (student life contribution) of €100 required annually",
    ],
    studyCost: {
      tuition: "€2,770 - €20,000 per year",
      breakdown: [
        { item: "Public Universities (Bachelor)", cost: "€2,770/year" },
        { item: "Public Universities (Master)", cost: "€3,770/year" },
        { item: "Engineering Schools", cost: "€601/year (public)" },
        { item: "Private Universities", cost: "€3,000 - €20,000/year" },
        { item: "Business Schools", cost: "€8,000 - €20,000/year" },
        { item: "Campus France Fee", cost: "€70 - €200" },
        { item: "Visa Fee", cost: "€99" },
      ],
    },
    livingCost: {
      average: "€9,000 - €12,000 per year",
      breakdown: [
        { item: "Accommodation", cost: "€400 - €800/month" },
        { item: "Food", cost: "€200 - €300/month" },
        { item: "Transportation", cost: "€30 - €75/month" },
        { item: "Books & Supplies", cost: "€300 - €500/year" },
        { item: "Health Insurance", cost: "€200 - €300/year" },
        { item: "CVEC Contribution", cost: "€100/year" },
        { item: "Personal Expenses", cost: "€100 - €200/month" },
      ],
    },
    popularCities: ["Paris", "Lyon", "Toulouse", "Marseille", "Bordeaux", "Strasbourg"],
    intakes: ["Fall (September) - Main intake", "Spring (January/February) - Limited programs"],
  },
}

export function CountryDetail({ country }: { country: string }) {
  const data = countryData[country]

  if (!data) return null

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${data.hero}')` }} />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background" />
        </motion.div>

        <div className="container mx-auto px-4 relative z-10 pt-20">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Link href="/study-abroad">
              <Button variant="ghost" className="mb-6 hover:bg-primary/10">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Countries
              </Button>
            </Link>

            <div className="flex items-center gap-4 mb-4">
              <span className="text-6xl">{data.flag}</span>
              <h1 className="text-5xl md:text-6xl font-bold text-balance">
                Study in <span className="text-primary">{data.name}</span>
              </h1>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Study Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="max-w-4xl mx-auto">
              <h2 className="flex items-center gap-2 text-3xl font-bold mb-8">
                <GraduationCap className="w-8 h-8 text-primary" />
                Why Study in {data.name}?
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {data.whyStudy.map((reason: string, index: number) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3 p-4"
                  >
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-muted-foreground">{reason}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Documents Required */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="max-w-4xl mx-auto">
              <h2 className="flex items-center gap-2 text-3xl font-bold mb-8">
                <FileText className="w-8 h-8 text-primary" />
                Documents Required
              </h2>
              <div className="grid md:grid-cols-2 gap-3">
                {data.documents.map((doc: string, index: number) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-start gap-3 p-3"
                  >
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-muted-foreground">{doc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <h2 className="text-4xl font-bold mb-2 flex items-center gap-2">
              <ClipboardList className="w-8 h-8 text-primary" />
              Application Process
            </h2>
            <p className="text-muted-foreground text-lg">Step-by-step guide to your study abroad journey</p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {data.applicationProcess.map((step: any, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative p-6 border-l-4 border-primary/30 bg-muted/20 rounded-r-lg"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                    <h3 className="text-xl font-bold text-foreground flex items-center gap-3">
                      <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold text-sm flex items-center justify-center">
                        {index + 1}
                      </span>
                      {step.step}
                    </h3>
                    <span className="text-sm text-primary font-medium bg-primary/10 px-3 py-1 rounded-full w-fit">
                      {step.timeline}
                    </span>
                  </div>
                  <p className="text-muted-foreground ml-11">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Important Information */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="max-w-4xl mx-auto">
              <h2 className="flex items-center gap-2 text-3xl font-bold mb-8">
                <Info className="w-8 h-8 text-primary" />
                Important Information
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {data.importantInfo.map((info: string, index: number) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3 p-4"
                  >
                    <Info className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-muted-foreground">{info}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Costs Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Study Cost */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="p-6 border-l-4 border-primary/30 bg-muted/20 rounded-r-lg"
              >
                <h3 className="flex items-center gap-2 text-2xl font-bold mb-4">
                  <DollarSign className="w-7 h-7 text-primary" />
                  Study Costs
                </h3>
                <p className="text-3xl font-bold text-primary mb-6">{data.studyCost.tuition}</p>
                <div className="space-y-3">
                  {data.studyCost.breakdown.map((item: any, index: number) => (
                    <div key={index} className="flex justify-between items-center p-3 bg-background/50 rounded-lg">
                      <span className="text-muted-foreground">{item.item}</span>
                      <span className="font-semibold text-foreground">{item.cost}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Living Cost */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="p-6 border-l-4 border-primary/30 bg-muted/20 rounded-r-lg"
              >
                <h3 className="flex items-center gap-2 text-2xl font-bold mb-4">
                  <Home className="w-7 h-7 text-primary" />
                  Living Costs
                </h3>
                <p className="text-3xl font-bold text-primary mb-6">{data.livingCost.average}</p>
                <div className="space-y-3">
                  {data.livingCost.breakdown.map((item: any, index: number) => (
                    <div key={index} className="flex justify-between items-center p-3 bg-background/50 rounded-lg">
                      <span className="text-muted-foreground">{item.item}</span>
                      <span className="font-semibold text-foreground">{item.cost}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info Grid */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              {/* Popular Cities */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="p-6 border-l-4 border-primary/30 bg-muted/20 rounded-r-lg"
              >
                <h3 className="flex items-center gap-2 text-xl font-bold mb-4">
                  <MapPin className="w-6 h-6 text-primary" />
                  Popular Cities
                </h3>
                <div className="space-y-2">
                  {data.popularCities.map((city: string, index: number) => (
                    <div key={index} className="flex items-center gap-2 p-2">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span className="text-muted-foreground">{city}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Intakes */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="p-6 border-l-4 border-primary/30 bg-muted/20 rounded-r-lg"
              >
                <h3 className="flex items-center gap-2 text-xl font-bold mb-4">
                  <Calendar className="w-6 h-6 text-primary" />
                  Intakes
                </h3>
                <div className="space-y-2">
                  {data.intakes.map((intake: string, index: number) => (
                    <div key={index} className="flex items-center gap-2 p-2">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span className="text-muted-foreground text-sm">{intake}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Quick Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="p-6 border-l-4 border-primary/30 bg-primary/5 rounded-r-lg"
              >
                <h3 className="flex items-center gap-2 text-xl font-bold mb-4">
                  <Briefcase className="w-6 h-6 text-primary" />
                  Quick Facts
                </h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Work Rights</div>
                    <div className="font-semibold text-foreground">Part-time allowed</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Post-Study Work</div>
                    <div className="font-semibold text-foreground">Available</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Language</div>
                    <div className="font-semibold text-foreground">English programs available</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-4">
              Ready to Start Your Journey to <span className="text-primary">{data.name}</span>?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let our expert counselors guide you through every step of the application process
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/#contact">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Book Free Consultation
                </Button>
              </Link>
              <Link href="/study-abroad">
                <Button size="lg" variant="outline">
                  Explore Other Countries
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
