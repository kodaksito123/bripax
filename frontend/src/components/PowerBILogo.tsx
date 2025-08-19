import React from "react";

/**
 * Componente SVG del logo de Power BI optimizado
 *
 * @description
 * Logo vectorial de Power BI para mejor rendimiento y escalabilidad:
 * - SVG nativo para carga rápida
 * - Escalable sin pérdida de calidad
 * - Colores oficiales de Power BI
 * - Optimizado para diferentes tamaños
 *
 * @features
 * - Tamaño responsivo configurable
 * - Colores corporativos de Microsoft Power BI
 * - Animación opcional con hover
 * - Accesibilidad con aria-label
 *
 * @params
 * - width: Ancho del logo (default: 120)
 * - height: Alto del logo (default: auto)
 * - className: Clases CSS adicionales
 *
 * @returns {JSX.Element} Logo SVG de Power BI
 *
 * @example
 * ```tsx
 * <PowerBILogo width={100} className="hover:scale-105" />
 * ```
 */

interface PowerBILogoProps {
  width?: number;
  height?: number;
  className?: string;
}

const PowerBILogo: React.FC<PowerBILogoProps> = ({
  width = 120,
  height = 60,
  className = "",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 120 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} transition-transform duration-300`}
      aria-label="Microsoft Power BI Logo"
      role="img"
    >
      {/* Fondo con gradiente */}
      <defs>
        <linearGradient
          id="powerbi-gradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#F2C94C" />
          <stop offset="100%" stopColor="#FFCC02" />
        </linearGradient>
        <linearGradient id="powerbi-shadow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E6A502" />
          <stop offset="100%" stopColor="#CC8A00" />
        </linearGradient>
      </defs>

      {/* Fondo principal */}
      <rect
        x="2"
        y="2"
        width="116"
        height="56"
        rx="8"
        fill="url(#powerbi-gradient)"
        stroke="#E6A502"
        strokeWidth="1"
      />

      {/* Elementos gráficos del logo */}
      <g transform="translate(10, 12)">
        {/* Barras de gráfico */}
        <rect x="5" y="20" width="8" height="16" fill="#FFFFFF" rx="2" />
        <rect x="17" y="15" width="8" height="21" fill="#FFFFFF" rx="2" />
        <rect x="29" y="10" width="8" height="26" fill="#FFFFFF" rx="2" />
        <rect x="41" y="8" width="8" height="28" fill="#FFFFFF" rx="2" />

        {/* Texto "Power BI" */}
        <text
          x="55"
          y="25"
          fontFamily="Segoe UI, Arial, sans-serif"
          fontSize="12"
          fontWeight="600"
          fill="#FFFFFF"
          textAnchor="start"
          dominantBaseline="middle"
        >
          Power BI
        </text>

        {/* Icono de análisis */}
        <circle cx="75" cy="32" r="3" fill="#FFFFFF" opacity="0.8" />
        <circle cx="83" cy="28" r="2" fill="#FFFFFF" opacity="0.6" />
        <circle cx="91" cy="25" r="2.5" fill="#FFFFFF" opacity="0.7" />

        {/* Líneas conectoras */}
        <path
          d="M 75 32 Q 79 30 83 28 Q 87 26.5 91 25"
          stroke="#FFFFFF"
          strokeWidth="1.5"
          fill="none"
          opacity="0.5"
        />
      </g>

      {/* Efecto de brillo */}
      <rect
        x="2"
        y="2"
        width="116"
        height="28"
        rx="8"
        fill="url(#powerbi-shadow)"
        opacity="0.1"
      />
    </svg>
  );
};

export default PowerBILogo;
