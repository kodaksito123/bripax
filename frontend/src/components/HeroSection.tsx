import React from "react";
import { motion } from "framer-motion";
import TechCarousel from "./TechCarousel";
import { Button } from "./ui/button";

/**
 * Sección Hero principal de la página de inicio de Bripax
 *
 * @description
 * Componente de presentación principal que incluye:
 * - Título principal con texto gradiente animado
 * - Botones de llamada a la acción (CTA)
 * - Carrusel de tecnologías y certificaciones
 * - Layout responsive en grid de 2 columnas en desktop
 * - Animaciones fluidas con Framer Motion
 *
 * @features
 * - Títulos con gradientes animados para palabras clave
 * - Dos botones CTA: "Cotizar Gratis" y "Ver Servicios"
 * - Grid responsive (1 columna en móvil, 2 en desktop)
 * - Integración con TechCarousel para mostrar logos
 * - Espaciado y margenes optimizados para UX
 * - Animaciones escalonadas para texto y botones
 *
 * @dependencies
 * - TechCarousel: Componente que muestra logos rotativos
 * - CSS: hero-title, gradient-text-modern, btn-primary, btn-secondary
 * - framer-motion: Para animaciones fluidas
 *
 * @returns {JSX.Element} Sección hero completa con animaciones
 *
 * @example
 * ```tsx
 * <HeroSection />
 * ```
 */
const HeroSection: React.FC = () => {
  // Variantes para los botones (mantenemos estas)
  const buttonContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      
    },
  };

  // Variantes para el carrusel
  const carouselVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.008,
        delay: 0.4,
        ease: [0.4, 0.0, 0.2, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <header className="mt-12" role="banner">
      <div className="grid md:grid-cols-2 gap-10 items-center mb-[100px] mt-[100px] sm:px-6 pl-4">
        {/* Copy */}
        <div>
          <h1 className="hero-title text-slate-900 tracking-tight">
            <div className="mb-1">Gestiona tu</div>
            <div className="mb-1"><span className="gradient-text-modern">contabilidad</span></div>
            <div>con ayuda <span className="gradient-text-modern">profesional</span></div>
          </h1>

          <motion.div
            className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start"
            variants={buttonContainerVariants}
            initial="hidden"
            animate="visible"
          >
                         <motion.div variants={buttonVariants}>
               <Button asChild size="lg" className="bg-gradient-to-br from-[#2563eb]/80 via-[#0ea5e9]/60 via-[#2563eb]/70 via-[#0ea5e9]/60 to-[#2563eb]/80 hover:from-[#1d4ed8]/90 hover:via-[#0284c7]/70 hover:via-[#1d4ed8]/80 hover:via-[#0284c7]/70 hover:to-[#1d4ed8]/90 text-white font-semibold shadow-lg transition-all duration-300 bg-[length:200%_auto] animate-[gradient-flow_8s_ease-in-out_infinite]">
                 <a href="#footer-contact">
                   Cotizar Gratis
                 </a>
               </Button>
             </motion.div>
                         <motion.div variants={buttonVariants}>
               <Button asChild variant="outline" size="lg" className="bg-white/20 backdrop-blur-xl border border-white/30 text-[#0f162a] hover:bg-white/40 hover:border-white/50 font-semibold shadow-[0_8px_32px_0_rgba(31,38,135,0.2)] transition-all duration-300">
                 <a href="#services">
                   Ver Servicios
                 </a>
               </Button>
             </motion.div>
          </motion.div>
        </div>

        {/* Tech Carousel */}
        <motion.div
          variants={carouselVariants}
          initial="hidden"
          animate="visible"
        >
          <TechCarousel />
        </motion.div>
      </div>
    </header>
  );
};

export default HeroSection;
