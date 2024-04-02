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

// Resultado/conteudo na .app-resul1 > .area-text:
const resultado = {
    padrao: `
            <h3>Nenhuma mensagem encontrada</h3>
            <p>
                Digite um texto que você deseja criptografar ou descriptografar.
            </p>
    `,
    criptografado: `
            <h3>Texto já criptografado!</h3>
    `,
    descriptografado: `
            <h3>Texto já está descriptografado!</h3>
    `
}

// Funções:
function showElement(element, newContent='') {
    if(element === '.app-resul1') {
        document.querySelector('.area-text').innerHTML = resultado.padrao;
    } //reseta para o elemento padrão;

    let elementShow = document.querySelector(element);


    document.querySelectorAll('#app-resul > *').forEach((element)=> 
    {
        element.classList.add('hidden');
    });


    if(newContent) {
        elementShow.querySelector('.area-text').innerHTML = newContent;
    }
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
function descriptografar(texto) {
    let newText = texto;
    let keysValues = Object.entries(chavesCripto); //array com chaves:valores do objeto

    for(let keyValue of keysValues) {
        while( newText.includes(keyValue[1]) ) {
            newText = newText.replace(keyValue[1], keyValue[0]);
        }
    }   

    return newText;
}

function isTextCripto(text) {
    let chavesValues = Object.values(chavesCripto); //array apenas com valores do objeto
    for(let key of chavesValues) {
        if(text.includes(key)) {
            return true;
        }
    }

    return false;
}

// Funções da UI:
function onCriptografar() {
    let textoInput = inputUI.value;

    if(textoInput !== '') {
        // 1 - Validação se tem caracteres Maisculas e Especiais:


        // 2 - Verifica se tem chaves criptografas:
        if(isTextCripto(textoInput)) {
            showElement('.app-resul1', resultado.criptografado); // texto já criptografado
            return; //finaliza funtion
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

function onDescriptpgrafar() {
    let textoInput = inputUI.value;

    if(textoInput !== '') {
        // 1 - Validação se tem caracteres Maisculas e Especiais:

        // 2 - Verifica se tem chaves criptografas:
        if(!isTextCripto(textoInput)) {
            showElement('.app-resul1', resultado.descriptografado); // texto já esta descriptografado
            // document.querySelector('.app-resul1 > .area-text').innerHTML = resultado.descriptografado;
            return; //finaliza funtion
        }

        // 3 - Faz a Descriptografia em si:
        let newText = descriptografar(textoInput);

        // 4 - Resultado na UI:
        showElement('.app-resul2');
        resulTextUI.innerHTML = newText;
    }
    else {
        showElement('.app-resul1'); // resul inicial (nenhum texto)
    }
}

function onCopiarTexto() {
    let textResul = resulTextUI.innerText;

    navigator.clipboard.writeText(textResul);
}