import React from "react";
import { motion } from "framer-motion";

/**
 * Sección de Servicios de Bripax
 *
 * @description
 * Componente que presenta los servicios profesionales de contabilidad:
 * - Cuatro categorías principales de servicios
 * - Grid responsive con tarjetas de servicio
 * - Iconografía de FontAwesome para cada servicio
 * - Listas de características específicas por servicio
 * - Efectos 3D tilt en tarjetas con Framer Motion
 *
 * @services
 * 1. Contabilidad y Teneduría de Libros
 * 2. Auditoría Contable
 * 3. Consultoría Fiscal
 * 4. Servicios Adicionales
 *
 * @features
 * - Separador visual con section-divider
 * - Header centrado con título y descripción
 * - Grid responsive (1 col móvil, 2 tablet, 4 desktop)
 * - Tarjetas con hover effects 3D (service-card class)
 * - Iconos FontAwesome para identificación visual
 * - Listas con checkmarks para características
 * - Gradientes animados en palabras clave
 * - Animaciones de tilt 3D en hover
 *
 * @layout
 * - Mobile: 1 columna
 * - Tablet (sm): 2 columnas
 * - Desktop (lg): 4 columnas
 *
 * @returns {JSX.Element} Sección completa de servicios con animaciones
 *
 * @example
 * ```tsx
 * <ServicesSection />
 * ```
 */
const ServicesSection: React.FC = () => {
  // Variantes para el efecto 3D tilt
  const cardVariants = {
    hover: {
      rotateX: 5,
      rotateY: 5,
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: [0.4, 0.0, 0.2, 1] as [number, number, number, number],
      },
    },
    tap: {
      scale: 0.95,
      transition: {
        duration: 0.1,
      },
    },
  };

  return (
    <>
      {/* Section Divider */}
      <div className="section-divider"></div>

      {/* Services section */}
      <section id="services" className="mt-[200px] mb-[200px]">
        <div className="section-header">
          <p className="section-subtitle">
            Nuestros Servicios
          </p>
          <h2 className="section-title text-slate-900">
            Todo lo que necesitas en
            <br />
            <span className="gradient-text-modern">Contabilidad</span> y{" "}
            <span className="gradient-text-modern">Auditoría</span>
          </h2>
        </div>

        <div className="mt-12 max-w-6xl mx-auto">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <motion.div
            className="service-card"
            variants={cardVariants}
            whileHover="hover"
            whileTap="tap"
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="service-icon">
              <i className="fas fa-book"></i>
            </div>
            <h3 className="text-xl font-semibold text-slate-900 font-jakarta mb-3">
              Contabilidad y Teneduría de Libros
            </h3>
            <ul className="space-y-2 text-slate-600 font-geist">
              <li className="flex items-start gap-2">
                <i className="fas fa-check text-[#2563eb] mt-1"></i>
                <span>Registros contables profesionales</span>
              </li>
              <li className="flex items-start gap-2">
                <i className="fas fa-check text-[#2563eb] mt-1"></i>
                <span>Estados financieros IFRS</span>
              </li>
              <li className="flex items-start gap-2">
                <i className="fas fa-check text-[#2563eb] mt-1"></i>
                <span>Control de libros contables</span>
              </li>
              <li className="flex items-start gap-2">
                <i className="fas fa-check text-[#2563eb] mt-1"></i>
                <span>Contabilidad mensual</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            className="service-card"
            variants={cardVariants}
            whileHover="hover"
            whileTap="tap"
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="service-icon">
              <i className="fas fa-search-dollar"></i>
            </div>
            <h3 className="text-xl font-semibold text-slate-900 font-jakarta mb-3">
              Auditoría Contable
            </h3>
            <ul className="space-y-2 text-slate-600 font-geist">
              <li className="flex items-start gap-2">
                <i className="fas fa-check text-[#2563eb] mt-1"></i>
                <span>Auditoría interna especializada</span>
              </li>
              <li className="flex items-start gap-2">
                <i className="fas fa-check text-[#2563eb] mt-1"></i>
                <span>Revisión de procesos contables</span>
              </li>
              <li className="flex items-start gap-2">
                <i className="fas fa-check text-[#2563eb] mt-1"></i>
                <span>Informes de auditoría detallados</span>
              </li>
              <li className="flex items-start gap-2">
                <i className="fas fa-check text-[#2563eb] mt-1"></i>
                <span>Consultoría en control interno</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            className="service-card"
            variants={cardVariants}
            whileHover="hover"
            whileTap="tap"
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="service-icon">
              <i className="fas fa-file-invoice-dollar"></i>
            </div>
            <h3 className="text-xl font-semibold text-slate-900 font-jakarta mb-3">
              Consultoría Fiscal
            </h3>
            <ul className="space-y-2 text-slate-600 font-geist">
              <li className="flex items-start gap-2">
                <i className="fas fa-check text-[#2563eb] mt-1"></i>
                <span>Planificación tributaria SII</span>
              </li>
              <li className="flex items-start gap-2">
                <i className="fas fa-check text-[#2563eb] mt-1"></i>
                <span>Declaraciones fiscales mensuales</span>
              </li>
              <li className="flex items-start gap-2">
                <i className="fas fa-check text-[#2563eb] mt-1"></i>
                <span>Optimización fiscal legal</span>
              </li>
              <li className="flex items-start gap-2">
                <i className="fas fa-check text-[#2563eb] mt-1"></i>
                <span>Consultoría IVA y renta</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            className="service-card"
            variants={cardVariants}
            whileHover="hover"
            whileTap="tap"
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="service-icon">
              <i className="fas fa-chart-line"></i>
            </div>
            <h3 className="text-xl font-semibold text-slate-900 font-jakarta mb-3">
              Reportes en Power BI
            </h3>
            <ul className="space-y-2 text-slate-600 font-geist">
              <li className="flex items-start gap-2">
                <i className="fas fa-check text-[#2563eb] mt-1"></i>
                <span>Dashboards interactivos</span>
              </li>
              <li className="flex items-start gap-2">
                <i className="fas fa-check text-[#2563eb] mt-1"></i>
                <span>Reportes financieros automáticos</span>
              </li>
              <li className="flex items-start gap-2">
                <i className="fas fa-check text-[#2563eb] mt-1"></i>
                <span>Análisis de KPIs empresariales</span>
              </li>
              <li className="flex items-start gap-2">
                <i className="fas fa-check text-[#2563eb] mt-1"></i>
                <span>Visualización de datos contables</span>
              </li>
            </ul>
          </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesSection;
