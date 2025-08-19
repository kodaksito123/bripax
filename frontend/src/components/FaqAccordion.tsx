import React, { useState } from "react";

/**
 * Interfaz para los elementos de FAQ
 */
interface FaqItem {
  question: string;
  answer: string;
}

/**
 * Componente FAQ Accordion de Bripax
 *
 * @description
 * Componente interactivo tipo acordeón que presenta preguntas frecuentes:
 * - Preguntas y respuestas sobre servicios contables
 * - Funcionalidad de acordeón (solo una pregunta abierta a la vez)
 * - Animaciones suaves de apertura/cierre
 * - Iconos rotativos para indicar estado
 *
 * @features
 * - Estado local con useState para manejo de acordeón
 * - Solo permite una pregunta abierta simultáneamente
 * - Animaciones CSS con transiciones suaves
 * - Iconos FontAwesome con rotación en estados
 * - Separador visual section-divider
 * - Tipografía jerárquica y accesible
 *
 * @state
 * - openItem: number | null - Índice del elemento actualmente abierto
 *
 * @data
 * - faqData: Array de objetos FaqItem con preguntas y respuestas
 * - 4 preguntas principales sobre servicios y contacto
 *
 * @interactions
 * - Click en pregunta: abre/cierra la respuesta
 * - Auto-cierre: al abrir una nueva, se cierra la anterior
 * - Indicadores visuales: iconos rotativos
 *
 * @accessibility
 * - ID "faq" para navegación por anclas
 * - Estructura semántica con buttons apropiados
 * - Estados visuales claros
 *
 * @returns {JSX.Element} Sección FAQ completa con acordeón funcional
 *
 * @example
 * ```tsx
 * <FaqAccordion />
 * ```
 */
const FaqAccordion: React.FC = () => {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const faqData: FaqItem[] = [
    {
      question: "¿Por qué elegirnos como tu consultora contable?",
      answer:
        "Bripax ofrece servicios de contabilidad profesional con años de experiencia. Nuestros contadores expertos brindan consultoría fiscal personalizada y auditoría confiable para empresas en Chile.",
    },
    {
      question: "¿Qué servicios de contabilidad ofrecemos?",
      answer:
        "Bripax ofrece servicios completos de: contabilidad y teneduría de libros, auditoría contable, consultoría fiscal, estados financieros, y asesoría tributaria especializada para empresas.",
    },
    {
      question: "¿Cómo puedes contactarnos?",
      answer:
        "Puedes contactar a Bripax consultora contable a través de WhatsApp +56 9 8768 8766 o email consultora@bripaxspa.com. Ofrecemos consultas gratuitas para evaluar tus necesidades contables.",
    },
    {
      question: "¿Qué garantías ofrecemos?",
      answer:
        "Bripax garantiza servicios contables confiables, cumplimiento normativo SII, confidencialidad total de la información y atención personalizada. Respaldamos nuestro trabajo con profesionalismo y experiencia comprobada.",
    },
  ];

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <>
      {/* Section Divider */}
      <div className="section-divider"></div>

      {/* FAQ Section */}
      <section id="faq" className="mt-[200px] mb-[200px]">
        <div className="text-center mb-12">
          <h2 className="section-title text-slate-900">
            Preguntas <span className="gradient-text-modern">Frecuentes</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          {faqData.map((item, index) => (
            <div key={index} className="faq-item">
              <button
                className="faq-question"
                type="button"
                onClick={() => toggleItem(index)}
              >
                <span>{item.question}</span>
                <i
                  className={`fas fa-chevron-down text-[#2563eb] faq-icon ${
                    openItem === index ? "open" : ""
                  }`}
                ></i>
              </button>
              <div className={`faq-answer ${openItem === index ? "open" : ""}`}>
                <p className="text-slate-600 font-geist">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default FaqAccordion;
