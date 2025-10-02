'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaInstagram, FaPlay } from 'react-icons/fa'

const videos = [
  {
    url: 'https://www.instagram.com/p/DPCl1DoiY3m/',
    embedUrl: 'https://www.instagram.com/p/DPCl1DoiY3m/embed',
    description: 'Luego de su cronograma de cuidado de hebra capilar logramos realizar su diseño de color ! Mi hermosa Jake feliz !! Un tono arena en contraste que va muy bien con su piel canela y esos hermosos ojos !',
  },
  {
    url: 'https://www.instagram.com/p/DOpBjxXiVo8/',
    embedUrl: 'https://www.instagram.com/p/DOpBjxXiVo8/embed',
    description: 'Rubio vainilla y un corte en tendencia ella quedó hermosa !!',
  },
  {
    url: 'https://www.instagram.com/p/DNrEE7lUgQF/',
    embedUrl: 'https://www.instagram.com/p/DNrEE7lUgQF/embed',
    description: 'Después de un año de su último diseño nuevamente vamos a realizar color para destacar sus rizos ; cabe resaltar que se preparó y cortó antes del proceso .Esta vez quiso más rubio y le vamos a dar gusto a esta hermosa mujer aclaro que ella siempre usa su cabello al natural tiene unos crespos hermosos pero hoy quisimos hacerle un bello blower : el diseño va en contraste para que cuando lo tenga rizado se note el cambio !',
  },
  {
    url: 'https://www.instagram.com/p/DLTR6kepC8o/',
    embedUrl: 'https://www.instagram.com/p/DLTR6kepC8o/embed',
    description: 'Retoque de crecimiento rubio arena un hermoso color de tendencia !',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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

export default function Gallery() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="galeria" className="py-20 bg-black relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Nuestros <span className="gradient-text-gold">Trabajos</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-6">
            Descubre las transformaciones que realizamos para nuestras clientas
          </p>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gold-400 hover:text-gold-300 transition-colors"
          >
            <FaInstagram className="text-2xl" />
            <span className="font-medium">@saladebellezasandradelgado</span>
          </a>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto"
        >
          {videos.map((video, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gold-500/20 hover:border-gold-500/50 transition-all duration-300"
            >
              {/* Video Container */}
              <div className="relative aspect-[9/16] md:aspect-[4/5] overflow-hidden bg-black" suppressHydrationWarning>
                <iframe
                  src={video.embedUrl}
                  className="absolute inset-0 w-full h-full"
                  style={{ border: 0 }}
                  scrolling="no"
                  allow="encrypted-media"
                  title={`Instagram video ${index + 1}`}
                />

                {/* Overlay for hover effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>

              {/* Description */}
              <div className="p-6">
                <p className="text-gray-300 leading-relaxed line-clamp-3 mb-4">
                  {video.description}
                </p>
                <a
                  href={video.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-gold-400 hover:text-gold-300 transition-colors font-medium"
                >
                  <FaInstagram className="text-xl" />
                  <span>Ver en Instagram</span>
                </a>
              </div>

              {/* Decorative corner */}
              <div className="absolute top-4 right-4 p-2 bg-gradient-to-br from-gold-500/20 to-gold-600/20 backdrop-blur-sm rounded-full">
                <FaPlay className="text-gold-400 text-sm" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-pink-500/50"
          >
            <FaInstagram className="text-2xl" />
            <span>Síguenos en Instagram</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
