import "@babel/polyfill";
import './index.html';
import './style.scss';
import songsDataEn from "./songs-en";
import songsDataRu from "./songs-ru";
import gameLayout from "./assets/components/game.html"
import player from "./assets/components/audioplayer.html"
import menu from "./assets/components/menu.html"
import results from "./assets/components/results.html"

let scoreCounter = 0;
let randomTrackNumber;
let trackSourceId;
let currentGenre = -1;
let currentScore = 5;
let isSolved = false;
let language = 'en'
const main = document.querySelector('main');

const translation = {
  en: {
    defaultDescription: 'Listen to the music and choose the game from the list you think the song is from!',
    header: ['Main menu', 'Gallery'],
    mainMenu: ['Start Game', 'Change Language'],
    genres: ['Action', 'Platformers', 'Racing', 'RPG', 'Fighting', 'Sandbox'],
    score: 'score',
    congrats: 'Congratulations! Your final score is:',
    congrats2: 'out of 30',
    tryAgain: 'Try again?'
  },
  rus:{
    defaultDescription: 'Послушайте музыку и выберите игру из списка, из которого, по вашему мнению, эта песня!',
    header: ['Главное меню', 'Галерея'],
    mainMenu: ['Начать игру', 'Поменять язык'],
    genres: ['Экшен', 'Платформеры', 'Гонки', 'Ролевые', 'Файтинги', 'Песочницы'],
    score: 'Очки',
    congrats: 'Поздравляем! Ваш финальный результат:',
    congrats2: 'из 30',
    tryAgain: 'Попробовать снова?'
  } 
}

//добавляем меню
function addMenu() {
  main.innerHTML = menu;
}
addMenu()
getLanguage()

const mainMenuButton = document.querySelector('.main-menu-button')
const galleryButton = document.querySelector('.gallery-button')
const startGame = document.querySelector('.start-game')
//меню
startGame.addEventListener('click', ()=>{
  initializeGame(language)
})
mainMenuButton.addEventListener('click', ()=>{
  returnToMenu(language)
})
galleryButton.addEventListener('click', showGallery)

const languageButton = document.querySelector('.language');
languageButton.addEventListener('click', () => {
  changeLanguage();
})



function setLanguage(){
  localStorage.setItem('language', language)
}

function getLanguage(){
  language = localStorage.getItem('language')
  if (!language){
      language="en"
  }
  console.log(language);
  const mainMenuButton = document.querySelector('.main-menu-button')
  const galleryButton = document.querySelector('.gallery-button')
  const startGame = document.querySelector('.start-game')
  const languageButton = document.querySelector('.language');

  mainMenuButton.textContent = translation[language].header[0]
  galleryButton.textContent = translation[language].header[1]
  startGame.textContent = translation[language].mainMenu[0]
  languageButton.textContent = translation[language].mainMenu[1]
}

window.addEventListener('beforeunload', setLanguage);


function returnToMenu(language) {
  const score = document.querySelector('.score')
  scoreCounter = 0;
  currentGenre = -1;
  if (score) {
    score.textContent = 0;
  }
  main.innerHTML = menu;
  const mainMenuButton = document.querySelector('.main-menu-button')
  const galleryButton = document.querySelector('.gallery-button')
  const startGame = document.querySelector('.start-game')
  const languageButton = document.querySelector('.language');

  mainMenuButton.textContent = translation[language].header[0]
  galleryButton.textContent = translation[language].header[1]
  startGame.textContent = translation[language].mainMenu[0]
  languageButton.textContent = translation[language].mainMenu[1]

  startGame.addEventListener('click', () => {
    initializeGame(language)
  })

  languageButton.addEventListener('click', () => {
    changeLanguage()
})
}

function changeLanguage() {
  const mainMenuButton = document.querySelector('.main-menu-button')
  const galleryButton = document.querySelector('.gallery-button')
  const startGame = document.querySelector('.start-game')
  const languageButton = document.querySelector('.language');
  if (language === 'en') {
    language = 'rus'
    mainMenuButton.textContent = 'Главное меню'
    galleryButton.textContent = 'Галерея'
    startGame.textContent = 'Начать игру'
    languageButton.textContent = 'Поменять язык'
  } else {
    language = 'en'
    mainMenuButton.textContent = 'Main menu'
    galleryButton.textContent = 'Gallery'
    startGame.textContent = 'Start Game'
    languageButton.textContent = 'Change Language'
  }
  startGame.addEventListener('click', () => {
    initializeGame(language)
  })
  console.log(language);
/*   alert('work in progress! please check this feature later :)') */
}

function showGallery(){
  alert('work in progress! please check this feature later :)')
/*   main.innerHTML = ''; */
}

function displayResults(language) {
  main.innerHTML = results;
  const finalScore = document.querySelector('.final-score')
  const tryAgain = document.querySelector('.try-again')
  const congrats = document.querySelector('.congrats')
  const congrats2 = document.querySelector('.congrats2')

  congrats.textContent = translation[language].congrats
  congrats2.textContent = translation[language].congrats2
  tryAgain.textContent = translation[language].tryAgain


  finalScore.textContent = scoreCounter;
  tryAgain.addEventListener('click', () => {
    currentGenre = -1;
    scoreCounter = 0;
    initializeGame(language)
  })
}

