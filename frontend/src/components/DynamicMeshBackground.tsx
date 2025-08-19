import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { MeshGradient } from "@paper-design/shaders-react";
import { useMemo, useCallback, useEffect, useState } from "react";
import { getOptimizedConfig, getPerformanceConfig } from "../lib/framerMotionConfig";
import { usePerformanceMonitor } from "../hooks/usePerformanceMonitor";
import "./DynamicMeshBackground.css";

/**
 * Hook personalizado para throttling del scroll optimizado
 */
const useThrottledScroll = (throttleMs: number = 32) => {
  const [throttledScrollY, setThrottledScrollY] = useState(0);
  
  useEffect(() => {
    let ticking = false;
    let lastScrollY = 0;
    
    const updateScroll = () => {
      const currentScrollY = window.scrollY;
      // Solo actualizar si hay cambio significativo (más de 1px)
      if (Math.abs(currentScrollY - lastScrollY) > 1) {
        setThrottledScrollY(currentScrollY);
        lastScrollY = currentScrollY;
      }
      ticking = false;
    };
    
    const throttledUpdate = () => {
      if (!ticking) {
        requestAnimationFrame(updateScroll);
        ticking = true;
      }
    };
    
    window.addEventListener('scroll', throttledUpdate, { passive: true });
    return () => window.removeEventListener('scroll', throttledUpdate);
  }, [throttleMs]);
  
  return throttledScrollY;
};

/**
 * Componente de fondo MeshGradient optimizado para rendimiento
 * Mantiene la misma apariencia visual pero con mejor rendimiento
 */
