let audio = document.getElementById("audio1");
let audioBar = document.getElementById("audioBar");

let teste = document.getElementById("teste")

function currentBar() {

  teste.value = audio.currentTime
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

currentBar();
