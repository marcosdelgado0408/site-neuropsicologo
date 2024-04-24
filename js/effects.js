$(document).ready(function() {
    $(window).on('beforeunload', function() {
        $(window).scrollTop(0);
    });
});

$(document).ready(function() {
    // Aplica o efeito de fade in ao elemento <main> quando a página carrega
    $('main').fadeIn(2000); // 1000 milissegundos (1 segundo) para o fade in
});


$(document).ready(function(){
    // Selecione todos os links com hashtags
    $('a[href*="#"]').on('click', function(e) {
        // Prevenção do comportamento padrão do link
        e.preventDefault();

        // Obtenha o destino do link
        var target = $(this.hash);
        if (target.length) {
            // Anime o scroll até o destino
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 1500);  // Ajuste o tempo aqui para fazer o scroll mais rápido ou mais lento
        }
    });
});
