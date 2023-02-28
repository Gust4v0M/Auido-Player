let audio = document.getElementById("audio1");
let audioBar = document.getElementById("audioBar");
let Ctimer = document.getElementById("Ctimer");
let Atimer = document.getElementById("Atimer");
let soundIcon = document.getElementById("sound-icon")
let soundBar = document.getElementById("sound-bar")


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


var allMusicTime = setInterval(function() {
  let min = Math.floor(audio.duration / 60);
  let sec = Math.floor(audio.duration % 60);

  if (sec < 10) {
    sec = "0" + String(sec);
  }

  Atimer.innerHTML = min + ":" + sec;
},10)

function nextMusic(){

console.log("teste")
}  

function showSoundBar(){
  soundIcon.innerHTML = soundBar.style.display = "inline"

  console.log("teste")
}

function volume(amount){ 

  audio.volume = amount
  
  }


let playlist = {audio : "./assets/Bruno_Mars_-_When_I_Was_Your_Man.mp3",
                Name : "When i was your men"
              
              }




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


