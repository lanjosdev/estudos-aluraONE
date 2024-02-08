function innerTextElement(elemento, texto) {
    let element = document.querySelector(elemento);
    element.innerHTML = texto;
}

function gerarNumAleatorio() {
    return Math.floor(Math.random() * 10 + 1);
}

innerTextElement('p', 'Escolha um número de 1 a 10:');

let numeroSecreto = gerarNumAleatorio();
// console.log(numeroSecreto);


function onVerificarChute() {
    let inputChute = parseInt(document.querySelector('input').value); // pega o valor do input
    
    if(isNaN(inputChute)) {
        alert('Preencha o campo!');
    } else {
        console.log(inputChute);
        console.log(inputChute === numeroSecreto);
    }
}

