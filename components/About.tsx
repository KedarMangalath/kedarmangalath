"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const STATS = [
  { value: "2", label: "Publications" },
  { value: "3", label: "Certifications" },
  { value: "5+", label: "AI Projects" },
  { value: "MCA", label: "AI & Data Science" },
]

function SectionLabel({ n, label }: { n: string; label: string }) {
  return (
    <div className="flex items-center gap-4 mb-16 md:mb-20">
      <span className="font-mono text-cyan/60 text-3xl leading-none">{n}</span>
      <span className="w-12 h-px bg-primary/10" />
      <span className="font-mono text-[9px] tracking-[0.38em] text-primary/70">{label}</span>
    </div>
  )
}

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section id="about" ref={ref} className="px-6 md:px-12 py-24 md:py-40">
      <SectionLabel n="01" label="ABOUT" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-28">
        {/* Left */}
        <div>
          <div className="overflow-hidden mb-1">
            <motion.h2
              className="font-bebas text-primary leading-none"
              style={{ fontSize: "clamp(42px, 6vw, 100px)" }}
              initial={{ y: "105%" }}
              animate={inView ? { y: "0%" } : {}}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              BUILDING INTELLIGENT
            </motion.h2>
          </div>
          <div className="overflow-hidden mb-12">
            <motion.h2
              className="font-bebas text-outline-cyan leading-none"
              style={{ fontSize: "clamp(42px, 6vw, 100px)" }}
              initial={{ y: "105%" }}
              animate={inView ? { y: "0%" } : {}}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              SYSTEMS
            </motion.h2>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6 border-t border-primary/8 pt-8">
            {STATS.map(({ value, label }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 14 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.35 + i * 0.1 }}
              >
                <p className="font-bebas text-cyan text-4xl leading-none mb-1">{value}</p>
                <p className="font-mono text-[9px] tracking-[0.28em] text-primary/70 uppercase">
                  {label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right */}
        <div className="flex flex-col justify-between gap-12">
          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.25 }}
            className="font-syne text-primary/90 leading-relaxed"
            style={{ fontSize: "clamp(15px, 1.3vw, 19px)" }}
          >
            Full Stack AI/ML Engineer with hands-on experience designing and deploying
            scalable LLM-powered systems, RAG pipelines, and multi-agent architectures.
            Published researcher in NLP and document image processing.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.38 }}
            className="font-syne text-primary/80 leading-relaxed text-sm"
          >
            Currently building production-grade AI systems at GAUDE Business & Infrastructure
            Solutions, Trivandrum. MCA graduate from Amrita Vishwa Vidyapeetham, specialising
            in AI and Data Science. Oracle OCI certified, with deep expertise in Google Cloud Platform (GCP) and Vertex AI.
          </motion.p>

          {/* Key focus areas */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <p className="font-mono text-[9px] tracking-[0.35em] text-primary/70 mb-4">
              FOCUS AREAS
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                "LLM Fine-tuning",
                "RAG Pipelines",
                "Multi-Agent Systems",
                "GenAI Deployments",
                "NLP Research",
                "MLOps / CI-CD",
              ].map((area, i) => (
                <motion.span
                  key={area}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.52 + i * 0.05 }}
                  data-hover
                  className="px-3 py-1.5 border border-cyan/15 font-mono text-[9px] tracking-[0.2em] text-cyan/50 hover:border-cyan/45 hover:text-cyan transition-colors duration-200"
                >
                  {area}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
