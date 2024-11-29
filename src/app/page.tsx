"use client"

import { useState, useEffect } from "react"
import { PresentationLayout } from "@/components/presentation-layout"
import { motion } from "framer-motion"
import { courseTeacher, teamMembers } from "@/data/team"
import { PresenterCard } from "@/components/presenter-card"
import { useNavigation } from "@/hooks/use-navigation"
import { useSoundEffect } from "@/hooks/use-sound-effect"
import { PresenterNotes } from "@/components/presenter-notes"

// Import slides
import { OpeningSlide } from "./slides/opening"
import { TeamIntroSlide } from "./slides/team-intro"
import { ContentsSlide } from "./slides/contents"
import { DefinitionSlide } from "./slides/definition"
import { ApplicationsSlide } from "./slides/applications"
import { FormulaOneSlide } from "./slides/formula-one"
import { FormulaTwoSlide } from "./slides/formula-two"
import { ProblemOneSlide } from "./slides/problem-one"
import { ProblemTwoSlide } from "./slides/problem-two"
import { AdvantagesSlide } from "./slides/advantages"
import { DisadvantagesSlide } from "./slides/disadvantages"
import { EndingSlide } from "./slides/ending"

export default function PresentationPage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const playTransition = useSoundEffect()

  // Example presenter notes
  const presenterNotes = [
    "Welcome to the presentation",
    "Use arrow keys to navigate",
    "Press 'F' for fullscreen",
    "Click the notes icon for more information"
  ]

  const slides = [
    <OpeningSlide key="opening" />,
    <TeamIntroSlide key="team" />,
    <ContentsSlide key="contents" />,
    <DefinitionSlide key="definition" />,
    <ApplicationsSlide key="applications" />,
    <FormulaOneSlide key="formula1" />,
    <FormulaTwoSlide key="formula2" />,
    <ProblemOneSlide key="problem1" />,
    <ProblemTwoSlide key="problem2" />,
    <AdvantagesSlide key="advantages" />,
    <DisadvantagesSlide key="disadvantages" />,
    <EndingSlide key="ending" />
  ]

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      playTransition()
      setCurrentSlide(currentSlide + 1)
    }
  }

  const handlePrev = () => {
    if (currentSlide > 0) {
      playTransition()
      setCurrentSlide(currentSlide - 1)
    }
  }

  const swipeHandlers = useNavigation(
    currentSlide,
    slides.length,
    handleNext,
    handlePrev
  )

  // Add keyboard shortcuts for presentation mode
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'f') {
        document.documentElement.requestFullscreen()
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [])

  // Prevent scrolling in presentation mode
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  return (
    <>
      <div {...swipeHandlers} className="bg-gradient-to-br from-background to-muted">
        <PresentationLayout
          totalSlides={slides.length}
          currentSlide={currentSlide}
          onNext={handleNext}
          onPrev={handlePrev}
        >
          {slides[currentSlide]}
        </PresentationLayout>
      </div>
      <PresenterNotes notes={presenterNotes} />
    </>
  )
}

