// Variaveis / Elementos da UI:
const teclas = document.querySelectorAll('.tecla');

// Funções:
function tocaSom(idAudio) {
    const elementoAudio = document.querySelector(idAudio);

    // Validação antes de reproduzir audio:
    // 'localName' é p/ especificar qual é o tipo do elemento/tag
    if(elementoAudio && elementoAudio.localName === 'audio') {
        elementoAudio.play();
    }
    else {
        console.error('Elemento não encontrado OU elemento não é do tipo audio.');
    }
}


// Eventos da UI:
for(let i = 0; i < teclas.length; i++) {
    let classInstrumento = teclas[i].classList[1];
    let idAudio = `#som_${classInstrumento}`;

    // evento click do mouse:
    teclas[i].onclick = ()=> tocaSom(idAudio);

    // eventos com teclado:
    teclas[i].onkeydown = (event)=> {
        if(event.code === 'Enter' || event.code === 'NumpadEnter' || event.code === 'Space') {
            teclas[i].classList.add('ativa', 'active');
        }
    }
    teclas[i].onkeyup = (event)=> {
        teclas[i].classList.remove('ativa', 'active');
    }
}