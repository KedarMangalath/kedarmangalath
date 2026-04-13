"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const PUBLICATIONS = [
  {
    title:
      "Ancient Epic Manuscript Binarization and Classification Using False Colour Spectralization and VGG16 Model",
    venue: "Procedia Computer Science",
    publisher: "Elsevier",
    year: "2023",
    doi: "https://doi.org/10.1016/j.procs.2023.01.045",
  },
  {
    title: "Emotional Quotient Analysis of Tweets using Deep Learning Techniques",
    venue: "International Conference on Data Science & AI Exploration (CODEAI 2024)",
    publisher: "Taylor & Francis",
    year: "2024",
    doi: null,
  },
]

const CERTIFICATIONS = [
  {
    title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
    issuer: "Oracle",
    year: "2025",
    color: "text-amber/70 border-amber/20",
  },
  {
    title: "Multi-Agent Systems with CrewAI",
    issuer: "DeepLearning.AI",
    year: "2024",
    color: "text-violet/70 border-violet/20",
  },
]

export default function Research() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section
      id="research"
      ref={ref}
      className="px-6 md:px-12 py-24 md:py-36 border-t border-primary/8"
    >
      {/* Header */}
      <div className="flex items-center gap-4 mb-16 md:mb-20">
        <span className="font-mono text-cyan/60 text-3xl leading-none">04</span>
        <span className="w-12 h-px bg-primary/10" />
        <span className="font-mono text-[9px] tracking-[0.38em] text-primary/70">
          RESEARCH & RECOGNITION
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
        {/* Publications */}
        <div>
          <p className="font-mono text-[9px] tracking-[0.38em] text-primary/70 mb-8">
            PUBLICATIONS
          </p>
          <div className="space-y-10">
            {PUBLICATIONS.map((pub, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 18 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: i * 0.15 }}
                className="group"
              >
                <div className="flex items-start gap-4 mb-3">
                  <span className="font-mono text-amber/40 text-xs mt-0.5 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h4 className="font-syne text-primary/75 text-sm leading-relaxed group-hover:text-primary transition-colors duration-300">
                    {pub.title}
                  </h4>
                </div>
                <div className="pl-8 flex items-center justify-between gap-4">
                  <div>
                    <p className="font-mono text-[9px] tracking-[0.22em] text-primary/80 mb-0.5">
                      {pub.venue}
                    </p>
                    <p className="font-mono text-[9px] tracking-[0.22em] text-amber/40">
                      {pub.publisher} · {pub.year}
                    </p>
                  </div>
                  {pub.doi && (
                    <a
                      href={pub.doi}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-hover
                      className="shrink-0 px-3 py-1.5 border border-amber/20 font-mono text-[8px] tracking-[0.2em] text-amber hover:border-amber/50 hover:text-amber transition-all duration-200"
                    >
                      DOI →
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications + Education */}
        <div>
          <p className="font-mono text-[9px] tracking-[0.38em] text-primary/70 mb-8">
            CERTIFICATIONS
          </p>
          <div className="space-y-4 mb-14">
            {CERTIFICATIONS.map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 16 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                className={`flex items-start gap-3 p-4 border ${cert.color} bg-surface/30`}
              >
                <svg
                  className="shrink-0 mt-0.5 opacity-60"
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                >
                  <path
                    d="M6 1l1.24 2.51L10 3.86 8 5.8l.47 2.74L6 7.13 3.53 8.54 4 5.8 2 3.86l2.76-.35L6 1z"
                    stroke="currentColor"
                    strokeWidth="1"
                  />
                </svg>
                <div>
                  <p className="font-syne text-xs text-primary/65 leading-snug mb-1">
                    {cert.title}
                  </p>
                  <p className="font-mono text-[9px] tracking-[0.2em] text-primary/70">
                    {cert.issuer} · {cert.year}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Education */}
          <p className="font-mono text-[9px] tracking-[0.38em] text-primary/70 mb-6">
            EDUCATION
          </p>
          <div className="space-y-5">
            {[
              {
                degree: "MCA – AI and Data Science",
                school: "Amrita Vishwa Vidyapeetham",
                period: "2022 – 2024",
              },
              {
                degree: "BCA – Computer Applications",
                school: "Amrita Vishwa Vidyapeetham",
                period: "2019 – 2022",
              },
            ].map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + i * 0.12 }}
              >
                <p className="font-syne text-primary/70 text-sm mb-0.5">{edu.degree}</p>
                <p className="font-mono text-[9px] tracking-[0.22em] text-primary/70">
                  {edu.school} · {edu.period}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
