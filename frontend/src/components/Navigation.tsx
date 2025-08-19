import React, { useRef } from "react";
import { motion } from "framer-motion";
import MobileNavigation from "./MobileNavigation";

/**
 * Componente de navegación principal de la aplicación Bripax
 *
 * @description
 * Barra de navegación responsive que incluye:
 * - Logo de la empresa con gradiente
 * - Links de navegación a secciones principales
 * - Menú hamburguesa para dispositivos móviles
 * - Efectos hover, magnéticos y diseño profesional
 *
 * @features
 * - Navegación por anclas (#about, #services, #footer-contact)
 * - Responsive design con breakpoints de Tailwind
 * - Gradiente animado en el logo
 * - Menú hamburguesa funcional para móviles
 * - Sombra y efectos visuales profesionales
 * - Efectos magnéticos en enlaces con Framer Motion
 *
 * @returns {JSX.Element} Componente de navegación con efectos magnéticos
 *
 * @example
 * ```tsx
 * <Navigation />
 * ```
 */
const Navigation: React.FC = () => {
  // Referencias para el efecto magnético
  const navRef = useRef<HTMLUListElement>(null);

  // Efecto magnético en los enlaces
  const handleMouseMove = (e: React.MouseEvent) => {
    const nav = navRef.current;
    if (!nav) return;

    const links = nav.querySelectorAll("a");
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    links.forEach((link) => {
      const rect = link.getBoundingClientRect();
      const linkCenterX = rect.left + rect.width / 2;
      const linkCenterY = rect.top + rect.height / 2;

      const distance = Math.sqrt(
        Math.pow(mouseX - linkCenterX, 2) + Math.pow(mouseY - linkCenterY, 2)
      );

      const maxDistance = 100;
      const magnetic = Math.max(0, (maxDistance - distance) / maxDistance);
      const moveX = (mouseX - linkCenterX) * magnetic * 0.3;
      const moveY = (mouseY - linkCenterY) * magnetic * 0.3;

      (
        link as HTMLElement
      ).style.transform = `translate(${moveX}px, ${moveY}px) scale(${
        1 + magnetic * 0.1
      })`;
    });
  };

  const handleMouseLeave = () => {
    const nav = navRef.current;
    if (!nav) return;

    const links = nav.querySelectorAll("a");
    links.forEach((link) => {
      (link as HTMLElement).style.transform = "translate(0px, 0px) scale(1)";
    });
  };

  return (
    <nav className="relative z-10">
      <div className="flex sm:px-6 rounded-3xl pt-3 pr-4 pb-3 pl-4 items-center justify-between">
        {/* Logo */}
        <span className="gradient-text-modern font-medium text-6xl">
          Bripax
        </span>

        {/* Links */}
        <ul
          ref={navRef}
          id="nav-menu"
          className="sm:flex items-center gap-8 text-sm font-medium"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <li>
            <a
              href="#about"
              className="nav-link hover:text-[#2563eb] transition-all duration-200 ease-out"
              style={{ transition: "transform 0.2s ease-out" }}
            >
              Nosotros
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="nav-link hover:text-[#2563eb] transition-all duration-200 ease-out"
              style={{ transition: "transform 0.2s ease-out" }}
            >
              Servicios
            </a>
          </li>
          <li>
            <a
              href="#footer-contact"
              className="nav-link hover:text-[#2563eb] transition-all duration-200 ease-out"
              style={{ transition: "transform 0.2s ease-out" }}
            >
              Contacto
            </a>
          </li>
        </ul>

        {/* Mobile Navigation */}
        <MobileNavigation />

        {/* CTA */}
        <div className="hidden sm:block"></div>
      </div>
    </nav>
  );
};

export default Navigation;
