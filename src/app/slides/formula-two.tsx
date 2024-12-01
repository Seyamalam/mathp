"use client"

import { motion } from "framer-motion"
import { PresenterCard } from "@/components/presenter-card"
import { teamMembers } from "@/data/team"
import { AnimatedTitle } from "@/components/animated-title"
import { SlideTransition } from "@/components/slide-transition"
import { MathStep } from "@/components/math-step"
import { MathVisualization } from "@/components/math-visualization"
import 'katex/dist/katex.min.css'

export function FormulaTwoSlide() {
  const sinhSteps = [
    "\\mathcal{L}\\{\\sinh(at)\\} = \\frac{a}{s^2-a^2}",
    "\\text{Laplace Transform: } \\mathcal{L}\\{f(t)\\} = \\int_0^\\infty e^{-st}f(t)\\,dt",
    "\\mathcal{L}\\{\\sinh(at)\\} = \\int_0^\\infty e^{-st}\\sinh(at)\\,dt",
    "\\mathcal{L}\\{\\sinh(at)\\} = \\int_0^\\infty e^{-st}\\left(\\frac{e^{at}-e^{-at}}{2}\\right)\\,dt",
    "\\mathcal{L}\\{\\sinh(at)\\} = \\frac{1}{2}[\\mathcal{L}\\{e^{at}\\} - \\mathcal{L}\\{e^{-at}\\}]",
    "\\mathcal{L}\\{\\sinh(at)\\} = \\frac{1}{2}[\\frac{1}{s-a} - \\frac{1}{s+a}] = \\frac{a}{s^2-a^2}"
  ]

  const coshSteps = [
    "\\mathcal{L}\\{\\cosh(at)\\} = \\frac{s}{s^2-a^2}",
    "\\text{Laplace Transform: } \\mathcal{L}\\{f(t)\\} = \\int_0^\\infty e^{-st}f(t)\\,dt",
    "\\mathcal{L}\\{\\cosh(at)\\} = \\int_0^\\infty e^{-st}\\cosh(at)\\,dt",
    "\\mathcal{L}\\{\\cosh(at)\\} = \\int_0^\\infty e^{-st}\\left(\\frac{e^{at}+e^{-at}}{2}\\right)\\,dt",
    "\\mathcal{L}\\{\\cosh(at)\\} = \\frac{1}{2}[\\mathcal{L}\\{e^{at}\\} + \\mathcal{L}\\{e^{-at}\\}]",
    "\\mathcal{L}\\{\\cosh(at)\\} = \\frac{1}{2}[\\frac{1}{s-a} + \\frac{1}{s+a}] = \\frac{s}{s^2-a^2}"
  ]

  const descriptions = [
    "Initial formula to prove",
    "Definition of Laplace Transform",
    "Apply Laplace Transform to the function",
    "Use hyperbolic function definition",
    "Express in terms of Laplace Transforms",
    "Final result after simplification"
  ]

  return (
    <div className="w-full max-w-6xl mx-auto space-y-8">
      <SlideTransition>
        <PresenterCard presenter={teamMembers[3]} />
      </SlideTransition>

      <div className="space-y-8">
        <AnimatedTitle variant="gradient">Formula Proof - Part 2</AnimatedTitle>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <SlideTransition direction="left" delay={0.2}>
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-white mb-4">Proof for sinh(at)</h3>
              <MathStep steps={sinhSteps} descriptions={descriptions} />
            </div>
          </SlideTransition>

          <SlideTransition direction="right" delay={0.4}>
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-white mb-4">Proof for cosh(at)</h3>
              <MathStep steps={coshSteps} descriptions={descriptions} />
            </div>
          </SlideTransition>
        </div>
      </div>
    </div>
  )
}

