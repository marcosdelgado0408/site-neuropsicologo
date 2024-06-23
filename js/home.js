function showMoreLess() {
    var textoInicial = `Olá, sou Matheus Araújo, psicólogo especializado em neuropsicologia. 
    Ofereço meus serviços para lhe ajudar a compreender e trabalhar questões de 
    capacidades, comportamento, personalidades ou desenvolvimento prezando 
    pela melhoria da sua qualidade de vida.`;

    var adicionar = `<div style='display:none'><br><br>Meu objetivo é que ao final de nosso trabalho você consiga mais clareza 
    sobre as coisas que são importantes para você, e tenha um maior entendimento sobre suas qualidades e 
    capacidade, facilidades e dificuldades, lhe indicando quais são as melhores ferramentas para remediar 
    possíveis faltas, e estimular ainda mais suas boas habilidades.<br><br>Para isso, utilizo as técnicas da 
    Terapia Cognitiva Comportamental, e da grande variedade de testes neuropsicológicos e psicológicos a 
    minha disposição, a fim de proporcionar um atendimento prático e flexível, comprometido com a ética 
    profissional, pautado pela qualidade técnica, bom como a autenticidade e confiança na relação terapêutica. 
    Traçando estratégias que façam sentido para o cliente, sempre buscando o que lhe é melhor.</div>`;

    var texto = $("#texto_inicial");
    var botao = $("#mostrarMais");

    if (!texto.hasClass("expandido")) {
        texto.append(adicionar); // Adiciona o texto oculto
        texto.find("div").slideDown(500, function() {
            // Chamamos o ScrollTrigger.refresh() após a animação
            ScrollTrigger.refresh();
        }); // Animação slideDown
        texto.addClass("expandido");
        botao.text("Menos");
    } else {
        texto.find("div").slideUp(500, function() { // Animação slideUp com callback
            $(this).remove(); // Remove o texto adicional após a animação
            // Chamamos o ScrollTrigger.refresh() após a animação
            ScrollTrigger.refresh();
        });
        texto.removeClass("expandido");
        botao.text("Mais");
    }
}




document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector("#nav-menu");

    menuToggle.addEventListener("click", function() {
        navMenu.classList.toggle("active");
    });
});