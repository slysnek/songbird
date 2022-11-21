import "@babel/polyfill";
import './index.html';
import './style.scss';
import songsData from "./songs-en";
import gameLayout from "./assets/components/game.html"
import audioplayer from "./assets/components/audioplayer.html"
import menu from "./assets/components/menu.html"

let scoreCounter = 0;

const main = document.querySelector('main');
//добавляем меню
function addMenu(){
  main.innerHTML=menu;
}

addMenu()

const mainMenuButton = document.querySelector('.main-menu-button')
const startGame = document.querySelector('.start-game')



function initializeGame(){
  main.innerHTML=gameLayout;
  //аудиоплеер
const audioplayer = document.querySelector('.audioplayer')
const playButton = document.querySelector('.start-track')
/* const trackList = document.querySelector('.track-list') */
/* const currentTrackDisplay =document.querySelector('.current-track-display')
const previousButton = document.querySelector('.previous');
const nextButton = document.querySelector('.next'); */
const progressBar = document.querySelector('.progress-bar')
const progress = document.querySelector('.progress')
const length = document.querySelector('.length')
const currentTimeDisplay = document.querySelector('.current-time')
const volumeProgressBar = document.querySelector('.volume-progress-bar')
const volumeProgress = document.querySelector('.volume-progress')
const volumeButton = document.querySelector('.volume-button')

const gamesList = document.querySelector('.games-list')

//аудиоплеер
let isPlay = false;
let currentTrack = 0;

//добавление треков в плейлист (установка начальной громкости)
function getTracks(genre){
  songsData[genre].forEach((track) => {
      let li = document.createElement('li')
      let trackName = track.game
      li.textContent = trackName;
      gamesList.append(li);
  })
/*   audioplayer.src = playlist[currentTrack].source; */
  let randomTrackNumber = Math.floor(Math.random() * 6);
  console.log(songsData[genre][randomTrackNumber].audio);
  const trackSource = require(`${songsData[genre][randomTrackNumber].audio}`)
  audioplayer.src = trackSource;
  audioplayer.volume = .5;
}

//показ длительности трека
function getAudioLength(){
  length.textContent = getTimeCode(audioplayer.duration);
}

//воспроизведение треков
function playAudio(){
  if(isPlay === true){
      audioplayer.pause();
      playButton.classList.remove('pause');
      playButton.classList.add('play');
/*       currentTrackBackground() */
      isPlay = false;
  } else{
      isPlay = true;
      playButton.classList.remove('play');
      playButton.classList.add('pause');
/*       currentTrackBackground() */
      audioplayer.play()
/*       currentTrackDisplay.textContent = playlist[currentTrack].title; */
  }
}

//обновление времени трека
function updateTrackTime(){
  setInterval(() =>{
      progress.style.width = audioplayer.currentTime / audioplayer.duration * 100 + '%';
      currentTimeDisplay.textContent = getTimeCode(audioplayer.currentTime)
  }, 500)
}

//переключение треков
/* function nextTrack(){
  if(isPlay === true){
      currentTrackBackground()
  }
  currentTrack++;
  if(currentTrack > playlist.length - 1){
      currentTrack = 0;
  }
  isPlay = false;
  audioplayer.src = playlist[currentTrack].source;
  playAudio();
}

function previousTrack(){
  if(isPlay === true){
      currentTrackBackground()
  }
  currentTrack--;
  if(currentTrack < 0){
      currentTrack = playlist.length - 1;
  }
  isPlay = false;
  audioplayer.src = playlist[currentTrack].source;
  playAudio();
} */
// выделение трека
function currentTrackBackground(){
  for(const track of document.querySelectorAll('li')){
      if (track.textContent.includes(songsData[genre][randomTrackNumber].game)){
          track.classList.toggle('current-track')
      }
  }
}
//прогресс бар
progressBar.addEventListener("click", el => {
const progressBarWidth = window.getComputedStyle(progressBar).width;
const timeToSeek = el.offsetX / parseInt(progressBarWidth) * audioplayer.duration;
audioplayer.currentTime = timeToSeek;
progress.style.width = audioplayer.currentTime / audioplayer.duration * 100 + "%";
}, false);
//получение тайм-кода
function getTimeCode(trackDuration){
  let seconds = Math.floor(trackDuration);
  let minutes = Math.floor(seconds / 60);
  seconds = seconds - minutes * 60;
  return `${minutes}:${String(seconds).padStart(2,0)}`
}
//обновление звука
volumeProgressBar.addEventListener("click", el =>{
  const volumeProgressBarWidth = window.getComputedStyle(volumeProgressBar).width;
  const newVolume = el.offsetX / parseInt(volumeProgressBarWidth);
  audioplayer.volume = newVolume;
  volumeProgress.style.width = newVolume * 100 + '%';
})
//мьют звука
volumeButton.addEventListener("click", () => {
  audioplayer.muted = !audioplayer.muted;
  if(audioplayer.muted){
      volumeButton.classList.toggle('off')
  }else{
      volumeButton.classList.toggle('off')
  }
})

audioplayer.addEventListener('loadeddata', getAudioLength)
playButton.addEventListener('click', playAudio)
/* previousButton.addEventListener('click', previousTrack)
nextButton.addEventListener('click', nextTrack)
audioplayer.addEventListener('ended', nextTrack) */

getTracks(0);
updateTrackTime();
}

function returnToMenu(){
  const score = document.querySelector('.score')
  scoreCounter = 0;
  if(score){
    score.textContent = 0;
  }
  main.innerHTML=menu;
}

//меню
startGame.addEventListener('click', initializeGame)
mainMenuButton.addEventListener('click', returnToMenu)
