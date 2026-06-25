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

const projectsData = [
  {
    id: "thanal",
    name: "Thanal — Travel Assistant",
    shortDesc: "Cross-platform travel assistant app with live UV forecasts, OSRM routing, and community-sourced POI data.",
    detailedDesc: "Inspired by the 'Undo Universe' and the simple brilliance of apps like Veyil, Thanal started from a tiny thought during a train ride to Trivandrum: why not build more weirdly specific internet tools to solve everyday travel annoyances?\n\nAt its core, Thanal predicts which side of a bus or train gets less sunlight so you don't get cooked alive during long trips. But as I built it, the vision expanded to tackle the silent sufferings of travel—from hidden highway cameras to roads that destroy suspensions, to questionable petrol pump bathrooms. It now features an experimental community reporting system, and is slowly evolving into a comprehensive, community-driven travel companion.",
    tags: ["React", "React Native", "Node.js", "Gemini API"],
    link: "https://thanal-web.vercel.app/"
  },
  {
    id: "devhub",
    name: "AI-Native Workspace (DevHub)",
    shortDesc: "Agentic IDE with multi-agent orchestration, in-browser editor, and GitHub OAuth for issue management.",
    detailedDesc: "An advanced, fully integrated browser-based IDE leveraging a multi-agent AI orchestration system (featuring distinct Planner, Coder, Reviewer, and Coordinator agents). The workspace features real-time code execution within a secure containerized sandbox, seamless GitHub OAuth integration for PR and issue lifecycle management, and a live Monaco editor. It intelligently auto-generates deep architecture diagrams and Mermaid blueprints by analyzing repository ASTs in real-time.",
    tags: ["Django", "React", "LangChain", "Docker", "PostgreSQL"],
    link: "https://github.com/KedarMangalath/devhub"
  },
  {
    id: "orpheus",
    name: "Orpheus 3B TTS — Malayalam",
    shortDesc: "Fine-tuned Orpheus 3B on Malayalam audio using LoRA adapters. Full data pipeline.",
    detailedDesc: "A highly specialized text-to-speech model achieved by fine-tuning the Orpheus 3B architecture natively on an expansive Malayalam audio dataset. Employing parameter-efficient fine-tuning (PEFT) through LoRA adapters via Unsloth, the project encompassed a robust end-to-end data pipeline: from deep audio noise reduction and silence stripping to precise phoneme-transcript alignment. Extensive evaluation metrics (WER, CER, and MOS) were systematically tracked across multi-GPU training runs.",
    tags: ["PyTorch", "Unsloth", "PEFT", "HuggingFace"],
    link: "#"
  },
  {
    id: "multimodal",
    name: "Multimodal Similarity Search",
    shortDesc: "Multimodal RAG system for Malayalam manuscript word recognition using vision-language embeddings.",
    detailedDesc: "A sophisticated Multimodal Retrieval-Augmented Generation (RAG) system engineered for optical character recognition and semantic search over ancient Malayalam manuscripts. It utilizes SigLIP2 and custom-trained CLIP models to project both visual manuscript crops and semantic text queries into a shared dense vector space. A high-performance vector database enables near-instant statistical similarity matching and precise spatial localization of historical linguistics.",
    tags: ["SigLIP2", "CLIP", "PyTorch", "Vector DB"],
    link: "#"
  }
];

