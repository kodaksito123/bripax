import React from "react";

/**
 * Sección "Sobre Nosotros" de Bripax
 *
 * @description
 * Componente que presenta información corporativa de la empresa:
 * - Descripción de la empresa y sus servicios
 * - Historia y experiencia desde 2023
 * - Enfoque en servicios contables profesionales
 * - Diseño centrado con tipografía jerárquica
 *
 * @features
 * - Separador visual con clase section-divider
 * - Etiqueta descriptiva en mayúsculas
 * - Título principal con gradiente en el nombre de la empresa
 * - Párrafo descriptivo con tipografía Geist
 * - Layout centrado y responsive
 * - Espaciado optimizado para legibilidad
 *
 * @accessibility
 * - Uso de role="main" para accesibilidad
 * - Estructura semántica con section y headers apropiados
 * - ID "about" para navegación por anclas
 *
 * @returns {JSX.Element} Sección sobre nosotros completa
 *
 * @example
 * ```tsx
 * <AboutSection />
 * ```
 */
const AboutSection: React.FC = () => {
  return (
    <>
      {/* Section Divider */}
      <div className="section-divider"></div>

      {/* About section */}
      <section id="about" role="main" className="mt-[200px]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="section-header">
            <p className="section-subtitle">
              Sobre nosotros
            </p>
            <h2 className="section-title text-slate-900 text-center">
              <span className="gradient-text-modern">Bripax</span>
            </h2>
          </div>
          <p className="lead text-center max-w-3xl mx-auto">
            Bripax es una consultora contable especializada en servicios de
            contabilidad, teneduría de libros, auditoría y consultoría fiscal en
            Chile. Como consultora líder desde 2023, ofrecemos servicios contables
            profesionales para empresas de todos los tamaños. Nuestro equipo de
            contadores expertos te acompaña en cada proceso contable, garantizando
            contabilidad confiable y auditoría de calidad.
          </p>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
