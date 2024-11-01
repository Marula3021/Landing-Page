// main.js
document.addEventListener('DOMContentLoaded', function() {
    const mediaContainers = document.querySelectorAll('.media-container');

    const checkMediaContainer = () => {
        const windowHeight = window.innerHeight;
        const scrollY = window.scrollY;

        mediaContainers.forEach((container, index) => {
            const containerTop = container.getBoundingClientRect().top + scrollY;
            const triggerPoint = scrollY + windowHeight - 100;

            if (triggerPoint > containerTop && containerTop > scrollY - 100) {
                setTimeout(() => {
                    container.classList.add('show');
                }, index * 130); // Stagger the animation based on index
            } else {
                container.classList.remove('show');
            }
        });
    };

    window.addEventListener('scroll', checkMediaContainer);
    window.addEventListener('load', checkMediaContainer);
});

document.addEventListener('DOMContentLoaded', function() {
    const heroSection = document.querySelector('.hero');
    setTimeout(() => {
        heroSection.classList.add('show');
    }, 100); // Delay to ensure DOM is fully loaded before applying animation
});
