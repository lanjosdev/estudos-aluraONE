// Variaveis / Elementos:
const body = document.body;

// Botoes
const btnFoco = document.querySelector('.app__card-button--foco');
const btnDesCurto = document.querySelector('.app__card-button--curto');
const btnDesLongo = document.querySelector('.app__card-button--longo');

// Imgs
const bannner =document.querySelector('.app__image');

// FUNÇÔES:
function alterarContexto(contexto) {
    
}

btnFoco.addEventListener('click', ()=> {
    body.setAttribute('data-contexto', 'foco');
    bannner.setAttribute('src', './imagens/foco.png');
});
btnDesCurto.addEventListener('click', ()=> {
    body.setAttribute('data-contexto', 'descanso-curto');
    bannner.setAttribute('src', './imagens/descanso-curto.png');
});
btnDesLongo.addEventListener('click', ()=> {
    body.setAttribute('data-contexto', 'descanso-longo');
    bannner.setAttribute('src', './imagens/descanso-longo.png');
});