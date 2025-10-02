'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { FaHome, FaCut, FaInfoCircle, FaPhone, FaBars, FaTimes, FaWhatsapp, FaInstagram } from 'react-icons/fa'

const navItems = [
  { name: 'Inicio', href: '#inicio', icon: FaHome },
  { name: 'Galería', href: '#galeria', icon: FaInstagram },
  { name: 'Servicios', href: '#servicios', icon: FaCut },
  { name: 'Nosotros', href: '#nosotros', icon: FaInfoCircle },
  { name: 'Contacto', href: '#contacto', icon: FaPhone },
]

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('inicio')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Detect active section
      const sections = navItems.map(item => item.href.substring(1))
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-black/95 backdrop-blur-lg shadow-lg border-b border-gold-500/20'
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.a
              href="#inicio"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('#inicio')
              }}
              className="relative"
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src="/images/logo.png"
                alt="Sandra Delgado Logo"
                width={180}
                height={60}
                className="h-12 md:h-14 w-auto"
                priority
              />
            </motion.a>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection(item.href)
                  }}
                  className={`text-sm font-medium transition-colors duration-200 hover:text-gold-400 ${
                    activeSection === item.href.substring(1)
                      ? 'text-gold-500'
                      : 'text-gray-300'
                  }`}
                >
                  {item.name}
                </a>
              ))}
              <a
                href="https://wa.me/573122658896"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-black font-semibold px-6 py-2.5 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                <FaWhatsapp className="text-lg" />
                <span>Agendar</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-white hover:text-gold-400 transition-colors"
            >
              {isMobileMenuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-black/98 backdrop-blur-lg border-b border-gold-500/20"
            >
              <div className="container mx-auto px-4 py-6 space-y-4">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToSection(item.href)
                    }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`flex items-center gap-3 p-3 rounded-lg transition-colors ${
                      activeSection === item.href.substring(1)
                        ? 'bg-gold-500/20 text-gold-400'
                        : 'text-gray-300 hover:bg-gray-800'
                    }`}
                  >
                    <item.icon className="text-xl" />
                    <span className="font-medium">{item.name}</span>
                  </motion.a>
                ))}
                <a
                  href="https://wa.me/573122658896"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-gradient-to-r from-gold-500 to-gold-600 text-black font-semibold px-6 py-3 rounded-lg mt-4"
                >
                  <FaWhatsapp className="text-xl" />
                  <span>Agendar Cita</span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Mobile Bottom Navigation */}
      <motion.nav
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-lg border-t border-gold-500/20 pb-safe"
      >
        <div className="grid grid-cols-5 gap-1 px-2 py-3">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => {
                e.preventDefault()
                scrollToSection(item.href)
              }}
              className={`flex flex-col items-center gap-1 py-2 px-1 rounded-lg transition-all duration-200 ${
                activeSection === item.href.substring(1)
                  ? 'text-gold-400'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <item.icon
                className={`text-xl transition-transform duration-200 ${
                  activeSection === item.href.substring(1) ? 'scale-110' : ''
                }`}
              />
              <span className="text-xs font-medium">{item.name}</span>
              {activeSection === item.href.substring(1) && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute -bottom-1 w-8 h-1 bg-gold-500 rounded-full"
                />
              )}
            </a>
          ))}
        </div>
      </motion.nav>

      {/* Floating WhatsApp Button */}
      <motion.a
        href="https://wa.me/573122658896"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: 'spring' }}
        className="hidden md:flex fixed bottom-8 right-8 z-40 items-center justify-center w-16 h-16 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-110"
        whileHover={{ rotate: 360 }}
        whileTap={{ scale: 0.9 }}
      >
        <FaWhatsapp className="text-3xl" />
      </motion.a>
    </>
  )
}
