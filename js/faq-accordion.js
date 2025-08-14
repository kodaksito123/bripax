document.addEventListener('DOMContentLoaded', function() {
    const faqButtons = document.querySelectorAll('.faq-question');
    
    // FAQ functionality
    faqButtons.forEach(button => {
        button.addEventListener('click', function() {
            const icon = this.querySelector('.faq-icon');
            const answer = this.nextElementSibling;
            
            // Toggle icon rotation
            icon.classList.toggle('open');
            
            // Toggle answer visibility with smooth animation
            answer.classList.toggle('open');
        });
    });
});