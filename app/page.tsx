"use client"

import { useState } from "react"
import { useScroll, useTransform, useSpring } from "framer-motion"
import CustomCursor from "@/components/CustomCursor"
import Preloader from "@/components/Preloader"
import NeuralBackground from "@/components/NeuralBackground"
import FramePlayer from "@/components/FramePlayer"
import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Experience from "@/components/Experience"
import Work from "@/components/Work"
import Research from "@/components/Research"
import Skills from "@/components/Skills"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"

export default function Home() {
  const [loaded, setLoaded] = useState(false)

  const { scrollYProgress } = useScroll()
  
  // Map the full page scroll to the full sequence (0 to 1 progress)
  const mappedProgress = useTransform(scrollYProgress, [0, 1], [0, 1])
  
  // Add smoothing for a cinematic feel
  const smoothProgress = useSpring(mappedProgress, { stiffness: 400, damping: 90 })

  return (
    <>
      <CustomCursor />
      <Preloader onComplete={() => setLoaded(true)} />
      {loaded && (
        <>
          <NeuralBackground />
          <div className="fixed inset-0 z-0 pointer-events-none">
            <FramePlayer progress={smoothProgress} />
          </div>
          <main className="relative z-10">
            <Navbar />
            <Hero />
            <About />
            <Experience />
            <Work />
            <Research />
            <Skills />
            <Contact />
            <Footer />
          </main>
        </>
      )}
    </>
  )
}
