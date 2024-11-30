"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { PresenterCard } from "@/components/presenter-card"
import { teamMembers } from "@/data/team"
import { AnimatedTitle } from "@/components/animated-title"
import { X, ChevronRight } from 'lucide-react'
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

const disadvantages = [
  {
    title: "Complexity in Inverse Transformation",
    description: "Finding the inverse Laplace transform is often difficult, particularly for complex functions. It may require advanced techniques like partial fractions, convolution, or approximation, which can be time-consuming."
  },
  {
    title: "Applicability to Linear Systems Only",
    description: "Laplace transformations are designed for linear differential equations and systems. Nonlinear systems cannot be directly analyzed using this method, limiting its applicability in certain fields."
  },
  {
    title: "Dependency on Initial Conditions",
    description: "It assumes known initial conditions, which might not always be available or accurately measurable in real-life problems. This can lead to inaccuracies in the final solution."
  },
  {
    title: "Complexity with Non-Standard Functions",
    description: "For functions not well-defined within Laplace's domain (e.g., highly oscillatory functions), the transformation becomes difficult or impossible, limiting its use in certain scenarios."
  },
  {
    title: "Numerical Computation Challenges",
    description: "In practical applications, calculating the inverse Laplace transformation for complex functions can be computationally intensive and may not always yield a straightforward solution."
  },
  {
    title: "Not Suitable for Boundary Value Problems",
    description: "While excellent for initial value problems, Laplace is less effective for problems involving boundary conditions, restricting its use in certain areas of physics and engineering."
  },
  {
    title: "Limited Frequency Domain Interpretation",
    description: "Although similar to Fourier, Laplace transformations are less intuitive for frequency-domain analysis in some engineering contexts, making it harder to interpret results in certain applications."
  }
]

export function DisadvantagesSlide() {
  const [currentPage, setCurrentPage] = useState(0)
  const totalPages = Math.ceil(disadvantages.length / 2)

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages)
  }

  return (
    <div className="w-full max-w-7xl mx-auto space-y-8">
      <PresenterCard presenter={teamMembers[7]} />
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-8"
      >
        <AnimatedTitle className="text-center mb-8 text-white">Disadvantages of Laplace Transform</AnimatedTitle>
        <motion.div 
          className="grid grid-cols-1 gap-8"
          variants={containerVariants}
        >
          {disadvantages.slice(currentPage * 2, currentPage * 2 + 2).map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="p-8 rounded-lg bg-black/40 backdrop-blur-md border border-white/10"
            >
              <div className="flex items-start space-x-4 mb-6">
                <div className="p-1 bg-destructive/20 rounded-full mt-1">
                  <X className="h-8 w-8 text-destructive" />
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