export default function Portfolio() {
  const [activePage, setActivePage] = useState<Page>("home")
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)

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
              <motion.p variants={itemVariants} className="home-eyebrow">Full Stack AI/ML Engineer</motion.p>
              <motion.h1 variants={itemVariants} className="home-name">
                Kedar<br />Mangalath
              </motion.h1>
              <motion.p variants={itemVariants} className="home-bio">
                AI Engineer specializing in Generative AI, LLMs, and production-grade systems. I build and deploy RAG pipelines, agentic workflows, and multimodal applications—taking AI from experimentation to scalable, real-world solutions.<br /><br />
                Committed to continuous learning and eager to contribute to innovative teams. Based in Perinthalmanna, Malappuram. Always happy to connect, converse, and collaborate!
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
                <motion.div variants={itemVariants} className="grid-cell">
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
                <motion.div variants={itemVariants} className="grid-cell">
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
                <motion.div variants={itemVariants} className="grid-cell">
                  <div className="entry-meta">
                    <p className="entry-company">Amrita Vishwa Vidyapeetham</p>
                    <p className="entry-date">2022 – 2024</p>
                  </div>
                  <div>
                    <p className="entry-role">MCA — AI and Data Science</p>
                  </div>
                </motion.div>

                {/* Box 4 */}
                <motion.div variants={itemVariants} className="grid-cell">
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
                {projectsData.map((project) => (
                  <motion.div 
                    key={project.id}
                    variants={itemVariants} 
                    className="grid-cell"
                  >
                    <div className="project-row">
                      <span className="project-name">{project.name}</span>
                      <button 
                        className="project-expand-btn" 
                        onClick={() => setHoveredProject(project.id)}
                        title="View Details"
                      >
                        ↗
                      </button>
                    </div>
                    
                    <p className="project-desc">
                      {project.shortDesc}
                    </p>

                    <div className="tags">
                      {project.tags.map(tag => (
                        <span key={tag} className="tag">{tag}</span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Centered Overlay Modal */}
              <AnimatePresence>
                {hoveredProject && (
                  <motion.div 
                    className="modal-backdrop"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {/* Click outside to close */}
                    <div className="absolute inset-0" onClick={() => setHoveredProject(null)} />
                    
                    <motion.div 
                      className="modal-content"
                      initial={{ y: 20, scale: 0.98, opacity: 0 }}
                      animate={{ y: 0, scale: 1, opacity: 1 }}
                      exit={{ y: 10, scale: 0.98, opacity: 0 }}
                      transition={{ type: "spring", damping: 25, stiffness: 300 }}
                      onClick={(e) => e.stopPropagation()} /* Prevent closing when clicking inside modal */
                    >
                      <button className="modal-close" onClick={() => setHoveredProject(null)}>×</button>
                      
                      {projectsData.map(p => p.id === hoveredProject && (
                        <div key={p.id}>
                          <h3 className="modal-title">{p.name}</h3>
                          <p className="modal-body">{p.detailedDesc}</p>
                          
                          {p.link !== "#" && (
                            <a className="project-link-primary" href={p.link} target="_blank" rel="noopener">Visit Project</a>
                          )}
                        </div>
                      ))}
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
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
                <motion.div variants={itemVariants} className="grid-cell">
                  <p className="skill-cat">Languages & Frameworks</p>
                  <ul className="skill-items">
                    <li>Python · Django</li>
                    <li>React · Node.js</li>
                    <li>Streamlit</li>
                  </ul>
                </motion.div>

                <motion.div variants={itemVariants} className="grid-cell">
                  <p className="skill-cat">AI / ML</p>
                  <ul className="skill-items">
                    <li>LangChain · LangGraph</li>
                    <li>RAG Pipelines</li>
                    <li>LoRA / QLoRA Fine-tuning</li>
                  </ul>
                </motion.div>

                <motion.div variants={itemVariants} className="grid-cell">
                  <p className="skill-cat">Cloud & DevOps</p>
                  <ul className="skill-items">
                    <li>GCP · Vertex AI</li>
                    <li>Docker · GitHub Actions</li>
                    <li>Vercel</li>
                  </ul>
                </motion.div>

                <motion.div variants={itemVariants} className="grid-cell">
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

              <div className="grid-layout">
                <motion.a 
                  variants={itemVariants} 
                  className="grid-cell contact-cell" 
                  href="mailto:mangalathkedar@gmail.com"
                >
                  <span className="contact-label">Email</span>
                  <span className="contact-value">mangalathkedar@gmail.com</span>
                </motion.a>

                <motion.a 
                  variants={itemVariants} 
                  className="grid-cell contact-cell" 
                  href="tel:+918281912910"
                >
                  <span className="contact-label">Phone</span>
                  <span className="contact-value">+91 82819 12910</span>
                </motion.a>

                <motion.a 
                  variants={itemVariants} 
                  className="grid-cell contact-cell" 
                  href="https://www.linkedin.com/in/kedar-mangalath-7a06a4216/" 
                  target="_blank" 
                  rel="noopener"
                >
                  <span className="contact-label">LinkedIn</span>
                  <span className="contact-value">kedar-mangalath-7a06a4216</span>
                </motion.a>

                <motion.a 
                  variants={itemVariants} 
                  className="grid-cell contact-cell" 
                  href="https://github.com/KedarMangalath" 
                  target="_blank" 
                  rel="noopener"
                >
                  <span className="contact-label">GitHub</span>
                  <span className="contact-value">KedarMangalath</span>
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <footer>
        <span>Kedar Mangalath</span>
        <span>Perinthalmanna, India</span>
      </footer>
    </div>
  )
}
