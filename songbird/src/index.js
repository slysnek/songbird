import "@babel/polyfill";
import './index.html';
import './style.scss';

//аудиоплеер
const audioplayer = document.querySelector('.audioplayer')
const playButton = document.querySelector('.start-track')
const trackList = document.querySelector('.track-list')
const currentTrackDisplay =document.querySelector('.current-track-display')
const previousButton = document.querySelector('.previous');
const nextButton = document.querySelector('.next');
const progressBar = document.querySelector('.progress-bar')
const progress = document.querySelector('.progress')
const length = document.querySelector('.length')
const currentTimeDisplay = document.querySelector('.current-time')
const volumeProgressBar = document.querySelector('.volume-progress-bar')
const volumeProgress = document.querySelector('.volume-progress')
const volumeButton = document.querySelector('.volume-button')

//аудиоплеер
let isPlay = false;
let currentTrack = 0;

//добавление треков в плейлист (установка начальной громкости)
function getTracks(){
  playlist.forEach((track) => {
      let li = document.createElement('li')
      let trackName = track.title
      li.textContent = trackName;
      trackList.append(li);
  })
  audioplayer.src = playlist[currentTrack].source;
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
      currentTrackBackground()
      isPlay = false;
  } else{
      isPlay = true;
      playButton.classList.remove('play');
      playButton.classList.add('pause');
      currentTrackBackground()
      audioplayer.play()
      currentTrackDisplay.textContent = playlist[currentTrack].title;
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
function nextTrack(){
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
}
// выделение трека
function currentTrackBackground(){
  for(const track of document.querySelectorAll('li')){
      if (track.textContent.includes(playlist[currentTrack].title)){
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
previousButton.addEventListener('click', previousTrack)
nextButton.addEventListener('click', nextTrack)
audioplayer.addEventListener('ended', nextTrack)

getTracks();
updateTrackTime()