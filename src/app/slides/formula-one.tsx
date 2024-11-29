"use client"

import { motion } from "framer-motion"
import { PresenterCard } from "@/components/presenter-card"
import { teamMembers } from "@/data/team"
import { AnimatedTitle } from "@/components/animated-title"
import { SlideTransition } from "@/components/slide-transition"
import { MathStep } from "@/components/math-step"
import { MathVisualization } from "@/components/math-visualization"
import 'katex/dist/katex.min.css'

export function FormulaOneSlide() {
  const mathSteps = [
    "F(s) = L[f(t)] = \\int_0^\\infty e^{-st}f(t)dt",
    "\\text{For } f(t) = e^{at}:",
    "L[e^{at}] = \\int_0^\\infty e^{-st}\\cdot e^{at}dt",
    "= \\int_0^\\infty e^{(-s+a)t}dt",
    "= \\left[\\frac{e^{(-s+a)t}}{-s+a}\\right]_0^\\infty",
    "= \\frac{1}{s-a}"
  ]

  const descriptions = [
    "Definition of Laplace Transform",
    "Let's solve for exponential function",
    "Substitute f(t) = e^{at} into the integral",
    "Combine exponents using laws of exponents",
    "Integrate with respect to t",
    "Final result after evaluating limits"
  ]

  return (
    <div className="w-full max-w-6xl mx-auto space-y-10">
      <SlideTransition>
        <PresenterCard presenter={teamMembers[2]} />
      </SlideTransition>

      <div className="space-y-10">
        <AnimatedTitle variant="gradient">Formula Proof - Part 1</AnimatedTitle>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <SlideTransition direction="left" delay={0.2}>
            <MathStep steps={mathSteps} descriptions={descriptions} />
          </SlideTransition>

          <SlideTransition direction="right" delay={0.4}>
            <div className="space-y-4">
              <MathVisualization type="exponential" />
              <p className="text-center text-sm text-gray-400">
                Visualization of e^at function
              </p>
            </div>
          </SlideTransition>
        </div>

        <SlideTransition direction="up" delay={0.6}>
          <motion.div
            className="p-6 bg-white/10 backdrop-blur-sm rounded-lg shadow-lg"
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-lg font-semibold mb-2 text-white">Key Points:</h3>
            <ul className="space-y-2 list-disc list-inside text-gray-300">
              <li>The Laplace transform converts time domain to frequency domain</li>
              <li>For exponential functions, the result is a simple rational function</li>
              <li>The transform exists when s {">"} a (convergence condition)</li>
            </ul>
          </motion.div>
        </SlideTransition>
      </div>
    </div>
  )
}

