"use client"

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

interface MathVisualizationProps {
  width?: number
  height?: number
  type: 'sine' | 'cosine' | 'exponential' | 'step'
  animated?: boolean
}

export function MathVisualization({ 
  width = 400, 
  height = 200, 
  type,
  animated = true 
}: MathVisualizationProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>()
  const timeRef = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const draw = () => {
      ctx.clearRect(0, 0, width, height)
      ctx.beginPath()
      ctx.strokeStyle = 'white'
      ctx.lineWidth = 2

      // Draw axes
      ctx.beginPath()
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)'
      ctx.moveTo(0, height / 2)
      ctx.lineTo(width, height / 2)
      ctx.moveTo(0, 0)
      ctx.lineTo(0, height)
      ctx.stroke()

      // Draw function
      ctx.beginPath()
      ctx.strokeStyle = 'white'
      for (let x = 0; x < width; x++) {
        const t = (x / width) * 10
        let y = 0

        switch (type) {
          case 'sine':
            y = Math.sin(t * 2 + (animated ? timeRef.current : 0)) * height / 3
            break
          case 'cosine':
            y = Math.cos(t * 2 + (animated ? timeRef.current : 0)) * height / 3
            break
          case 'exponential':
            y = Math.exp(-t + (animated ? Math.sin(timeRef.current) : 0)) * height / 2
            break
          case 'step':
            y = t < 5 ? -height / 4 : height / 4
            break
        }

        y = height / 2 - y
        if (x === 0) {
          ctx.moveTo(x, y)
        } else {
          ctx.lineTo(x, y)
        }
      }
      ctx.stroke()

      if (animated) {
        timeRef.current += 0.02
        animationRef.current = requestAnimationFrame(draw)
      }
    }

    draw()

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [width, height, type, animated])

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="rounded-lg overflow-hidden bg-background/50 backdrop-blur-sm p-4"
    >
      <canvas
        ref={canvasRef}
        width={width}
        height={height}
        className="w-full h-auto"
      />
    </motion.div>
  )
}

