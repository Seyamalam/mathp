"use client"

import { motion } from "framer-motion"
import { PresenterCard } from "@/components/presenter-card"
import { teamMembers } from "@/data/team"
import { AnimatedTitle } from "@/components/animated-title"

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

const contents = [
  "Introduction to Laplace Transform",
  "Real World Applications",
  "Formula Proofs - Part 1",
  "Formula Proofs - Part 2",
  "Problem Solving Examples",
  "Advanced Applications",
  "Advantages of Laplace Transform",
  "Disadvantages & Limitations",
  "Conclusion"
]

export function ContentsSlide() {
  return (
    <div className="w-full max-w-4xl mx-auto space-y-8">
      <PresenterCard presenter={teamMembers[5]} />
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-8"
      >
        <AnimatedTitle className="text-center text-foreground text-5xl mb-8">
          Table of Contents
        </AnimatedTitle>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
          variants={containerVariants}
        >
          {contents.map((content, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="p-6 rounded-lg bg-white/5 backdrop-blur-md border border-white/10 text-xl"
            >
              <span className="text-primary font-bold mr-3 text-2xl">{index + 1}.</span>
              <span className="text-foreground text-xl">{content}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}

