"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const NAME = "KEDAR MANGALATH"
const DELAY_PER = 0.042

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [visible, setVisible] = useState(true)
  const exitAt = NAME.length * DELAY_PER + 0.75

  useEffect(() => {
    const t1 = setTimeout(() => setVisible(false), exitAt * 1000)
    const t2 = setTimeout(() => onComplete(), (exitAt + 0.9) * 1000)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [onComplete, exitAt])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="preloader"
          className="fixed inset-0 z-[9999] bg-bg flex flex-col items-center justify-center"
          exit={{ clipPath: "inset(0% 0% 100% 0%)", transition: { duration: 0.85, ease: [0.76, 0, 0.24, 1] } }}
        >
          {/* Subtle grid lines */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.025]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0,212,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(0,212,255,1) 1px,transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />

          {/* Name */}
          <div className="flex overflow-hidden">
            {NAME.split("").map((char, i) => (
              <motion.span
                key={i}
                className="font-bebas text-primary leading-none"
                style={{ fontSize: "clamp(40px, 8vw, 110px)" }}
                initial={{ y: "105%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 0.6, delay: i * DELAY_PER, ease: [0.16, 1, 0.3, 1] }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </div>

          {/* Subtitle */}
          <motion.p
            className="font-mono text-cyan/90 tracking-[0.4em] text-[10px] mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: exitAt - 0.35, duration: 0.4 }}
          >
            AI / ML ENGINEER
          </motion.p>

          {/* Loading bar */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-40 h-px bg-primary/8 overflow-hidden">
            <motion.div
              className="h-full bg-cyan"
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              transition={{ duration: exitAt - 0.1, ease: "linear" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
