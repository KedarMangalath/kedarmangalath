"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const JOBS = [
  {
    title: "AI/ML Engineer",
    company: "GAUDE Business & Infrastructure Solutions Pvt. Ltd.",
    location: "Technopark, Trivandrum",
    period: "Dec 2024 – Present",
    current: true,
    bullets: [
      "Built and deployed a GenAI agentic platform for a production medical environment integrating Vertex AI model APIs for live consulting, transcription, and document querying — led a team of 4.",
      "Fine-tuned LLMs for Indic-language content moderation using LoRA/QLoRA (Unsloth), with comprehensive evaluation and benchmarking pipelines.",
      "Implemented Docker containers and GitHub Actions CI/CD pipelines on Hostinger VPS for reproducible deployments across environments.",
      "Architected scalable RAG pipelines using LangChain and Vertex AI for enterprise document querying over large unstructured datasets.",
    ],
    stack: ["Python", "PyTorch", "Django", "FastAPI", "LangChain", "Vertex AI", "PostgreSQL", "Docker", "GCP", "React"],
  },
  {
    title: "AI/ML Engineer Intern",
    company: "GAUDE Business & Infrastructure Solutions Pvt. Ltd.",
    location: "Technopark, Trivandrum",
    period: "Oct 2024 – Dec 2024",
    current: false,
    bullets: [
      "Built conversational flow modules for a medical chatbot leveraging LangChain and LangGraph multi-agent orchestration.",
      "Contributed to RAG pipeline development and deployment of lightweight AI microservices via REST APIs.",
      "Gained end-to-end full-stack experience collaborating on Django back-end and React front-end integration.",
    ],
    stack: ["Python", "Django", "LangChain", "LangGraph", "SQL", "Streamlit", "PostgreSQL", "React"],
  },
]

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section
      id="experience"
      ref={ref}
      className="px-6 md:px-12 py-24 md:py-36 border-t border-primary/8"
    >
      {/* Header */}
      <div className="flex items-center gap-4 mb-16 md:mb-20">
        <span className="font-mono text-cyan/60 text-3xl leading-none">02</span>
        <span className="w-12 h-px bg-primary/10" />
        <span className="font-mono text-[9px] tracking-[0.38em] text-primary/70">EXPERIENCE</span>
      </div>

      {/* Timeline */}
      <div className="relative pl-0 md:pl-8">
        {/* Vertical line */}
        <motion.div
          className="absolute left-0 top-2 bottom-2 w-px bg-primary/8 hidden md:block"
          initial={{ scaleY: 0 }}
          animate={inView ? { scaleY: 1 } : {}}
          style={{ originY: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
        />

        <div className="space-y-16 md:space-y-20">
          {JOBS.map((job, i) => (
            <motion.div
              key={job.title + job.period}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.15 + 0.2 }}
              className="relative"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[1.75rem] top-2 hidden md:block">
                <div
                  className={`w-2 h-2 rounded-full border ${
                    job.current
                      ? "bg-cyan border-cyan shadow-[0_0_8px_rgba(0,212,255,0.6)]"
                      : "bg-bg border-primary/30"
                  }`}
                />
              </div>

              {/* Period + current badge */}
              <div className="flex items-center gap-3 mb-3">
                <span className="font-mono text-[9px] tracking-[0.3em] text-primary/80">
                  {job.period}
                </span>
                {job.current && (
                  <span className="px-2 py-0.5 border border-green/30 font-mono text-[8px] tracking-[0.2em] text-green/60">
                    CURRENT
                  </span>
                )}
              </div>

              {/* Title */}
              <h3
                className="font-bebas text-primary leading-none mb-1"
                style={{ fontSize: "clamp(28px, 3.5vw, 52px)" }}
              >
                {job.title}
              </h3>

              {/* Company */}
              <p className="font-syne text-primary/90 text-sm mb-1">{job.company}</p>
              <p className="font-mono text-[9px] tracking-[0.25em] text-primary/70 mb-6">
                {job.location}
              </p>

              {/* Bullets */}
              <ul className="space-y-3 mb-6">
                {job.bullets.map((b, j) => (
                  <motion.li
                    key={j}
                    initial={{ opacity: 0, x: -10 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: i * 0.15 + 0.4 + j * 0.08 }}
                    className="flex items-start gap-3 font-syne text-primary/90 text-sm leading-relaxed"
                  >
                    <span className="text-cyan/50 mt-1 shrink-0">›</span>
                    {b}
                  </motion.li>
                ))}
              </ul>

              {/* Stack */}
              <div className="flex flex-wrap gap-1.5">
                {job.stack.map((s) => (
                  <span
                    key={s}
                    className="px-2.5 py-1 border border-primary/10 font-mono text-[8px] tracking-[0.18em] text-primary/80"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
