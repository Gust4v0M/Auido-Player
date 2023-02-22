let audio = document.getElementById("audio1");
let audioBar = document.getElementById("audioBar");
let Ctimer = document.getElementById("Ctimer")
let Atimer = document.getElementById("Atimer")
 

audio.addEventListener("timeupdate", function(){
  audioBar.value = audio.currentTime / audio.duration

})


audioBar.addEventListener("click", atuliza)

function atuliza(e){

let percentage = e.offsetX / this.offsetWidth;
audio.currentTime = percentage * audio.duration;
console.log(percentage);
 
}

var musicTime  = setInterval(function(){

  var min = Math.floor(audio.currentTime / 60);
  var sec = Math.floor(audio.currentTime % 60);
    if (sec < 10){
      sec = "0" + String(sec);
    }

  Ctimer.innerHTML = min + ':' + sec


}, 1)

function allMusicTime(){


  let min = Math.floor(audio.duration / 60)
  let sec = Math.floor(audio.duration % 60)

  if(sec < 10){
    sec = '0' + String(sec)
  }

  Atimer.innerHTML =  min + ':' + sec  

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

allMusicTime()
