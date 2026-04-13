"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const CATEGORIES = [
  {
    label: "AI / ML & GenAI",
    accent: "cyan",
    skills: [
      "LLMs", "VLMs", "Generative AI", "RAG Pipelines",
      "Agentic Systems", "NLP", "Deep Learning", "LoRA",
      "QLoRA", "SFT", "MCP", "Model Fine-tuning",
      "Model Evaluation", "Benchmarking",
    ],
  },
  {
    label: "Frameworks & Libraries",
    accent: "violet",
    skills: [
      "LangChain", "LangGraph", "CrewAI", "PyTorch",
      "TensorFlow", "Keras", "HuggingFace Transformers",
      "CLIP", "SigLIP2", "Unsloth", "Streamlit",
    ],
  },
  {
    label: "Backend & APIs",
    accent: "primary",
    skills: [
      "Python", "Django", "FastAPI", "REST API",
      "PostgreSQL", "Redis", "SQLite", "SQL",
    ],
  },
  {
    label: "Cloud & MLOps",
    accent: "amber",
    skills: [
      "GCP", "Vertex AI", "Docker", "GitHub Actions",
      "CI/CD", "Cloud-Native Deployments", "Chromadb", "Vector DB",
    ],
  },
  {
    label: "Frontend & Tools",
    accent: "primary",
    skills: [
      "React", "JavaScript", "Git", "REST API Design",
      "Monaco Editor", "GitHub OAuth",
    ],
  },
]

const accentClasses: Record<string, string> = {
  cyan: "bg-primary/90 text-bg border-transparent hover:bg-cyan hover:text-bg",
  violet: "bg-primary/90 text-bg border-transparent hover:bg-violet hover:text-bg",
  amber: "bg-primary/90 text-bg border-transparent hover:bg-amber hover:text-bg",
  primary: "bg-primary/90 text-bg border-transparent hover:bg-primary hover:text-bg",
}

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section
      id="skills"
      ref={ref}
      className="px-6 md:px-12 py-24 md:py-36 border-t border-primary/8"
    >
      {/* Header */}
      <div className="flex items-center gap-4 mb-16 md:mb-20">
        <span className="font-mono text-cyan/60 text-3xl leading-none">05</span>
        <span className="w-12 h-px bg-primary/10" />
        <span className="font-mono text-[9px] tracking-[0.38em] text-primary/70">
          TECHNICAL STACK
        </span>
      </div>

      <div className="space-y-12">
        {CATEGORIES.map((cat, ci) => (
          <motion.div
            key={cat.label}
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: ci * 0.12 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <p className="font-mono text-[9px] tracking-[0.35em] text-primary/70 uppercase">
                {cat.label}
              </p>
              <span className="flex-1 h-px bg-primary/6" />
            </div>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill, si) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: ci * 0.08 + si * 0.03 + 0.1 }}
                  data-hover
                  className={`px-3 py-1.5 border font-mono text-[9px] tracking-[0.18em] transition-colors duration-200 ${
                    accentClasses[cat.accent]
                  }`}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
