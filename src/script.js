let synth = window.speechSynthesis;
let voices = [];
let voiceSelect = document.getElementById("voiceSelect");
let speakBtn = document.getElementById("speakBtn");
let textInput = document.getElementById("text");

// Load voices and populate dropdown
function loadVoices() {
    voices = synth.getVoices();
    voiceSelect.innerHTML = ""; // Clear old options

    voices.forEach((voice, i) => {
        let option = new Option(voice.name, i);
        voiceSelect.appendChild(option);
    });
}

// Event listener for voice change
synth.onvoiceschanged = loadVoices;

// Event listener for button click
speakBtn.addEventListener("click", () => {
    let utterance = new SpeechSynthesisUtterance(textInput.value);
    utterance.voice = voices[voiceSelect.value] || voices[0]; // Select voice
    synth.speak(utterance);
});
