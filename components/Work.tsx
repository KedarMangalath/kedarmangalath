"use client"

import { useRef, useState } from "react"
import { motion, useInView, useMotionValue, useSpring } from "framer-motion"

const PROJECTS = [
  {
    id: 0,
    title: "AI-NATIVE WORKSPACE",
    category: "FULL STACK · MULTI-AGENT AI",
    year: "2024",
    description:
      "Full-stack AI engineering workspace with multi-agent orchestration (planner, coder, reviewer, coordinator), Monaco editor, live terminal, repository-aware code assistance, and GitHub OAuth.",
    tags: ["Django", "React", "FastAPI", "LangChain", "Multi-Agent", "PostgreSQL", "Docker", "GitHub OAuth"],
    gradient: "linear-gradient(135deg,#0A0520 0%,#1E0A4A 55%,#9B5DE5 100%)",
    link: null,
    badge: null,
  },
  {
    id: 1,
    title: "MULTIMODAL SIMILARITY SEARCH",
    category: "COMPUTER VISION · NLP",
    year: "2024",
    description:
      "Vision-language similarity search system using SigLIP2 and CLIP enabling cross-modal image-text retrieval, with multimodal RAG pipeline via Chromadb for semantically rich search results.",
    tags: ["PyTorch", "CLIP", "SigLIP2", "HuggingFace", "Chromadb", "Vector DB"],
    gradient: "linear-gradient(135deg,#001A2E 0%,#003A5E 55%,#00D4FF 100%)",
    link: null,
    badge: "HuggingFace",
  },
  {
    id: 2,
    title: "MANUSCRIPT BINARIZATION",
    category: "COMPUTER VISION · PUBLISHED",
    year: "2023",
    description:
      "Deep learning CV pipeline using VGG16 CNN to binarize and classify ancient Malayalam manuscripts via false-colour spectralization. Co-published in Procedia Computer Science.",
    tags: ["PyTorch", "TensorFlow", "VGG16", "Keras", "CNN"],
    gradient: "linear-gradient(135deg,#1A1000 0%,#3D2800 55%,#FFB800 100%)",
    link: "https://doi.org/10.1016/j.procs.2023.01.045",
    badge: "PUBLISHED",
  },
  {
    id: 3,
    title: "TWEET EMOTION DETECTION",
    category: "NLP · DEEP LEARNING · PUBLISHED",
    year: "2023",
    description:
      "BiLSTM model for multi-class emotion classification from tweets. Presented at CODEAI 2024 International Conference, published by Taylor & Francis.",
    tags: ["BiLSTM", "TensorFlow", "Keras", "Deep Learning", "NLP"],
    gradient: "linear-gradient(135deg,#0A001A 0%,#200040 55%,#FF006E 100%)",
    link: null,
    badge: "PUBLISHED",
  },
  {
    id: 4,
    title: "LLM REGIONAL ADAPTATION",
    category: "ONGOING RESEARCH",
    year: "2025",
    description:
      "Ongoing exploration of LLM fine-tuning for low-resource Indic regional languages using LoRA/QLoRA on custom corpora — building and benchmarking models for underserved language communities.",
    tags: ["LoRA", "QLoRA", "Unsloth", "HuggingFace", "Python", "Indic NLP"],
    gradient: "linear-gradient(135deg,#001A0A 0%,#002A18 55%,#00FF88 100%)",
    link: null,
    badge: "ONGOING",
  },
]

export default function Work() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })
  const [active, setActive] = useState<number | null>(null)

  const rawX = useMotionValue(-500)
  const rawY = useMotionValue(-500)
  const springX = useSpring(rawX, { stiffness: 450, damping: 32 })
  const springY = useSpring(rawY, { stiffness: 450, damping: 32 })

  const handleMouseMove = (e: React.MouseEvent) => {
    rawX.set(e.clientX + 30)
    rawY.set(e.clientY - 90)
  }

  return (
    <section
      id="work"
      ref={ref}
      className="px-6 md:px-12 py-24 md:py-36 border-t border-primary/8"
      onMouseMove={handleMouseMove}
    >
      {/* Floating preview */}
      <motion.div
        className="fixed z-[200] pointer-events-none w-72 h-44 overflow-hidden rounded-sm"
        style={{ x: springX, y: springY, top: 0, left: 0 }}
        animate={{ opacity: active !== null ? 1 : 0, scale: active !== null ? 1 : 0.8 }}
        transition={{ duration: 0.2 }}
      >
        {active !== null && (
          <>
            <div className="w-full h-full" style={{ background: PROJECTS[active].gradient }} />
            <div className="absolute inset-0 bg-bg/15" />
            <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-bg/90">
              <p className="font-mono text-[8px] tracking-[0.25em] text-primary/90 mb-1">
                {PROJECTS[active].category}
              </p>
              <p className="font-bebas text-primary/80 text-xl tracking-wider">
                {PROJECTS[active].title}
              </p>
            </div>
          </>
        )}
      </motion.div>

      {/* Header */}
      <div className="flex items-center gap-4 mb-16 md:mb-20">
        <span className="font-mono text-cyan/60 text-3xl leading-none">03</span>
        <span className="w-12 h-px bg-primary/10" />
        <span className="font-mono text-[9px] tracking-[0.38em] text-primary/70">
          SELECTED WORK
        </span>
      </div>

      {/* Project list */}
      <div>
        {PROJECTS.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: i * 0.09 }}
            className="group border-b border-primary/8 first:border-t py-7 md:py-9 flex items-center gap-5 md:gap-8"
            onMouseEnter={() => setActive(project.id)}
            onMouseLeave={() => setActive(null)}
            data-hover
          >
            {/* Index */}
            <span className="font-mono text-primary/70 text-base w-7 shrink-0 group-hover:text-cyan/60 transition-colors duration-300">
              {String(i + 1).padStart(2, "0")}
            </span>

            {/* Title */}
            <h3
              className="font-bebas text-primary group-hover:text-cyan transition-colors duration-300 flex-1 leading-none truncate"
              style={{ fontSize: "clamp(28px, 4.5vw, 75px)" }}
            >
              {project.title}
            </h3>

            {/* Meta */}
            <div className="hidden md:flex items-center gap-6 shrink-0">
              {project.badge && (
                <span
                  className={`px-2 py-0.5 font-mono text-[8px] tracking-[0.2em] border ${
                    project.badge === "PUBLISHED"
                      ? "border-amber/30 text-amber/60"
                      : project.badge === "ONGOING"
                      ? "border-green/30 text-green/60"
                      : "border-cyan/30 text-cyan/60"
                  }`}
                >
                  {project.badge}
                </span>
              )}
              <span className="font-mono text-[9px] tracking-[0.3em] text-primary/70 w-44 text-right">
                {project.category}
              </span>
              <span className="font-mono text-[9px] text-primary/70">{project.year}</span>
            </div>

            {/* Arrow */}
            <motion.div
              className="shrink-0"
              animate={{
                x: active === project.id ? 0 : -5,
                opacity: active === project.id ? 1 : 0.25,
              }}
              transition={{ duration: 0.18 }}
            >
              <svg width="20" height="20" viewBox="0 0 22 22" fill="none" className="text-cyan">
                <path
                  d="M4 11h14M14 6l5 5-5 5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
