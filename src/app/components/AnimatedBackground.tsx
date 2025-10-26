'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function AnimatedBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isMobile, setIsMobile] = useState(true) // По умолчанию мобильная версия
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    // Определяем мобильное устройство
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)

    // Mouse follow только на десктопе
    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth > 768) {
        setMousePosition({ x: e.clientX, y: e.clientY })
      }
    }
    
    if (window.innerWidth > 768) {
      window.addEventListener('mousemove', handleMouseMove)
    }
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', checkMobile)
    }
  }, [])

  // Не рендерим пока не смонтировано (избегаем SSR hydration mismatch)
  if (!mounted) {
    return null
  }

  // На мобилках не показываем вообще ничего - только статичные фоны в секциях
  if (isMobile) {
    return null
  }

  return (
    <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none">
      {/* Animated Grid */}
      <div className="absolute inset-0 opacity-20 dark:opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(99, 102, 241, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(99, 102, 241, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Moving Mouse Follow Gradient */}
      <motion.div
        animate={{
          x: mousePosition.x - 250,
          y: mousePosition.y - 250,
        }}
        transition={{
          type: 'spring',
          damping: 30,
          stiffness: 200,
        }}
        className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl"
      />

      {/* Floating Orbs */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            x: [0, 100, 0, -100, 0],
            y: [0, -100, -50, 50, 0],
            scale: [1, 1.2, 1, 0.8, 1],
          }}
          transition={{
            duration: 20 + i * 5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 2,
          }}
          className="absolute rounded-full blur-3xl opacity-30"
          style={{
            width: `${150 + i * 50}px`,
            height: `${150 + i * 50}px`,
            left: `${i * 20}%`,
            top: `${i * 15}%`,
            background:
              i % 3 === 0
                ? 'radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, transparent 70%)'
                : i % 3 === 1
                ? 'radial-gradient(circle, rgba(168, 85, 247, 0.4) 0%, transparent 70%)'
                : 'radial-gradient(circle, rgba(236, 72, 153, 0.4) 0%, transparent 70%)',
          }}
        />
      ))}

      {/* Animated Dots Pattern - убрано для избежания hydration mismatch */}

      {/* Radial Gradient Vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 50% 50%, transparent 0%, rgba(255,255,255,0.5) 100%)',
        }}
      />
      <div
        className="absolute inset-0 dark:opacity-100 opacity-0"
        style={{
          background:
            'radial-gradient(circle at 50% 50%, transparent 0%, rgba(0,0,0,0.5) 100%)',
        }}
      />
    </div>
  )
}

