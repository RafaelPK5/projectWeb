document.querySelectorAll('.experiencia').forEach(exp => {
    exp.innerHTML += '<button onclick="expandir(this)">Mais Detalhes</button><p class="detalhes"></p>';
});

function expandir(btn) {
    const detalhes = btn.nextElementSibling;
    if (detalhes.innerHTML === '') {
        if (btn.parentElement.querySelector('h3').textContent.includes('Back-End')) {
            detalhes.innerHTML = 'Nesse projeto, configurei um servidor local com Node.js e criei endpoints para CRUD completo.';
        } else {
            detalhes.innerHTML = 'Aprendi de forma autodidata assistindo cursos online e aplicando em projetos práticos.';
        }
    } else {
        detalhes.innerHTML = '';
    }
}