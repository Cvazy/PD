'use client'

import { motion } from 'framer-motion'
import { Clock, Brain, AlertCircle } from 'lucide-react'

const problems = [
  {
    icon: Clock,
    title: 'Пропущенные дедлайны',
    description: 'Вы можете не успеть вовремя в спешке сдать работу и пропустить важные дедлайны.',
    color: 'from-red-500 to-orange-500',
  },
  {
    icon: Brain,
    title: 'Информационная перегрузка',
    description: 'Приходится держать в голове информацию по множеству разных предметов и требований.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: AlertCircle,
    title: 'Стресс и хаос',
    description: 'Постоянное напряжение от невозможности менять систематизировать материал за основной учебы.',
    color: 'from-blue-500 to-cyan-500',
  },
]

export default function ProblemsSection() {
  return (
    <section id="about" className="relative py-32 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        {/* Geometric Pattern */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        {/* Animated Circles */}
        <div className="absolute top-10 left-10 w-96 h-96 rounded-full bg-gradient-to-br from-red-500/10 to-orange-500/10 dark:from-red-500/20 dark:to-orange-500/20 blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-[32rem] h-[32rem] rounded-full bg-gradient-to-bl from-orange-500/10 to-yellow-500/10 dark:from-orange-500/20 dark:to-yellow-500/20 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 rounded-full bg-gradient-to-tr from-yellow-500/10 to-red-500/10 dark:from-yellow-500/20 dark:to-red-500/20 blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Diagonal Lines */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-gray-200 dark:via-gray-800 to-transparent opacity-50"></div>
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-gray-200 dark:via-gray-800 to-transparent opacity-50"></div>
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
            Что такое <span className="gradient-text">РУПы</span> и почему это проблема?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            РУП (Рабочая Учебная Программа) — это дисциплины, которые вы не закрыли, но 
            должны сдать. Они появляются при пропущенной аттестации или сдаче факультета.
          </p>
        </motion.div>

        {/* Problems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ y: -10 }}
              className="group relative will-change-transform"
            >
              {/* Card */}
              <div className="relative h-full p-8 rounded-3xl bg-white dark:bg-gray-800 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${problem.color} mb-6 shadow-lg`}
                >
                  <problem.icon className="w-8 h-8 text-white" />
                </motion.div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {problem.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {problem.description}
                </p>

                {/* Hover Effect */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${problem.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              </div>

              {/* Decorative Element */}
              <div className={`absolute -inset-1 rounded-3xl bg-gradient-to-br ${problem.color} opacity-0 group-hover:opacity-20 blur-xl transition-all duration-300 -z-10`}></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

