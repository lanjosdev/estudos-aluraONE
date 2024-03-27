// Elementos da UI:
const inputUI = document.querySelector('#input-text');
const areaResulUI = document.querySelector('#app-resul');
// const resul1UI = document.querySelector('.app-resul1');
// const resul2UI = document.querySelector('.app-resul2');
// const resul3UI = document.querySelector('.app-resul3');
const resulTextUI = document.querySelector('#resul-texto');

// Chaves de criptografia:
const chavesCripto = {
    a: 'ai',
    e: 'enter',
    i: 'imes',
    o: 'ober', 
    u: 'ufat'
}

// Funções:
function showElement(element) {
    let elementShow = document.querySelector(element);

    document.querySelectorAll('#app-resul > *').forEach((element)=> 
    {
        element.classList.add('hidden');
    });

    elementShow.classList.remove('hidden');
}

function criptografar(texto) {
    let wordCripto = '';

    for(let letra of texto) {
        if(chavesCripto[letra]) {
            wordCripto += chavesCripto[letra];
        } else {
            wordCripto += letra;
        }
    }

    return wordCripto;
}

// Funções da UI:
function onCriptografar() {
    let textoInput = inputUI.value;

    if(textoInput !== '') {
        // 1 - Verifica se tem caracteres Maisculas e Especiais:


        // 2 - Verifica se tem chaves criptografas:
        let chaves = Object.values(chavesCripto); //array apenas com valores do objeto
        for(let key of chaves) {
            if(key !== 'ai' && textoInput.includes(key)) {
                showElement('.app-resul3'); // texto já criptografado
                return;
            }
        }


        // 3 - Faz a criptografia em si:
        let wordCripto = criptografar(textoInput);

        // 4 - Resultado na UI:
        showElement('.app-resul2');
        resulTextUI.innerHTML = wordCripto;
    } 
    else {
        showElement('.app-resul1'); // resul inicial (nenhum texto)
    }
}