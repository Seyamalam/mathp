"use client"

import { useEffect, useRef } from 'react'

export function useSoundEffect() {
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    audioRef.current = new Audio('/slide-transition.mp3') // You'll need to add this sound file
    audioRef.current.volume = 0.2
    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current = null
      }
    }
  }, [])

  const playTransition = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0
      audioRef.current.play()
    }
  }

  return playTransition
}

