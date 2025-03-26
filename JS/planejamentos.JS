document.addEventListener('DOMContentLoaded', () => {
    // Inicializa as animações
    const cards = document.querySelectorAll('.topic-card');
    cards.forEach(card => {
        card.classList.add('animate__animated', 'animate__fadeInUp');
    });

    // Adiciona efeito de hover nos cards
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });
});

// Adiciona efeito de parallax no header
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    const scrolled = window.pageYOffset;
    header.style.backgroundPositionY = scrolled * 0.5 + 'px';
});