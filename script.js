var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent

var colors = ['blauw', 'bruin', 'rood', 'paars']
var grammar = '#JSGF V1.0; grammar colors; public <color> = ' + colors.join(' | ') + ' ;'
var voiceWave = document.getElementById('bigpic')
var voiceBtn = document.getElementById('voiceBtn')
var repeatDiv = document.getElementById('repeatDiv')
var question = document.getElementById('question')
var title = document.getElementById('title')

var recognition = new SpeechRecognition();
var speechRecognitionList = new SpeechGrammarList()
speechRecognitionList.addFromString(grammar, 1)
recognition.grammars = speechRecognitionList
recognition.continuous = false
recognition.lang = 'nl-NL'
recognition.interimResults = false
recognition.maxAlternatives = 1

var diagnostic = document.querySelector('.output')
var bg = document.querySelector('body')
var hints = document.querySelector('.hints')

function handleBtnClick() {
    recognition.start()
    document.getElementById('my_audio3').play()
    voiceWave.style.display = 'block'
    voiceBtn.style.display = 'none'
    console.log('Klaar om een kleuropdracht te ontvangen.');
}

function repeatBtnClick() {
    document.getElementById('my_audio4').play()
    setTimeout(function() {
        document.getElementById('my_audio5').play()
    }, 2500)
    setTimeout(function() {
        document.getElementById('my_audio6').play()
    }, 5500)
}

recognition.onresult = function(event) {
    var color = event.results[0][0].transcript;
    diagnostic.textContent = 'Resultaat ontvangen: ' + color + '.'
    console.log('Vertrouwen: ' + event.results[0][0].confidence)
}

recognition.onspeechend = function() {
    recognition.stop();
    voiceWave.style.display = 'none'
    voiceBtn.style.display = 'block'

    document.getElementById('my_audio4').play()
    setTimeout(function() {
        document.getElementById('my_audio5').play()
    }, 2500)
    setTimeout(function() {
        document.getElementById('my_audio6').play()
    }, 5500)

    hints.innerHTML = "Het is 6 over 4 's middags. De temperatuur in Amsterdam is 15 graden. Het is prima weer om buiten te gaan hardlopen"

    voiceBtn.innerHTML = 'Spreek een andere plaats in'
    question.style.display = 'none'
    title.style.display = 'none'
    setTimeout(function() {
        repeatDiv.style.display = 'block'
    }, 7500)
}

recognition.onnomatch = function() {
    diagnostic.textContent = "Ik herkende die kleur niet."
    voiceWave.style.display = 'none'
    voiceBtn.style.display = 'block'
}

recognition.onerror = function(event) {
    diagnostic.textContent = 'Er is een fout opgetreden bij de herkenning: ' + event.error
    voiceWave.style.display = 'none'
    voiceBtn.style.display = 'block'
}