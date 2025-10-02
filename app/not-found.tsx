import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="text-center px-4">
        <h1 className="font-serif text-6xl md:text-8xl font-bold mb-4">
          <span className="gradient-text-gold">404</span>
        </h1>
        <h2 className="text-2xl md:text-3xl text-white mb-6">
          Página no encontrada
        </h2>
        <p className="text-gray-400 mb-8 max-w-md mx-auto">
          Lo sentimos, la página que buscas no existe o ha sido movida.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-black font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105"
        >
          Volver al inicio
        </Link>
      </div>
    </div>
  )
}
