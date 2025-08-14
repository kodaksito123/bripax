document.addEventListener('DOMContentLoaded', function() {
    // --- WhatsApp Button Logic ---
    const whatsappBtn = document.querySelector('.whatsapp-float');
    const header = document.querySelector('header');

    if (whatsappBtn && header) {
        // WhatsApp button visibility based on scroll position
        function toggleWhatsAppButton() {
            const headerRect = header.getBoundingClientRect();
            const headerBottom = headerRect.bottom;
            
            // Show WhatsApp button when header is not visible (scrolled past header)
            if (headerBottom < 0) {
                whatsappBtn.classList.add('show');
            } else {
                whatsappBtn.classList.remove('show');
            }
        }
        
        // Initial check
        toggleWhatsAppButton();
        
        // Check on scroll
        window.addEventListener('scroll', toggleWhatsAppButton);
    }

    // --- Mobile Menu Toggle Logic ---
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (navToggle && navMenu) {
        const navLinks = navMenu.querySelectorAll('.nav-link');
        const navbarToggler = navToggle.querySelector('.navbar-toggler');

        function closeMenu() {
            navMenu.classList.remove('open');
            navbarToggler.classList.remove('open');
            document.body.classList.remove('no-scroll');
            navToggle.setAttribute('aria-expanded', 'false');
        }

        function openMenu() {
            navMenu.classList.add('open');
            navbarToggler.classList.add('open');
            document.body.classList.add('no-scroll');
            navToggle.setAttribute('aria-expanded', 'true');
        }

        navToggle.addEventListener('click', function() {
            const isOpen = navMenu.classList.contains('open');
            if (isOpen) {
                closeMenu();
            } else {
                openMenu();
            }
        });

        // Cierra el menú al hacer clic en un enlace (solo en móvil)
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth < 640) { // Breakpoint 'sm' de Tailwind
                    closeMenu();
                }
            });
        });
    }
});