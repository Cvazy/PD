"use client";

import { motion } from "framer-motion";
import { Mail, MessageCircle } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-b from-transparent to-gray-100 dark:to-gray-900 py-16 mt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold gradient-text mb-4">
              Бот "РУПы"
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              Твой личный помощник в закрытии академических долгов. Все под
              контролем, без стресса и базара.
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Навигация
            </h4>
            <ul className="space-y-2">
              {[
                { label: "О проекте", href: "#about" },
                { label: "Как работает", href: "#how" },
                { label: "Преимущества", href: "#benefits" },
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .querySelector(item.href)
                        ?.scrollIntoView({
                          behavior: "smooth",
                          block: "start",
                        });
                    }}
                    className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors cursor-pointer"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Контакты
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://t.me/bot"
                  className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Telegram</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:support@rupybot.ru"
                  className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span>Email</span>
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="pt-8 border-t border-gray-200 dark:border-gray-800"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-600 dark:text-gray-400 text-sm text-center md:text-left">
              © {currentYear} Московский Политех. Все права защищены.
            </p>
            <div className="flex space-x-6 text-sm">
              <a
                href="#"
                className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                Политика конфиденциальности
              </a>
              <a
                href="#"
                className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                Условия использования
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-30">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary-500 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
      </div>
    </footer>
  );
}
