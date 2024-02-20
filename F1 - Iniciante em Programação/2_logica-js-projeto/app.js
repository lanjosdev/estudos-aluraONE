// Variaveis e Funções:
let numerosJaSorteados = [];
let limiteSorteio = 5;
let numSecreto;
let tentativa;
const elementInput = document.querySelector('input');

function gerarNumAleatorio(max=limiteSorteio) {
    let numSorteado = Math.floor(Math.random() * max + 1);

    if(numerosJaSorteados.length == limiteSorteio) {
        numerosJaSorteados = [];
    }

    if(numerosJaSorteados.includes(numSorteado) || numSorteado == numSecreto) {
        return gerarNumAleatorio();
    } else {
        numerosJaSorteados.push(numSorteado);
        return numSorteado;
    }
}

function innerTextElement(elemento, texto) {
    let element = document.querySelector(elemento);
    element.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function iniciaJogo() {
    numSecreto = gerarNumAleatorio();
    console.log('Num secreto: ' + numSecreto);
    console.log(numerosJaSorteados);
    tentativa = 1;

    innerTextElement('h1', 'Jogo do número secreto');
    innerTextElement('p', `Escolha um número de 1 a ${limiteSorteio}:`);
    
    elementInput.value = ''; //limpa input
    elementInput.setAttribute('max', limiteSorteio); //seta o atributo max do input
}

function desativaBtn(element, bool=true) {
    const elemento = document.getElementById(element);

    if(bool) {
        elemento.setAttribute('disabled', true);
    } else {
        elemento.removeAttribute('disabled');
    }
}   


// Inicializa programa:
iniciaJogo();


// Eventos da UI:
function onVerificarChute() {
    const chuteValue = elementInput.value; //pega o valor do input
    elementInput.classList.remove('input-vazio');
    
    if(chuteValue == '') {
        innerTextElement('p', `Escolha um número de 1 a ${limiteSorteio}: (preencha o campo!)`);
        elementInput.classList.add('input-vazio', 'animate');

    } else if(chuteValue == numSecreto) {
        innerTextElement('h1', 'Acertou!');
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativa} ${tentativa == 1 ? 'tentativa' : 'tentativas'}`;
        innerTextElement('p', mensagemTentativas);

        desativaBtn('reiniciar', false);
        desativaBtn('chute');
    } else {
        tentativa ++;
        elementInput.classList.add('animate'); //add animação

        if(chuteValue > numSecreto) {
            innerTextElement('p', 'O número secreto é menor!');
        } else {
            innerTextElement('p', 'O número secreto é maior!');
        }
    }

    setTimeout(()=> {
        elementInput.classList.remove('animate');
    }, 400)
}

function onReiniciaJogo() {
    iniciaJogo();
    desativaBtn('reiniciar');
    desativaBtn('chute', false);
}