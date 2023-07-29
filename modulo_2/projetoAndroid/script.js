// Adicione um evento de clique ao botão
document.getElementById('btnHOME').addEventListener('click', function () {
    var home = document.getElementById('homeConteudo');

    // Se o menu estiver oculto, exibe-o
    if (home.style.display === 'none') {
        home.style.display = 'block';
    } else {
        // Caso contrário, oculta o menu
        home.style.display = 'none';
        // }
    }
});

document.getElementById('btnNoticias').addEventListener('click', function () {
    var noticias = document.getElementById('noticiasConteudo')

    if (noticias.style.display === 'none') {
        noticias.style.display = 'block'
    } else {
        noticias.style.display = 'none'
    }
})

document.getElementById('btnCuriosidades').addEventListener('click', function () {
    var curiosidades = document.getElementById('curiosidadesConteudo')

    if (curiosidades.style.display === 'none') {
        curiosidades.style.display = 'block'
    } else {
        curiosidades.style.display = 'none'
    }
})

document.getElementById('btnFaleConosco').addEventListener('click', function () {
    var faleConosco = document.getElementById('faleConoscoConteudo')

    if (faleConosco.style.display === 'none') {
        faleConosco.style.display = 'block'
    } else {
        faleConosco.style.display = 'none'
    }
})