"use client"

import { useEffect, useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

export default function CustomCursor() {
  const [visible, setVisible] = useState(false)
  const [hovered, setHovered] = useState(false)

  const rawX = useMotionValue(-200)
  const rawY = useMotionValue(-200)

  const dotX = useSpring(rawX, { stiffness: 900, damping: 40 })
  const dotY = useSpring(rawY, { stiffness: 900, damping: 40 })
  const ringX = useSpring(rawX, { stiffness: 200, damping: 25 })
  const ringY = useSpring(rawY, { stiffness: 200, damping: 25 })

  useEffect(() => {
    // Only activate on pointer devices
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return

    const move = (e: MouseEvent) => {
      rawX.set(e.clientX)
      rawY.set(e.clientY)
      if (!visible) setVisible(true)
    }

    const onEnter = () => setHovered(true)
    const onLeave = () => setHovered(false)

    window.addEventListener("mousemove", move)

    const refresh = () => {
      document.querySelectorAll("a, button, [data-hover]").forEach((el) => {
        el.addEventListener("mouseenter", onEnter)
        el.addEventListener("mouseleave", onLeave)
      })
    }

    refresh()
    const observer = new MutationObserver(refresh)
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      window.removeEventListener("mousemove", move)
      observer.disconnect()
    }
  }, [rawX, rawY, visible])

  if (!visible) return null

  return (
    <>
      {/* Inner dot */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-difference"
        style={{ x: dotX, y: dotY, translateX: "-50%", translateY: "-50%" }}
      >
        <motion.div
          className="rounded-full bg-primary"
          animate={{ width: hovered ? 10 : 5, height: hovered ? 10 : 5 }}
          transition={{ duration: 0.15 }}
        />
      </motion.div>

      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-difference"
        style={{ x: ringX, y: ringY, translateX: "-50%", translateY: "-50%" }}
      >
        <motion.div
          className="rounded-full border border-primary"
          animate={{
            width: hovered ? 52 : 34,
            height: hovered ? 52 : 34,
            opacity: hovered ? 0.6 : 0.25,
          }}
          transition={{ duration: 0.2 }}
        />
      </motion.div>
    </>
  )
}
