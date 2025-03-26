const expand = document.getElementById('expand');
expand.innerHTML = '<button onclick="mostrarMais()">Mostrar Mais</button><p id="mais"></p>';

function mostrarMais() {
    const mais = document.getElementById('mais');
    if (mais.innerHTML === '') {
        mais.innerHTML = 'Além da programação, gosto de jogos, tecnologia e estou sempre buscando aprender coisas novas!';
    } else {
        mais.innerHTML = '';
    }
}

// Inicialização das animações
document.addEventListener('DOMContentLoaded', () => {
    // Animação de scroll
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate__animated', 'animate__fadeInUp');
            }
        });
    }, observerOptions);

    // Observar todas as seções
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });

    // Animação das barras de progresso
    const progressBars = document.querySelectorAll('.progress');
    const progressObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.width = entry.target.getAttribute('data-width') || '0%';
            }
        });
    }, { threshold: 0.5 });

    progressBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        bar.setAttribute('data-width', width);
        progressObserver.observe(bar);
    });

    // Efeito de hover nos cards
    document.querySelectorAll('.goal-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });

    // Efeito de hover nos detalhes
    document.querySelectorAll('.detail-item').forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'translateY(-5px)';
        });
        item.addEventListener('mouseleave', () => {
            item.style.transform = 'translateY(0)';
        });
    });

    // Efeito de parallax no header
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        const scrolled = window.pageYOffset;
        header.style.backgroundPositionY = scrolled * 0.5 + 'px';
    });

    // Animação da timeline
    const timelineItems = document.querySelectorAll('.timeline-item');
    const timelineObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate__animated', 'animate__fadeInRight');
            }
        });
    }, { threshold: 0.3 });

    timelineItems.forEach(item => {
        timelineObserver.observe(item);
    });
});

// Função para rolar suavemente para as seções
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Adicionar eventos de clique nos links de navegação
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const sectionId = this.getAttribute('href').substring(1);
        scrollToSection(sectionId);
    });
});