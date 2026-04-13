"use client"

import { useEffect, useRef } from "react"

type Particle = { x: number; y: number; vx: number; vy: number; r: number }

const N = 70
const MAX_D = 160

export default function NeuralBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let w = 0, h = 0, rafId = 0
    let particles: Particle[] = []

    const resize = () => {
      w = canvas.width = window.innerWidth
      h = canvas.height = window.innerHeight
    }

    const spawn = () => {
      particles = Array.from({ length: N }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.28,
        vy: (Math.random() - 0.5) * 0.28,
        r: Math.random() * 1.1 + 0.4,
      }))
    }

    const tick = () => {
      ctx.clearRect(0, 0, w, h)

      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > w) p.vx *= -1
        if (p.y < 0 || p.y > h) p.vy *= -1
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = "rgba(0,212,255,0.4)"
        ctx.fill()
      }

      for (let i = 0; i < N; i++) {
        for (let j = i + 1; j < N; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const d = Math.hypot(dx, dy)
          if (d < MAX_D) {
            const a = (1 - d / MAX_D) * 0.11
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle =
              i % 4 === 0
                ? `rgba(155,93,229,${a})`
                : `rgba(0,212,255,${a})`
            ctx.lineWidth = 0.55
            ctx.stroke()
          }
        }
      }

      rafId = requestAnimationFrame(tick)
    }

    const onResize = () => { resize(); spawn() }

    resize()
    spawn()
    tick()
    window.addEventListener("resize", onResize)
    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener("resize", onResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ opacity: 0.5 }}
    />
  )
}
