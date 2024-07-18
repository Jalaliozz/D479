document.addEventListener('DOMContentLoaded', function() {
    // Form validation script
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function(event) {
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const arrivalDate = document.getElementById('arrival-date').value;
            const departureDate = document.getElementById('departure-date').value;

            if (!name || !email || !arrivalDate || !departureDate) {
                event.preventDefault();
                alert('Please fill in all required fields.');
            }
        });
    }

    // FAQ interactivity script
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        answer.style.display = 'none';
        question.addEventListener('click', () => {
            const isVisible = answer.style.display === 'block';
            answer.style.display = isVisible ? 'none' : 'block';
        });
    });

    // Carousel script
    const carouselItems = document.querySelectorAll('.carousel-item');
    const prevButton = document.querySelector('.carousel-control.prev');
    const nextButton = document.querySelector('.carousel-control.next');
    let currentIndex = 0;

    function showCarouselItem(index) {
        carouselItems.forEach((item, i) => {
            item.classList.toggle('active', i === index);
        });
    }

    function prevCarousel() {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : carouselItems.length - 1;
        showCarouselItem(currentIndex);
    }

    function nextCarousel() {
        currentIndex = (currentIndex < carouselItems.length - 1) ? currentIndex + 1 : 0;
        showCarouselItem(currentIndex);
    }

    if (prevButton && nextButton) {
        prevButton.addEventListener('click', prevCarousel);
        nextButton.addEventListener('click', nextCarousel);
    }
});