let element = document.querySelector('.container');
let min = 1;
let max = 100;
// let numeroSecreto = parseInt(Math.random()*10 + 1);
let numeroSecreto = Math.floor(Math.random() * (max - min + 1) + min);
console.log(numeroSecreto);
let numeroChute;
let tentativas = 1;

alert('Boas-vindas ao jogo do Número Secreto');

do {
    numeroChute = parseInt(prompt(`Escolha um número entre 1 e ${max}`));

    if(numeroChute === numeroSecreto) {
        element.style.display = 'flex';
        break;
    } else {
        if(numeroChute > numeroSecreto) {
            alert(`O número secreto é menor que ${numeroChute}`);
        } else {
            alert(`O número secreto é maior que ${numeroChute}`);
        }

        tentativas++;
    }
} while(numeroChute !== numeroSecreto);

alert(`Isso ai! Você descobriu o número secreto (${numeroSecreto}) com ${tentativas} ${tentativas == 1 ? 'tentativa' : 'tentativas'}!`);