import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

export const metadata: Metadata = {
  title: 'Global Pathways - Your Gateway to International Education',
  description: 'Expert guidance for university applications, student visas, and study abroad programs. Transform your future with global education opportunities.',
  keywords: 'study abroad, university applications, student visas, international education, global pathways',
  authors: [{ name: 'Global Pathways' }],
  creator: 'Global Pathways',
  publisher: 'Global Pathways',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://globalpathways.com'),
  openGraph: {
    title: 'Global Pathways - Your Gateway to International Education',
    description: 'Expert guidance for university applications, student visas, and study abroad programs.',
    url: 'https://globalpathways.com',
    siteName: 'Global Pathways',
    images: [
      {
        url: '/diverse-students-studying-in-modern-university-lib.jpg',
        width: 1200,
        height: 630,
        alt: 'Students studying in modern university library',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Global Pathways - Your Gateway to International Education',
    description: 'Expert guidance for university applications, student visas, and study abroad programs.',
    images: ['/diverse-students-studying-in-modern-university-lib.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/globe.png',
    shortcut: '/globe.png',
    apple: '/globe.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
