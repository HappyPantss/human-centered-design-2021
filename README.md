# Human Centered Design @cmda-minor-web 2020-2021
Dit is de repository voor Human Centered Design @cmda-minor-web 2020-2021. In dit project maak ik een exclusief design voor Roger Ravelli. Roger is sinds een jaar of 10 langzaam blind aan het worden. Inmiddels is hij op het punt beland dat hij de overstap aan het maken is van inzoom-software naar screenreaders. Tot voor kort was hij een specialist op het gebied van duurzame energie. Maar omdat hij geen technische tekeningen, ingewikkelde tabellen, of grafieken meer kan lezen, houdt dat op. Roger heeft Macula Degeneratie, dat betkeent dat Roger restvisie heeft. Het midden van zijn zicht valt weg, en ziet aan de zijkanten nog wat.

# 🌍 Live version
This is the repository for frontend-applications CMD 2020/2021. Live version: https://get-scrambled.herokuapp.com/

## 🚀 Installation
**Clone the repository:**<br>
`https://github.com/HappyPantss/real-time-web-2021.git`

**Install NPM:**<br>
`npm install`

### Usage
**Start the local server.**<br>
`npm run start`

**Visit the local website in your browser with:**<br>
`http://localhost:3000/`

## 💬 Concept
In this course I will make a real time web app. Using Socket.IO. During this course I will learn how to build a real-time application. I will learn techniques to setup an open connection between the client and the server. This will enable me to send data in real-time both ways, at the same time.

### 🔨 Ideas
The ideas that I had were to make a:
* Scramble game
* Pixelart page

