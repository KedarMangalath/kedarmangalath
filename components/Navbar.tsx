"use client"

// TODO: Replace placeholder hrefs with your actual profile URLs
const GITHUB_URL = "https://github.com/KedarMangalath"
const LINKEDIN_URL = "https://www.linkedin.com/in/kedar-mangalath-7a06a4216/"
const HF_URL = "https://huggingface.co/mangalathkedar"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

const NAV_LINKS = [
  { label: "ABOUT", href: "#about" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "WORK", href: "#work" },
  { label: "RESEARCH", href: "#research" },
  { label: "CONTACT", href: "#contact" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener("scroll", fn)
    return () => window.removeEventListener("scroll", fn)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-[100] px-6 md:px-10 py-5 flex items-center justify-between transition-all duration-500 ${
        scrolled ? "bg-bg/80 backdrop-blur-md border-b border-primary/5" : ""
      }`}
    >
      {/* Logo */}
      <a
        href="#"
        data-hover
        className="font-bebas text-lg tracking-[0.3em] text-primary hover:text-cyan transition-colors duration-300"
      >
        KM
      </a>

      {/* Nav links */}
      <nav className="hidden lg:flex items-center gap-8">
        {NAV_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            data-hover
            className="relative font-mono text-[9px] tracking-[0.32em] text-primary/80 hover:text-primary transition-colors duration-300 group"
          >
            {link.label}
            <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-cyan group-hover:w-full transition-all duration-300" />
          </a>
        ))}
      </nav>

      {/* Right side */}
      <div className="flex items-center gap-5">
        {/* Social icons */}
        <div className="hidden md:flex items-center gap-4">
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" data-hover
            className="text-primary/80 hover:text-cyan transition-colors duration-200">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
          </a>
          <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" data-hover
            className="text-primary/80 hover:text-cyan transition-colors duration-200">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a href={HF_URL} target="_blank" rel="noopener noreferrer" data-hover
            className="text-primary/80 hover:text-cyan transition-colors duration-200">
            <svg width="16" height="14" viewBox="0 0 95 88" fill="currentColor">
              <path d="M47.327 0C21.184 0 0 19.71 0 44.04c0 24.33 21.184 44.04 47.327 44.04 26.143 0 47.327-19.71 47.327-44.04C94.654 19.71 73.47 0 47.327 0zm0 79.272c-19.85 0-35.944-15.788-35.944-35.232 0-19.444 16.094-35.232 35.944-35.232 19.85 0 35.944 15.788 35.944 35.232 0 19.444-16.094 35.232-35.944 35.232z"/>
              <circle cx="32" cy="42" r="7"/>
              <circle cx="63" cy="42" r="7"/>
              <path d="M32 55c0 8.5 6.7 15 15.3 15s15.3-6.5 15.3-15H32z"/>
            </svg>
          </a>
        </div>

        {/* Available */}
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-green animate-pulse" />
          <span className="font-mono text-[9px] tracking-[0.3em] text-primary/80 hidden md:block">
            AVAILABLE
          </span>
        </div>
      </div>
    </motion.header>
  )
}
