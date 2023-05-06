// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {

  const audioSelector = document.getElementById("horn-select")
  const image = document.querySelector("#expose img")
  const audio = document.querySelector("audio")
  const volumeControl = document.getElementById("volume")
  const volImage = document.querySelector("#volume-controls img")
  const playButton = document.querySelector("#expose button")
  const jsConfetti = new JSConfetti()

  audioSelector.addEventListener('change', function() {
    //switch image and audio
    image.src = `./assets/images/${audioSelector.value}.svg` 
    audio.src = `./assets/audio/${audioSelector.value}.mp3`
  }) 

  volumeControl.addEventListener('input', function() {
    //change volume
    audio.volume = volumeControl.value/100
    if (volumeControl.value >= 67){
      volImage.src = `./assets/icons/volume-level-3.svg`
    }
    else if (33 <= volumeControl.value && volumeControl.value < 67){
      volImage.src = `./assets/icons/volume-level-2.svg`
    }
    else if (1 <= volumeControl.value && volumeControl.value < 33){
      volImage.src = `./assets/icons/volume-level-1.svg`
    }
    else{
      volImage.src = `./assets/icons/volume-level-0.svg`
    }
  })

  playButton.addEventListener('click', function(){
    //play audio
    audio.play()
    if (audioSelector.value == "party-horn"){
      jsConfetti.addConfetti()
    }
  })

}