### ✏️ Sketches
![Two Ideas](https://i.imgur.com/cluFxRW.png)

## ✨ Functionalities
### Must haves
* Add support for nicknames.
* Boradcast a message to connected users when someone connects or disconnects.
* Add "{user} is typing" functionality

## 📈 Data
### API
In this project I don't use an API, because it was to difficult to find one. That is why I choose for a CDN script/ NPM package. This script has an array full of random English words.<br>
**NPM Package:** https://www.npmjs.com/package/random-words<br>
**Script tag:** https://cdn.jsdelivr.net/npm/random-words@1.1.1/index.min.js<br>
**All files:** https://www.jsdelivr.com/package/npm/random-words
### Data Life Cycle Diagram
**WORKING ON**
### Actor Diagram
![](https://i.imgur.com/5YAw0Ok.jpg)
### Real-time Events
| Socket | Description |
| --- | --- |
| `connection` | Know when a user has connected. |
| `new user` | Checks if the nicknane/ username is still available. |
| `playGame` | When the button to start the game is pressed, hide the button. |
| `tempWord` | Listen to the answer of the user. |
| `randWords` | The scrambled word. |
| `newWords` | The solution word. |
| `message` | The chat message with nickname. |
| `disconnect` | Disconnects the user from the game.  |
| `usernames` | Show all the users that are online in a list. |
| `userJoined` | Send a message to the other clients when a user joined/ connected. |
| `userLeft` | Send a message to the other clients when a user left/ disconnected. |

# 📘 License
This project is released under the under terms of the MIT License.
Human Centered Design is een  methode voor het ontwerpen van gebruiksvriendelijke interactieve toepassingen. 

> What distinguishes Human-Centered Design from other problem-solving approaches is its obsessive focus on understanding the perspective of the person who experiences a problem, their needs, and whether the solution that has been designed for them is truly meeting their needs effectively or not. At its most effective, the very people who experience a problem the most are a constant part of the design process and when possible, become part of the design team itself. - [What Is Human-Centered Design?](https://medium.com/dc-design/what-is-human-centered-design-6711c09e2779)

Door regelmatig te testen met je doelgroep kom je tot een beter en passend ontwerp. Een Frontend Designer en Developer heeft verstand van techniek, UX en design. Als je web technieken beheerst kun je je ideeën snel prototypen en testen in een browser. Je kan dan aanpassingen doorvoeren, uitproberen en weer testen ...

In het vak Human Centered Design gaan we dingen ontwerpen voor echte mensen. Is er goede interactie? Kan je 'mens' je product op een prettige manier bedienen? Wat voor principes heb je gebruikt en getest? En is het leuk?


## Opdracht

### Ontwerpen met en voor echte mensen

Voor dit vak krijg je een ontwerp-opdracht die je gaat maken voor 1 mens. Een echt mens. Je moet je ontwerp 3 keer testen. Door te testen en te itereren ga je je ontwerp verbeteren. Uiteindelijk heb je een ontwerp dat exclusief gemaakt is voor 1 persoon. Een _exclusive design_ ... Wie is deze persoon dan voor wie je dit gaat maken? Wat vindt deze persoon leuk of juist niet? En hoe bedient deze persoon een computer?

- [Opdracht - Ontwerpen met en voor echte mensen](course/Opdracht.md)


### Leerdoelen

- _Leren hoe je (design) principles in een ontwerp kan toepassen._
- _User needs begrijpen en gebruiken in je ontwerp._
- _Leren hoe je moet testen en de resultaten gebruiken voor het verbeteren van je ontwerp._

[Rubric](https://docs.google.com/spreadsheets/d/1no32c9YyAP78VMcqfA5i5at2OrxP9ce1d8dVGnii4Vs/)



## Planning & programma

| Planning  | Woensdag  |  Donderdag | Vrijdag  |
|---|---|---|---|
| [Week 1](#week-1)  | Intro, College inclusive design + Testen | Gastcollege + Testen | ~~Feedbackgesprekken~~ |
| [Week 2](#week-2)  | College over testen + Testen  | Gastcollege + Testen | Feedbackgesprekken  |
| [Week 3](#week-3)  | College + Testen  |  Gastcollege + Testen | Feedbackgesprekken  |
| [Week 4](#week-4)  | Presentaties + Beoordelingsgesprekken | Beoordelingsgesprekken | Beoordelingsgesprekken + Weekly Nerd |



### Week 1
Deze week krijg je een college over _Exclusive Design Principles_. Deze Principles ga je toepassen in de opdracht. Op woensdag gaan we kennis maken met de echte mensen voor wie we gaan ontwerpen. Je kan dan al een kleine interactieve demo maken om te testen.

#### Woensdag 7 april
Woensdag is de eerste les van het vak Human Centered Design. Je krijgt een intro college over het vak en Vasilis gaat vertellen over _Exclusive Design_.

Daarna prototypen en testen

- 14:00 Groep Darice
- 15:00 Groep Eric

#### Donderdag 8 april
Donderdag begint de les met een gastcollege. Deze les gaan we het artikelen [Exclusive Design van Vasilis van Gemert](https://exclusive-design.vasilis.nl/) bespreken.

Daarna prototypen en testen

- 10:30 Groep Roger 
- 16:30 Groep Marijn


#### Vrijdag 9 april
Deze dag is voor Real-Time web...


### Week 2
Deze week heb je het tweede gesprek met je mens. Wat ga je testen? Wat wil je weten? 

#### Woensdag 14 april
Woensdag krijg je een college over testen. Voor deze les moet je het artikel [10 Usability Lessons van Steve Krug](https://www.uxbooth.com/articles/10-usability-lessons-from-steve-krugs-dont-make-me-think/) lezen.

Daarna voor de tweede keer prototypen en testen

- 14:00 Groep Darice 
- 15:00 Groep Eric

#### Donderdag 15 april
Donderdag begint de les met een gastcollege van Marie van Driessche. 

Daarna voor de tweede keer prototypen en testen

- 10:30 Groep Roger 
- 14:00 Groep Marijn

#### Vrijdag 16 april
Vrijdag zijn er coachgesprekken in teams.




### Week 3
In week 3 gaan we verder met testen, itereren en reflecteren. Deze week is de laatste sessie met je mens. 

#### Woensdag 21 april
Woensdag beginnen we met een college. Voor deze les moet je dit artikel lezen: [How User Scenarios Help To Improve Your UX van Sabina Idler](https://usabilla.com/blog/how-user-scenarios-help-to-improve-your-ux/).

Daarna gaan we voord de laatste keer prototypen en testen

- 14:00 Groep Darice 
- 15:00 Groep Eric

#### Donderdag 22 april
Donderdag begint de les met een gastcollege van Johan Huijkman.

Daarna gaan we voord de laatste keer prototypen en testen

- 10:30 Groep Roger 
- 14:00 Groep Marijn


#### Vrijdag 23 april
Vrijdag zijn er coachgesprekken.




### Week 4

Deze week hebben we een gesprek waarin we je vorderingen en bevindingen bespreken. We verwachten dat je op Github je tests en iteraties hebt beschreven. Belangrijk is dat je reflecteert op de leerdoelen van het vak. 


#### Woensdag 28 april
Teampresentaties en beoordelingsgesprekken. 

#### Donderdag 29 april
Beoordelingsgesprekken

#### Vrijdag 30 april
Beoordelingsgesprekken + Weekly Nerd





<!-- Add a link to your live demo in Github Pages 🌐-->

<!-- ☝️ replace this description with a description of your own work -->

<!-- replace the code in the /docs folder with your own, so you can showcase your work with GitHub Pages 🌍 -->

<!-- Add a nice poster image here at the end of the week, showing off your shiny frontend 📸 -->

<!-- Maybe a table of contents here? 📚 -->

<!-- How about a section that describes how to install this project? 🤓 -->

<!-- ...but how does one use this project? What are its features 🤔 -->

<!-- Maybe a checklist of done stuff and stuff still on your wishlist? ✅ -->

<!-- How about a license here? 📜 (or is it a licence?) 🤷 -->
