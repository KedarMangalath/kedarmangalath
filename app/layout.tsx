import type { Metadata } from "next"
import { Bebas_Neue, Syne, JetBrains_Mono } from "next/font/google"
import "./globals.css"

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
})

const syne = Syne({
  weight: ["400", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Kedar Mangalath — Full Stack AI/ML Engineer",
  description:
    "Portfolio of Kedar Mangalath, Full Stack AI/ML Engineer specializing in LLM-powered solutions, RAG architectures, and intelligent production systems.",
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${syne.variable} ${jetbrainsMono.variable}`}
    >
      <body className="antialiased bg-bg">{children}</body>
    </html>
  )
}
