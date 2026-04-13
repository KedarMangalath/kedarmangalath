"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

const ROLES = [
  "FULL STACK AI/ML ENGINEER",
  "LLM SYSTEMS ARCHITECT",
  "PUBLISHED RESEARCHER",
  "RAG & AGENTIC SYSTEMS",
  "GENERATIVE AI ENGINEER",
]

const TICKER =
  "AI/ML ENGINEER\u2002•\u2002LLM FINE-TUNING\u2002•\u2002RAG PIPELINES\u2002•\u2002MULTI-AGENT SYSTEMS\u2002•\u2002PUBLISHED RESEARCHER\u2002•\u2002GCP VERTEX AI\u2002•\u2002TRIVANDRUM, IN\u2002•\u2002"

export default function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] })
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])
  const fade = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  const [roleIdx, setRoleIdx] = useState(0)
  const [displayed, setDisplayed] = useState("")
  const [typing, setTyping] = useState(true)
  const [glitch, setGlitch] = useState(false)

  useEffect(() => {
    const target = ROLES[roleIdx]
    if (typing) {
      if (displayed.length < target.length) {
        const t = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 52)
        return () => clearTimeout(t)
      }
      const t = setTimeout(() => setTyping(false), 2200)
      return () => clearTimeout(t)
    }
    if (displayed.length > 0) {
      const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 26)
      return () => clearTimeout(t)
    }
    setRoleIdx((i) => (i + 1) % ROLES.length)
    setTyping(true)
  }, [displayed, typing, roleIdx])

  useEffect(() => {
    const id = setInterval(() => {
      setGlitch(true)
      setTimeout(() => setGlitch(false), 360)
    }, 9000)
    return () => clearInterval(id)
  }, [])

  return (
    <section ref={ref} id="hero" className="relative min-h-screen flex flex-col justify-between overflow-hidden">



      {/* Main content */}
      <motion.div
        style={{ y: textY, opacity: fade }}
        className="flex-1 flex flex-col justify-center px-6 md:px-12 pt-28 pb-8 relative z-10"
      >
        {/* Meta row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-between items-start mb-8 md:mb-14"
        >
          <div className="flex items-center gap-3">
            <span className="font-mono text-cyan/90 text-[10px] tracking-wider">[ AI/ML ]</span>
            <span className="text-primary/70 font-mono text-xs">•</span>
            <span className="font-mono text-primary/70 text-[10px] tracking-wider">PORTFOLIO 2025</span>
          </div>
          <span className="font-mono text-primary/70 text-[10px] tracking-wider hidden md:block">
            TRIVANDRUM, IN
          </span>
        </motion.div>

        {/* Name */}
        <div>
          <div className="overflow-hidden">
            <motion.h1
              className="font-bebas text-primary leading-[0.84]"
              style={{ fontSize: "clamp(68px, 14vw, 240px)" }}
              initial={{ y: "108%" }}
              animate={{
                y: "0%",
                x: glitch ? [0, -5, 5, -3, 0] : 0,
                filter: glitch
                  ? ["none", "drop-shadow(-5px 0 #00D4FF) drop-shadow(5px 0 #9B5DE5)", "none"]
                  : "none",
              }}
              transition={{
                y: { duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.1 },
                x: { duration: 0.32 },
                filter: { duration: 0.32 },
              }}
            >
              KEDAR
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.h1
              className="font-bebas text-outline-cyan leading-[0.84]"
              style={{ fontSize: "clamp(68px, 14vw, 240px)" }}
              initial={{ y: "108%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.24 }}
            >
              MANGALATH
            </motion.h1>
          </div>
        </div>

        {/* Typewriter role */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-6 md:mt-8 flex items-center gap-0.5 h-6"
        >
          <span className="font-mono text-cyan text-xs md:text-sm tracking-[0.18em]">
            {displayed}
          </span>
          <span className="inline-block w-0.5 h-[14px] bg-cyan cursor-blink" />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="mt-5 font-syne text-primary/80 text-sm max-w-xs leading-relaxed"
        >
          Building intelligent systems that understand, reason, and create — from LLM architectures to production deployments.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.65, duration: 0.8 }}
          className="mt-10 flex items-center gap-6 flex-wrap"
        >
          <a
            href="#work"
            data-hover
            className="group flex items-center gap-3 font-mono text-[10px] tracking-[0.32em] text-primary/80 hover:text-cyan transition-colors duration-300"
          >
            VIEW WORK
            <span className="w-8 h-px bg-current group-hover:w-14 transition-all duration-300" />
          </a>
          <a
            href="#contact"
            data-hover
            className="px-5 py-2.5 border border-cyan/28 font-mono text-[10px] tracking-[0.25em] text-cyan hover:bg-cyan/8 hover:border-cyan/60 transition-all duration-200"
          >
            HIRE ME
          </a>
          <a
            href="#research"
            data-hover
            className="font-mono text-[10px] tracking-[0.25em] text-amber hover:text-amber transition-colors duration-200 border-b border-amber/20 hover:border-amber pb-0.5"
          >
            2 PUBLICATIONS
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll line */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.6 }}
        className="absolute bottom-24 right-10 hidden md:flex flex-col items-center gap-2 z-10"
      >
        <span
          className="font-mono text-[9px] tracking-[0.3em] text-primary/70"
          style={{ writingMode: "vertical-lr" }}
        >
          SCROLL
        </span>
        <div className="w-px h-14 bg-primary/10 relative overflow-hidden">
          <motion.div
            className="absolute top-0 w-full bg-cyan"
            style={{ height: "40%" }}
            animate={{ y: ["0%", "250%"] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "linear" }}
          />
        </div>
      </motion.div>

      {/* Ticker */}
      <div className="border-t border-primary/5 py-3 overflow-hidden shrink-0 relative z-10">
        <div className="flex w-max animate-marquee">
          {[TICKER, TICKER].map((text, i) => (
            <span
              key={i}
              className="font-mono text-[9px] tracking-[0.3em] text-primary/70 whitespace-nowrap"
            >
              {text}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
