"use client"

// TODO: Replace placeholder URLs with your actual profile links
const GITHUB_URL = "https://github.com/kedar-mangalath"        // ← update
const LINKEDIN_URL = "https://linkedin.com/in/kedar-mangalath" // ← update
const HF_URL = "https://huggingface.co/kedar-mangalath"         // ← update

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const SOCIALS = [
  { label: "GITHUB", href: GITHUB_URL },
  { label: "LINKEDIN", href: LINKEDIN_URL },
  { label: "HUGGINGFACE", href: HF_URL },
]

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section
      id="contact"
      ref={ref}
      className="px-6 md:px-12 py-24 md:py-40 border-t border-primary/8"
    >
      {/* Header */}
      <div className="flex items-center gap-4 mb-16 md:mb-24">
        <span className="font-mono text-cyan/60 text-3xl leading-none">06</span>
        <span className="w-12 h-px bg-primary/10" />
        <span className="font-mono text-[9px] tracking-[0.38em] text-primary/70">
          GET IN TOUCH
        </span>
      </div>

      {/* Big CTA */}
      <div className="mb-16 md:mb-20 overflow-hidden">
        <div className="overflow-hidden">
          <motion.h2
            className="font-bebas text-primary leading-[0.84]"
            style={{ fontSize: "clamp(56px, 10vw, 180px)" }}
            initial={{ y: "105%" }}
            animate={inView ? { y: "0%" } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            LET'S BUILD
          </motion.h2>
        </div>
        <div className="overflow-hidden">
          <motion.h2
            className="font-bebas text-outline-cyan leading-[0.84]"
            style={{ fontSize: "clamp(56px, 10vw, 180px)" }}
            initial={{ y: "105%" }}
            animate={inView ? { y: "0%" } : {}}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            SOMETHING INTELLIGENT
          </motion.h2>
        </div>
      </div>

      {/* Email */}
      <motion.a
        href="mailto:mangalathkedar@gmail.com"
        data-hover
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="group inline-flex items-center gap-5 font-syne text-primary/80 hover:text-primary transition-colors duration-300 mb-4"
        style={{ fontSize: "clamp(16px, 1.8vw, 26px)" }}
      >
        <span className="border-b border-primary/12 group-hover:border-cyan pb-0.5 transition-colors duration-300">
          mangalathkedar@gmail.com
        </span>
        <svg
          width="20"
          height="20"
          viewBox="0 0 22 22"
          fill="none"
          className="shrink-0 group-hover:translate-x-1.5 transition-transform duration-200 text-cyan"
        >
          <path
            d="M4 11h14M14 6l5 5-5 5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.a>

      {/* Phone */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.52 }}
        className="font-mono text-[10px] tracking-[0.3em] text-primary/70 mb-14"
      >
        +91 8281912910
      </motion.p>

      {/* Divider */}
      <motion.div
        className="w-full h-px bg-primary/8 mb-10"
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        style={{ originX: 0 }}
        transition={{ duration: 0.9, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
      />

      {/* Social links */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="flex flex-wrap gap-8"
      >
        {SOCIALS.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            data-hover
            className="relative font-mono text-[9px] tracking-[0.35em] text-primary/70 hover:text-cyan transition-colors duration-300 group"
          >
            {label}
            <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-cyan group-hover:w-full transition-all duration-300" />
          </a>
        ))}
      </motion.div>
    </section>
  )
}
