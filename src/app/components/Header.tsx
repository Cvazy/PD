"use client";

import { motion } from "framer-motion";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "@/app/providers/ThemeProvider";
import { useState, useEffect } from "react";

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "О проекте", href: "#about" },
    { label: "Как работает", href: "#how" },
    { label: "Преимущества", href: "#benefits" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.a
            href={"/"}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center"
          >
            <span className="text-2xl font-bold gradient-text">Бот "РУПы"</span>
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.querySelector(item.href);
                  element?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-medium cursor-pointer"
              >
                {item.label}
              </motion.a>
            ))}
          </nav>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <motion.button
              whileHover={{ scale: 1.1, rotate: 180 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 transition-all"
              aria-label="Toggle theme"
            >
              {theme === "light" ? (
                <Moon className="w-5 h-5" />
              ) : (
                <Sun className="w-5 h-5" />
              )}
            </motion.button>

            {/* CTA Button */}
            <motion.a
              href="#start"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#start")
                  ?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:block px-6 py-2.5 bg-gradient-to-r from-primary-600 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all cursor-pointer"
            >
              Перейти в бота
            </motion.a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg text-gray-700 dark:text-gray-300"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{
          height: isMenuOpen ? "auto" : 0,
          opacity: isMenuOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800"
      >
        <div className="px-4 py-6 space-y-4">
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                setIsMenuOpen(false);
                const element = document.querySelector(item.href);
                element?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
              className="block text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-medium cursor-pointer"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#start"
            onClick={(e) => {
              e.preventDefault();
              setIsMenuOpen(false);
              document
                .querySelector("#start")
                ?.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
            className="block w-full text-center px-6 py-3 bg-gradient-to-r from-primary-600 to-purple-600 text-white rounded-full font-semibold cursor-pointer"
          >
            Перейти в бота
          </a>
        </div>
      </motion.div>
    </motion.header>
  );
}
