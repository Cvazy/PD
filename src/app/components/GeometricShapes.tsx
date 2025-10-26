'use client'

import { motion } from 'framer-motion'

export default function GeometricShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Rotating Squares */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
        className="absolute -top-20 -left-20 w-40 h-40 border-2 border-primary-500/20 dark:border-primary-400/10"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
        className="absolute top-1/4 right-10 w-32 h-32 border-2 border-purple-500/20 dark:border-purple-400/10 rounded-lg"
      />
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        className="absolute bottom-20 left-1/4 w-24 h-24 border-2 border-pink-500/20 dark:border-pink-400/10"
      />

      {/* Floating Lines */}
      <motion.div
        animate={{
          y: [0, -50, 0],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-1/3 left-10 w-1 h-40 bg-gradient-to-b from-transparent via-blue-500/30 to-transparent"
      />
      <motion.div
        animate={{
          y: [0, 50, 0],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
        className="absolute top-1/2 right-20 w-1 h-60 bg-gradient-to-b from-transparent via-purple-500/30 to-transparent"
      />

      {/* Pulsing Circles */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-1/4 left-1/3 w-64 h-64 rounded-full border border-primary-500/20 dark:border-primary-400/10"
      />
      <motion.div
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
        className="absolute bottom-1/4 right-1/3 w-80 h-80 rounded-full border border-purple-500/20 dark:border-purple-400/10"
      />

      {/* Diagonal Lines */}
      <motion.div
        animate={{
          x: [-200, 200],
          opacity: [0, 0.5, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute top-0 left-0 w-0.5 h-screen bg-gradient-to-b from-transparent via-blue-500/20 to-transparent transform rotate-12"
      />
      <motion.div
        animate={{
          x: [200, -200],
          opacity: [0, 0.5, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
          delay: 5,
        }}
        className="absolute top-0 right-0 w-0.5 h-screen bg-gradient-to-b from-transparent via-purple-500/20 to-transparent transform -rotate-12"
      />
    </div>
  )
}

