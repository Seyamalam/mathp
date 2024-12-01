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
import { BlockMath } from 'react-katex'

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

const example5Steps = [
  "\\text{Example 5. Find the Laplace Transform of } t \\sin at.",
  "\\begin{align*}L(t\\sin at) &= L\\left\\{t\\cdot\\frac{e^{iat}-e^{-iat}}{2i}\\right\\} \\\\ &= \\frac{1}{2i}[L(t\\cdot e^{iat})-L(t\\cdot e^{-iat})]\\end{align*}",
  "\\begin{align*}&= \\frac{1}{2i}\\left[\\frac{1}{(s-ia)^2}-\\frac{1}{(s+ia)^2}\\right] \\\\ &= \\frac{1}{2i}\\frac{[(s+ia)^2-(s-ia)^2]}{(s-ia)^2(s+ia)^2}\\end{align*}",
  "\\begin{align*}&= \\frac{1}{2i}\\frac{(s^2+2ias-a^2)-(s^2-2ias-a^2)}{(s^2+a^2)^2} \\\\ &= \\frac{1}{2i}\\frac{4ias}{(s^2+a^2)^2} = \\frac{2as}{(s^2+a^2)^2} \\quad\\text{Ans.}\\end{align*}"
]

const example6Steps = [
  "\\text{Example 6. Find the Laplace Transform of } t^2 \\cos at.",
  "\\begin{align*}L(t^2\\cos at) &= L\\left\\{t^2\\cdot\\frac{e^{iat}+e^{-iat}}{2}\\right\\} \\\\ &= \\frac{1}{2}[L(t^2\\cdot e^{iat})+L(t^2\\cdot e^{-iat})]\\end{align*}",
  "\\begin{align*}&= \\frac{1}{2}\\left[\\frac{2}{(s-ia)^3}+\\frac{2}{(s+ia)^3}\\right] \\\\ &= \\frac{(s+ia)^3+(s-ia)^3}{(s-ia)^3(s+ia)^3}\\end{align*}",
  "\\begin{align*}&= \\frac{(s^3+3ia s^2-3a^2s-ia^3)+(s^3-3ia s^2-3a^2s+ia^3)}{(s^2+a^2)^3} \\\\ &= \\frac{2s^3-6a^2s}{(s^2+a^2)^3} = \\frac{2s(s^2-3a^2)}{(s^2+a^2)^3} \\quad\\text{Ans.}\\end{align*}"
]

export function ProblemTwoSlide() {
  const [currentExample, setCurrentExample] = useState(5)
  const [currentStep, setCurrentStep] = useState(0)

  const nextStep = () => {
    if (currentExample === 5) {
      if (currentStep < example5Steps.length - 1) {
        setCurrentStep(currentStep + 1)
      } else {
        setCurrentExample(6)
        setCurrentStep(0)
      }
    } else if (currentExample === 6) {
      if (currentStep < example6Steps.length - 1) {
        setCurrentStep(currentStep + 1)
      } else {
        setCurrentExample(5)
        setCurrentStep(0)
      }
    }
  }

  const currentSteps = currentExample === 5 ? example5Steps : example6Steps

  return (
    <div className="w-full max-w-7xl mx-auto space-y-8">
      <PresenterCard presenter={teamMembers[5]} />
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-8"
      >
        <AnimatedTitle variant="gradient" className="text-center text-6xl mb-8">
          Problem Solution - Part 2
        </AnimatedTitle>

        <Card className="bg-black/40 backdrop-blur-md border-white/10">
          <CardContent className="p-12">
            <SlideTransition direction="left" delay={0.2}>
              <div className="flex justify-center">
                <div className="katex-display-wrapper text-2xl">
                  <BlockMath>{currentSteps[currentStep]}</BlockMath>
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
            {currentStep === currentSteps.length - 1 && currentExample === 6 ? "Restart" : "Next"}
            <ChevronRight className="ml-2 h-8 w-8 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </motion.div>
    </div>
  )
}

