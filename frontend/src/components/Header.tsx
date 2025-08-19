import React from "react";
import { Button } from "./ui/button";

/**
 * Componente Header/Hero alternativo de Bripax
 *
 * @description
 * Componente de cabecera principal similar a HeroSection pero sin TechCarousel:
 * - Título principal con texto gradiente
 * - Botones de llamada a la acción (CTA)
 * - Layout en grid responsive
 * - Efectos de fade (fade-element class)
 *
 * @features
 * - Grid de 2 columnas en desktop (md:grid-cols-2)
 * - Títulos con gradientes animados para palabras clave
 * - Dos botones CTA: "Cotizar Gratis" y "Ver Servicios"
 * - Espaciado optimizado con margenes específicos
 * - Texto tracking ajustado para legibilidad
 * - Efectos de sombra en botones
 *
 * @differences_from_herosection
 * - No incluye TechCarousel
 * - Mantiene clase fade-element para animaciones
 * - Estructura más simple sin componente adicional
 *
 * @accessibility
 * - Uso de role="banner" para accesibilidad
 * - Estructura semántica con header apropiado
 * - Jerarquía de encabezados correcta (h1)
 *
 * @cta_buttons
 * - "Cotizar Gratis": Dirige a #footer-contact
 * - "Ver Servicios": Dirige a #services
 *
 * @returns {JSX.Element} Header completo con CTAs
 *
 * @example
 * ```tsx
 * <Header />
 * ```
 *
 * @note
 * Este componente es una alternativa a HeroSection sin el carrusel de tecnologías
 */
const Header: React.FC = () => {
  return (
    <header className="mt-12 fade-element" role="banner">
      <div className="grid md:grid-cols-2 gap-10 items-center mb-[100px] mt-[100px]">
        {/* Copy */}
        <div>
          <h1 className="hero-title text-slate-900 tracking-tight">
            Gestiona tu{" "}
            <span className="gradient-text-modern">contabilidad</span>
            <br />
            con ayuda <span className="gradient-text-modern">profesional</span>
            <br />
          </h1>

          <div className="mt-8 flex flex-wrap gap-4 justify-center sm:justify-start">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold">
              <a href="#footer-contact">
                Cotizar Gratis
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold">
              <a href="#services">
                Ver Servicios
              </a>
            </Button>
          </div>
        </div>

        {/* Tech Carousel */}
        <div className="tech-carousel-container ">
          <div className="tech-carousel-slide">
            {/* Slide 1: Soluciones contables con tecnologias como: */}
            <div className="tech-carousel-card active">
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
            <div className="tech-carousel-card">
              <p className="text-center">Equipo profesional</p>
              {/* Placeholder for team image or icons */}
              <i className="fas fa-users text-4xl mx-auto"></i>
              <p className="text-center">
                Contadores Expertos • Certificados • Experiencia
              </p>
            </div>
          </div>
          <div className="tech-carousel-indicators">
            <span className="tech-indicator active"></span>
            <span className="tech-indicator"></span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