const DynamicMeshBackground = () => {
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  
  // Monitorear rendimiento en tiempo real
  const { fps, isLowPerformance: realTimeLowPerformance, getOptimizedSettings } = usePerformanceMonitor();
  
  // Obtener configuración optimizada según el rendimiento del dispositivo
  const config = useMemo(() => getOptimizedConfig(), []);
  const performanceLevel = useMemo(() => getPerformanceConfig(), []);
  
  // Combinar detección estática y monitoreo en tiempo real
  const finalPerformanceLevel = realTimeLowPerformance ? 'low' : performanceLevel;
  const realTimeSettings = getOptimizedSettings();
  
  // Usar throttling optimizado según el rendimiento real
  const throttleMs = prefersReducedMotion ? 1000 : realTimeSettings.throttle;
  const throttledScrollY = useThrottledScroll(throttleMs);
  
  // Optimizar las transformaciones según el rendimiento real
  const scale = useTransform(
    scrollYProgress,
    config.transform.scale,
    [1, 1.05, 1.08]
  );

  const opacity = useTransform(
    scrollYProgress,
    config.transform.opacity,
    [0.9, 1, 0.9]
  );

  const rotate = useTransform(
    scrollYProgress, 
    [0, 1], 
    [0, config.transform.rotate[1]]
  );

  // Optimizar el filtro según el rendimiento real
  const filterTransform = useTransform(
    scrollYProgress,
    finalPerformanceLevel === 'low' ? [0, 0.5, 1] : [0, 0.33, 0.66, 1],
    finalPerformanceLevel === 'low' 
      ? [
          "hue-rotate(0deg) saturate(1.0)",
          "hue-rotate(8deg) saturate(1.05)",
          "hue-rotate(0deg) saturate(1.0)",
        ]
      : [
          "hue-rotate(0deg) saturate(1.05)",
          "hue-rotate(8deg) saturate(1.1)",
          "hue-rotate(8deg) saturate(1.05)",
          "hue-rotate(0deg) saturate(1.0)",
        ]
  );

  // Optimizar el overlay según el rendimiento real
  const overlayTransform = useTransform(
    scrollYProgress,
    finalPerformanceLevel === 'low' ? [0, 0.5, 1] : [0, 0.33, 0.66, 1],
    finalPerformanceLevel === 'low'
      ? [
          "radial-gradient(circle at 20% 30%, rgba(30, 64, 175, 0.05) 0%, transparent 60%)",
          "radial-gradient(circle at 70% 20%, rgba(59, 130, 246, 0.08) 0%, transparent 60%)",
          "radial-gradient(circle at 20% 30%, rgba(30, 64, 175, 0.05) 0%, transparent 60%)",
        ]
      : [
          "radial-gradient(circle at 20% 30%, rgba(30, 64, 175, 0.05) 0%, transparent 60%)",
          "radial-gradient(circle at 70% 20%, rgba(59, 130, 246, 0.08) 0%, transparent 60%)",
          "radial-gradient(circle at 80% 60%, rgba(30, 64, 175, 0.1) 0%, transparent 60%)",
          "radial-gradient(circle at 50% 40%, rgba(59, 130, 246, 0.05) 0%, transparent 60%)",
        ]
  );

  // Optimizar la opacidad de las partículas según el rendimiento real
  const particlesOpacity = useTransform(
    scrollYProgress,
    config.transform.opacity,
    [0, 0.6, 0.8]
  );

  // Memoizar las transformaciones para evitar recálculos innecesarios
  const memoizedTransforms = useMemo(() => ({
    scale,
    opacity,
    rotate,
    filter: filterTransform,
    overlay: overlayTransform,
    particles: particlesOpacity
  }), [scale, opacity, rotate, filterTransform, overlayTransform, particlesOpacity]);

  // Callback optimizado para el renderizado
  const handleRender = useCallback(() => {
    // Forzar un solo frame de renderizado por actualización
    requestAnimationFrame(() => {
      // El renderizado se hace automáticamente por Framer Motion
    });
  }, []);

  // Renderizar partículas según el rendimiento real
  const renderParticles = () => {
    // Usar configuración en tiempo real si está disponible
    const particleCount = realTimeSettings.particleCount;
    const animationDuration = config.particles.animation.duration[finalPerformanceLevel];
    
    if (particleCount === 0 || !realTimeSettings.enableParticles) return null;
    
    const particles = [];
    const positions = [
      { top: '1/4', left: '1/4', size: 'w-2 h-2', delay: '' },
      { top: '3/4', right: '1/3', size: 'w-1 h-1', delay: 'delay-1000' },
      { top: 'bottom-1/3', left: '2/3', size: 'w-3 h-3', delay: 'delay-500' }
    ];
    
    for (let i = 0; i < particleCount; i++) {
      const pos = positions[i];
      particles.push(
        <div 
          key={i}
          className={`absolute ${pos.top} ${pos.left || pos.right} ${pos.size} bg-white/20 rounded-full blur-sm animate-pulse ${pos.delay} optimized-particle hardware-accelerated`} 
          style={{animationDuration: `${animationDuration}s`}}
        />
      );
    }
    
    return particles;
  };

  // Configuración de transiciones optimizada según el rendimiento real
  const optimizedTransition = useMemo(() => ({
    ...config.transition,
    duration: realTimeSettings.transitionDuration,
  }), [config.transition, realTimeSettings.transitionDuration]);

  return (
    <motion.div
      className="fixed inset-0 -z-10 overflow-hidden hardware-accelerated"
      style={{
        scale: memoizedTransforms.scale,
        opacity: memoizedTransforms.opacity,
        rotate: memoizedTransforms.rotate,
      }}
      onUpdate={handleRender}
      transition={optimizedTransition}
    >
      <motion.div
        className="w-full h-full mesh-gradient-optimized"
        style={{
          filter: memoizedTransforms.filter,
        }}
        transition={{
          ...optimizedTransition,
          duration: 0.15,
        }}
      >
        <MeshGradient
          colors={config.shader.complexity.colors}
          className="w-full h-[120%]"
          speed={realTimeSettings.shaderSpeed}
        />
      </motion.div>

      {/* Overlay dinámico optimizado */}
      <motion.div
        className="absolute inset-0 pointer-events-none overlay-optimized"
        style={{
          background: memoizedTransforms.overlay,
          mixBlendMode: "multiply",
        }}
        transition={{
          ...optimizedTransition,
          duration: 0.2,
        }}
      />

      {/* Partículas optimizadas según el rendimiento real */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: memoizedTransforms.particles,
        }}
        transition={{
          ...optimizedTransition,
          duration: 0.25,
        }}
      >
        {renderParticles()}
      </motion.div>
      
      {/* Indicador de rendimiento (solo en desarrollo) */}
      {import.meta.env.DEV && (
        <div className="fixed top-4 right-4 bg-black/50 text-white px-2 py-1 rounded text-xs z-50">
          FPS: {fps} | Level: {finalPerformanceLevel}
        </div>
      )}
    </motion.div>
  );
};

export default DynamicMeshBackground;
