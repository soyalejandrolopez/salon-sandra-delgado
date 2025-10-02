'use client'

import { motion } from 'framer-motion'
import { FaWhatsapp, FaPhone } from 'react-icons/fa'

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/fondo.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <span className="block text-white">Sala de Belleza</span>
            <span className="block gradient-text-gold mt-2">Sandra Delgado</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Expertos en Tricología y Salud Capilar
          </motion.p>

          <motion.p
            className="text-base md:text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Una experiencia única y personalizada, basada en el conocimiento experto
            de la Tricología para el cuidado y bienestar de tu cabello.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <a
              href="https://wa.me/573122658896"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-black font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-gold-500/50"
            >
              <FaWhatsapp className="text-2xl" />
              <span>Agenda tu cita</span>
            </a>

            <a
              href="tel:+573122658896"
              className="group flex items-center gap-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 border border-gold-500/30 hover:border-gold-500"
            >
              <FaPhone className="text-xl" />
              <span>Llamar ahora</span>
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
        >
          <div className="w-6 h-10 border-2 border-gold-500 rounded-full flex justify-center p-1">
            <div className="w-1 h-3 bg-gold-500 rounded-full" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
