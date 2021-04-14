var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent

var colors = ['blue', 'brown', 'green', 'orange', 'purple'];
var grammar = '#JSGF V1.0; grammar colors; public <color> = ' + colors.join(' | ') + ' ;'

var recognition = new SpeechRecognition();
var speechRecognitionList = new SpeechGrammarList();
speechRecognitionList.addFromString(grammar, 1);
recognition.grammars = speechRecognitionList;
recognition.continuous = false;
recognition.lang = 'en-US';
recognition.interimResults = false;
recognition.maxAlternatives = 1;

var diagnostic = document.querySelector('.output');
var bg = document.querySelector('html');
var hints = document.querySelector('.hints');

var colorHTML = '';
colors.forEach(function(v, i, a) {
    console.log(v, i);
    colorHTML += '<span style="background-color:' + v + ';"> ' + v + ' </span>';
});
hints.innerHTML = 'Zeg een kleur in het Engels om de achtergrondkleur van de app te wijzigen. Probeer ' + colorHTML + '.';

document.body.onload = function() {
    recognition.start();
    console.log('Klaar om een kleuropdracht te ontvangen.');
}

recognition.onresult = function(event) {
    // The SpeechRecognitionEvent results property returns a SpeechRecognitionResultList object
    // The SpeechRecognitionResultList object contains SpeechRecognitionResult objects.
    // It has a getter so it can be accessed like an array
    // The first [0] returns the SpeechRecognitionResult at the last position.
    // Each SpeechRecognitionResult object contains SpeechRecognitionAlternative objects that contain individual results.
    // These also have getters so they can be accessed like arrays.
    // The second [0] returns the SpeechRecognitionAlternative at position 0.
    // We then return the transcript property of the SpeechRecognitionAlternative object
    var color = event.results[0][0].transcript;
    diagnostic.textContent = 'Resultaat ontvangen: ' + color + '.';
    bg.style.backgroundColor = color;
    console.log('Vertrouwen: ' + event.results[0][0].confidence);
}

recognition.onspeechend = function() {
    recognition.stop();
}

recognition.onnomatch = function(event) {
    diagnostic.textContent = "Ik herkende die kleur niet.";
}

recognition.onerror = function(event) {
    diagnostic.textContent = 'Er is een fout opgetreden bij de herkenning: ' + event.error;
}