let audio = document.getElementById("audio1");
let audioBar = document.getElementById("audioBar");

audio.addEventListener("timeupdate", function(){
  audioBar.value = audio.currentTime / audio.duration

})


audioBar.addEventListener("click", atuliza)

function atuliza(e){

let percentage = e.offsetX / this.offsetWidth;
audio.currentTime = percentage * audio.duration
 
}

function timer(){
console.log(audio.currentTime)
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


timer()