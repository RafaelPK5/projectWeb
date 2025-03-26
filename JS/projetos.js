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

    document.querySelectorAll('.project-card').forEach(card => {
        observer.observe(card);
    });

    // Efeito de hover nos cards
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });

    // Efeito de hover nas tags de tecnologia
    document.querySelectorAll('.tech-tag').forEach(tag => {
        tag.addEventListener('mouseenter', () => {
            tag.style.transform = 'scale(1.1)';
            tag.style.backgroundColor = '#005b8c';
        });
        tag.addEventListener('mouseleave', () => {
            tag.style.transform = 'scale(1)';
            tag.style.backgroundColor = '';
        });
    });

    // Efeito de hover nos links de projeto
    document.querySelectorAll('.project-link').forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.style.transform = 'scale(1.2) rotate(5deg)';
        });
        link.addEventListener('mouseleave', () => {
            link.style.transform = 'scale(1) rotate(0deg)';
        });
    });

    // Efeito de parallax no header
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        const scrolled = window.pageYOffset;
        header.style.backgroundPositionY = scrolled * 0.5 + 'px';
    });
});

// Função para mostrar detalhes do projeto
function showProjectDetails(projectId) {
    const project = document.querySelector(`#${projectId}`);
    const details = project.querySelector('.project-features');
    
    if (details.style.maxHeight) {
        details.style.maxHeight = null;
        project.classList.remove('expanded');
    } else {
        details.style.maxHeight = details.scrollHeight + "px";
        project.classList.add('expanded');
    }
}

// Função para filtrar projetos por tecnologia
function filterProjects(tech) {
    const projects = document.querySelectorAll('.project-card');
    projects.forEach(project => {
        const techTags = project.querySelectorAll('.tech-tag');
        const hasTech = Array.from(techTags).some(tag => tag.textContent === tech);
        project.style.display = hasTech ? 'block' : 'none';
    });
}

document.getElementById('poke').addEventListener('click', () => {
    const desc = document.getElementById('pokedesc');
    if (!desc.innerHTML.includes('Confira o repositório')) {
        desc.innerHTML += '<br>Confira o repositório para ver o código-fonte e testar as rotas da API!';
    }
});