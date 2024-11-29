"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageSquare } from 'lucide-react'
import { Button } from "@/components/ui/button"

interface PresenterNotesProps {
  notes: string[]
}

export function PresenterNotes({ notes }: PresenterNotesProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Button
        variant="outline"
        size="icon"
        className="fixed bottom-4 right-4 z-50 bg-background/80 backdrop-blur-sm"
        onClick={() => setIsOpen(!isOpen)}
      >
        <MessageSquare className="h-4 w-4" />
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-20 right-4 w-80 bg-background/95 backdrop-blur-sm rounded-lg shadow-lg border p-4 z-50"
          >
            <h3 className="font-semibold mb-2">Presenter Notes</h3>
            <ul className="space-y-2 text-sm">
              {notes.map((note, index) => (
                <li key={index} className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>{note}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

