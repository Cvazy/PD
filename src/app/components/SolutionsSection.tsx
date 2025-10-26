'use client'

import { motion } from 'framer-motion'
import { MessageSquare, Bell, Lightbulb } from 'lucide-react'

const solutions = [
  {
    icon: MessageSquare,
    title: 'Ваш личный помощник в Telegram',
    description: 'Работает прямо в мессенджере, не нужно скачивать отдельное приложение. Все ваши долги и дедлайны в одном месте.',
    gradient: 'from-blue-600 to-cyan-600',
  },
  {
    icon: Bell,
    title: 'Напоминания о дедлайнах',
    description: 'Умная система уведомлений приблизит сдачи работы. Никаких пропусков и просроченных сроков.',
    gradient: 'from-purple-600 to-pink-600',
  },
  {
    icon: Lightbulb,
    title: 'Советы и поддержка',
    description: 'Получите практические рекомендации о том, как эффективно распределять силы и время. Вы будете уверены в своих силах и сроках.',
    gradient: 'from-orange-600 to-red-600',
  },
]

export default function SolutionsSection() {
  return (
    <section id="how" className="relative py-32 overflow-hidden bg-white dark:bg-gray-950">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        {/* Radial Gradient Background */}
        <div className="absolute inset-0 bg-gradient-radial from-blue-100/50 via-purple-100/30 to-transparent dark:from-blue-950/30 dark:via-purple-950/20 dark:to-transparent"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(99, 102, 241, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(99, 102, 241, 0.03) 1px, transparent 1px)',
          backgroundSize: '100px 100px',
        }}></div>
        
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-1/4 -left-48 w-[40rem] h-[40rem] bg-gradient-to-r from-blue-500/15 to-purple-500/15 dark:from-blue-500/25 dark:to-purple-500/25 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute bottom-1/4 -right-48 w-[40rem] h-[40rem] bg-gradient-to-r from-pink-500/15 to-orange-500/15 dark:from-pink-500/25 dark:to-orange-500/25 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Как наш бот <span className="gradient-text">решает</span> эти проблемы?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Мы прокачали все сложности, связанные с РУПами, в простой и понятный процесс
          </p>
        </motion.div>

        {/* Solutions List */}
        <div className="space-y-12">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className={`flex flex-col ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } items-center gap-12`}
            >
              {/* Icon Side */}
              <motion.div
                whileHover={{ scale: 1.05, rotate: 5 }}
                className="flex-shrink-0"
              >
                <div className={`relative p-12 rounded-3xl bg-gradient-to-br ${solution.gradient} shadow-2xl`}>
                  <solution.icon className="w-20 h-20 text-white" />
                  
                  {/* Glow Effect */}
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${solution.gradient} blur-xl opacity-50 -z-10`}></div>
                </div>
              </motion.div>

              {/* Content Side */}
              <div className="flex-1">
                <motion.div
                  whileHover={{ x: index % 2 === 0 ? 10 : -10 }}
                  className="glass-effect rounded-3xl p-8 md:p-12"
                >
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                    {solution.title}
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                    {solution.description}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

