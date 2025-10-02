import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Sala de Belleza Sandra Delgado - Popayán, Cauca',
  description: 'Peluquería integral en Popayán, Cauca especializada en tricología, tratamientos capilares personalizados, colorimetría y diseño de imagen. Expertos en salud capilar.',
  keywords: ['peluquería', 'tricología', 'belleza', 'tratamientos capilares', 'colorimetría', 'Sandra Delgado', 'Popayán', 'Cauca', 'salón de belleza Popayán'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
