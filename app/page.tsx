"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

type Page = "home" | "work" | "projects" | "skills" | "contact"

// Smooth spring animation settings
const springTransition = {
  type: "spring",
  stiffness: 400,
  damping: 30,
}

// Page transition variants
const pageVariants = {
  initial: { opacity: 0, y: 15, filter: "blur(4px)" },
  enter: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)",
    transition: {
      duration: 0.4,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.07,
      delayChildren: 0.05
    }
  },
  exit: { 
    opacity: 0, 
    y: -10, 
    filter: "blur(4px)",
    transition: {
      duration: 0.2,
      ease: [0.65, 0, 0.35, 1]
    }
  }
}

// Item stagger variants
const itemVariants = {
  initial: { opacity: 0, y: 10 },
  enter: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } 
  }
}

const navItems: { id: Page; label: string }[] = [
  { id: "work", label: "Work" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
]

export default function Portfolio() {
  const [activePage, setActivePage] = useState<Page>("home")

  return (
    <div className="shell">
      <nav>
        <motion.span 
          className="nav-mark" 
          onClick={() => setActivePage("home")}
          whileHover={{ opacity: 0.5 }}
          whileTap={{ scale: 0.95 }}
        >
          KM
        </motion.span>
        <ul className="nav-links">
          {navItems.map((item) => (
            <li key={item.id}>
              {activePage === item.id && (
                <motion.div
                  layoutId="nav-pill"
                  className="nav-indicator"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                />
              )}
              <button
                className={activePage === item.id ? "active" : ""}
                onClick={() => setActivePage(item.id)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Pages Container with Framer Motion AnimatePresence */}
      <div className="page-container">
        <AnimatePresence mode="wait">
          {/* ── HOME ── */}
          {activePage === "home" && (
            <motion.div 
              key="home"
              variants={pageVariants}
              initial="initial"
              animate="enter"
              exit="exit"
              className="stagger"
            >
              <motion.p variants={itemVariants} className="home-eyebrow">Full Stack AI Engineer</motion.p>
              <motion.h1 variants={itemVariants} className="home-name">
                Kedar<br />Mangalath
              </motion.h1>
              <motion.p variants={itemVariants} className="home-bio">
                Building production AI systems — RAG pipelines,<br />
                multi-agent orchestration, and full-stack applications.<br />
                Based in Trivandrum, India.
              </motion.p>
              <motion.div variants={itemVariants} className="home-links">
                <motion.a whileHover={{ y: -2 }} whileTap={{ scale: 0.95 }} href="mailto:mangalathkedar@gmail.com">Email</motion.a>
                <motion.a whileHover={{ y: -2 }} whileTap={{ scale: 0.95 }} href="https://www.linkedin.com/in/kedar-mangalath-7a06a4216/" target="_blank" rel="noopener">LinkedIn</motion.a>
                <motion.a whileHover={{ y: -2 }} whileTap={{ scale: 0.95 }} href="https://github.com/KedarMangalath" target="_blank" rel="noopener">GitHub</motion.a>
                <motion.a whileHover={{ y: -2 }} whileTap={{ scale: 0.95 }} href="https://thanal-web.vercel.app/" target="_blank" rel="noopener">Thanal ↗</motion.a>
              </motion.div>
            </motion.div>
          )}

          {/* ── WORK ── */}
          {activePage === "work" && (
            <motion.div 
              key="work"
              variants={pageVariants}
              initial="initial"
              animate="enter"
              exit="exit"
            >
              <motion.p variants={itemVariants} className="label">Experience & Education</motion.p>
              
              <div className="grid-layout">
                {/* Box 1 */}
                <motion.div variants={itemVariants} className="grid-cell" whileHover={{ y: -2, backgroundColor: "var(--pill-bg)" }} transition={{ duration: 0.2 }}>
                  <div className="entry-meta">
                    <p className="entry-company">GAUDE Solutions</p>
                    <p className="entry-date">Dec 2024 – Present</p>
                  </div>
                  <div>
                    <p className="entry-role">Full Stack AI/ML Engineer</p>
                    <ul className="entry-bullets">
                      <li>RAG pipelines (LangChain) for document querying.</li>
                      <li>Fine-tuned LLMs with LoRA/QLoRA for moderation.</li>
                    </ul>
                  </div>
                </motion.div>

                {/* Box 2 */}
                <motion.div variants={itemVariants} className="grid-cell" whileHover={{ y: -2, backgroundColor: "var(--pill-bg)" }} transition={{ duration: 0.2 }}>
                  <div className="entry-meta">
                    <p className="entry-company">GAUDE Solutions</p>
                    <p className="entry-date">Oct – Dec 2024</p>
                  </div>
                  <div>
                    <p className="entry-role">AI/ML Engineer — Intern</p>
                    <ul className="entry-bullets">
                      <li>Agentic flow modules using LangGraph.</li>
                      <li>REST/JSON API deployment across Django and React.</li>
                    </ul>
                  </div>
                </motion.div>

                {/* Box 3 */}
                <motion.div variants={itemVariants} className="grid-cell" whileHover={{ y: -2, backgroundColor: "var(--pill-bg)" }} transition={{ duration: 0.2 }}>
                  <div className="entry-meta">
                    <p className="entry-company">Amrita Vishwa Vidyapeetham</p>
                    <p className="entry-date">2022 – 2024</p>
                  </div>
                  <div>
                    <p className="entry-role">MCA — AI and Data Science</p>
                  </div>
                </motion.div>

                {/* Box 4 */}
                <motion.div variants={itemVariants} className="grid-cell" whileHover={{ y: -2, backgroundColor: "var(--pill-bg)" }} transition={{ duration: 0.2 }}>
                  <div className="entry-meta">
                    <p className="entry-company">Amrita Vishwa Vidyapeetham</p>
                    <p className="entry-date">2019 – 2022</p>
                  </div>
                  <div>
                    <p className="entry-role">BCA</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}

          {/* ── PROJECTS ── */}
          {activePage === "projects" && (
            <motion.div 
              key="projects"
              variants={pageVariants}
              initial="initial"
              animate="enter"
              exit="exit"
            >
              <motion.p variants={itemVariants} className="label">Projects</motion.p>

              <div className="grid-layout">
                <motion.div variants={itemVariants} className="grid-cell" whileHover={{ y: -2, backgroundColor: "var(--pill-bg)" }} transition={{ duration: 0.2 }}>
                  <div className="project-row">
                    <span className="project-name">Thanal</span>
                  </div>
                  <p className="project-desc">
                    Cross-platform travel assistant app with live UV forecasts, OSRM
                    routing, and community-sourced POI data.
                  </p>
                  <div className="tags">
                    <span className="tag">React</span>
                    <span className="tag">React Native</span>
                    <span className="tag">Gemini API</span>
                  </div>
                  <a className="project-link" href="https://thanal-web.vercel.app/" target="_blank" rel="noopener">Link</a>
                </motion.div>

                <motion.div variants={itemVariants} className="grid-cell" whileHover={{ y: -2, backgroundColor: "var(--pill-bg)" }} transition={{ duration: 0.2 }}>
                  <div className="project-row">
                    <span className="project-name">AI-Native Workspace</span>
                  </div>
                  <p className="project-desc">
                    Agentic IDE with multi-agent orchestration, in-browser editor, and
                    GitHub OAuth for issue management.
                  </p>
                  <div className="tags">
                    <span className="tag">Django</span>
                    <span className="tag">LangChain</span>
                    <span className="tag">Docker</span>
                  </div>
                </motion.div>

                <motion.div variants={itemVariants} className="grid-cell" whileHover={{ y: -2, backgroundColor: "var(--pill-bg)" }} transition={{ duration: 0.2 }}>
                  <div className="project-row">
                    <span className="project-name">Orpheus 3B TTS</span>
                  </div>
                  <p className="project-desc">
                    Fine-tuned Orpheus 3B on Malayalam audio using LoRA adapters. Full data pipeline.
                  </p>
                  <div className="tags">
                    <span className="tag">PyTorch</span>
                    <span className="tag">Unsloth</span>
                    <span className="tag">PEFT</span>
                  </div>
                </motion.div>

                <motion.div variants={itemVariants} className="grid-cell" whileHover={{ y: -2, backgroundColor: "var(--pill-bg)" }} transition={{ duration: 0.2 }}>
                  <div className="project-row">
                    <span className="project-name">Multimodal Search</span>
                  </div>
                  <p className="project-desc">
                    Multimodal RAG system for Malayalam manuscript word recognition
                    using vision-language embeddings.
                  </p>
                  <div className="tags">
                    <span className="tag">SigLIP2</span>
                    <span className="tag">CLIP</span>
                    <span className="tag">Vector DB</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}

          {/* ── SKILLS ── */}
          {activePage === "skills" && (
            <motion.div 
              key="skills"
              variants={pageVariants}
              initial="initial"
              animate="enter"
              exit="exit"
            >
              <motion.p variants={itemVariants} className="label">Skills</motion.p>

              <div className="grid-layout">
                <motion.div variants={itemVariants} className="grid-cell" whileHover={{ y: -2, backgroundColor: "var(--pill-bg)" }} transition={{ duration: 0.2 }}>
                  <p className="skill-cat">Languages & Frameworks</p>
                  <ul className="skill-items">
                    <li>Python · Django</li>
                    <li>React · Node.js</li>
                    <li>Streamlit</li>
                  </ul>
                </motion.div>

                <motion.div variants={itemVariants} className="grid-cell" whileHover={{ y: -2, backgroundColor: "var(--pill-bg)" }} transition={{ duration: 0.2 }}>
                  <p className="skill-cat">AI / ML</p>
                  <ul className="skill-items">
                    <li>LangChain · LangGraph</li>
                    <li>RAG Pipelines</li>
                    <li>LoRA / QLoRA Fine-tuning</li>
                  </ul>
                </motion.div>

                <motion.div variants={itemVariants} className="grid-cell" whileHover={{ y: -2, backgroundColor: "var(--pill-bg)" }} transition={{ duration: 0.2 }}>
                  <p className="skill-cat">Cloud & DevOps</p>
                  <ul className="skill-items">
                    <li>GCP · Vertex AI</li>
                    <li>Docker · GitHub Actions</li>
                    <li>Vercel</li>
                  </ul>
                </motion.div>

                <motion.div variants={itemVariants} className="grid-cell" whileHover={{ y: -2, backgroundColor: "var(--pill-bg)" }} transition={{ duration: 0.2 }}>
                  <p className="skill-cat">Databases</p>
                  <ul className="skill-items">
                    <li>PostgreSQL</li>
                    <li>SQLite</li>
                    <li>FAISS · ChromaDB</li>
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          )}

          {/* ── CONTACT ── */}
          {activePage === "contact" && (
            <motion.div 
              key="contact"
              variants={pageVariants}
              initial="initial"
              animate="enter"
              exit="exit"
            >
              <motion.h2 variants={itemVariants} className="contact-head">
                Let's work<br />together.
              </motion.h2>

              <div>
                <motion.a variants={itemVariants} whileHover={{ x: 6, opacity: 0.6 }} className="contact-row" href="mailto:mangalathkedar@gmail.com">
                  <span>Email</span>
                  <span>mangalathkedar@gmail.com</span>
                </motion.a>
                <motion.a variants={itemVariants} whileHover={{ x: 6, opacity: 0.6 }} className="contact-row" href="tel:+918281912910">
                  <span>Phone</span>
                  <span>+91 82819 12910</span>
                </motion.a>
                <motion.a variants={itemVariants} whileHover={{ x: 6, opacity: 0.6 }} className="contact-row" href="https://www.linkedin.com/in/kedar-mangalath-7a06a4216/" target="_blank" rel="noopener">
                  <span>LinkedIn</span>
                  <span>kedar-mangalath-7a06a4216</span>
                </motion.a>
                <motion.a variants={itemVariants} whileHover={{ x: 6, opacity: 0.6 }} className="contact-row" href="https://github.com/KedarMangalath" target="_blank" rel="noopener">
                  <span>GitHub</span>
                  <span>KedarMangalath</span>
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <footer>
        <span>Kedar Mangalath</span>
        <span>Trivandrum, India</span>
      </footer>
    </div>
  )
}
