"use client"

import { motion } from "framer-motion"

interface AnimatedTitleProps {
  children: React.ReactNode
  className?: string
  variant?: "default" | "gradient"
}

export function AnimatedTitle({ 
  children, 
  className = "",
  variant = "default" 
}: AnimatedTitleProps) {
  const titleClass = variant === "gradient" 
    ? "bg-gradient-to-r from-primary to-primary-foreground bg-clip-text text-transparent"
    : ""

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0 }
      }}
      transition={{
        duration: 0.6,
        type: "spring",
        stiffness: 100
      }}
    >
      <motion.h2
        className={`text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl ${titleClass} ${className}`}
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        {children}
      </motion.h2>
    </motion.div>
  )
}

