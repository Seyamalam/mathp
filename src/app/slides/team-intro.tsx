"use client"

import { motion } from "framer-motion"
import { PresenterCard } from "@/components/presenter-card"
import { teamMembers, courseTeacher } from "@/data/team"
import { AnimatedTitle } from "@/components/animated-title"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100
    }
  }
}

export function TeamIntroSlide() {
  return (
    <div className="w-full max-w-7xl mx-auto space-y-10">
      <AnimatedTitle className="text-center mb-8 text-white">Meet Our Team & Instructor</AnimatedTitle>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <motion.div variants={itemVariants} className="col-span-full">
          <PresenterCard presenter={courseTeacher} />
        </motion.div>
        {teamMembers.map((member) => (
          <motion.div key={member.id} variants={itemVariants}>
            <PresenterCard presenter={member} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

