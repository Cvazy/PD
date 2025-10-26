"use client";

import { motion } from "framer-motion";
import { ArrowRight, QrCode } from "lucide-react";

export default function CTASection() {
  return (
    <section
      id="start"
      className="relative py-32 overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 dark:from-blue-900 dark:via-purple-900 dark:to-pink-900"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-white"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Как начать пользоваться?
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-white/95 leading-relaxed">
              Просто отсканируйте QR-код или нажмите кнопку ниже — и ваш
              персональный помощник уже в Telegram.
            </p>

            <div className="space-y-6 mb-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="flex items-start space-x-4"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center font-bold text-lg text-white">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    Откройте бота
                  </h3>
                  <p className="text-white/90">
                    Отсканируйте QR-код или перейдите по ссылке
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="flex items-start space-x-4"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center font-bold text-lg text-white">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    Заполните данные
                  </h3>
                  <p className="text-white/90">
                    Укажите вашу группу и академические долги
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="flex items-start space-x-4"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center font-bold text-lg text-white">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    Получайте напоминания
                  </h3>
                  <p className="text-white/90">
                    Бот будет следить за дедлайнами и подсказывать
                  </p>
                </div>
              </motion.div>
            </div>

            <motion.a
              href="https://t.me/bot"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group inline-flex items-center space-x-2 px-8 py-4 bg-white text-purple-600 hover:text-purple-700 rounded-full font-bold text-lg shadow-2xl hover:shadow-white/50 transition-all"
            >
              <span>Перейти в бота</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>

          {/* QR Code */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center lg:justify-end"
          >
            <motion.div
              whileHover={{ scale: 1.05, rotate: 3 }}
              className="relative"
            >
              {/* QR Code Container */}
              <div className="relative p-8 bg-white rounded-3xl shadow-2xl">
                <div className="w-64 h-64 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center">
                  <QrCode className="w-48 h-48 text-gray-400" />
                </div>

                {/* Label */}
                <div className="mt-6 text-center">
                  <p className="text-gray-900 font-bold text-lg">
                    Сканируй и начинай!
                  </p>
                  <p className="text-gray-600 text-sm">
                    QR-код для перехода в бота
                  </p>
                </div>
              </div>

              {/* Decorative Elements */}
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
                className="absolute -inset-4 bg-white/30 rounded-3xl blur-2xl -z-10"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
