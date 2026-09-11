/* =========================================================
   LOGICDEV SYSTEM
   JAVASCRIPT DA LANDING PAGE
   ========================================================= */


/* =========================================================
   CONFIGURAÇÃO DO WHATSAPP
   ========================================================= */

/*
=========================================================
COLOQUE AQUI O NÚMERO DO WHATSAPP DA LOGICDEV.

FORMATO:

55 + DDD + NÚMERO

EXEMPLO:

5579999999999

NÃO USE:

+
()
espaços
-
=========================================================
*/

const NUMERO_WHATSAPP = "+5579988027759";


/* =========================================================
   BOTÕES DO WHATSAPP
   ========================================================= */

const botoesWhatsApp = document.querySelectorAll(
    "[data-whatsapp]"
);


botoesWhatsApp.forEach(function (botao) {

    botao.addEventListener("click", function (evento) {

        evento.preventDefault();


        /* Pega a mensagem definida no HTML */

        const mensagem =
            botao.getAttribute("data-whatsapp");


        /* Converte a mensagem para URL */

        const mensagemCodificada =
            encodeURIComponent(mensagem);


        /* Cria o link do WhatsApp */

        const linkWhatsApp =
            `https://wa.me/${NUMERO_WHATSAPP}?text=${mensagemCodificada}`;


        /* Abre o WhatsApp */

        window.open(
            linkWhatsApp,
            "_blank"
        );

    });

});



/* =========================================================
   AUTOPLAY DO VÍDEO
   ========================================================= */

const video =
    document.getElementById(
        "videoApresentacao"
    );


if (video) {

    /*
    Alguns navegadores bloqueiam
    autoplay até o vídeo ser carregado.
    */

    video.muted = true;


    video.play().catch(function () {

        console.log(
            "O navegador bloqueou o autoplay. O usuário pode iniciar o vídeo manualmente."
        );

    });

}



/* =========================================================
   PAUSA DO VÍDEO QUANDO SAI DA TELA
   ========================================================= */

if (video) {

    const observador =
        new IntersectionObserver(
            function (entries) {

                entries.forEach(
                    function (entry) {

                        if (entry.isIntersecting) {

                            video.play().catch(
                                function () {}
                            );

                        } else {

                            video.pause();

                        }

                    }
                );

            },
            {
                threshold: 0.25
            }
        );


    observador.observe(video);

}



/* =========================================================
   ANO AUTOMÁTICO DO RODAPÉ
   ========================================================= */

const anoAtual =
    new Date().getFullYear();


const rodape =
    document.querySelector(
        "footer p"
    );


if (rodape) {

    rodape.innerHTML =
        `© ${anoAtual} LogicDevSystem. Todos os direitos reservados.`;

}