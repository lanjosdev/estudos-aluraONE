function innerTextElement(elemento, texto) {
    let element = document.querySelector(elemento);
    element.innerHTML = texto;
}
function telaInicial() {
    innerTextElement('h1', 'Jogo do número secreto');
    innerTextElement('p', 'Escolha um número de 1 a 10:');
}
telaInicial();

function gerarNumAleatorio(max) {
    return Math.floor(Math.random() * max + 1);
}
let numeroSecreto = gerarNumAleatorio(3);
console.log(numeroSecreto);
let tentativa = 1;



function onVerificarChute() {
    let inputChute = document.querySelector('input').value; // pega o valor do input
    
    if(inputChute == '') {
        innerTextElement('p', 'Escolha um número de 1 a 10: (preencha o campo!)');
        //estlizar input red + animar
    } else if(inputChute == numeroSecreto) {
        innerTextElement('h1', 'Acertou!');
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativa} ${tentativa == 1 ? 'tentativa' : 'tentativas'}`;
        innerTextElement('p', mensagemTentativas);
        //habiliar botão Novo jogo 
        //desabilita chute
        //fazerfynca de desabilitar
    } else {
        tentativa ++;

        if(inputChute > numeroSecreto) {
            innerTextElement('p', 'O número secreto é menor!');
        } else {
            innerTextElement('p', 'O número secreto é maior!');
        }
        //limpara campo? acho melhor animar input
    }
}

function onReiniciaJogo() {
    telaInicial();
    // outras coisa...
}

