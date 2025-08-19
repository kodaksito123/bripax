import React from "react";

/**
 * Componente Footer de Bripax
 *
 * @description
 * Pie de página completo con información de contacto y navegación:
 * - Información de la marca y descripción
 * - Enlaces de navegación rápida
 * - Información de contacto completa
 * - Redes sociales
 * - Copyright y derechos reservados
 *
 * @features
 * - Grid responsive (1-2-3 columnas según breakpoint)
 * - Sección de marca con descripción y redes sociales
 * - Enlaces rápidos a secciones principales
 * - Información de contacto (teléfono, email, WhatsApp)
 * - Iconos de redes sociales con hover effects
 * - Separador visual superior con border
 * - Copyright con año actual
 *
 * @sections
 * 1. Brand Column: Logo, descripción, redes sociales
 * 2. Quick Links: Enlaces de navegación interna
 * 3. Contact Info: Teléfono, email, WhatsApp, ubicación
 *
 * @contact_info
 * - Teléfono: +56 9 8768 8766
 * - Email: consultora@bripaxspa.com
 * - WhatsApp: Contacto directo
 * - Ubicación: Chile (servicios nacionales)
 *
 * @social_media
 * - Facebook, Instagram, LinkedIn, WhatsApp
 * - Iconos FontAwesome con efectos hover
 *
 * @accessibility
 * - ID "footer-contact" para navegación por anclas
 * - Enlaces semánticamente estructurados
 * - Contraste adecuado en colores
 *
 * @returns {JSX.Element} Footer completo con toda la información
 *
 * @example
 * ```tsx
 * <Footer />
 * ```
 */
const Footer: React.FC = () => {
  return (
    <footer
      className="mt-20 pt-16 border-t border-slate-200"
      id="footer-contact"
    >
      <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
        {/* Brand Column */}
        <div>
          <a href="#" className="brand-name">
            Bripax
          </a>
          <p className="mt-4 text-slate-600 font-geist">
            La consultora donde encuentras servicios contables y fiscales
            profesionales. Todo cercano, rápido y con atención personalizada
            guiándote paso a paso.
          </p>
          <div className="mt-6 flex gap-4">
            <a href="#" className="text-slate-500 hover:text-[#2563eb]">
              <i className="fab fa-facebook text-xl"></i>
            </a>
            <a href="#" className="text-slate-500 hover:text-[#2563eb]">
              <i className="fab fa-instagram text-xl"></i>
            </a>
            <a href="#" className="text-slate-500 hover:text-[#2563eb]">
              <i className="fab fa-linkedin text-xl"></i>
            </a>
            <a href="#" className="text-slate-500 hover:text-[#2563eb]">
              <i className="fab fa-whatsapp text-xl"></i>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="footer-title">Enlaces rápidos</h3>
          <ul className="space-y-3">
            <li>
              <a
                href="#about"
                className="text-slate-600 hover:text-[#2563eb] font-geist font-medium"
              >
                ¿Quiénes somos?
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="text-slate-600 hover:text-[#2563eb] font-geist font-medium"
              >
                Servicios
              </a>
            </li>
            <li>
              <a
                href="#footer-contact"
                className="text-slate-600 hover:text-[#2563eb] font-geist font-medium"
              >
                Contacto
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="footer-title">
            Ponte en <span className="gradient-text-modern">Contacto</span>
          </h3>
          <div className="mt-6 space-y-4">
            <div className="flex items-center gap-3">
              <i className="fas fa-phone-alt text-[#2563eb]"></i>
              <a href="tel:+56987688766" className="contact-link font-geist">
                +56 9 8768 8766
              </a>
            </div>
            <div className="flex items-center gap-3">
              <i className="fas fa-envelope text-[#2563eb]"></i>
              <a
                href="mailto:consultora@bripaxspa.com"
                className="contact-link font-geist"
              >
                consultora@bripaxspa.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-16 pt-8 border-t border-slate-200 text-center">
        <p className="text-slate-600 font-geist">© 2025 Bripax SpA.</p>
      </div>
    </footer>
  );
};

export default Footer;
