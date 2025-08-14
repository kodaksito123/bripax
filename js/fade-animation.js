document.addEventListener('DOMContentLoaded', () => {
    const fadeElements = document.querySelectorAll('.fade-element');

    function handleScrollFade() {
        requestAnimationFrame(() => {
            fadeElements.forEach(element => {
                const elementTop = element.getBoundingClientRect().top;
                const elementBottom = element.getBoundingClientRect().bottom;
                const windowHeight = window.innerHeight;

                if (elementTop < windowHeight * 0.9 && elementBottom > windowHeight * 0.1) {
                    element.classList.add('visible');
                } else {
                    element.classList.remove('visible');
                }
            });
        });
    }

    let ticking = false;
    function onScroll() {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                handleScrollFade();
                ticking = false;
            });
            ticking = true;
        }
    }

    handleScrollFade();

    window.addEventListener('scroll', onScroll);
    window.addEventListener('resize', onScroll);
});
