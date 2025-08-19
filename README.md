# 🏢 Bripax - Consultora Contable

## 📋 Descripción del Proyecto

Bripax es una aplicación web corporativa desarrollada en **React + TypeScript** que presenta los servicios de una consultora contable profesional en Chile. La aplicación ofrece información completa sobre servicios de contabilidad, auditoría, consultoría fiscal y certificaciones.

## ✨ Características Principales

- 🎨 **Diseño SaaS Moderno**: Interfaz profesional con gradientes animados y efectos hover
- 📱 **Responsive Design**: Adaptable a dispositivos móviles, tablets y desktop
- ⚡ **Performance Optimizada**: Construida con Vite para cargas rápidas
- 🎯 **UX Intuitiva**: Navegación por anclas y scroll suave
- 🔄 **Carrusel Interactivo**: Muestra tecnologías y equipo profesional
- ❓ **FAQ Acordeón**: Preguntas frecuentes con interacción fluida
- 📞 **Información de Contacto**: WhatsApp, email y redes sociales integradas

## 🛠️ Stack Tecnológico

### Frontend
- **React**: 19.1.1 (versión más reciente)
- **TypeScript**: 5.8.3 con configuración estricta
- **Vite**: 7.1.2 como bundler y dev server
- **Tailwind CSS**: 4.1.12 para estilos utilitarios

### UI Components
- **Radix UI**: Componentes accesibles y sin estilos
- **shadcn/ui**: Sistema de componentes moderno
- **Framer Motion**: Animaciones fluidas y transiciones
- **Lucide React**: Iconografía moderna

### Herramientas de Desarrollo
- **ESLint**: 9.33.0 con reglas TypeScript y React
- **PostCSS**: 8.5.6 con Autoprefixer
- **TypeScript ESLint**: 8.39.1 para linting avanzado

## 🚀 Instalación y Desarrollo

### Prerrequisitos

- **Node.js**: Versión 18 o superior
- **npm** o **yarn** como gestor de paquetes

### Pasos de Instalación

1. **Clonar el repositorio**
   ```bash
   git clone [repository-url]
   cd bripax
   ```

2. **Instalar dependencias**
   ```bash
   cd frontend
   npm install
   ```

3. **Iniciar servidor de desarrollo**
   ```bash
   npm run dev
   ```

4. **Abrir en navegador**
   ```
   http://localhost:5174
   ```

### Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Vista previa de la build de producción
- `npm run lint` - Ejecuta ESLint para verificar el código

## 📁 Estructura del Proyecto

```
bripax/
├── frontend/                    # Aplicación React principal
│   ├── src/
│   │   ├── components/         # Componentes React documentados
│   │   │   ├── Navigation.tsx  # Barra de navegación
│   │   │   ├── HeroSection.tsx # Sección principal con CTA
│   │   │   ├── AboutSection.tsx # Información corporativa
│   │   │   ├── ServicesSection.tsx # Grid de servicios
│   │   │   ├── CertificationsSection.tsx # Certificaciones
│   │   │   ├── FaqAccordion.tsx # Preguntas frecuentes
│   │   │   ├── TechCarousel.tsx # Carrusel de tecnologías
│   │   │   ├── Footer.tsx      # Pie de página completo
│   │   │   └── ui/             # Componentes UI reutilizables
│   │   ├── hooks/              # Hooks personalizados
│   │   ├── lib/                # Utilidades y helpers
│   │   ├── App.tsx             # Componente principal
│   │   └── main.tsx            # Punto de entrada
│   ├── public/                 # Assets estáticos
│   ├── package.json            # Dependencias y scripts
│   ├── tsconfig.json           # Configuración TypeScript
│   ├── tailwind.config.js      # Configuración Tailwind CSS
│   └── vite.config.ts          # Configuración Vite
├── assets/                     # Assets globales del proyecto
└── README.md                   # Este archivo
```

## 🎨 Componentes Principales

### Navigation
Barra de navegación responsive con efectos magnéticos y menú hamburguesa para móviles.

### HeroSection
Sección principal con título animado, botones CTA y carrusel de tecnologías.

### ServicesSection
Grid de servicios ofrecidos por la consultora con iconos y descripciones.

### CertificationsSection
Muestra las certificaciones y acreditaciones profesionales.

### FaqAccordion
Preguntas frecuentes organizadas en acordeón interactivo.

## 🔧 Configuración

### TypeScript
- Configuración estricta habilitada
- Target ES2022 para compatibilidad moderna
- Linting automático con reglas estrictas

### Tailwind CSS
- Configuración personalizada con fuentes Geist y Plus Jakarta Sans
- Sistema de colores y espaciado optimizado
- PostCSS con Autoprefixer

### ESLint
- Reglas recomendadas de TypeScript
- Reglas específicas de React Hooks
- Configuración para Vite

## 📱 Responsive Design

La aplicación está completamente optimizada para:
- **Móviles**: 320px - 768px
- **Tablets**: 768px - 1024px
- **Desktop**: 1024px+

## 🚀 Deployment

### Build de Producción
```bash
npm run build
```

### Preview de Producción
```bash
npm run preview
```

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto es privado y pertenece a Bripax Consultora Contable.

## 📞 Contacto

- **Empresa**: Bripax Consultora Contable
- **Ubicación**: Chile
- **Servicios**: Contabilidad, Auditoría, Consultoría Fiscal

---

**Desarrollado con ❤️ usando React + TypeScript + Tailwind CSS**
