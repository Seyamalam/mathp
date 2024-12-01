"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { PresenterCard } from "@/components/presenter-card"
import { teamMembers } from "@/data/team"
import { AnimatedTitle } from "@/components/animated-title"
import { SlideTransition } from "@/components/slide-transition"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronRight } from 'lucide-react'
import 'katex/dist/katex.min.css'
import { InlineMath, BlockMath } from 'react-katex'

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

const solutionSteps = [
  "\\text{Find the Laplace transform of } (1+ \\cos 2t).",
  "\\begin{align*}&\\text{Solution:}\\\\&\\text{Laplace transform of }(1+ \\cos 2t)\\\\&= \\int_0^\\infty e^{-st}(1+ \\cos 2t)dt\\end{align*}",
  "\\begin{align*}&= \\int_0^\\infty e^{-st}\\left(1+ \\frac{e^{2it}+e^{-2it}}{2}\\right)dt \\left[\\because \\cos at = \\frac{e^{iat}+e^{-iat}}{2}\\right]\\\\&= \\int_0^\\infty e^{-st}\\left(\\frac{2+e^{2it}+e^{-2it}}{2}\\right)dt\\end{align*}",
  "\\begin{align*}&= \\frac{1}{2}\\int_0^\\infty e^{-st}(2+e^{2it}+e^{-2it})dt\\\\&= \\frac{1}{2}\\int_0^\\infty [2e^{-st}+e^{-st}(e^{2it}+e^{-2it})]dt\\\\&= \\frac{1}{2}\\int_0^\\infty [2e^{-st}+e^{(-s+2i)t}+e^{(-s-2i)t}]dt\\end{align*}",
  "\\begin{align*}&= \\frac{1}{2}\\left[\\frac{2e^{-st}}{-s}+\\frac{e^{(-s+2i)t}}{-s+2i}+\\frac{e^{(-s-2i)t}}{-s-2i}\\right]_0^\\infty\\\\&= \\frac{1}{2}\\left[\\left(\\frac{-2}{s}\\right)+\\frac{1}{-s+2i}(0-1)+\\frac{1}{-s-2i}(0-1)\\right]\\end{align*}",
  "\\begin{align*}&= \\frac{1}{2}\\left[\\frac{2}{s}+\\frac{1}{s-2i}+\\frac{1}{s+2i}\\right]\\\\&= \\frac{1}{2}\\left[\\frac{2}{s}+\\frac{s+2i}{(s-2i)(s+2i)}\\right]\\\\&= \\frac{1}{2}\\left[\\frac{2}{s}+\\frac{2s}{s^2-(2i)^2}\\right]\\end{align*}",
  "\\begin{align*}&= \\frac{1}{2}\\left[\\frac{2}{s}+\\frac{2s}{s^2+4}\\right]\\\\&= \\frac{1}{s}+\\frac{s}{s^2+4}\\\\&= \\frac{s^2+4+s^2}{s(s^2+4)}\\\\&= \\frac{2s^2+4}{s(s^2+4)}\\end{align*}"
]

export function ProblemOneSlide() {
  const [currentStep, setCurrentStep] = useState(0)
  const totalSteps = solutionSteps.length

  const nextStep = () => {
    setCurrentStep((prev) => (prev + 1) % totalSteps)
  }

  return (
    <div className="w-full max-w-7xl mx-auto space-y-8">
      <PresenterCard presenter={teamMembers[4]} />
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-8"
      >
        <AnimatedTitle variant="gradient" className="text-center text-6xl mb-8">
          Problem Solution - Part 1
        </AnimatedTitle>

        <Card className="bg-black/40 backdrop-blur-md border-white/10">
          <CardContent className="p-12">
            <SlideTransition direction="left" delay={0.2}>
              <div className="flex justify-center">
                <div className="katex-display-wrapper text-2xl">
                  <BlockMath>{solutionSteps[currentStep]}</BlockMath>
                </div>
              </div>
            </SlideTransition>
          </CardContent>
        </Card>

        <div className="flex justify-center mt-8">
          <Button
            onClick={nextStep}
            className="group bg-primary/20 hover:bg-primary/30 text-white text-2xl py-4 px-8"
          >
            {currentStep === totalSteps - 1 ? "Restart" : "Next"}
            <ChevronRight className="ml-2 h-8 w-8 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </motion.div>
    </div>
  )
}

  