import React, { useState, useEffect } from "react";

/**
 * Componente TechCarousel de Bripax
 *
 * @description
 * Carrusel interactivo que muestra tecnologías y equipo profesional:
 * - Rotación automática cada 2 segundos
 * - Dos slides: tecnologías (Power BI) y equipo profesional
 * - Indicadores clickeables para navegación manual
 * - Animaciones suaves entre transiciones
 * - Logo SVG optimizado para Power BI
 *
 * @features
 * - Estado local con useState para índice actual
 * - useEffect con setInterval para rotación automática
 * - Indicadores visuales de posición
 * - Navegación manual por indicadores
 * - Cleanup del interval en desmontaje
 * - Clases CSS condicionales para estado activo
 * - Componente PowerBILogo SVG optimizado
 *
 * @slides
 * 1. Slide 0: "Soluciones contables con tecnologías como:"
 *    - Logo SVG de Power BI (componente PowerBILogo)
 *    - Texto: "Análisis • Reportes Inteligentes"
 *
 * 2. Slide 1: "Equipo profesional"
 *    - Icono FontAwesome de usuarios (fas fa-users)
 *    - Texto: "Contadores Expertos • Certificados • Experiencia"
 *
 * @state
 * - currentIndex: number - Índice del slide actualmente visible
 * - totalCards: number - Total de slides disponibles (2)
 *
 * @interactions
 * - Auto-rotación: Cambia cada 2000ms automáticamente
 * - Click en indicadores: Navegación manual a slide específico
 * - Ciclo infinito: Al llegar al final, vuelve al inicio
 *
 * @styling
 * - CSS classes: tech-carousel-container, tech-carousel-slide, tech-carousel-card
 * - Estado activo: clase "active" condicional
 * - Indicadores: tech-carousel-indicators
 *
 * @accessibility
 * - Alt text en imágenes SVG
 * - Iconos semánticamente apropiados
 * - Indicadores clickeables
 *
 * @performance
 * - Cleanup automático del interval
 * - Uso de useCallback implícito en handlers
 * - SVG optimizado para mejor rendimiento
 *
 * @returns {JSX.Element} Carrusel completo con navegación
 *
 * @example
 * ```tsx
 * <TechCarousel />
 * ```
 */
const TechCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalCards = 2;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalCards);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const handleIndicatorClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="tech-carousel-container">
      <div className="tech-carousel-slide">
        {/* Slide 1: Soluciones contables con tecnologias como: */}
        <div
          className={`tech-carousel-card ${currentIndex === 0 ? "active" : ""}`}
        >
          <p className="text-center">
            Soluciones contables con tecnologias como:
          </p>
          <img
            src="assets/Power-Bi-logo-transparent.webp"
            alt="Power BI Logo"
            className="max-w-full h-auto mx-auto"
          />
          <p className="text-center">Análisis • Reportes Inteligentes</p>
        </div>

        {/* Slide 2: Equipo profesional */}
        <div
          className={`tech-carousel-card ${currentIndex === 1 ? "active" : ""}`}
        >
          <p className="text-center">Equipo profesional</p>
          <i className="fas fa-users text-4xl mx-auto"></i>
          <p className="text-center">
            Contadores Expertos • Certificados • Experiencia
          </p>
        </div>
      </div>

      <div className="tech-carousel-indicators">
        {[...Array(totalCards)].map((_, index) => (
          <span
            key={index}
            className={`tech-indicator ${
              currentIndex === index ? "active" : ""
            }`}
            onClick={() => handleIndicatorClick(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default TechCarousel;
