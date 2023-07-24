// Adicione um evento de clique ao botão
document.getElementById('btnHOME').addEventListener('click', function() {
    var home = document.getElementById('home');

    // Se o menu estiver oculto, exibe-o
    if (home.style.display === 'none') {
        home.style.display = 'block';
    } else {
        // Caso contrário, oculta o menu
        home.style.display = 'none';
    }
});