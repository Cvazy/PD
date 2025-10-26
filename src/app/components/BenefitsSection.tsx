'use client'

import { motion } from 'framer-motion'
import { Target, Heart, Zap } from 'lucide-react'

const benefits = [
  {
    icon: Target,
    title: 'Всё под контролем',
    description: 'Все ваши долги, дедлайны и deadlines — в чётком системе. Больше никого не контролируете.',
    color: 'blue',
  },
  {
    icon: Heart,
    title: 'Спокойствие и уверенность',
    description: 'Вы точно знаете, что и когда сдавать. Исчезает постоянный стресс от неопределённости.',
    color: 'purple',
  },
  {
    icon: Zap,
    title: 'Экономия времени и сил',
    description: 'Бот берет себя рутину напоминаний и систематизации. Вы заметесь учебой, а не организацией.',
    color: 'pink',
  },
]

export default function BenefitsSection() {
  return (
    <section id="benefits" className="relative py-32 overflow-hidden bg-gradient-to-b from-blue-50/50 via-purple-50/30 to-pink-50/50 dark:from-blue-950/20 dark:via-purple-950/20 dark:to-pink-950/20">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10">
        {/* Hexagon Pattern */}
        <div className="absolute inset-0 opacity-[0.15] dark:opacity-[0.08]">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(99, 102, 241, 0.3) 1px, transparent 0)',
            backgroundSize: '48px 48px',
          }}></div>
        </div>
        
        {/* Striped Pattern */}
        <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, rgba(99, 102, 241, 0.5) 0px, rgba(99, 102, 241, 0.5) 1px, transparent 1px, transparent 20px)',
        }}></div>
        
        {/* Floating Gradient Blobs */}
        <div className="absolute top-0 right-0 w-[35rem] h-[35rem] rounded-full bg-gradient-to-br from-blue-400/20 to-cyan-400/20 dark:from-blue-600/30 dark:to-cyan-600/30 blur-3xl animate-float"></div>
        <div className="absolute bottom-0 left-0 w-[35rem] h-[35rem] rounded-full bg-gradient-to-tr from-purple-400/20 to-pink-400/20 dark:from-purple-600/30 dark:to-pink-600/30 blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[30rem] h-[30rem] rounded-full bg-gradient-to-br from-indigo-400/15 to-purple-400/15 dark:from-indigo-600/25 dark:to-purple-600/25 blur-3xl animate-pulse"></div>
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
            Что вы <span className="gradient-text">получите?</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Наши преимущества для вашего комфорта и успеха
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                type: 'spring',
                stiffness: 100,
              }}
              className="group relative"
            >
              {/* Card */}
              <motion.div
                whileHover={{ y: -15 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="relative h-full"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-3xl shadow-xl group-hover:shadow-2xl transition-all duration-300"></div>
                
                <div className="relative p-8 rounded-3xl backdrop-blur-sm">
                  {/* Animated Icon Container */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="mb-6 inline-block"
                  >
                    <div className={`p-5 rounded-2xl bg-gradient-to-br ${
                      benefit.color === 'blue' ? 'from-blue-500 to-blue-600' :
                      benefit.color === 'purple' ? 'from-purple-500 to-purple-600' :
                      'from-pink-500 to-pink-600'
                    } shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                      <benefit.icon className="w-10 h-10 text-white" />
                    </div>
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {benefit.description}
                  </p>

                  {/* Decorative Corner */}
                  <div className="absolute top-4 right-4 w-20 h-20 opacity-10">
                    <benefit.icon className="w-full h-full text-gray-900 dark:text-white" />
                  </div>
                </div>

                {/* Glow Effect */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className={`absolute -inset-1 bg-gradient-to-br ${
                    benefit.color === 'blue' ? 'from-blue-500 to-blue-600' :
                    benefit.color === 'purple' ? 'from-purple-500 to-purple-600' :
                    'from-pink-500 to-pink-600'
                  } rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300 -z-10`}
                ></motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Additional Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <div className="inline-block glass-effect rounded-3xl p-8 md:p-12">
            <p className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
              Присоединяйтесь к тысячам студентов,
            </p>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400">
              которые уже закрыли свои долги без стресса
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

