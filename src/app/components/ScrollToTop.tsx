'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUp } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      // Используем scrollY вместо устаревшего pageYOffset
      const scrolled = window.scrollY || window.pageYOffset
      if (scrolled > 500) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    // Проверяем сразу при монтировании
    toggleVisibility()

    window.addEventListener('scroll', toggleVisibility, { passive: true })

    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          style={{ 
            position: 'fixed',
            bottom: '2rem',
            right: '2rem',
            willChange: 'transform, opacity'
          }}
          className="z-[9999] p-4 rounded-full bg-gradient-to-br from-primary-600 to-purple-600 text-white shadow-2xl hover:shadow-primary-500/50 transition-all pointer-events-auto"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-6 h-6" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}

