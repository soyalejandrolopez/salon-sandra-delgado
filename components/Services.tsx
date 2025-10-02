'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaCut, FaPalette, FaSpa, FaPaintBrush, FaUserMd, FaHeart } from 'react-icons/fa'

const services = [
  {
    icon: FaUserMd,
    title: 'Tratamientos Tricológicos',
    description: 'Tratamientos personalizados basados en el estudio profesional de tu cuero cabelludo y cabello.',
    image: '/images/499053406_18509156227022273_7472192815312012352_n.jpg',
  },
  {
    icon: FaPalette,
    title: 'Colorimetría Profesional',
    description: 'Servicio especializado de coloración con productos de alta calidad para resultados excepcionales.',
    image: '/images/504072198_1395895864985566_7235330340756095009_n.jpg',
  },
  {
    icon: FaSpa,
    title: 'Recuperación Capilar',
    description: 'Recuperación de hebra capilar y salud del cuero cabelludo con técnicas innovadoras.',
    image: '/images/473782177_18484915531022273_3817720693846571445_n.jpg',
  },
  {
    icon: FaCut,
    title: 'Diseño de Corte',
    description: 'Estudio de visagismo para encontrar el corte perfecto que realce tus facciones.',
    image: '/images/488060906_18499703158022273_4182675876348124655_n.jpg',
  },
  {
    icon: FaPaintBrush,
    title: 'Maquillaje Profesional',
    description: 'Servicio de maquillaje profesional para eventos especiales o sesiones fotográficas.',
    image: '/images/470922246_18477795595009368_6024326118170267358_n.jpg',
  },
  {
    icon: FaHeart,
    title: 'Asesoría de Imagen',
    description: 'Consultoría personalizada para descubrir tu mejor versión y potenciar tu estilo único.',
    image: '/images/521080872_18519926002022273_59298610971439743_n.jpg',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
}

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="servicios" className="py-20 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Nuestros <span className="gradient-text-gold">Servicios</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Servicios especializados de alta calidad que superan tus expectativas
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gold-500/20 hover:border-gold-500/50 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url('${service.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-3 bg-gradient-to-br from-gold-500 to-gold-600 rounded-lg">
                    <service.icon className="text-2xl text-black" />
                  </div>
                  <h3 className="font-serif text-2xl font-semibold text-white">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Hover effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-gold-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
