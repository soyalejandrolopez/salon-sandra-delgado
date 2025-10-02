# Sala de Belleza Sandra Delgado

Sitio web moderno para Sala de Belleza Sandra Delgado, especializada en Tricología y Salud Capilar.

## Características

- ✨ Diseño moderno con animaciones suaves
- 📱 Totalmente responsive con navegación estilo app en móvil
- 🎨 Paleta de colores: Negro, Blanco y Dorado
- 🖼️ Alto volumen de imágenes optimizadas
- ⚡ Construido con Next.js 15 y exportación estática
- 🎭 Animaciones con Framer Motion
- 🎯 Optimizado para Netlify

## Tecnologías

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS
- **Animaciones**: Framer Motion
- **Iconos**: React Icons
- **Tipografía**: Playfair Display & Inter
- **Deploy**: Netlify (Static Export)

## Instalación

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Construir para producción
npm run build
```

## Deploy en Netlify

### Opción 1: Deploy Manual

1. Ejecuta el build:
   ```bash
   npm run build
   ```

2. La carpeta `out/` contiene los archivos estáticos

3. Sube la carpeta `out/` a Netlify

### Opción 2: Deploy con Git

1. Crea un repositorio en GitHub

2. Conecta tu repositorio a Netlify

3. Configuración de build:
   - **Build command**: `npm run build`
   - **Publish directory**: `out`

4. Deploy automático en cada push

### Opción 3: Netlify CLI

```bash
# Instalar Netlify CLI
npm install -g netlify-cli

# Login a Netlify
netlify login

# Deploy
netlify deploy --prod
```

## Estructura del Proyecto

```
salon-sandra-delgado/
├── app/
│   ├── layout.tsx          # Layout principal
│   ├── page.tsx            # Página de inicio
│   └── globals.css         # Estilos globales
├── components/
│   ├── Navigation.tsx      # Navegación responsive
│   ├── Hero.tsx           # Sección hero
│   ├── Services.tsx       # Servicios
│   ├── About.tsx          # Misión y visión
│   ├── Contact.tsx        # Contacto
│   └── Footer.tsx         # Footer
├── public/
│   └── images/            # Imágenes
├── next.config.js         # Configuración Next.js
├── tailwind.config.js     # Configuración Tailwind
└── netlify.toml          # Configuración Netlify
```

## Personalización

### Colores

Los colores se pueden personalizar en `tailwind.config.js`:

```js
colors: {
  gold: {
    500: '#d4af37', // Dorado principal
    // ...otros tonos
  },
}
```

### Imágenes

Las imágenes están usando Unsplash como placeholder. Para usar imágenes propias:

1. Agrega tus imágenes en `public/images/`
2. Actualiza las rutas en los componentes

### Contenido

Edita el contenido directamente en cada componente en la carpeta `components/`.

## Contacto

- **Teléfono**: (602) 827-4822 / 312-265-8896
- **WhatsApp**: 312-265-8896
- **Email**: sandrapaty10@hotmail.com
- **Dirección**: Carrera 9A #6N-131, Popayán, Cauca, Colombia

## Licencia

© 2024 Sala de Belleza Sandra Delgado. Todos los derechos reservados.