function initializeGame(language) {
  isSolved = false
  currentGenre++
  if (currentGenre > 5) {
    displayResults(language)
    return
  }
  currentScore = 5;

  let songsData;
  if (language === 'en'){
    songsData = songsDataEn;
  } else{
    songsData = songsDataRu;
  }

  main.innerHTML = gameLayout;

  //язык
  console.log(language);
  const descriptionWrapper = document.querySelector('.game-description');
  descriptionWrapper.textContent = translation[language].defaultDescription

  const nextLevelButton = document.querySelector('.next-level')

  const score = document.querySelector('.score')
  score.textContent = scoreCounter

  const genreItems = document.querySelectorAll('.genres-list-item');
  genreItems[currentGenre].classList.add('current')

  for (let i = 0; i < genreItems.length; i++) {
    genreItems[i].textContent = translation[language].genres[i]
  }

  const scoreName = document.querySelector('.score-name');
  scoreName.textContent = translation[language].score

  nextLevelButton.disabled = true;

  //аудиоплеер
  const audioplayer = document.querySelector('.audioplayer')
  const playButton = document.querySelector('.start-track')
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

  //добавление треков в меню выбора (установка начальной громкости)
  function getTracks(genre) {
    songsData[genre].forEach((track) => {
      let li = document.createElement('li')
      let trackName = track.game
      li.textContent = trackName;
      li.classList.add(`track-id-${track.id}`)
      li.classList.add('track')
      li.classList.add('games-border')
      gamesList.append(li);
      li.addEventListener('click', () => {
        isRightTrack(track.id)
      })
    })
    /*   audioplayer.src = playlist[currentTrack].source; */
    randomTrackNumber = Math.floor(Math.random() * 6);
    const trackSource = require(`${songsData[genre][randomTrackNumber].audio}`)
    trackSourceId = songsData[genre][randomTrackNumber].id
    audioplayer.src = trackSource;
    audioplayer.volume = .5;
  }

  //показ длительности трека
  function getAudioLength() {
    length.textContent = getTimeCode(audioplayer.duration);
  }

  //воспроизведение треков
  function playAudio() {
    if (isPlay === true) {
      audioplayer.pause();
      playButton.classList.remove('pause');
      playButton.classList.add('play');
      isPlay = false;
    } else {
      isPlay = true;
      playButton.classList.remove('play');
      playButton.classList.add('pause');
      audioplayer.play()
    }
  }

  //обновление времени трека
  function updateTrackTime() {
    setInterval(() => {
      progress.style.width = audioplayer.currentTime / audioplayer.duration * 100 + '%';
      currentTimeDisplay.textContent = getTimeCode(audioplayer.currentTime)
    }, 500)
  }

  //прогресс бар
  progressBar.addEventListener("click", el => {
    const progressBarWidth = window.getComputedStyle(progressBar).width;
    const timeToSeek = el.offsetX / parseInt(progressBarWidth) * audioplayer.duration;
    audioplayer.currentTime = timeToSeek;
    progress.style.width = audioplayer.currentTime / audioplayer.duration * 100 + "%";
  }, false);
  //получение тайм-кода
  function getTimeCode(trackDuration) {
    let seconds = Math.floor(trackDuration);
    let minutes = Math.floor(seconds / 60);
    seconds = seconds - minutes * 60;
    return `${minutes}:${String(seconds).padStart(2, 0)}`
  }
  //обновление звука
  volumeProgressBar.addEventListener("click", el => {
    const volumeProgressBarWidth = window.getComputedStyle(volumeProgressBar).width;
    const newVolume = el.offsetX / parseInt(volumeProgressBarWidth);
    audioplayer.volume = newVolume;
    volumeProgress.style.width = newVolume * 100 + '%';
  })
  //мьют звука
  volumeButton.addEventListener("click", () => {
    audioplayer.muted = !audioplayer.muted;
    if (audioplayer.muted) {
      volumeButton.classList.toggle('off')
    } else {
      volumeButton.classList.toggle('off')
    }
  })

  audioplayer.addEventListener('loadeddata', getAudioLength)
  playButton.addEventListener('click', playAudio)

  const gamesList = document.querySelector('.games-list')

  getTracks(currentGenre);
  updateTrackTime();


  function isRightTrack(id) {
    const allTracks = document.querySelectorAll('.track')
    addDescription(id)
    if (id === trackSourceId) {
      const hiddenTrackName = document.querySelector('.hidden-track-name')
      hiddenTrackName.textContent = songsData[currentGenre][id - 1].game
      for (let i = 0; i < allTracks.length; i++) {
        if (id - 1 === i) {
          allTracks[i].classList.add('right')
        }
      }
      if (!isSolved) {
        let positiveSound = new Audio();
        positiveSound.src = require('./assets/sounds/neg.wav')
        positiveSound.play()
      }
      nextLevelButton.disabled = false;
      nextLevelButton.classList.add('next-level-active')
      const hiddenGameImage = document.querySelector('.hidden-game-image');
      hiddenGameImage.src = songsData[currentGenre][id - 1].image
      if (!isSolved) {
        scoreCounter += currentScore;
        const score = document.querySelector('.score')
        score.textContent = scoreCounter
      }
      isSolved = true;
      playAudio()
    } else {
      if (!isSolved) {
        for (let i = 0; i < allTracks.length; i++) {
          if (id - 1 === i) {
            allTracks[i].classList.add('wrong')
          }
        }
        let negativeSound = new Audio();
        negativeSound.src = require('./assets/sounds/pos.wav')
        negativeSound.play()
      }
      currentScore--;
    }
  }

  function addDescription(id) {
    const descriptionWrapper = document.querySelector('.game-description');
    const descriptionImage = document.createElement('img');
    const descriptionName = document.createElement('p')
    const descriptionGenre = document.createElement('p')
    descriptionGenre.classList.add('border-bottom')
    descriptionName.classList.add('border-bottom')
    const description = document.createElement('p')
    descriptionImage.src = songsData[currentGenre][id - 1].image
    descriptionImage.classList.add('description-image')
    description.textContent = songsData[currentGenre][id - 1].description
    description.style.padding = "6px"
    descriptionWrapper.innerHTML = ''
    descriptionWrapper.style.fontSize = "0.8em"
    descriptionGenre.textContent = songsData[currentGenre][id - 1].genre
    descriptionName.textContent = songsData[currentGenre][id - 1].game
    descriptionWrapper.appendChild(descriptionImage)
    descriptionWrapper.appendChild(descriptionName)
    descriptionWrapper.appendChild(descriptionGenre)
    addPlayertoDesc(id)
    descriptionWrapper.appendChild(description)
  }

  function addPlayertoDesc(id) {
    const descriptionWrapper = document.querySelector('.game-description');
    const audioplayerWrapper = document.createElement('div')
    audioplayerWrapper.classList.add('description-player')
    audioplayerWrapper.innerHTML = player
    descriptionWrapper.appendChild(audioplayerWrapper)

    //аудиоплеер
    const audioplayer = document.querySelector('.description-player .audioplayer')
    const playButton = document.querySelector('.description-player .start-track')
    const progressBar = document.querySelector('.description-player .progress-bar')
    const progress = document.querySelector('.description-player .progress')
    const length = document.querySelector('.description-player .length')
    const currentTimeDisplay = document.querySelector('.description-player .current-time')
    const volumeProgressBar = document.querySelector('.description-player .volume-progress-bar')
    const volumeProgress = document.querySelector('.description-player .volume-progress')
    const volumeButton = document.querySelector('.description-player .volume-button')

    let isPlay = false;
    //показ длительности трека
    function getAudioLength() {
      length.textContent = getTimeCode(audioplayer.duration);
    }

    //воспроизведение треков
    function playAudio() {
      if (isPlay === true) {
        audioplayer.pause();
        playButton.classList.remove('pause');
        playButton.classList.add('play');
        isPlay = false;
      } else {
        isPlay = true;
        playButton.classList.remove('play');
        playButton.classList.add('pause');
        audioplayer.play()
      }
    }

    //обновление времени трека
    function updateTrackTime() {
      setInterval(() => {
        progress.style.width = audioplayer.currentTime / audioplayer.duration * 100 + '%';
        currentTimeDisplay.textContent = getTimeCode(audioplayer.currentTime)
      }, 500)
    }
    //прогресс бар
    progressBar.addEventListener("click", el => {
      const progressBarWidth = window.getComputedStyle(progressBar).width;
      const timeToSeek = el.offsetX / parseInt(progressBarWidth) * audioplayer.duration;
      audioplayer.currentTime = timeToSeek;
      progress.style.width = audioplayer.currentTime / audioplayer.duration * 100 + "%";
    }, false);
    //получение тайм-кода
    function getTimeCode(trackDuration) {
      let seconds = Math.floor(trackDuration);
      let minutes = Math.floor(seconds / 60);
      seconds = seconds - minutes * 60;
      return `${minutes}:${String(seconds).padStart(2, 0)}`
    }
    //обновление звука
    volumeProgressBar.addEventListener("click", el => {
      const volumeProgressBarWidth = window.getComputedStyle(volumeProgressBar).width;
      const newVolume = el.offsetX / parseInt(volumeProgressBarWidth);
      audioplayer.volume = newVolume;
      volumeProgress.style.width = newVolume * 100 + '%';
    })
    //мьют звука
    volumeButton.addEventListener("click", () => {
      audioplayer.muted = !audioplayer.muted;
      if (audioplayer.muted) {
        volumeButton.classList.toggle('off')
      } else {
        volumeButton.classList.toggle('off')
      }
    })

    audioplayer.addEventListener('loadeddata', getAudioLength)
    playButton.addEventListener('click', playAudio)
    audioplayer.src = require(`${songsData[currentGenre][id - 1].audio}`)
    updateTrackTime();
  }

  nextLevelButton.addEventListener('click', ()=>{
    initializeGame(language)
  })

}



