"use client"

import { motion } from "framer-motion"
import { PresenterCard } from "@/components/presenter-card"
import { teamMembers } from "@/data/team"
import { AnimatedTitle } from "@/components/animated-title"
import 'katex/dist/katex.min.css'
import { BlockMath } from 'react-katex'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
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

export function ProblemTwoSlide() {
  return (
    <div className="w-full max-w-4xl mx-auto space-y-10">
      <PresenterCard presenter={teamMembers[4]} />
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-8"
      >
        <AnimatedTitle className="text-white">Advanced Problem Solution</AnimatedTitle>
        <motion.div 
          variants={containerVariants}
          className="space-y-6"
        >
          <motion.div
            variants={itemVariants}
            className="p-6 bg-white/10 backdrop-blur-sm rounded-lg shadow-lg"
          >
            <h3 className="text-xl font-semibold mb-4 text-white">Problem: Find the Laplace transform of t sin(at)</h3>
            <div className="space-y-4 text-gray-200">
              <BlockMath>{"L[t\\sin(at)] = \\frac{2as}{(s^2 + a^2)^2}"}</BlockMath>
              <p className="text-gray-300">Solution steps:</p>
              <div className="space-y-2">
                <BlockMath>{"L[t\\sin(at)] = -\\frac{d}{ds}L[\\sin(at)]"}</BlockMath>
                <BlockMath>{"= -\\frac{d}{ds}\\left(\\frac{a}{s^2 + a^2}\\right)"}</BlockMath>
                <BlockMath>{"= \\frac{2as}{(s^2 + a^2)^2}"}</BlockMath>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="p-6 bg-white/10 backdrop-blur-sm rounded-lg shadow-lg"
          >
            <h3 className="text-xl font-semibold mb-4 text-white">Key Observations</h3>
            <ul className="space-y-2 list-disc list-inside text-gray-300">
              <li>The derivative property of Laplace transform is used</li>
              <li>The result shows how time multiplication affects the transform</li>
              <li>The denominator is squared due to the derivative</li>
            </ul>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  )
}

