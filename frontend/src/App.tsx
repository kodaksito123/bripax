import { motion } from "framer-motion";
import { MeshGradient } from "@paper-design/shaders-react";
import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import CertificationsSection from "./components/CertificationsSection";
import FaqAccordion from "./components/FaqAccordion";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

function App() {
  // Configuración de animación escalonada
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.0,
        ease: [0.4, 0.0, 0.2, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <>
      {/* Fondo animado con MeshGradient */}
      <div className="fixed inset-0 -z-10">
        <MeshGradient
colors={["#ffffff", "#3b82f6", "#172554", "#ffffff"]}
className="w-full h-full opacity-20"
        />
      </div>

      <motion.main
        className="max-w-7xl mx-auto px-6 lg:px-8 py-12 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="">
          <motion.div variants={itemVariants}>
            <Navigation />
          </motion.div>
          <motion.div variants={itemVariants}>
            <HeroSection />
          </motion.div>
          <motion.div variants={itemVariants}>
            <AboutSection />
          </motion.div>
          <motion.div variants={itemVariants}>
            <ServicesSection />
          </motion.div>
          <motion.div variants={itemVariants}>
            <CertificationsSection />
          </motion.div>
          <motion.div variants={itemVariants}>
            <FaqAccordion />
          </motion.div>
          <motion.div variants={itemVariants}>
            <Footer />
          </motion.div>
        </div>
      </motion.main>

      {/* Botón flotante de WhatsApp */}
      <WhatsAppButton />
    </>
  );
}

export default App;
