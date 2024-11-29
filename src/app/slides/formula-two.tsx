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

export function FormulaTwoSlide() {
  return (
    <div className="w-full max-w-4xl mx-auto space-y-10">
      <PresenterCard presenter={teamMembers[3]} />
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-8"
      >
        <AnimatedTitle className="text-white">Formula Proofs - Part 2</AnimatedTitle>
        <motion.div 
          variants={containerVariants}
          className="space-y-6"
        >
          <motion.div
            variants={itemVariants}
            className="p-6 bg-white/10 backdrop-blur-sm rounded-lg shadow-lg"
          >
            <h3 className="text-xl font-semibold mb-4 text-white">Proof for L[sin at]</h3>
            <div className="space-y-4 text-gray-200">
              <BlockMath>{"L[\\sin at] = \\frac{a}{s^2 + a^2}"}</BlockMath>
              <BlockMath>{"= \\int_0^\\infty e^{-st}\\sin(at)dt"}</BlockMath>
              <BlockMath>{"= \\frac{a}{s^2 + a^2}"}</BlockMath>
            </div>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="p-6 bg-white/10 backdrop-blur-sm rounded-lg shadow-lg"
          >
            <h3 className="text-xl font-semibold mb-4 text-white">Proof for L[cos at]</h3>
            <div className="space-y-4 text-gray-200">
              <BlockMath>{"L[\\cos at] = \\frac{s}{s^2 + a^2}"}</BlockMath>
              <BlockMath>{"= \\int_0^\\infty e^{-st}\\cos(at)dt"}</BlockMath>
              <BlockMath>{"= \\frac{s}{s^2 + a^2}"}</BlockMath>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  )
}

