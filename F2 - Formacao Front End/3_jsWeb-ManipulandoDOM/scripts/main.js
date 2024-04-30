// Variaveis / Elementos:
const html = document.querySelector('html');
const btnFoco = document.querySelector('.app__card-button--foco');
const btnDesCurto = document.querySelector('.app__card-button--curto');
const btnDesLongo = document.querySelector('.app__card-button--longo');

btnFoco.addEventListener('click', ()=> {
    html.setAttribute('data-contexto', 'foco');
});
btnDesCurto.addEventListener('click', ()=> {
    html.setAttribute('data-contexto', 'descanso-curto');
});
btnDesLongo.addEventListener('click', ()=> {
    html.setAttribute('data-contexto', 'descanso-longo');
});