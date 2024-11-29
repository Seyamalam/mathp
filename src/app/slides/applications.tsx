"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { PresenterCard } from "@/components/presenter-card"
import { teamMembers } from "@/data/team"
import { AnimatedTitle } from "@/components/animated-title"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronRight, ChevronLeft } from 'lucide-react'
import { Cog, Zap, Hammer, Calculator, BarChart, Waves, Target, Radio, Aperture, Activity, Vibrate, Cpu, FlaskConical, DollarSign, Globe, Star } from 'lucide-react'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
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

const applications = [
  { title: "Control Systems", description: "Widely used to analyze and design control systems. It converts time-domain signals into frequency-domain signals, making it easier to analyze and design the system's behaviour.", icon: Cog },
  { title: "Electrical Circuits", description: "Used to analyze and design electrical circuits. It helps to solve differential equations related to circuits and determine their stability and transient response.", icon: Zap },
  { title: "Mechanics", description: "Used in mechanics to analyze the behaviour of mechanical systems, such as structures' vibrations, the pendulum's motion, and system dynamics.", icon: Hammer },
  { title: "Differential Equations", description: "Used to solve partial differential equations. It transforms differential equations into algebraic equations, which are easier to solve.", icon: Calculator },
  { title: "Probability Theory", description: "Used in probability theory to derive the moment-generating function of a probability distribution. The moment-generating function is used to find moments of a distribution, which are useful in statistical analysis.", icon: BarChart },
  { title: "Signal Processing", description: "Used in analyzing signals and systems, such as filtering, modulation, and system stability. It helps study linear time-invariant systems in the frequency domain.", icon: Waves },
  { title: "Control Theory", description: "Helps design and stabilize feedback systems, compute transfer functions, and analyze system performance under various inputs.", icon: Target },
  { title: "Communication Systems", description: "Used to model and analyze communication channels, encoding, decoding, and noise reduction processes.", icon: Radio },
  { title: "Optics and Wave Propagation", description: "Solves wave equations and models light propagation, reflection, and refraction.", icon: Aperture },
  { title: "Biomedical Engineering", description: "Models physiological systems like blood flow and drug delivery, and analyzes medical imaging signals such as MRI and CT scans.", icon: Activity },
  { title: "Vibration Analysis", description: "Analyzes oscillatory systems, such as beams, plates, and other structures under dynamic loads.", icon: Vibrate },
  { title: "Dynamic Systems Simulation", description: "Used in simulating the behavior of complex systems, including robotics, aerospace systems, and automotive controls.", icon: Cpu },
  { title: "Chemical Engineering", description: "Solves reaction kinetics, diffusion problems, and reactor dynamics.", icon: FlaskConical },
  { title: "Financial Engineering", description: "Models interest rates, options pricing, and risk assessment, especially in stochastic differential equations.", icon: DollarSign },
  { title: "Geophysics", description: "Analyzes seismic waveforms, heat flow within the Earth, and other geophysical phenomena.", icon: Globe },
  { title: "Astronomy and Astrophysics", description: "Solves problems involving celestial mechanics, gravitational wave analysis, and stellar dynamics.", icon: Star },
]

export function ApplicationsSlide() {
  const [currentPage, setCurrentPage] = useState(0)
  const applicationsPerPage = 4
  const totalPages = Math.ceil(applications.length / applicationsPerPage)

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages)
  }

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages)
  }

  const currentApplications = applications.slice(
    currentPage * applicationsPerPage,
    (currentPage + 1) * applicationsPerPage
  )

  return (
    <div className="w-full max-w-7xl mx-auto space-y-8">
      <PresenterCard presenter={teamMembers[1]} />
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-8"
      >
        <AnimatedTitle className="text-center text-white">
          Real World Applications
        </AnimatedTitle>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
        >
          <AnimatePresence mode="wait">
            {currentApplications.map((app, index) => (
              <motion.div
                key={`${currentPage}-${index}`}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, y: -20 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Card className="bg-white/5 backdrop-blur-md border-white/10 h-full">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="p-2 bg-primary/20 rounded-lg">
                        <app.icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-semibold text-lg text-white">{app.title}</h3>
                    </div>
                    <p className="text-gray-300 flex-grow text-sm">{app.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        <div className="flex justify-center mt-4 space-x-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === currentPage ? 'bg-primary' : 'bg-gray-600'
              }`}
            />
          ))}
        </div>
        <div className="flex justify-center mt-8 space-x-4">
          <Button
            variant="outline"
            onClick={prevPage}
            className="group bg-white/10 text-white hover:bg-white/20 text-lg px-6 py-3"
          >
            <ChevronLeft className="mr-2 h-5 w-5 group-hover:-translate-x-1 transition-transform" />
            Prev
          </Button>
          <Button
            variant="outline"
            onClick={nextPage}
            className="group bg-white/10 text-white hover:bg-white/20 text-lg px-6 py-3"
          >
            Next
            <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </motion.div>
    </div>
  )
}

