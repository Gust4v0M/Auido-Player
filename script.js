let audio = document.getElementById("audio1");
let audioBar = document.getElementById("audioBar");
let Ctimer = document.getElementById("Ctimer");
let Atimer = document.getElementById("Atimer");
let soundIcon = document.getElementById("sound-icon");
let soundBar = document.getElementById("sound-bar");
let playBnt = document.getElementById("play-bnt");
let pauseBnt = document.getElementById("pause-bnt");


audio.addEventListener("timeupdate", function () {
  audioBar.value = audio.currentTime / audio.duration;
});

audioBar.addEventListener("click", atuliza);

function atuliza(e) {
  let percentage = e.offsetX / this.offsetWidth;
  audio.currentTime = percentage * audio.duration;
  console.log(percentage);
}

var musicTime = setInterval(function () {
  var min = Math.floor(audio.currentTime / 60);
  var sec = Math.floor(audio.currentTime % 60);
  if (sec < 10) {
    sec = "0" + String(sec);
  }

  Ctimer.innerHTML = min + ":" + sec;
}, 10);

var allMusicTime = setInterval(function () {
  let min = Math.floor(audio.duration / 60);
  let sec = Math.floor(audio.duration % 60);

  if (sec < 10) {
    sec = "0" + String(sec);
  }

  Atimer.innerHTML = min + ":" + sec;
}, 10);

function showSoundBar() {
  soundIcon.innerHTML = soundBar.style.display = "inline";

  console.log("teste");
}

function volume(amount) {
  audio.volume = amount;
}

playBnt.addEventListener("click", function () {
  playBnt.innerHTML = pauseBnt.style.display = "inline-block";
  playBnt.innerHTML = playBnt.style.display = "none";

  
});

pauseBnt.addEventListener("click", function () {
  pauseBnt.innerHTML = playBnt.style.display = "inline-block";
  pauseBnt.innerHTML = pauseBnt.style.display = "none";


});

let playlist = [{mp3:"./assets/songs/Bruno_Mars_-_Talking_To_The_Moon_CeeNaija.com_.mp3", 
                src:"/assets/songs/Bruno_Mars_-_Talking_To_The_Moon_CeeNaija.com_.mp3",
                title:"Talking to the Moon", img:"./assets/capas/TTM-pic.webp",

                mp3:"./assets/songs/Bruno Mars - Locked Out Of Heaven.mp3",
                src:"./assets/songs/Bruno Mars - Locked Out Of Heaven.mp3",
                title:"Locked Out of Heaven", img: "./assets/capas/Locked Out of Heaven.webp",

                mp3:"./assets/songs/BoB_ft_Bruno_Mars_-_Nothin_On_You.mp3"  ,
                src:"./assets/songs/BoB_ft_Bruno_Mars_-_Nothin_On_You.mp3",
                title:"Nothin on You", img: "./assets/capas/Nothin_On_You.jfif"

              }]



function nextMusic() {

  let i = 0;

  if(i === playlist.length - 1){  
    i = 0;

  }else{
    i++
  }

  audio.src = playlist[i]
  audio.addEventListener("ended", nextMusic)

}

// if(audio  === null){
//   throw "Playlist Player does not exists ...";
// }else{

//   audio.src = playlist[i];

//   audio.addEventListener("ended", nextMusic, false)
// }





function volta_5() {
  audio.currentTime -= 5;
}
function avanca_5() {
  audio.currentTime += 5;
}
function play() {
  audio.play();
}
function pause() {
  audio.pause();
}
