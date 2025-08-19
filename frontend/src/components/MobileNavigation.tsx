import React, { useState } from "react";
import { Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

/**
 * Componente de navegación móvil para Bripax
 * 
 * @description
 * Menú desplegable móvil que reemplaza la navegación tradicional en pantallas pequeñas:
 * - Botón de hamburguesa con icono de menú
 * - Dropdown menu con enlaces de navegación
 * - Estilo consistente con el diseño de la página
 * - Animaciones suaves y transiciones
 * 
 * @features
 * - Dropdown menu responsive
 * - Enlaces a todas las secciones principales
 * - Estilo liquid glass consistente
 * - Iconos de Lucide React
 * - Animaciones de entrada/salida
 * 
 * @returns {JSX.Element} Componente de navegación móvil
 */
const MobileNavigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigation = (sectionId: string) => {
    // Agregar un pequeño delay para asegurar que el menú se cierre antes del scroll
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
    setIsOpen(false); // Cerrar el menú después de navegar
  };

  return (
    <div className="md:hidden">
      <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
        <DropdownMenuTrigger asChild>
                     <button className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/40 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.2)] shadow-inner hover:bg-white/60 transition-all duration-300">
            <Menu className="w-5 h-5 text-slate-700" />
          </button>
        </DropdownMenuTrigger>
        
                 <DropdownMenuContent 
           className="w-64 bg-white/20 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.2)] shadow-inner rounded-xl p-2 mt-2"
           sideOffset={8}
           align="end"
         >
                     <div className="p-2">
             <DropdownMenuItem 
               className="rounded-lg hover:bg-blue-50 transition-colors duration-200 cursor-pointer"
               onClick={() => handleNavigation('about')}
             >
               <div className="flex items-center gap-3 px-3 py-2 text-slate-700">
                 <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                 ¿Quiénes Somos?
               </div>
             </DropdownMenuItem>
             
             <DropdownMenuItem 
               className="rounded-lg hover:bg-blue-50 transition-colors duration-200 cursor-pointer"
               onClick={() => handleNavigation('services')}
             >
               <div className="flex items-center gap-3 px-3 py-2 text-slate-700">
                 <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                 Servicios
               </div>
             </DropdownMenuItem>
             
             <DropdownMenuItem 
               className="rounded-lg hover:bg-blue-50 transition-colors duration-200 cursor-pointer"
               onClick={() => handleNavigation('certifications')}
             >
               <div className="flex items-center gap-3 px-3 py-2 text-slate-700">
                 <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                 Certificaciones
               </div>
             </DropdownMenuItem>
             
             <DropdownMenuItem 
               className="rounded-lg hover:bg-blue-50 transition-colors duration-200 cursor-pointer"
               onClick={() => handleNavigation('faq')}
             >
               <div className="flex items-center gap-3 px-3 py-2 text-slate-700">
                 <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                 FAQ
               </div>
             </DropdownMenuItem>
             
             <DropdownMenuSeparator className="my-2 bg-slate-200" />
             
             <DropdownMenuItem 
               className="rounded-lg hover:bg-blue-50 transition-colors duration-200 cursor-pointer"
               onClick={() => handleNavigation('footer-contact')}
             >
               <div className="flex items-center gap-3 px-3 py-2">
                 <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                 <span className="gradient-text-modern font-semibold">Cotizar Gratis</span>
               </div>
             </DropdownMenuItem>
           </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default MobileNavigation;
