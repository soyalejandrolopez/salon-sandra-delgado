'use client'

import { motion } from 'framer-motion'
import { FaBullseye, FaEye, FaQuoteLeft } from 'react-icons/fa'

export default function About() {
  return (
    <section id="nosotros" className="py-20 bg-black relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gold-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="gradient-text-gold">¡Bienvenidos!</span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <FaQuoteLeft className="text-gold-500 text-3xl mx-auto mb-4" />
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
              En nuestro espacio, nos enfocamos en brindarte una experiencia única y
              personalizada, basada en el conocimiento experto de la <span className="text-gold-500 font-semibold">Tricología</span>.
              Nuestra misión es ofrecerte soluciones integrales para el cuidado y
              bienestar de tu cabello y cuero cabelludo.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Misión */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group relative"
          >
            <div className="h-full bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gold-500/20 hover:border-gold-500/50 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 bg-gradient-to-br from-gold-500 to-gold-600 rounded-xl">
                  <FaBullseye className="text-3xl text-black" />
                </div>
                <h3 className="font-serif text-3xl font-bold text-white">
                  Nuestra Misión
                </h3>
              </div>
              <p className="text-gray-300 leading-relaxed text-lg">
                Ofrecer servicios de peluquería de alta calidad y personalizados que atiendan las necesidades
                y expectativas de nuestros clientes, utilizando productos y técnicas
                innovadoras que promuevan la salud y belleza del cabello, creando un
                ambiente acogedor y profesional donde nuestros clientes se sientan
                cómodos y cuidados, por nuestros profesionales, desarrollando su
                pasión por la belleza y la salud capilar.
              </p>
              <div className="absolute inset-0 bg-gradient-to-t from-gold-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" />
            </div>
          </motion.div>

          {/* Visión */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="group relative"
          >
            <div className="h-full bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gold-500/20 hover:border-gold-500/50 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 bg-gradient-to-br from-gold-500 to-gold-600 rounded-xl">
                  <FaEye className="text-3xl text-black" />
                </div>
                <h3 className="font-serif text-3xl font-bold text-white">
                  Nuestra Visión
                </h3>
              </div>
              <p className="text-gray-300 leading-relaxed text-lg">
                Ser el referente en belleza y salud capilar en la ciudad,
                ofreciendo servicios de alta calidad y personalizados que superen las
                expectativas de nuestros clientes, y contribuir al bienestar y confianza de
                las personas a través de la belleza y cuidado del cabello creando un
                espacio donde la belleza y la salud capilar se unan para ofrecer
                experiencias únicas y personalizadas que hagan que nuestros clientes se
                sientan especiales y cuidados.
              </p>
              <div className="absolute inset-0 bg-gradient-to-t from-gold-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" />
            </div>
          </motion.div>
        </div>

        {/* Image section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 relative rounded-2xl overflow-hidden max-w-5xl mx-auto"
        >
          <div className="relative h-96">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url('/images/495240929_18505766443022273_8363597699102098055_n.jpg')`,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
            <div className="relative h-full flex items-end p-8">
              <div>
                <h3 className="font-serif text-3xl md:text-4xl font-bold text-white mb-2">
                  Un ambiente acogedor y relajante
                </h3>
                <p className="text-gold-400 text-lg">
                  Diseñado para hacerte sentir como en casa
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
