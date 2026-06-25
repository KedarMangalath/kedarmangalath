"use client"

import { useState } from "react"
import Link from "next/link"

type Page = "home" | "work" | "projects" | "skills" | "contact"

export default function Portfolio() {
  const [activePage, setActivePage] = useState<Page>("home")
  const [animationKey, setAnimationKey] = useState(0)

  const go = (page: Page) => {
    setActivePage(page)
    setAnimationKey((prev) => prev + 1) // Force re-render for CSS animation
  }

  return (
    <div className="shell">
      <nav>
        <span className="nav-mark" onClick={() => go("home")}>
          KM
        </span>
        <ul className="nav-links">
          <li>
            <button
              className={activePage === "work" ? "active" : ""}
              onClick={() => go("work")}
            >
              Work
            </button>
          </li>
          <li>
            <button
              className={activePage === "projects" ? "active" : ""}
              onClick={() => go("projects")}
            >
              Projects
            </button>
          </li>
          <li>
            <button
              className={activePage === "skills" ? "active" : ""}
              onClick={() => go("skills")}
            >
              Skills
            </button>
          </li>
          <li>
            <button
              className={activePage === "contact" ? "active" : ""}
              onClick={() => go("contact")}
            >
              Contact
            </button>
          </li>
        </ul>
      </nav>

      {/* Pages Container - using animationKey to re-trigger the CSS animation on switch */}
      <div key={animationKey} className="flex-1 anim-enter">
        {/* ── HOME ── */}
        {activePage === "home" && (
          <div className="pt-[100px] pb-[80px]">
            <div className="stagger">
              <p className="home-eyebrow">Full Stack AI Engineer</p>
              <h1 className="home-name">
                Kedar
                <br />
                Mangalath
              </h1>
              <p className="home-bio">
                Building production AI systems — RAG pipelines,
                <br />
                multi-agent orchestration, and full-stack applications.
                <br />
                Based in Trivandrum, India.
              </p>
              <div className="home-links">
                <a href="mailto:mangalathkedar@gmail.com">Email</a>
                <a
                  href="https://www.linkedin.com/in/kedar-mangalath-7a06a4216/"
                  target="_blank"
                  rel="noopener"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/KedarMangalath"
                  target="_blank"
                  rel="noopener"
                >
                  GitHub
                </a>
                <a
                  href="https://thanal-web.vercel.app/"
                  target="_blank"
                  rel="noopener"
                >
                  Thanal ↗
                </a>
              </div>
            </div>
          </div>
        )}

        {/* ── WORK ── */}
        {activePage === "work" && (
          <div className="pt-[100px] pb-[80px]">
            <p className="label">Experience</p>

            <div className="work-grid stagger">
              <div className="entry-card">
                <div className="entry-meta">
                  <p className="entry-company">GAUDE Solutions</p>
                  <p className="entry-date">Dec 2024 – Present</p>
                </div>
                <div>
                  <p className="entry-role">Full Stack AI/ML Engineer</p>
                  <ul className="entry-bullets">
                    <li>
                      Production medical platform with Zoom-integrated
                      consultations, real-time STT transcription, and NLP
                      pipeline to auto-populate EMR fields and support clinical
                      dictation.
                    </li>
                    <li>
                      RAG pipelines (LangChain + Vertex AI) for enterprise
                      document querying with chunk-size tuning, overlap
                      optimisation, and reranking against a held-out clinical
                      query set.
                    </li>
                    <li>
                      Fine-tuned LLMs with LoRA/QLoRA for Indic-language content
                      moderation; synthetic training data via LLM prompting.
                      Docker + GitHub Actions CI/CD.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="entry-card">
                <div className="entry-meta">
                  <p className="entry-company">GAUDE Solutions</p>
                  <p className="entry-date">Oct – Dec 2024</p>
                </div>
                <div>
                  <p className="entry-role">AI/ML Engineer — Intern</p>
                  <ul className="entry-bullets">
                    <li>
                      Conversational agentic flow modules for a medical chatbot
                      using LangChain and LangGraph multi-agent orchestration.
                    </li>
                    <li>
                      RAG pipeline development and deployment of AI services via
                      REST/JSON APIs across Django and React.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="section-gap"></div>
            <p className="label">Education</p>

            <div className="work-grid stagger">
              <div className="entry-card">
                <div className="entry-meta">
                  <p className="entry-company">Amrita Vishwa Vidyapeetham</p>
                  <p className="entry-date">2022 – 2024</p>
                </div>
                <div>
                  <p className="entry-role">MCA — AI and Data Science</p>
                </div>
              </div>

              <div className="entry-card">
                <div className="entry-meta">
                  <p className="entry-company">Amrita Vishwa Vidyapeetham</p>
                  <p className="entry-date">2019 – 2022</p>
                </div>
                <div>
                  <p className="entry-role">BCA</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ── PROJECTS ── */}
        {activePage === "projects" && (
          <div className="pt-[100px] pb-[80px]">
            <p className="label">Projects</p>

            <div className="projects-grid stagger">
              <div className="project-card">
                <div className="project-row">
                  <span className="project-name">Thanal — Travel Assistant</span>
                </div>
                <p className="project-desc">
                  Cross-platform app recommending which side of a bus or train
                  to sit on, scoring routes for heat, glare, and rain risk using
                  solar-position math, live UV/humidity forecasts, and OSRM
                  routing. Community-sourced POI data with reverse-geocoding and
                  upvote accuracy scoring.
                </p>
                <div className="tags">
                  <span className="tag">React</span>
                  <span className="tag">React Native</span>
                  <span className="tag">Node.js</span>
                  <span className="tag">Gemini API</span>
                </div>
                <a
                  className="project-link"
                  href="https://thanal-web.vercel.app/"
                  target="_blank"
                  rel="noopener"
                >
                  thanal-web.vercel.app
                </a>
              </div>

              <div className="project-card">
                <div className="project-row">
                  <span className="project-name">
                    AI-Native Engineering Workspace
                  </span>
                </div>
                <p className="project-desc">
                  Agentic IDE with multi-agent orchestration (planner, coder,
                  reviewer, coordinator), in-browser Monaco editor, real-time
                  code execution, and GitHub OAuth for issue and PR management.
                  Auto-generates architecture diagrams and Mermaid blueprints
                  from live repository analysis.
                </p>
                <div className="tags">
                  <span className="tag">Django</span>
                  <span className="tag">React</span>
                  <span className="tag">LangChain</span>
                  <span className="tag">Docker</span>
                  <span className="tag">PostgreSQL</span>
                </div>
              </div>

              <div className="project-card">
                <div className="project-row">
                  <span className="project-name">Orpheus 3B TTS — Malayalam</span>
                </div>
                <p className="project-desc">
                  Fine-tuned Orpheus 3B on Malayalam audio using LoRA adapters.
                  Full data pipeline from audio cleaning to transcript
                  alignment, with evaluation metrics tracked across training
                  runs.
                </p>
                <div className="tags">
                  <span className="tag">PyTorch</span>
                  <span className="tag">Unsloth</span>
                  <span className="tag">PEFT</span>
                  <span className="tag">HuggingFace</span>
                </div>
              </div>

              <div className="project-card">
                <div className="project-row">
                  <span className="project-name">Multimodal Similarity Search</span>
                </div>
                <p className="project-desc">
                  Multimodal RAG system for Malayalam manuscript word recognition
                  using vision-language embeddings and statistical similarity
                  modelling.
                </p>
                <div className="tags">
                  <span className="tag">SigLIP2</span>
                  <span className="tag">CLIP</span>
                  <span className="tag">PyTorch</span>
                  <span className="tag">Vector DB</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ── SKILLS ── */}
        {activePage === "skills" && (
          <div className="pt-[100px] pb-[80px]">
            <p className="label">Skills</p>

            <div className="skills-grid stagger">
              <div className="skill-cell">
                <p className="skill-cat">Languages & Frameworks</p>
                <ul className="skill-items">
                  <li>Python</li>
                  <li>Django</li>
                  <li>React</li>
                  <li>Node.js</li>
                  <li>Streamlit</li>
                </ul>
              </div>

              <div className="skill-cell">
                <p className="skill-cat">AI / ML</p>
                <ul className="skill-items">
                  <li>LangChain · LangGraph</li>
                  <li>RAG Pipelines</li>
                  <li>Multi-Agent (CrewAI)</li>
                  <li>LLM Fine-tuning — LoRA / QLoRA</li>
                  <li>PyTorch · TensorFlow</li>
                </ul>
              </div>

              <div className="skill-cell">
                <p className="skill-cat">LLM APIs</p>
                <ul className="skill-items">
                  <li>Claude</li>
                  <li>GPT-4o</li>
                  <li>Gemini</li>
                </ul>
              </div>

              <div className="skill-cell">
                <p className="skill-cat">Cloud & DevOps</p>
                <ul className="skill-items">
                  <li>GCP · Vertex AI</li>
                  <li>Docker</li>
                  <li>GitHub Actions</li>
                  <li>Vercel</li>
                </ul>
              </div>

              <div className="skill-cell">
                <p className="skill-cat">Databases</p>
                <ul className="skill-items">
                  <li>PostgreSQL</li>
                  <li>SQLite</li>
                  <li>FAISS · ChromaDB</li>
                </ul>
              </div>

              <div className="skill-cell">
                <p className="skill-cat">Certifications</p>
                <ul className="skill-items">
                  <li>Oracle Cloud AI Foundations 2025</li>
                  <li>Multi-Agent Systems — DeepLearning.AI</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* ── CONTACT ── */}
        {activePage === "contact" && (
          <div className="pt-[100px] pb-[80px]">
            <h2 className="contact-head">
              Let's work
              <br />
              together.
            </h2>

            <div className="stagger">
              <a className="contact-row" href="mailto:mangalathkedar@gmail.com">
                <span>Email</span>
                <span>mangalathkedar@gmail.com</span>
              </a>
              <a className="contact-row" href="tel:+918281912910">
                <span>Phone</span>
                <span>+91 82819 12910</span>
              </a>
              <a
                className="contact-row"
                href="https://www.linkedin.com/in/kedar-mangalath-7a06a4216/"
                target="_blank"
                rel="noopener"
              >
                <span>LinkedIn</span>
                <span>kedar-mangalath-7a06a4216</span>
              </a>
              <a
                className="contact-row"
                href="https://github.com/KedarMangalath"
                target="_blank"
                rel="noopener"
              >
                <span>GitHub</span>
                <span>KedarMangalath</span>
              </a>
            </div>
          </div>
        )}
      </div>

      <footer>
        <span>Kedar Mangalath</span>
        <span>Trivandrum, India</span>
      </footer>
    </div>
  )
}
