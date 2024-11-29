"use client"

import { motion } from "framer-motion"
import { PresenterCard } from "@/components/presenter-card"
import { teamMembers } from "@/data/team"
import { AnimatedTitle } from "@/components/animated-title"
import { X } from 'lucide-react'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.15
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100
    }
  }
}

const disadvantages = [
  {
    title: "Complex Functions",
    description: "Difficult to find transforms of complex functions"
  },
  {
    title: "Initial Conditions",
    description: "Must know all initial conditions for complete solution"
  },
  {
    title: "Inverse Transform",
    description: "Finding inverse transforms can be challenging"
  },
  {
    title: "Limited Functions",
    description: "Not all functions have Laplace transforms"
  },
  {
    title: "Computational Effort",
    description: "May require significant computational resources"
  },
  {
    title: "Learning Curve",
    description: "Requires strong mathematical background"
  }
]

export function DisadvantagesSlide() {
  return (
    <div className="w-full max-w-4xl mx-auto space-y-10">
      <PresenterCard presenter={teamMembers[7]} />
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-8"
      >
        <AnimatedTitle className="text-center text-white">Limitations & Disadvantages</AnimatedTitle>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
          variants={containerVariants}
        >
          {disadvantages.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="p-4 rounded-lg bg-white/10 backdrop-blur-sm shadow-lg"
            >
              <div className="flex items-start space-x-3">
                <div className="p-1 bg-destructive/20 rounded-full">
                  <X className="h-4 w-4 text-destructive" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">{item.title}</h3>
                  <p className="text-sm text-gray-300">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}

