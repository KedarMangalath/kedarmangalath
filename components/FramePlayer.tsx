"use client"
import { useEffect, useRef } from "react"
import { MotionValue } from "framer-motion"

interface FramePlayerProps {
  progress?: MotionValue<number>
}

export default function FramePlayer({ progress }: FramePlayerProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const TOTAL_FRAMES = 120
    const frames: HTMLImageElement[] = []
    let loadedFrames = 0

    const drawFrame = (index: number) => {
      const img = frames[index]
      if (!img) return
      
      // Calculate scale with a 15% zoom factor to give padding for shifting
      const baseScale = Math.max(canvas.width / img.width, canvas.height / img.height)
      const scale = baseScale * 1.15
      
      const x = (canvas.width / 2) - (img.width / 2) * scale
      
      // Shift the image physically downwards by 20% of the viewport height
      const yShift = canvas.height * 0.20
      const targetY = (canvas.height / 2) - (img.height / 2) * scale + yShift
      
      // Clamp Y to ensure we don't expose background at the top (0) or bottom
      const minY = canvas.height - img.height * scale
      const y = Math.max(minY, Math.min(0, targetY))
      
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.drawImage(img, x, y, img.width * scale, img.height * scale)
      
      // Dynamic overlay tint for readability and fade-to-black at the end of page
      let currentOpacity = 0.85;
      if (progress) {
          const p = progress.get();
          // Fade to solid black (1.0) over the last 15% of the scroll
          if (p > 0.85) {
             currentOpacity = 0.85 + ((p - 0.85) / 0.15) * 0.15;
          }
      }
      ctx.fillStyle = `rgba(7, 7, 7, ${currentOpacity})`;
      ctx.fillRect(0, 0, canvas.width, canvas.height)
    }

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      if (loadedFrames === TOTAL_FRAMES) {
         if (progress) {
             const currentFrame = Math.max(0, Math.min(Math.floor(progress.get() * TOTAL_FRAMES), TOTAL_FRAMES - 1))
             drawFrame(currentFrame)
         } else {
             drawFrame(0)
         }
      }
    }
    
    window.addEventListener("resize", resize)
    resize()

    // Load frames
    for (let i = 1; i <= TOTAL_FRAMES; i++) {
        const img = new Image()
        img.src = `/frames/Alpaca_Luxury_Brand_Video_Generation_${i.toString().padStart(3, '0')}.png`
        img.onload = () => {
            loadedFrames++
            if (loadedFrames === TOTAL_FRAMES) {
               if (progress) {
                  const currentFrame = Math.max(0, Math.min(Math.floor(progress.get() * TOTAL_FRAMES), TOTAL_FRAMES - 1))
                  drawFrame(currentFrame)
               } else {
                  drawFrame(0)
               }
            }
        }
        frames.push(img)
    }

    let unsubscribe: (() => void) | undefined
    if (progress) {
      unsubscribe = progress.on("change", (latest) => {
        if (loadedFrames === TOTAL_FRAMES) {
          const targetFrame = Math.max(0, Math.min(Math.floor(latest * TOTAL_FRAMES), TOTAL_FRAMES - 1))
          drawFrame(targetFrame)
        }
      })
    }

    return () => {
       window.removeEventListener("resize", resize)
       if (unsubscribe) unsubscribe()
    }
  }, [progress])

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
    />
  )
}

