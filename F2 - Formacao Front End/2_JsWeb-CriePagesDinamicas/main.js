// Variaveis / Elementos da UI:
const teclas = document.querySelectorAll('.tecla');
// const audios = document.querySelectorAll('audio');

// Funções:
function tocaSom(idAudio) {
    document.querySelector(idAudio).play();
}


// Eventos da UI:
// teclaPom.onclick = ()=> tocaSom('#som_tecla_pom');
for(let i = 0; i < teclas.length; i++) {
    let classIntrumento = teclas[i].classList[1];
    let idAudio = `#som_${classIntrumento}`;

    teclas[i].onclick = ()=> tocaSom(idAudio);
}