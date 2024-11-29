"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { PresenterCard } from "@/components/presenter-card"
import { teamMembers } from "@/data/team"
import { AnimatedTitle } from "@/components/animated-title"
import { SlideTransition } from "@/components/slide-transition"
import { Button } from "@/components/ui/button"
import { ChevronRight } from 'lucide-react'
import 'katex/dist/katex.min.css'
import { BlockMath, InlineMath } from 'react-katex'

const contentSections = [
  {
    title: "What is Laplace Transform?",
    content: "A mathematical tool to transform a time-domain function f(t) into a complex frequency-domain function F(s)."
  },
  {
    title: "Purpose",
    content: "Simplifies the analysis of linear systems by converting differential equations into algebraic equations."
  },
  {
    title: "Definition",
    content: (
      <>
        <p className="mb-4">Let f(t) be function defined for all positive values of t, then</p>
        <BlockMath>{`F(s) = \\int_0^{\\infty} e^{-st}f(t)dt`}</BlockMath>
        <p className="mt-4">Provide the integral exists, is called the Laplace Transformation of f(t). It is denoted as</p>
        <BlockMath>{`L[f(t)] = F(s) = \\int_0^{\\infty} e^{-st}f(t)dt`}</BlockMath>
      </>
    )
  },
  {
    title: "Variables",
    content: (
      <ul className="list-disc list-inside">
        <li>t: Time variable (seconds).</li>
        <li>s: Complex frequency variable (s = σ + jω).</li>
      </ul>
    )
  }
]

export function DefinitionSlide() {
  const [currentSection, setCurrentSection] = useState(0)

  const nextSection = () => {
    if (currentSection < contentSections.length - 1) {
      setCurrentSection(currentSection + 1)
    }
  }

  return (
    <div className="w-full max-w-4xl mx-auto space-y-8">
      <SlideTransition>
        <PresenterCard presenter={teamMembers[0]} />
      </SlideTransition>

      <div className="space-y-8">
        <AnimatedTitle variant="gradient" className="text-5xl">
          Laplace Transform
        </AnimatedTitle>

        <SlideTransition direction="up" delay={0.4}>
          <motion.div
            className="p-8 bg-white/10 backdrop-blur-sm rounded-lg shadow-lg space-y-6 text-gray-200 min-h-[400px] flex flex-col justify-between"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSection}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="space-y-4"
              >
                <h2 className="text-3xl font-bold text-white mb-4">
                  <InlineMath>{`\\bullet`}</InlineMath> {contentSections[currentSection].title}
                </h2>
                <div className="text-xl leading-relaxed">
                  {contentSections[currentSection].content}
                </div>
              </motion.div>
            </AnimatePresence>

            {currentSection < contentSections.length - 1 && (
              <div className="flex justify-end mt-8">
                <Button
                  variant="outline"
                  onClick={nextSection}
                  className="group bg-white/10 text-white hover:bg-white/20 text-lg px-6 py-3"
                >
                  Next
                  <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            )}
          </motion.div>
        </SlideTransition>
      </div>
    </div>
  )
}

