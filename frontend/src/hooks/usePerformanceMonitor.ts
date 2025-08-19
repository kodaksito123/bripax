import { useState, useEffect, useCallback } from 'react';

/**
 * Hook para monitorear el rendimiento en tiempo real
 * Ajusta automáticamente la configuración según el FPS
 */
export const usePerformanceMonitor = () => {
  const [fps, setFps] = useState(60);
  const [isLowPerformance, setIsLowPerformance] = useState(false);
  const [frameCount, setFrameCount] = useState(0);
  const [lastTime, setLastTime] = useState(performance.now());

  // Calcular FPS
  const calculateFPS = useCallback(() => {
    const currentTime = performance.now();
    const deltaTime = currentTime - lastTime;
    
    if (deltaTime >= 1000) { // Cada segundo
      const currentFPS = Math.round((frameCount * 1000) / deltaTime);
      setFps(currentFPS);
      
      // Ajustar configuración según el FPS
      if (currentFPS < 30) {
        setIsLowPerformance(true);
      } else if (currentFPS > 45) {
        setIsLowPerformance(false);
      }
      
      setFrameCount(0);
      setLastTime(currentTime);
    }
    
    setFrameCount(prev => prev + 1);
  }, [frameCount, lastTime]);

  // Monitorear el rendimiento
  useEffect(() => {
    let animationId: number;
    
    const monitorPerformance = () => {
      calculateFPS();
      animationId = requestAnimationFrame(monitorPerformance);
    };
    
    animationId = requestAnimationFrame(monitorPerformance);
    
    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [calculateFPS]);

  // Detectar cambios en el rendimiento del dispositivo
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        // Pausar monitoreo cuando la pestaña no está visible
        setIsLowPerformance(true);
      }
    };

    const handleResize = () => {
      // Reducir rendimiento en pantallas pequeñas
      if (window.innerWidth < 768) {
        setIsLowPerformance(true);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('resize', handleResize);
    
    // Verificar tamaño inicial
    handleResize();
    
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Función para obtener la configuración optimizada según el rendimiento actual
  const getOptimizedSettings = useCallback(() => {
    if (isLowPerformance || fps < 30) {
      return {
        throttle: 64,        // 15fps
        particleCount: 1,    // Solo 1 partícula
        shaderSpeed: 0.0001, // Velocidad muy lenta
        transitionDuration: 0.3, // Transiciones más lentas
        enableParticles: false,  // Deshabilitar partículas
      };
    } else if (fps < 45) {
      return {
        throttle: 32,        // 30fps
        particleCount: 2,    // 2 partículas
        shaderSpeed: 0.0002, // Velocidad lenta
        transitionDuration: 0.2, // Transiciones medias
        enableParticles: true,
      };
    } else {
      return {
        throttle: 16,        // 60fps
        particleCount: 3,    // 3 partículas
        shaderSpeed: 0.0005, // Velocidad normal
        transitionDuration: 0.1, // Transiciones rápidas
        enableParticles: true,
      };
    }
  }, [isLowPerformance, fps]);

  return {
    fps,
    isLowPerformance,
    getOptimizedSettings,
    // Función para forzar modo de bajo rendimiento
    forceLowPerformance: () => setIsLowPerformance(true),
    // Función para restaurar rendimiento normal
    restorePerformance: () => setIsLowPerformance(false),
  };
};
