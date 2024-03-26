// Elementos da UI:
const input = document.querySelector('#input-text');
const areaResul1 = document.querySelector('.app-resul1');
const areaResul2 = document.querySelector('.app-resul2');
const resulText = document.querySelector('#resul-texto');


function changeResultTo(element1, element2) {
    element1.classList.add('none');
    element2.classList.remove('none');
}

// Eventos da UI:
function onCriptografar() {
    let inputValue = input.value;

    if(inputValue !== '') {
        changeResultTo(areaResul1, areaResul2);
        resulText.innerHTML = inputValue;
    } else {
        changeResultTo(areaResul2, areaResul1);
    }
    
}