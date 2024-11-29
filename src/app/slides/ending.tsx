"use client"

import { motion } from "framer-motion"
import { PresenterCard } from "@/components/presenter-card"
import { teamMembers } from "@/data/team"
import { AnimatedTitle } from "@/components/animated-title"
import { Card, CardContent } from "@/components/ui/card"
import { Brain, Lightbulb, Target, Rocket } from 'lucide-react'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.2
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

const conclusions = [
  {
    icon: Brain,
    title: "Powerful Tool",
    description: "Essential mathematical technique for solving differential equations"
  },
  {
    icon: Lightbulb,
    title: "Wide Applications",
    description: "Used across various fields of engineering and physics"
  },
  {
    icon: Target,
    title: "Problem Solving",
    description: "Simplifies complex mathematical operations effectively"
  },
  {
    icon: Rocket,
    title: "Future Scope",
    description: "Continues to evolve with modern applications"
  }
]

export function EndingSlide() {
  return (
    <div className="w-full max-w-4xl mx-auto space-y-10">
      <PresenterCard presenter={teamMembers[7]} />
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-12"
      >
        <AnimatedTitle className="text-center text-white">Conclusion</AnimatedTitle>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
        >
          {conclusions.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Card className="backdrop-blur-sm bg-white/10 border-white/20 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-primary/20 rounded-lg">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-white">{item.title}</h3>
                      <p className="text-gray-300">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="text-center space-y-4"
        >
          <h2 className="text-2xl font-semibold text-white">Thank You for Your Attention</h2>
          <p className="text-gray-300">Questions & Discussion</p>
        </motion.div>
      </motion.div>
    </div>
  )
}

