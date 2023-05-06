// explore.js

window.addEventListener('DOMContentLoaded', init)

function init() {
  
    const smiley = document.querySelector("#explore img")
    const text = document.getElementById("text-to-speak")
    const voiceSelector = document.getElementById("voice-select")
    const playButton = document.querySelector("#explore button")
    var voices = []

    //once voices load in, populate list
    speechSynthesis.addEventListener("voiceschanged", function() {
        voices = speechSynthesis.getVoices();
        for (let i = 0; i < voices.length; i++) {
            const option = document.createElement("option");
            option.textContent = `${voices[i].name} (${voices[i].lang})`;
    
            option.setAttribute("data-lang", voices[i].lang);
            option.setAttribute("data-name", voices[i].name);
            voiceSelector.appendChild(option);
        }
      })
    
    //play voice
    playButton.addEventListener('click', function() {
        let utterance = new SpeechSynthesisUtterance(text.value);
        const selectedOption = voiceSelector.selectedOptions[0].getAttribute("data-name");
        for (let i = 0; i < voices.length; i++) {
            if (voices[i].name === selectedOption) {
                utterance.voice = voices[i];
            }
        }
        speechSynthesis.speak(utterance);

        utterance.addEventListener('start', function() {
            smiley.src = `./assets/images/smiling-open.png`
        })
        utterance.addEventListener('end', function() {
            smiley.src = `./assets/images/smiling.png`
        })
      })
    

}