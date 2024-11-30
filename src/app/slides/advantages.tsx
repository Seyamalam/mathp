"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { PresenterCard } from "@/components/presenter-card"
import { teamMembers } from "@/data/team"
import { AnimatedTitle } from "@/components/animated-title"
import { Check, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100
    }
  }
}

const advantages = [
  {
    title: "Simplification of Differential Equations",
    description: "Laplace transforms convert complex differential equations into simpler algebraic equations, making them easier to solve and analyze."
  },
  {
    title: "Handling of Discontinuous Functions",
    description: "It can effectively deal with discontinuous and piecewise continuous functions, which are common in real-world applications."
  },
  {
    title: "Convolution Simplification",
    description: "Laplace transforms turn convolution operations into simple multiplications, greatly simplifying certain types of problems."
  },
  {
    title: "Initial Value Problem Solving",
    description: "It's particularly useful for solving initial value problems in differential equations, a common requirement in many engineering applications."
  },
  {
    title: "System Analysis in Control Theory",
    description: "Laplace transforms are fundamental in analyzing the stability and response of control systems, making them indispensable in control engineering."
  },
  {
    title: "Signal Processing Applications",
    description: "In signal processing, Laplace transforms help in analyzing and designing filters, as well as in understanding system responses to various inputs."
  },
  {
    title: "Unified Approach to Different Input Types",
    description: "It provides a unified method to handle various types of inputs (step, impulse, ramp) in a system, simplifying analysis across different scenarios."
  }
]

export function AdvantagesSlide() {
  const [currentPage, setCurrentPage] = useState(0)
  const totalPages = Math.ceil(advantages.length / 2)

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages)
  }

  return (
    <div className="w-full max-w-7xl mx-auto space-y-8">
      <PresenterCard presenter={teamMembers[6]} />
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-8"
      >
        <AnimatedTitle className="text-center mb-8 text-white">Advantages of Laplace Transform</AnimatedTitle>
        <motion.div 
          className="grid grid-cols-1 gap-8"
          variants={containerVariants}
        >
          {advantages.slice(currentPage * 2, currentPage * 2 + 2).map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="p-8 rounded-lg bg-black/40 backdrop-blur-md border border-white/10"
            >
              <div className="flex items-start space-x-4 mb-6">
                <div className="p-1 bg-primary/20 rounded-full mt-1">
                  <Check className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-4xl font-semibold text-white">{item.title}</h3>
              </div>
              <p className="text-white/90 text-xl leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="flex justify-center mt-8">
          <Button
            onClick={nextPage}
            className="group bg-primary/20 hover:bg-primary/30 text-white text-xl py-3 px-6"
          >
            Next
            <ChevronRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </motion.div>
    </div>
  )
}

