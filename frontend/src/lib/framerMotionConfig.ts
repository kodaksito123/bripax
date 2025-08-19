import type { Transition } from "framer-motion";

/**
 * Configuración optimizada para Framer Motion
 * Mejora el rendimiento en dispositivos de baja gama
 */

export const framerMotionConfig = {
  // Configuración global para reducir la carga de CPU
  defaultTransition: {
    type: "tween" as const,
    ease: "easeOut" as const,
    duration: 0.2,
  } as Transition,
  
  // Configuración para scroll optimizado
  scrollConfig: {
    // Reducir la frecuencia de actualización del scroll
    throttle: 32, // 30fps en lugar de 60fps
    // Solo actualizar si hay cambio significativo
    threshold: 1, // 1px de cambio mínimo
  },
  
  // Configuración para transformaciones
  transformConfig: {
    // Usar menos puntos de interpolación para mejor rendimiento
    interpolationPoints: {
      low: 2,    // Para dispositivos lentos
      medium: 3, // Para dispositivos medios
      high: 4,   // Para dispositivos rápidos
    },
    
    // Reducir la complejidad de las animaciones
    complexity: {
      low: {
        scale: [0, 1],
        opacity: [0, 1],
        rotate: [0, 2],
      },
      medium: {
        scale: [0, 0.5, 1],
        opacity: [0, 0.5, 1],
        rotate: [0, 2.5],
      },
      high: {
        scale: [0, 0.3, 0.6, 1],
        opacity: [0, 0.1, 0.9, 1],
        rotate: [0, 5],
      },
    },
  },
  
  // Configuración para el shader MeshGradient
  shaderConfig: {
    // Velocidades optimizadas según el rendimiento
    speeds: {
      low: 0.0002,      // Para dispositivos lentos
      medium: 0.00035,  // Para dispositivos medios
      high: 0.0005,     // Para dispositivos rápidos
    },
    
    // Reducir la complejidad del shader en dispositivos lentos
    complexity: {
      low: {
        colors: ["#1e40af", "#3b82f6", "#60a5fa"], // Menos colores
        resolution: 0.8, // Resolución reducida
      },
      medium: {
        colors: ["#1e40af", "#3b82f6", "#60a5fa", "#dbeafe"],
        resolution: 1.0,
      },
      high: {
        colors: ["#1e40af", "#3b82f6", "#60a5fa", "#dbeafe"],
        resolution: 1.2,
      },
    },
  },
  
  // Configuración para partículas
  particlesConfig: {
    // Reducir el número de partículas en dispositivos lentos
    count: {
      low: 1,     // Solo 1 partícula
      medium: 2,  // 2 partículas
      high: 3,    // 3 partículas (original)
    },
    
    // Optimizar las animaciones CSS
    animation: {
      duration: {
        low: 4,    // Más lento para menos carga
        medium: 3.5,
        high: 3,
      },
      easing: "ease-in-out",
    },
  },
  
  // Detección de rendimiento
  performanceDetection: {
    // Umbrales para clasificar dispositivos
    thresholds: {
      memory: 4,        // GB de RAM
      cores: 4,         // Número de cores
      connection: "3g", // Tipo de conexión
    },
    
    // Indicadores de dispositivo lento
    slowDeviceIndicators: [
      "mobile",
      "tablet",
      "low-memory",
      "low-cores",
      "slow-connection",
      "prefers-reduced-motion",
    ],
  },
};

/**
 * Función para determinar la configuración según el rendimiento del dispositivo
 */
export const getPerformanceConfig = () => {
  const memory = (navigator as any).deviceMemory;
  const cores = (navigator as any).hardwareConcurrency;
  const connection = (navigator as any).connection;
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  // Detectar dispositivo móvil
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  
  // Clasificar el rendimiento
  if (prefersReducedMotion || isMobile || (memory && memory < 4) || (cores && cores < 4)) {
    return 'low';
  } else if ((memory && memory < 8) || (cores && cores < 6)) {
    return 'medium';
  } else {
    return 'high';
  }
};

/**
 * Función para obtener la configuración optimizada
 */
export const getOptimizedConfig = () => {
  const performance = getPerformanceConfig();
  
  return {
    transition: framerMotionConfig.defaultTransition,
    scroll: framerMotionConfig.scrollConfig,
    transform: framerMotionConfig.transformConfig.complexity[performance],
    shader: {
      speed: framerMotionConfig.shaderConfig.speeds[performance],
      complexity: framerMotionConfig.shaderConfig.complexity[performance],
    },
    particles: {
      count: framerMotionConfig.particlesConfig.count[performance],
      animation: framerMotionConfig.particlesConfig.animation,
    },
  };
};
