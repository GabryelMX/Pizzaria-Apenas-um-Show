document.getElementById('campo-busca').addEventListener('input', function() {
    const busca = this.value.toLowerCase();
    const linhas = document.querySelectorAll('#tabela tbody tr');

    linhas.forEach(linha => {
        const conteudoLinha = linha.textContent.toLowerCase();
        if (conteudoLinha.includes(busca)) {
            linha.style.display = '';
        } else {
            linha.style.display = 'none';
        }
    });
});
