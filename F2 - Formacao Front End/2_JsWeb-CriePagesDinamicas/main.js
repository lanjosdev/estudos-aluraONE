// Variaveis / Elementos da UI:
const teclaPom = document.querySelector('.tecla_pom');
// const somPom = document.querySelector('#som_tecla_pom');

// Funções:
function tocaSom(idAudio) {
    document.querySelector(idAudio).play();
}


// Eventos da UI:
teclaPom.onclick = ()=> tocaSom('#som_tecla_pom');