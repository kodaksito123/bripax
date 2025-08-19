import { motion, useScroll, useTransform } from "framer-motion";
import { MeshGradient } from "@paper-design/shaders-react";

/**
 * Componente de fondo MeshGradient con efectos parallax dinámicos
 * Los colores y propiedades del shader cambian según el scroll
 */
const DynamicMeshBackground = () => {
  const { scrollYProgress } = useScroll();

  // Escala para el zoom dinámico del shader
  const scale = useTransform(
    scrollYProgress,
    [0, 0.3, 0.6, 1],
    [1, 1.05, 1.02, 1.08]
  );

  // Opacidad para transiciones suaves
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.1, 0.9, 1],
    [0.9, 1, 1, 0.9]
  );

  // Rotación sutil del fondo
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 5]);

  return (
    <motion.div
      className="fixed inset-0 -z-10 overflow-hidden"
      style={{
        scale,
        opacity,
        rotate,
      }}
    >
      <motion.div
        className="w-full h-full"
        style={{
          filter: useTransform(
            scrollYProgress,
            [0, 0.2, 0.4, 0.6, 0.8, 1],
            [
              "hue-rotate(0deg) saturate(1.05)",
              "hue-rotate(8deg) saturate(1.1)",
              "hue-rotate(15deg) saturate(1.0)",
              "hue-rotate(8deg) saturate(1.05)",
              "hue-rotate(0deg) saturate(1.0)",
              "hue-rotate(-8deg) saturate(1.05)",
            ]
          ),
        }}
      >
        <MeshGradient
          colors={["#1e40af", "#3b82f6", "#60a5fa", "#dbeafe"]}
          className="w-full h-[120%]"
          speed={0.0005}
        />
      </motion.div>

      {/* Overlay dinámico que cambia con el scroll */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: useTransform(
            scrollYProgress,
            [0, 0.2, 0.4, 0.6, 0.8, 1],
            [
              "radial-gradient(circle at 20% 30%, rgba(30, 64, 175, 0.05) 0%, transparent 60%)",
              "radial-gradient(circle at 70% 20%, rgba(59, 130, 246, 0.08) 0%, transparent 60%)",
              "radial-gradient(circle at 30% 80%, rgba(96, 165, 250, 0.06) 0%, transparent 60%)",
              "radial-gradient(circle at 80% 60%, rgba(30, 64, 175, 0.1) 0%, transparent 60%)",
              "radial-gradient(circle at 50% 40%, rgba(59, 130, 246, 0.05) 0%, transparent 60%)",
              "radial-gradient(circle at 60% 70%, rgba(96, 165, 250, 0.08) 0%, transparent 60%)",
            ]
          ),
          mixBlendMode: "multiply",
        }}
      />

      {/* Partículas sutiles que aparecen y desaparecen */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: useTransform(
            scrollYProgress,
            [0, 0.3, 0.7, 1],
            [0, 0.6, 0.4, 0.8]
          ),
        }}
      >
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/20 rounded-full blur-sm animate-pulse" style={{animationDuration: '3s'}}></div>
        <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-white/30 rounded-full blur-sm animate-pulse delay-1000" style={{animationDuration: '4s'}}></div>
        <div className="absolute bottom-1/3 left-2/3 w-3 h-3 bg-white/15 rounded-full blur-md animate-pulse delay-500" style={{animationDuration: '3.5s'}}></div>
      </motion.div>
    </motion.div>
  );
};

export default DynamicMeshBackground;
