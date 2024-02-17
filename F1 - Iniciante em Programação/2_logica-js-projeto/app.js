// Variaveis e Funções:
let numeroSecreto;
let tentativa;

function gerarNumAleatorio(max) {
    return Math.floor(Math.random() * max + 1);
}

function innerTextElement(elemento, texto) {
    let element = document.querySelector(elemento);
    element.innerHTML = texto;
}

function iniciaJogo() {
    numeroSecreto = gerarNumAleatorio(10);
    console.log(numeroSecreto);
    tentativa = 1;

    innerTextElement('h1', 'Jogo do número secreto');
    innerTextElement('p', 'Escolha um número de 1 a 10:');
    document.querySelector('input').value = ''; //limpa input
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
    let inputChute = document.querySelector('input').value; //pega o valor do input
    document.querySelector('input').classList.remove('input-vazio');
    
    if(inputChute == '') {
        innerTextElement('p', 'Escolha um número de 1 a 10: (preencha o campo!)');
        document.querySelector('input').classList.add('input-vazio', 'animate');

    } else if(inputChute == numeroSecreto) {
        innerTextElement('h1', 'Acertou!');
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativa} ${tentativa == 1 ? 'tentativa' : 'tentativas'}`;
        innerTextElement('p', mensagemTentativas);

        desativaBtn('reiniciar', false);
        desativaBtn('chute');
    } else {
        tentativa ++;
        document.querySelector('input').classList.add('animate'); //add animação

        if(inputChute > numeroSecreto) {
            innerTextElement('p', 'O número secreto é menor!');
        } else {
            innerTextElement('p', 'O número secreto é maior!');
        }
    }

    setTimeout(()=> {
        document.querySelector('input').classList.remove('animate');
    }, 400)
}

function onReiniciaJogo() {
    iniciaJogo();
    desativaBtn('reiniciar');
    desativaBtn('chute', false);
}

