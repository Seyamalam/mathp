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

export function DefinitionSlide() {
  const [currentPage, setCurrentPage] = useState(0)
  const totalPages = 2

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages)
  }

  return (
    <div className="w-full max-w-7xl mx-auto space-y-8">
      <PresenterCard presenter={teamMembers[0]} />
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-8"
      >
        <AnimatedTitle variant="gradient" className="text-center text-5xl mb-8">
          Introduction to Laplace Transform
        </AnimatedTitle>

        {currentPage === 0 && (
          <SlideTransition direction="left" delay={0.2}>
            <Card className="bg-black/40 backdrop-blur-md border-white/10">
              <CardContent className="p-8">
                <h3 className="text-3xl font-semibold mb-6 text-white">What is Laplace Transform?</h3>
                <p className="text-2xl leading-relaxed text-white/90 mb-8">
                  A mathematical tool to transform a time-domain function <InlineMath>{"f(t)"}</InlineMath> into a complex frequency-domain function <InlineMath>{"F(s)"}</InlineMath>.
                </p>
                <h4 className="text-3xl font-semibold mt-8 mb-6 text-white">Purpose</h4>
                <p className="text-2xl leading-relaxed text-white/90">
                  Simplifies the analysis of linear systems by converting differential equations into algebraic equations.
                </p>
              </CardContent>
            </Card>
          </SlideTransition>
        )}

        {currentPage === 1 && (
          <SlideTransition direction="right" delay={0.2}>
            <div className="grid grid-cols-3 gap-6">
              <Card className="col-span-2 bg-black/40 backdrop-blur-md border-white/10">
                <CardContent className="p-8">
                <h3 className="text-3xl font-semibold mb-6 text-white">Formula</h3>
                  <p className="text-2xl leading-relaxed text-white/90 mb-6">
                    Let <InlineMath>{"f(t)"}</InlineMath> be function defined for all positive values of t, then
                  </p>
                  <div className="flex justify-center mb-6">
                    <BlockMath>{"F(s) = \\int_0^{\\infty} e^{-st}f(t)dt"}</BlockMath>
                  </div>
                  <p className="text-2xl leading-relaxed text-white/90 mb-6">
                    Provided the integral exists, is called the Laplace Transformation of <InlineMath>{"f(t)"}</InlineMath>. It is denoted as
                  </p>
                  <div className="flex justify-center mb-8">
                    <BlockMath>{"L[f(t)] = F(s) = \\int_0^{\\infty} e^{-st}f(t)dt"}</BlockMath>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-black/40 backdrop-blur-md border-white/10">
                <CardContent className="p-8">
                  <h3 className="text-3xl font-semibold mb-6 text-white">Variables</h3>
                  <ul className="space-y-6 text-white/90 text-xl">
                    <li className="flex flex-col">
                      <span className="text-3xl font-bold text-primary mb-2">t:</span>
                      <span>Time variable (seconds).</span>
                    </li>
                    <li className="flex flex-col">
                      <span className="text-3xl font-bold text-primary mb-2">s:</span>
                      <span>Complex frequency variable <InlineMath>{"(s = \\sigma + j\\omega)"}</InlineMath>.</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </SlideTransition>
        )}

        <div className="flex justify-center mt-8">
          <Button
            onClick={nextPage}
            className="group bg-primary/20 hover:bg-primary/30 text-white text-xl py-3 px-6"
          >
            Next
            <ChevronRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </motion.div>
    </div>
  )
}

