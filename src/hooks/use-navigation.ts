"use client"

import { useEffect, useCallback } from 'react'
import { useSwipeable } from 'react-swipeable'

export function useNavigation(
  currentSlide: number,
  totalSlides: number,
  onNext: () => void,
  onPrev: () => void
) {
  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (event.key === 'ArrowRight' || event.key === 'Space') {
      onNext()
    } else if (event.key === 'ArrowLeft') {
      onPrev()
    }
  }, [onNext, onPrev])

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => {
      if (currentSlide < totalSlides - 1) onNext()
    },
    onSwipedRight: () => {
      if (currentSlide > 0) onPrev()
    },
    trackMouse: true
  })

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [handleKeyDown])

  return swipeHandlers
}

