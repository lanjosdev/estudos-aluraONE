// VARIAVEIS / ELEMENTOS:
const body = document.body;
const timerUI = document.querySelector('#timer');

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
const audioPlay = new Audio('./sons/play.wav');
const audioPause = new Audio('./sons/pause.mp3');
const audioFinaly = new Audio('./sons/beep.mp3');
audioFile.loop = true;
audioFile.volume = 0.6;
audioPlay.volume = 0.6;
audioPause.volume = 0.6;

let tempoEmSegundos = 1500;
let intervaloRodando = null;
let qtdPomodoro = 0; // Depois fazer nova versão que identifique quando chegar a 4 para ir no descanso longo
let totalPomodoro = 0; // Soma de todos pomodora concluidos


// FUNÇÔES:
function alterarContexto(contexto) {
    console.log('MUDOU CONTEXTO');
    interromperIntervalo();

    body.setAttribute('data-contexto', contexto);

    bannner.setAttribute('src', `./imagens/${contexto}.png`);
    
    switch(contexto) {
      case 'foco':
        ativarBtn(btnFoco);
        tempoEmSegundos = 1500;

        titulo.innerHTML = `Otimize sua produtividade,<br>
          <strong class="app__title-strong">mergulhe no que importa.
          </strong>`;
        break;
      case 'descanso-longo':
        ativarBtn(btnDesLongo);
        tempoEmSegundos = 900;

        titulo.innerHTML = `Hora de voltar à superfície. <br>
          <strong class="app__title-strong">
            Faça uma pausa longa
          </strong>`;
        break;
      case 'descanso-curto':
        ativarBtn(btnDesCurto);
        tempoEmSegundos = 300;

        titulo.innerHTML = `Que tal dar uma respirada?<br>
          <strong class="app__title-strong">
            Faça uma pausa curta!
          </strong>`;
        break;
      default:
        break;
    }

    exibirTimer();
}
function ativarBtn(elemento) {
    document.querySelectorAll('.app__card-button')
        .forEach(btn => btn.classList.remove('active'));

    elemento.classList.add('active');
}


function exibirTimer() {
  const tempo = new Date(tempoEmSegundos * 1000); // * 1000 para deixar em milesegundos
  const tempoFormatado = tempo.toLocaleTimeString('pt-br', {minute: '2-digit', second: '2-digit'});
  timerUI.innerHTML = `${tempoFormatado}`;
}
function alterarPlayPause(status) {
  switch(status) {
    case 'play':
      btnStartPause.childNodes[1].setAttribute('src', './imagens/play_arrow.png');
      btnStartPause.childNodes[3].innerHTML = 'Começar';
      timerUI.classList.add('pausado');
      break;
    case 'pause':
      btnStartPause.childNodes[1].setAttribute('src', './imagens/pause.png');
      btnStartPause.childNodes[3].innerHTML = 'Pausar';
      timerUI.classList.remove('pausado');
      break;
  }
}
function interromperIntervalo() {
  clearInterval(intervaloRodando);
  alterarPlayPause('play');
  intervaloRodando = null;
}
function contagemRegrassiva() {
  if(tempoEmSegundos <= 0) {
    //alert('Tempo finalizado!');
    audioFinaly.play();

    if(body.getAttribute('data-contexto') === 'descanso-curto' || body.getAttribute('data-contexto') === 'descanso-long') {
      alterarContexto('foco');
    } 
    else {
      alterarContexto('descanso-curto');
      audioFile.pause();
      inputMusica.checked = false;
    }

    interromperIntervalo();
    return;
  }

  tempoEmSegundos --;
  // console.log(`Temporizador: ${tempoEmSegundos}`);
  exibirTimer();
}
function iniciarPausarContagem() {
  if(intervaloRodando) {
    console.log('PAUSOU');
    // audioPlay.pause();
    audioPause.play();

    interromperIntervalo();
    return;
  }

  console.log('INICIOU');
  // audioPause.pause();
  audioPlay.play();

  intervaloRodando = setInterval(contagemRegrassiva, 1000);
  alterarPlayPause('pause');
}


// INICIO (Eventos/Interatividades da UI):
// exibirTimer();
alterarContexto('foco');

btnFoco.addEventListener('click', ()=> {
    alterarContexto('foco');
});
btnDesCurto.addEventListener('click', ()=> {
    alterarContexto('descanso-curto');
});
btnDesLongo.addEventListener('click', ()=> {
    alterarContexto('descanso-longo');
});

inputMusica.addEventListener('change', ()=> {
  (audioFile.paused) ? audioFile.play() : audioFile.pause();
});

btnStartPause.addEventListener('click', iniciarPausarContagem);