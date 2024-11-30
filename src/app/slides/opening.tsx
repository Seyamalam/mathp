"use client"

import { motion } from "framer-motion"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
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

export function OpeningSlide() {
  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-[80vh] space-y-12"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="text-center space-y-6"
        variants={itemVariants}
      >
        <motion.h1 
          className="text-6xl font-bold tracking-tighter sm:text-7xl md:text-8xl bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          Laplace Transformation
        </motion.h1>
        <motion.div
          variants={itemVariants}
          className="space-y-3"
        >
          <p className="text-6xl text-gray-300">Mathematics 4</p>
          <p className="text-5xl text-gray-400">40th Batch 4th Semester Section A</p>
          <p className="text-4xl text-gray-400">ID: 230240003, 05, 09, 11, 12, 16, 22, 24</p>
          <p className="text-3xl text-gray-400">Department of Computer Science & Engineering</p>
          <p className="text-2xl text-gray-400">BGC Trust Univercity Bangladesh</p>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

