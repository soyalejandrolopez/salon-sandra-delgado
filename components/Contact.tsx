'use client'

import { motion } from 'framer-motion'
import { FaPhone, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa'

const contactInfo = [
  {
    icon: FaPhone,
    title: 'Teléfonos',
    details: [
      { label: 'Fijo', value: '(602) 827-4822', link: 'tel:+6028274822' },
      { label: 'Celular', value: '312-265-8896', link: 'tel:+573122658896' },
    ],
  },
  {
    icon: FaWhatsapp,
    title: 'WhatsApp',
    details: [
      { label: '', value: '312-265-8896', link: 'https://wa.me/573122658896' },
    ],
  },
  {
    icon: FaEnvelope,
    title: 'Correos',
    details: [
      { label: '', value: 'sandrapaty10@hotmail.com', link: 'mailto:sandrapaty10@hotmail.com' },
      { label: '', value: 'sandrapaty100600@gmail.com', link: 'mailto:sandrapaty100600@gmail.com' },
    ],
  },
  {
    icon: FaMapMarkerAlt,
    title: 'Dirección',
    details: [
      { label: '', value: 'Carrera 9A #6N-131, Popayán, Cauca', link: 'https://maps.google.com/?q=Carrera+9A+6N-131,+Popayán,+Cauca,+Colombia' },
    ],
  },
  {
    icon: FaClock,
    title: 'Horario',
    details: [
      { label: '', value: '8:00 AM - 5:00 PM', link: '' },
      { label: '', value: 'Jornada continua', link: '' },
    ],
  },
]

export default function Contact() {
  return (
    <section id="contacto" className="py-20 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="gradient-text-gold">Contáctanos</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Estamos aquí para atenderte. Agenda tu cita y descubre la experiencia Sandra Delgado.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          {contactInfo.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 border border-gold-500/20 hover:border-gold-500/50 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-gradient-to-br from-gold-500 to-gold-600 rounded-lg">
                  <item.icon className="text-2xl text-black" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-white">
                  {item.title}
                </h3>
              </div>
              <div className="space-y-2">
                {item.details.map((detail, idx) => (
                  <div key={idx}>
                    {detail.link ? (
                      <a
                        href={detail.link}
                        target={detail.link.startsWith('http') ? '_blank' : undefined}
                        rel={detail.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-gray-300 hover:text-gold-400 transition-colors duration-200 block"
                      >
                        {detail.label && <span className="text-gray-500 text-sm">{detail.label}: </span>}
                        {detail.value}
                      </a>
                    ) : (
                      <p className="text-gray-300">
                        {detail.label && <span className="text-gray-500 text-sm">{detail.label}: </span>}
                        {detail.value}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="bg-gradient-to-r from-gold-500 to-gold-600 rounded-2xl p-8 md:p-12">
            <h3 className="font-serif text-3xl md:text-4xl font-bold text-black mb-4">
              ¿Lista para transformar tu cabello?
            </h3>
            <p className="text-black/80 text-lg mb-8">
              Agenda tu cita ahora y experimenta el cuidado profesional que mereces
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/573122658896"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-black hover:bg-gray-900 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                <FaWhatsapp className="text-2xl" />
                <span>Agendar por WhatsApp</span>
              </a>
              <a
                href="tel:+573122658896"
                className="inline-flex items-center justify-center gap-3 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-black font-semibold px-8 py-4 rounded-full transition-all duration-300 border-2 border-black/20 hover:border-black/40"
              >
                <FaPhone className="text-xl" />
                <span>Llamar ahora</span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Map placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 max-w-6xl mx-auto"
        >
          <div className="relative rounded-2xl overflow-hidden h-96 bg-gray-800" suppressHydrationWarning>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.4537286558367!2d-76.6085!3d2.4419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMsKwMjYnMzAuOCJOIDc2wrAzNiczMC42Ilc!5e0!3m2!1ses!2sco!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale hover:grayscale-0 transition-all duration-500"
              title="Ubicación Sala de Belleza Sandra Delgado en Popayán, Cauca"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
