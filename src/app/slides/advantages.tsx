"use client"

import { motion } from "framer-motion"
import { PresenterCard } from "@/components/presenter-card"
import { teamMembers } from "@/data/team"
import { AnimatedTitle } from "@/components/animated-title"
import { Card, CardContent } from "@/components/ui/card"
import { Lightbulb, Zap, ArrowRight, Infinity, Layers, BarChart } from 'lucide-react'

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

const advantages = [
  {
    icon: Lightbulb,
    title: "Effective Tool for Engineers",
    description: "Plays a crucial role in engineering disciplines by enabling engineers to analyze complex systems and understand dynamic behavior."
  },
  {
    icon: Zap,
    title: "Enhanced Problem-Solving",
    description: "Transforms complex differential equations into simpler algebraic equations, streamlining the problem-solving process."
  },
  {
    icon: ArrowRight,
    title: "Simplifies Complex Equations",
    description: "Converts complicated differential equations into manageable algebraic forms, vital for working with intricate models."
  },
  {
    icon: Infinity,
    title: "Integrates Initial Conditions Easily",
    description: "Allows straightforward incorporation of initial conditions, beneficial for solving real-world engineering challenges."
  },
  {
    icon: Layers,
    title: "Versatile in Applications",
    description: "Applicable in various disciplines including engineering, physics, control theory, and signal processing."
  },
  {
    icon: BarChart,
    title: "Stability and System Analysis",
    description: "Provides tools to assess stability criteria and system responses, ensuring designs meet performance specifications."
  }
]

export function AdvantagesSlide() {
  return (
    <div className="w-full max-w-6xl mx-auto space-y-10">
      <PresenterCard presenter={teamMembers[6]} />
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-8"
      >
        <AnimatedTitle className="text-center text-white">Advantages of Laplace Transform</AnimatedTitle>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
        >
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="h-full"
            >
              <Card className="h-full bg-white/10 backdrop-blur-sm border-white/20 shadow-lg">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-2 bg-primary/20 rounded-full">
                      <advantage.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg text-white">{advantage.title}</h3>
                  </div>
                  <p className="text-gray-200 flex-grow text-base">{advantage.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}

