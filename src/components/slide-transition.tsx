"use client"

import { motion } from "framer-motion"

interface SlideTransitionProps {
  children: React.ReactNode
  direction?: "left" | "right" | "up" | "down"
  delay?: number
}

export function SlideTransition({ 
  children, 
  direction = "up",
  delay = 0 
}: SlideTransitionProps) {
  const variants = {
    hidden: {
      opacity: 0,
      x: direction === "left" ? 50 : direction === "right" ? -50 : 0,
      y: direction === "up" ? 50 : direction === "down" ? -50 : 0
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0
    }
  }

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      transition={{
        duration: 0.6,
        delay,
        type: "spring",
        stiffness: 80,
        damping: 15
      }}
    >
      {children}
    </motion.div>
  )
}

