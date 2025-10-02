'use client'

import { FaPhone, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaFacebook } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black border-t border-gold-500/20 pb-20 md:pb-0">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-3xl font-bold mb-4">
              <span className="text-white">Sandra</span>{' '}
              <span className="gradient-text-gold">Delgado</span>
            </h3>
            <p className="text-gray-400 mb-4">
              Expertos en Tricología y Salud Capilar. Tu belleza es nuestra pasión.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-3 bg-gray-800 hover:bg-gold-500 rounded-full transition-colors duration-300"
                aria-label="Instagram"
              >
                <FaInstagram className="text-xl" />
              </a>
              <a
                href="#"
                className="p-3 bg-gray-800 hover:bg-gold-500 rounded-full transition-colors duration-300"
                aria-label="Facebook"
              >
                <FaFacebook className="text-xl" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-xl font-semibold mb-4 text-gold-400">
              Enlaces Rápidos
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#inicio" className="text-gray-400 hover:text-gold-400 transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#galeria" className="text-gray-400 hover:text-gold-400 transition-colors">
                  Galería
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-gray-400 hover:text-gold-400 transition-colors">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#nosotros" className="text-gray-400 hover:text-gold-400 transition-colors">
                  Nosotros
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-gray-400 hover:text-gold-400 transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-xl font-semibold mb-4 text-gold-400">
              Contacto
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-400">
                <FaMapMarkerAlt className="text-gold-500 mt-1 flex-shrink-0" />
                <span>Carrera 9A #6N-131, Popayán, Cauca</span>
              </li>
              <li className="flex items-start gap-3">
                <FaPhone className="text-gold-500 mt-1 flex-shrink-0" />
                <div className="space-y-1">
                  <a href="tel:+6028274822" className="text-gray-400 hover:text-gold-400 transition-colors block">
                    (602) 827-4822
                  </a>
                  <a href="tel:+573122658896" className="text-gray-400 hover:text-gold-400 transition-colors block">
                    312-265-8896
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <FaWhatsapp className="text-gold-500 mt-1 flex-shrink-0" />
                <a
                  href="https://wa.me/573122658896"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gold-400 transition-colors"
                >
                  312-265-8896
                </a>
              </li>
              <li className="flex items-start gap-3">
                <FaEnvelope className="text-gold-500 mt-1 flex-shrink-0" />
                <div className="space-y-1">
                  <a
                    href="mailto:sandrapaty10@hotmail.com"
                    className="text-gray-400 hover:text-gold-400 transition-colors block text-sm"
                  >
                    sandrapaty10@hotmail.com
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Sala de Belleza Sandra Delgado. Todos los derechos reservados.</p>
          <p className="mt-2">
            Horario: Lunes a Sábado 8:00 AM - 5:00 PM · Jornada continua
          </p>
        </div>
      </div>
    </footer>
  )
}
