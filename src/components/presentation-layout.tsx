"use client"

import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Maximize2, Minimize2, Clock } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { useState, useCallback, useEffect } from "react"
import { Progress } from "@/components/ui/progress"
import screenfull from 'screenfull'
import { format } from 'date-fns'

interface PresentationLayoutProps {
  children: React.ReactNode
  totalSlides: number
  currentSlide: number
  onNext: () => void
  onPrev: () => void
}

export function PresentationLayout({
  children,
  totalSlides,
  currentSlide,
  onNext,
  onPrev,
}: PresentationLayoutProps) {
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [currentTime, setCurrentTime] = useState(new Date())
  const progress = ((currentSlide + 1) / totalSlides) * 100

  // Update clock
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const toggleFullscreen = useCallback(() => {
    if (screenfull.isEnabled) {
      screenfull.toggle()
      setIsFullscreen(!isFullscreen)
    }
  }, [isFullscreen])

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
      {/* Top Bar */}
      <motion.div 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-sm border-b border-white/10"
      >
        <div className="flex items-center justify-between px-4 py-2">
          <div className="flex items-center gap-4">
            <Progress value={progress} className="w-40 h-2" />
            <span className="text-sm font-medium text-foreground">
              {currentSlide + 1} / {totalSlides}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-foreground">
              <Clock className="h-4 w-4" />
              <span className="text-sm">{format(currentTime, 'HH:mm')}</span>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleFullscreen}
              className="shrink-0 text-foreground hover:bg-white/10"
            >
              {isFullscreen ? (
                <Minimize2 className="h-4 w-4" />
              ) : (
                <Maximize2 className="h-4 w-4" />
              )}
            </Button>
          </div>
        </div>
      </motion.div>

      {/* Slide Content */}
      <div className="h-screen w-screen pt-12 pb-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ 
              duration: 0.4,
              type: "spring",
              stiffness: 100,
              damping: 20
            }}
            className="h-full w-full flex items-center justify-center px-4"
          >
            <div className="w-full max-w-7xl">
              {children}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Controls */}
      <motion.div 
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        className="fixed bottom-4 inset-x-0 flex justify-center gap-8 z-50"
      >
        <Button
          variant="outline"
          size="icon"
          onClick={onPrev}
          disabled={currentSlide === 0}
          className="bg-white/10 backdrop-blur-sm text-white border-white/20 hover:bg-white/20"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={onNext}
          disabled={currentSlide === totalSlides - 1}
          className="bg-white/10 backdrop-blur-sm text-white border-white/20 hover:bg-white/20"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </motion.div>
    </div>
  )
}

