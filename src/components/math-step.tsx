"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BlockMath } from 'react-katex'
import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'

interface MathStepProps {
  steps: string[]
  descriptions?: string[]
}

export function MathStep({ steps, descriptions }: MathStepProps) {
  const [currentStep, setCurrentStep] = useState(0)

  const showNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    }
  }

  return (
    <div className="space-y-4">
      <div className="min-h-[200px] bg-white/10 backdrop-blur-sm rounded-lg p-6 shadow-lg">
        <AnimatePresence mode="wait">
          {steps.slice(0, currentStep + 1).map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, type: "spring" }}
              className="mb-4"
            >
              <div className="text-foreground">
                <BlockMath>{step}</BlockMath>
              </div>
              {descriptions?.[index] && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-sm text-muted-foreground mt-2"
                >
                  {descriptions[index]}
                </motion.p>
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      {currentStep < steps.length - 1 && (
        <div className="flex justify-center">
          <Button
            variant="outline"
            onClick={showNext}
            className="group bg-white/20 text-white hover:bg-white/30"
          >
            Next Step
            <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      )}
    </div>
  )
}

