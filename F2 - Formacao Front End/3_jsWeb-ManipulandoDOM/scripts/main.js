// Variaveis / Elementos:
const body = document.body;

// Botoes
const btnFoco = document.querySelector('.app__card-button--foco');
const btnDesCurto = document.querySelector('.app__card-button--curto');
const btnDesLongo = document.querySelector('.app__card-button--longo');
const btnStartPause = document.querySelector('#start-pause');

const titulo = document.querySelector('.app__title');
// Imgs
const bannner = document.querySelector('.app__image');

// Sons
const inputMusica = document.querySelector('.toggle-checkbox');
const audioFile = new Audio('./sons/luna-rise-part-one.mp3');
audioFile.loop = true;
audioFile.volume = 0.6;

let tempoEmSegundos = 5;
let intervaloRodando = null;


// FUNÇÔES:
function alterarContexto(contexto) {
    body.setAttribute('data-contexto', contexto);

    bannner.setAttribute('src', `./imagens/${contexto}.png`);
    
    switch(contexto) {
      case 'foco':
        titulo.innerHTML = `Otimize sua produtividade,<br>
          <strong class="app__title-strong">mergulhe no que importa.
          </strong>`;
        break;
      case 'descanso-longo':
        titulo.innerHTML = `Hora de voltar à superfície. <br>
          <strong class="app__title-strong">
            Faça uma pausa longa
          </strong>`;
        break;
      case 'descanso-curto':
        titulo.innerHTML = `Que tal dar uma respirada?<br>
          <strong class="app__title-strong">
            Faça uma pausa curta!
          </strong>`;
        break;
      default:
        break;
    }
}

function ativarBtn(elemento) {
    document.querySelectorAll('.app__card-button')
        .forEach(btn => btn.classList.remove('active'));

    elemento.classList.add('active');
}

function contagemRegrassiva() {
  if(tempoEmSegundos < 0) {
    clearInterval(intervaloRodando);
    intervaloRodando = null;

    alert('Tempo finalizado!');
    tempoEmSegundos = 5;
    return;
  }

  console.log(`Temporizador: ${tempoEmSegundos}`);
  tempoEmSegundos --;
}
function iniciarPausarContagem() {
  if(intervaloRodando) {
    console.log('PAUSOU');
    clearInterval(intervaloRodando);
    intervaloRodando = null;
    return;
  }

  console.log('INICIOU');
  intervaloRodando = setInterval(contagemRegrassiva, 1000);
}


// EVENTOS/INTERATIVIDADE UI:
btnFoco.addEventListener('click', ()=> {
    alterarContexto('foco');
    ativarBtn(btnFoco);
});
btnDesCurto.addEventListener('click', ()=> {
    alterarContexto('descanso-curto');
    ativarBtn(btnDesCurto);
});
btnDesLongo.addEventListener('click', ()=> {
    alterarContexto('descanso-longo');
    ativarBtn(btnDesLongo);
});

inputMusica.addEventListener('change', ()=> {
  (audioFile.paused) ? audioFile.play() : audioFile.pause();
});

btnStartPause.addEventListener('click', iniciarPausarContagem);