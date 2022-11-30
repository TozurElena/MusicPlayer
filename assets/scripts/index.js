const audio = new Audio();
const tracksCard = document.getElementsByClassName('track');

const pauseBtn = document.querySelector('.player__icon_pause');

const playMusic = (event) => {
  
  audio.src = event.currentTarget.dataset.track;
  audio.play();
}

for(let i = 0; i < tracksCard.length; i++ ) {
  tracksCard[i].addEventListener('click', playMusic)
};

