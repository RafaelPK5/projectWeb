// Função para visualizar o certificado em tamanho maior
function viewCertificate(imageSrc) {
    // Criar o modal se não existir
    let modal = document.getElementById('certificate-modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'certificate-modal';
        modal.className = 'certificate-modal';
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close-modal">&times;</span>
                <img src="" alt="Certificado">
            </div>
        `;
        document.body.appendChild(modal);

        // Adicionar evento para fechar o modal
        modal.querySelector('.close-modal').addEventListener('click', () => {
            modal.style.display = 'none';
        });

        // Fechar modal ao clicar fora da imagem
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    }

    // Atualizar a imagem e mostrar o modal
    modal.querySelector('img').src = imageSrc;
    modal.style.display = 'flex';
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

    // Efeito de hover nos cards
    document.querySelectorAll('.certificate-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });

    // Efeito de hover nos botões
    document.querySelectorAll('.view-certificate').forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.style.transform = 'scale(1.1)';
        });
        button.addEventListener('mouseleave', () => {
            button.style.transform = 'scale(1)';
        });
    });

    // Efeito de parallax no header
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        const scrolled = window.pageYOffset;
        header.style.backgroundPositionY = scrolled * 0.5 + 'px';
    });
});

// Adicionar eventos de clique nos botões de visualização
document.querySelectorAll('.view-certificate').forEach(button => {
    button.addEventListener('click', () => {
        const imageSrc = button.closest('.certificate-image').querySelector('img').src;
        viewCertificate(imageSrc);
    });
});