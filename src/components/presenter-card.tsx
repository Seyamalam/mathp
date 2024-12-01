"use client"

import { TeamMember } from "@/types"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { motion } from "framer-motion"

interface PresenterCardProps {
  presenter: TeamMember
}

export function PresenterCard({ presenter }: PresenterCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5,
        delay: 0.2,
        type: "spring",
        stiffness: 100 
      }}
    >
      <Card className="w-full max-w-sm mx-auto bg-white/5 backdrop-blur-md border-white/10">
        <CardContent className="p-6">
          <motion.div 
            className="flex items-center space-x-4"
            initial={{ x: -20 }}
            animate={{ x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Avatar className="h-16 w-16 ring-2 ring-white/20 overflow-hidden">
                <AvatarImage 
                  src={presenter.image} 
                  alt={presenter.name}
                  className="object-cover w-full h-full"
                />
                <AvatarFallback className="bg-primary/20 text-foreground">
                  {presenter.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <h3 className="font-semibold text-foreground">{presenter.name}</h3>
              <p className="text-sm text-muted-foreground">{presenter.role}</p>
              <p className="text-sm text-primary">{presenter.section}</p>
            </motion.div>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

