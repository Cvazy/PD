'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-gray-900">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        {/* Animated Mesh Gradient */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-400/30 via-transparent to-transparent animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-purple-400/30 via-transparent to-transparent animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        {/* Grid Background */}
        <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]" style={{
          backgroundImage: 'linear-gradient(rgba(99, 102, 241, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(99, 102, 241, 0.5) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}></div>
        
        {/* Floating Orbs - статичные */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 opacity-30 rounded-full blur-3xl hidden md:block"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400 opacity-20 rounded-full blur-3xl hidden md:block"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-400 opacity-20 rounded-full blur-3xl hidden md:block"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700 mb-8"
          >
            <Sparkles className="w-4 h-4 text-primary-600 dark:text-primary-400" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Твой помощник по РУПам
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
          >
            <span className="block text-gray-900 dark:text-white">Закрой</span>
            <span className="block gradient-text break-words">академические долги</span>
            <span className="block text-gray-900 dark:text-white">без стресса</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Ваш персональный помощник в закрытии академических задолженностей. 
            Все под контролем, без лишних стрессов и таймов.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4"
          >
            <motion.a
              href="#start"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('#start')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-primary-600 to-purple-600 text-white rounded-full font-semibold text-lg shadow-2xl hover:shadow-primary-500/50 transition-all overflow-hidden cursor-pointer"
            >
              <span className="relative z-10">Начать сейчас</span>
              <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-primary-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </motion.a>
            
            <motion.a
              href="#how"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('#how')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-2 px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-full font-semibold text-lg shadow-lg border border-gray-200 dark:border-gray-700 hover:border-primary-500 dark:hover:border-primary-500 transition-all cursor-pointer"
            >
              <span>Узнать больше</span>
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="mt-20 grid grid-cols-3 gap-4 max-w-3xl mx-auto sm:gap-8"
          >
            {[
              { value: '500+', label: 'Студентов' },
              { value: '95%', label: 'Успешность' },
              { value: '24/7', label: 'Поддержка' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="glass-effect rounded-2xl p-3 sm:p-6 md:p-8 overflow-visible"
              >
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2 leading-tight">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-gray-400 dark:bg-gray-600 rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

