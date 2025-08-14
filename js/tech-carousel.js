document.addEventListener('DOMContentLoaded', function() {
    const carouselContainer = document.querySelector('.tech-carousel-container');
    const carouselCards = document.querySelectorAll('.tech-carousel-card');
    const indicators = document.querySelectorAll('.tech-indicator');

    let currentIndex = 0;
    const totalCards = carouselCards.length;
    let autoRotateInterval;

    function showCard(index) {
        carouselCards.forEach(card => card.classList.remove('active'));
        indicators.forEach(indicator => indicator.classList.remove('active'));

        carouselCards[index].classList.add('active');
        indicators[index].classList.add('active');
    }

    function nextCard() {
        currentIndex = (currentIndex + 1) % totalCards;
        showCard(currentIndex);
    }

    function startAutoRotate() {
        stopAutoRotate(); 
        autoRotateInterval = setInterval(nextCard, 2000); 
    }

    function stopAutoRotate() {
        clearInterval(autoRotateInterval);
    }

    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            currentIndex = index;
            showCard(currentIndex);
            stopAutoRotate(); 
            startAutoRotate(); 
        });
    });

    carouselContainer.addEventListener('mouseenter', stopAutoRotate);
    carouselContainer.addEventListener('mouseleave', startAutoRotate);

    showCard(currentIndex); 
    startAutoRotate(); 
});