"use client"

import { motion } from "framer-motion"
import { PresenterCard } from "@/components/presenter-card"
import { teamMembers } from "@/data/team"
import { AnimatedTitle } from "@/components/animated-title"
import { SlideTransition } from "@/components/slide-transition"
import { MathStep } from "@/components/math-step"
import { MathVisualization } from "@/components/math-visualization"
import 'katex/dist/katex.min.css'

export function ProblemOneSlide() {
  const mathSteps = [
    "\\text{Find the Laplace transform of } (1+ \\cos 2t)",
    "\\int_0^\\infty e^{-st}(1+ \\cos 2t)dt",
    "\\int_0^\\infty e^{-st}\\left(1+ \\frac{e^{2it}+e^{-2it}}{2}\\right)dt",
    "\\frac{1}{2}\\int_0^\\infty [2e^{-st}+e^{(-s+2i)t}+e^{(-s-2i)t}]dt",
    "\\frac{1}{2}\\left[\\frac{2e^{-st}}{-s}+\\frac{e^{(-s+2i)t}}{-s+2i}+\\frac{e^{(-s-2i)t}}{-s-2i}\\right]_0^\\infty",
    "\\frac{2s^2+4}{s(s^2+4)}"
  ]

  const descriptions = [
    "Problem statement",
    "Apply Laplace transform definition",
    "Use Euler's formula: cos(at) = (e^{iat} + e^{-iat})/2",
    "Combine terms and prepare for integration",
    "Integrate each term",
    "Final result after simplification"
  ]

  return (
    <div className="w-full max-w-6xl mx-auto space-y-10">
      <SlideTransition>
        <PresenterCard presenter={teamMembers[4]} />
      </SlideTransition>

      <div className="space-y-10">
        <AnimatedTitle variant="gradient">Problem Solution</AnimatedTitle>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <SlideTransition direction="left" delay={0.2}>
            <MathStep steps={mathSteps} descriptions={descriptions} />
          </SlideTransition>

          <SlideTransition direction="right" delay={0.4}>
            <div className="space-y-4">
              <MathVisualization type="cosine" />
              <p className="text-center text-sm text-gray-300">
                Visualization of cos(2t) function
              </p>
            </div>
          </SlideTransition>
        </div>

        <SlideTransition direction="up" delay={0.6}>
          <motion.div
            className="p-6 bg-white/10 backdrop-blur-sm rounded-lg shadow-lg"
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-lg font-semibold mb-2 text-white">Solution Analysis:</h3>
            <ul className="space-y-2 list-disc list-inside text-gray-300">
              <li>We used Euler's formula to convert cosine to exponential form</li>
              <li>The solution involves partial fractions decomposition</li>
              <li>The final result shows both constant and oscillatory components</li>
            </ul>
          </motion.div>
        </SlideTransition>
      </div>
    </div>
  )
}

