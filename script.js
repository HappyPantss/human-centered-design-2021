var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent

var colors = ['blauw', 'bruin', 'rood', 'paars'];
var grammar = '#JSGF V1.0; grammar colors; public <color> = ' + colors.join(' | ') + ' ;'
var voiceWave = document.getElementById('bigpic');
var voiceBtn = document.getElementById('voiceBtn')

var recognition = new SpeechRecognition();
var speechRecognitionList = new SpeechGrammarList();
speechRecognitionList.addFromString(grammar, 1);
recognition.grammars = speechRecognitionList;
recognition.continuous = false;
recognition.lang = 'nl-NL';
recognition.interimResults = false;
recognition.maxAlternatives = 1;

var diagnostic = document.querySelector('.output');
var bg = document.querySelector('body');
var hints = document.querySelector('.hints');

var colorHTML = '';
colors.forEach(function(v, i, a) {
    console.log(v, i);
    colorHTML += '<span> ' + v + ' </span>';
});
hints.innerHTML = 'Zeg een kleur om de achtergrondkleur van de app te wijzigen. Probeer ' + colorHTML + '.';

function handleBtnClick() {
    recognition.start();
    voiceWave.style.display = 'block'
    voiceBtn.style.display = 'none'
    console.log('Klaar om een kleuropdracht te ontvangen.');
}

// document.body.onload = function() {
//     recognition.start();
//     console.log('Klaar om een kleuropdracht te ontvangen.');
// }

recognition.onresult = function(event) {
    var color = event.results[0][0].transcript;
    diagnostic.textContent = 'Resultaat ontvangen: ' + color + '.';
    if (color == 'blauw' || color == 'Blauw') {
        bg.style.backgroundColor = 'blue';
    } else if (color == 'bruin' || color == 'Bruin') {
        bg.style.backgroundColor = '#482f2b';
    } else if (color == 'rood' || color == 'Rood') {
        bg.style.backgroundColor = '#c0392b';
    } else if (color == 'paars' || color == 'Paars') {
        bg.style.backgroundColor = '#8e44ad';
    }
    bg.style.backgroundColor = color;
    console.log('Vertrouwen: ' + event.results[0][0].confidence);
}

recognition.onspeechend = function() {
    recognition.stop();
    voiceWave.style.display = 'none';
    voiceBtn.style.display = 'block'
}

recognition.onnomatch = function() {
    diagnostic.textContent = "Ik herkende die kleur niet.";
}

recognition.onerror = function(event) {
    diagnostic.textContent = 'Er is een fout opgetreden bij de herkenning: ' + event.error;
}