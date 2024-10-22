document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider');
    const images = slider.querySelectorAll('img');
    let currentIndex = 0;

    function showNextImage() {
        images.forEach((img, index) => {
            img.style.transform = `translateX(${(index - currentIndex) * 100}%)`;
        });
        currentIndex = (currentIndex + 1) % images.length;
    }

    setInterval(showNextImage, 3000);

    const sections = document.querySelectorAll('section');
    const options = {
        root: null,
        threshold: 0.1,
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });
});

