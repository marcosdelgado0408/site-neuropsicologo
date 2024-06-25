// window.addEventListener('beforeunload', function() {
//     window.scrollTo(0, 0);
// });


document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href*="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const target = document.getElementById(targetId);
            if (target) {
                gsap.to(window, {duration: 1.5, scrollTo: {y: target.offsetTop}});
            }
        });
    });
});


 document.addEventListener("DOMContentLoaded", function() {
            gsap.registerPlugin(ScrollTrigger);

            const fadeElements = document.querySelectorAll('.fade');

            fadeElements.forEach(element => {
                gsap.fromTo(element, 
                    { opacity: 0 }, 
                    { 
                        opacity: 1, 
                        duration: 3,
                        scrollTrigger: {
                            trigger: element,
                            start: "top 90%",
                            end: "bottom 10%",
                            toggleActions: "play reverse play reverse",
                            markers: false // Defina como true para ver os pontos de início e fim dos triggers
                        }
                    }
                );
            });
        });




document.addEventListener("DOMContentLoaded", function() {
    gsap.registerPlugin(ScrollTrigger);

    // Função para criar animações de entrada e saída com temporizador
    function createFadeAnimation(element, direction) {
        const xValue = direction === 'left' ? -100 : 100;
        let enterTimeout;

        gsap.fromTo(element, 
            { opacity: 0, x: xValue }, 
            { 
                opacity: 1, 
                x: 0, 
                duration: 1,
                paused: true, // Pausa a animação até ser acionada manualmente
                scrollTrigger: {
                    trigger: element,
                    onEnter: () => {
                        // Inicia o temporizador de 1 segundo (1000 ms)
                        enterTimeout = setTimeout(() => {
                            gsap.to(element, { opacity: 1, x: 0, duration: 1 });
                        }, 300); // Ajuste o tempo conforme necessário
                    },
                    onLeave: () => {
                        // Limpa o temporizador se o elemento sair da viewport antes do tempo
                        clearTimeout(enterTimeout);
                        gsap.to(element, { opacity: 0, x: xValue, duration: 1 });
                    },
                    onEnterBack: () => {
                        // Inicia o temporizador de 1 segundo (1000 ms)
                        enterTimeout = setTimeout(() => {
                            gsap.to(element, { opacity: 1, x: 0, duration: 1 });
                        }, 300); // Ajuste o tempo conforme necessário
                    },
                    onLeaveBack: () => {
                        // Limpa o temporizador se o elemento sair da viewport antes do tempo
                        clearTimeout(enterTimeout);
                        gsap.to(element, { opacity: 0, x: xValue, duration: 1 });
                    },
                    markers: false // Defina como true para ver os pontos de início e fim dos triggers
                }
            }
        );
    }

    // Seleciona todos os elementos com a classe 'fade-left' e aplica a animação
    const fadeLeftElements = document.querySelectorAll('.fade-left');
    fadeLeftElements.forEach(element => {
        createFadeAnimation(element, 'left');
    });

    // Seleciona todos os elementos com a classe 'fade-right' e aplica a animação
    const fadeRightElements = document.querySelectorAll('.fade-right');
    fadeRightElements.forEach(element => {
        createFadeAnimation(element, 'right');
    });
});





