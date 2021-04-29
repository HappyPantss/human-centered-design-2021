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

    var msg = new SpeechSynthesisUtterance();
    msg.text = "Spreek je plaats in waar je vandaag wilt hardlopen.";
    msg.lang = 'nl';
    speechSynthesis.speak(msg);

    voiceWave.style.display = 'block'
    voiceBtn.style.display = 'none'
}

recognition.onresult = function(event) {
    var color = event.results[0][0].transcript;
    diagnostic.textContent = 'Resultaat ontvangen: ' + color + '.'
        // console.log('Vertrouwen: ' + event.results[0][0].confidence)

    const API_KEY = '6360ba36cb9146e6cdcac987c838d764'

    function getData() {
        return new Promise((resolve, reject) => {
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=` + color + `&units=metric&appid=` + API_KEY)
                .then(response => {
                    if (!response.ok) {
                        throw Error("ERROR")
                    }
                    return response.json()
                })
                .then(data => {
                    let html = data.main.temp
                    resolve(html)

                    var temperatuur = Math.floor(html);

                    if (temperatuur <= 9 || temperatuur >= 26) {

                        var msg = new SpeechSynthesisUtterance();
                        msg.text = welkom + "het is " + datumweergave + " en " + tijdweergave + " uur. De temperatuur in " + color + " is " + temperatuur + " graden. Het is slecht weer om buiten te gaan hardlopen.";
                        msg.lang = 'nl';
                        speechSynthesis.speak(msg);

                        hints.innerHTML = welkom + "het is " + datumweergave + " en " + tijdweergave + " uur. De temperatuur in " + color + " is " + temperatuur + " graden. Het is slecht weer om buiten te gaan hardlopen.";

                    } else if (temperatuur >= 10 && temperatuur <= 15) {

                        var msg = new SpeechSynthesisUtterance();
                        msg.text = welkom + "het is " + datumweergave + " en " + tijdweergave + " uur. De temperatuur in " + color + " is " + temperatuur + " graden. Het is redelijk weer om buiten te gaan hardlopen.";
                        msg.lang = 'nl';
                        speechSynthesis.speak(msg);

                        hints.innerHTML = welkom + "het is " + datumweergave + " en " + tijdweergave + " uur. De temperatuur in " + color + " is " + temperatuur + " graden. Het is redelijk weer om buiten te gaan hardlopen.";

                    } else if (temperatuur >= 15 && temperatuur <= 20) {

                        var msg = new SpeechSynthesisUtterance();
                        msg.text = welkom + "het is " + datumweergave + " en " + tijdweergave + " uur. De temperatuur in " + color + " is " + temperatuur + " graden. Het is goed weer om buiten te gaan hardlopen.";
                        msg.lang = 'nl';
                        speechSynthesis.speak(msg);

                        hints.innerHTML = welkom + "het is " + datumweergave + " en " + tijdweergave + " uur. De temperatuur in " + color + " is " + temperatuur + " graden. Het is goed weer om buiten te gaan hardlopen.";

                    } else if (temperatuur >= 20 && temperatuur <= 25) {

                        var msg = new SpeechSynthesisUtterance();
                        msg.text = welkom + "het is " + datumweergave + " en " + tijdweergave + " uur. De temperatuur in " + color + " is " + temperatuur + " graden. Het is perfect weer om buiten te gaan hardlopen.";
                        msg.lang = 'nl';
                        speechSynthesis.speak(msg);

                        hints.innerHTML = welkom + "het is " + datumweergave + " en " + tijdweergave + " uur. De temperatuur in " + color + " is " + temperatuur + " graden. Het is perfect weer om buiten te gaan hardlopen.";

                    }
                })
                .catch(error => {
                    console.log(error)
                })
        })
    }

    getData()
}

// Bereken de dag en het uur.
function initArray() {
    this.length = initArray.arguments.length;
    for (var i = 0; i < this.length; i++)
        this[i + 1] = initArray.arguments[i];
}

var dagArray = new initArray("zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag");

var maandArray = new initArray("januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december");

var nu = new Date();
var dagtekst = dagArray[(nu.getDay() + 1)];
var dag = nu.getDate();
var maandtekst = maandArray[(nu.getMonth() + 1)];
var jaar = nu.getYear();
var jaar4 = ((jaar < 1900) ? (jaar + 1900) : (jaar));

var datumweergave = dagtekst + " " + dag + " " + maandtekst + " " + jaar4;

var uren = nu.getHours();
var uren2 = ((uren < 10) ? "0" : "") + uren;
var minuten = nu.getMinutes();
var minuten2 = ((minuten < 10) ? ":0" : ":") + minuten;

var tijdweergave = uren2 + minuten2

if (nu.getHours() >= 18)
    var welkom = ("Goedenavond, ");
else if (nu.getHours() >= 12)
    var welkom = ("Goedemiddag, ");
else if (nu.getHours() >= 6)
    var welkom = ("Goedemorgen, ");
else
    var welkom = ("Goedenacht, ");

recognition.onspeechend = function() {
    recognition.stop();
    voiceWave.style.display = 'none'
    voiceBtn.style.display = 'block'

    voiceBtn.innerHTML = 'Spreek een andere plaats in'
    question.style.display = 'none'
    title.style.display = 'none'
    setTimeout(function() {
        repeatDiv.style.display = 'block'
    }, 12000)
}

recognition.onnomatch = function() {
    diagnostic.textContent = "Ik herkende die plaats niet."
    voiceWave.style.display = 'none'
    voiceBtn.style.display = 'block'
}

recognition.onerror = function(event) {
    diagnostic.textContent = 'Er is een fout opgetreden bij de herkenning: ' + event.error
    voiceWave.style.display = 'none'
    voiceBtn.style.display = 'block'
}