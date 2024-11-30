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
  "\\begin{align*}&\\text{Solution:}\\\\&\\text{Laplace transform of }(1+ \\cos 2t)\\\\&= \\int_0^\\infty e^{-st}(1+ \\cos 2t)dt\\end{align*}",
  "\\begin{align*}&= \\int_0^\\infty e^{-st}\\left(1+ \\frac{e^{2it}+e^{-2it}}{2}\\right)dt \\left[\\because \\cos at = \\frac{e^{iat}+e^{-iat}}{2}\\right]\\\\&= \\int_0^\\infty e^{-st}\\left(\\frac{2+e^{2it}+e^{-2it}}{2}\\right)dt\\end{align*}",
  "\\begin{align*}&= \\frac{1}{2}\\int_0^\\infty e^{-st}(2+e^{2it}+e^{-2it})dt\\\\&= \\frac{1}{2}\\int_0^\\infty [2e^{-st}+e^{-st}(e^{2it}+e^{-2it})]dt\\\\&= \\frac{1}{2}\\int_0^\\infty [2e^{-st}+e^{(-s+2i)t}+e^{(-s-2i)t}]dt\\end{align*}",
  "\\begin{align*}&= \\frac{1}{2}\\left[\\frac{2e^{-st}}{-s}+\\frac{e^{(-s+2i)t}}{-s+2i}+\\frac{e^{(-s-2i)t}}{-s-2i}\\right]_0^\\infty\\\\&= \\frac{1}{2}\\left[\\left(\\frac{-2}{s}\\right)+\\frac{1}{-s+2i}(0-1)+\\frac{1}{-s-2i}(0-1)\\right]\\end{align*}",
  "\\begin{align*}&= \\frac{1}{2}\\left[\\frac{2}{s}+\\frac{1}{s-2i}+\\frac{1}{s+2i}\\right]\\\\&= \\frac{1}{2}\\left[\\frac{2}{s}+\\frac{s+2i}{(s-2i)(s+2i)}\\right]\\\\&= \\frac{1}{2}\\left[\\frac{2}{s}+\\frac{2s}{s^2-(2i)^2}\\right]\\end{align*}",
  "\\begin{align*}&= \\frac{1}{2}\\left[\\frac{2}{s}+\\frac{2s}{s^2+4}\\right]\\\\&= \\frac{1}{s}+\\frac{s}{s^2+4}\\\\&= \\frac{s^2+4+s^2}{s(s^2+4)}\\\\&= \\frac{2s^2+4}{s(s^2+4)}\\end{align*}",
]

export function ProblemOneSlide() {
  const [currentPage, setCurrentPage] = useState(0)
  const totalPages = solutionSteps.length + 1 // +1 for the initial problem statement

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages)
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
        <AnimatedTitle variant="gradient" className="text-center text-5xl mb-8">
          Problem Solution
        </AnimatedTitle>

        <Card className="bg-black/40 backdrop-blur-md border-white/10">
          <CardContent className="p-8">
            {currentPage === 0 ? (
              <SlideTransition direction="left" delay={0.2}>
                <div className="text-3xl text-white mb-8">Find the Laplace transform of <InlineMath>{`(1+ \\cos 2t)`}</InlineMath>.</div>
              </SlideTransition>
            ) : (
              <SlideTransition direction="left" delay={0.2}>
                <BlockMath>{solutionSteps[currentPage - 1]}</BlockMath>
              </SlideTransition>
            )}
          </CardContent>
        </Card>

        {currentPage === totalPages - 1 && (
          <SlideTransition direction="up" delay={0.4}>
            <Card className="bg-black/40 backdrop-blur-md border-white/10">
              <CardContent className="p-8">
                <div className="text-2xl text-white mb-4">The answer is:</div>
                <BlockMath>{`\\frac{2s^2+4}{s(s^2+4)}`}</BlockMath>
              </CardContent>
            </Card>
          </SlideTransition>
        )}

        <div className="flex justify-center mt-8">
          <Button
            onClick={nextPage}
            className="group bg-primary/20 hover:bg-primary/30 text-white text-xl py-3 px-6"
          >
            {currentPage === totalPages - 1 ? "Restart" : "Next"}
            <ChevronRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </motion.div>
    </div>
  )
}

