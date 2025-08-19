import React from "react";

/**
 * Sección de Certificaciones Profesionales de Bripax
 *
 * @description
 * Componente que muestra las certificaciones y respaldos institucionales:
 * - Certificaciones del Servicio de Impuestos Internos (SII)
 * - Registro en el Colegio de Contadores
 * - Certificaciones IFRS y ISO
 * - Layout en grid responsive
 *
 * @certifications
 * - SII: Servicio de Impuestos Internos
 * - Colegio de Contadores: Registro Profesional
 * - IFRS: Normas Internacionales de Información Financiera
 * - ISO: Estándares de Calidad Internacional
 *
 * @features
 * - Separador visual con section-divider
 * - Header centrado con título y descripción
 * - Grid responsive (1-2-4 columnas según breakpoint)
 * - Tarjetas centradas con iconos representativos
 * - Efectos hover en las tarjetas (certification-card)
 * - Iconografía FontAwesome para identificación visual
 * - Gradiente animado en palabra clave "Profesionales"
 *
 * @layout
 * - Mobile: 1 columna
 * - Tablet (sm): 2 columnas
 * - Desktop (lg): 4 columnas
 *
 * @accessibility
 * - ID "certifications" para navegación
 * - Estructura semántica con section apropiada
 * - Texto alternativo implícito en iconos
 *
 * @returns {JSX.Element} Sección completa de certificaciones
 *
 * @example
 * ```tsx
 * <CertificationsSection />
 * ```
 */
const CertificationsSection: React.FC = () => {
  return (
    <>
      {/* Section Divider */}
      <div className="section-divider"></div>

      {/* Certifications section */}
      <section id="certifications" className="mt-[200px] mb-[200px]">
        <div className="section-header">
          <h2 className="section-title text-slate-900">
            Certificaciones{" "}
            <span className="gradient-text-modern">Profesionales</span>
          </h2>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="certification-card text-center">
            <div className="cert-logo mx-auto">
              <i className="fas fa-university"></i>
            </div>
            <h3 className="text-xl font-semibold text-slate-900 font-jakarta mt-4">
              SII
            </h3>
            <p className="mt-2 text-slate-600 font-geist">
              Servicio de Impuestos Internos
            </p>
          </div>

          <div className="certification-card text-center">
            <div className="cert-logo mx-auto">
              <i className="fas fa-certificate"></i>
            </div>
            <h3 className="text-xl font-semibold text-slate-900 font-jakarta mt-4">
              Colegio de Contadores
            </h3>
            <p className="mt-2 text-slate-600 font-geist">
              Registro Profesional
            </p>
          </div>

          <div className="certification-card text-center">
            <div className="cert-logo mx-auto">
              <i className="fas fa-shield-alt"></i>
            </div>
            <h3 className="text-xl font-semibold text-slate-900 font-jakarta mt-4">
              IFRS
            </h3>
            <p className="mt-2 text-slate-600 font-geist">
              Normas Internacionales
            </p>
          </div>

          <div className="certification-card text-center">
            <div className="cert-logo mx-auto">
              <i className="fas fa-balance-scale"></i>
            </div>
            <h3 className="text-xl font-semibold text-slate-900 font-jakarta mt-4">
              CMF
            </h3>
            <p className="mt-2 text-slate-600 font-geist">
              Comisión para el Mercado Financiero
            </p>
          </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CertificationsSection;
