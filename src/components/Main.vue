<template>
  <div class="spacer">
    <div class="corner">
      <div class="logo"></div>
      <h1>Parkeren (met RDW data)</h1>
    </div>
    <h1 class="title">P + R</h1>
  </div>

    <div class="wrap">
      <img src="../assets/arrow.svg" id="arrow" class="bounce" />
    </div>
  <div class="stage">
    <!-- I have used the project of @lars-ruijs to see how he managed to transfer the data in the visualisation -->
      <h2>Wat is <span>Park and Ride</span>?</h2>
      <br />
      <p>
        Een Park and Ride facilities (oftewel: Parkeer en Reis-voorziening),
        vaak aangeduid als P&R of P+R, is een parkeervoorziening bij een halte
        of station die bedoeld is voor automobilisten die vervolgens met het
        openbaar vervoer verder reizen. Ook in de buurt van opritten van
        autosnelwegen worden parkeervoorzieningen aangelegd waar automobilisten
        kunnen overstappen op het openbaar vervoer of carpool-reizen.
      </p>
  </div>
  <div class="stage">
      <BarChart />
  </div>
  <div class="stage">
      <h2>Over de <span>jaren</span> heen:</h2><br>
      <p class="information">
        Parkeerders op herkomst-P+R-terreinen leveren relatief veel bespaarde
        autokilometers en spitsmijdingen op. Op dit soort P+R-terreinen
        vervolgt, op werkdagen, vrijwel iedereen (95%) de reis met de trein. Een
        groot deel daarvan reist in de spits. 80% reist in de ochtendspits heen
        en 90% in de middagspits terug. Dit leidt tot ruim 1,5 spitsmijdingen
        per parkeerder (ochtend- en/of avondspits) op een groot deel van de
        totale route. Omdat forensen die een P+R-terrein gebruiken een gemiddeld
        grote woon-werkafstand hebben (ongeveer 45 km), worden hiermee ook
        relatief veel autokilometers en de daarmee gepaarde emissies bespaard.
      </p>
      <p class="information">
        Mensen die een bestemmings-P+R gebruiken, maken een groot deel van de
        reis nog steeds per auto (bij woon-werkverkeer meestal vaak in de spits)
        en zullen op het hoofdwegennet daarom geen spitsmijdingen realiseren,
        maar wel op het laatste deel van de reis (veelal in binnensteden). Als
        we hiervoor een halve spitsmijding per parkeerder rekenen dan komen we
        voor een gemiddeld P+R-terrein (herkomst en/of bestemming) op een
        vuistregel van ongeveer 1 spitsmijding per parkeerder per dag.
      </p>
      <p class="information">
        Een onbedoeld effect van P+R-locaties is dat ze autoverkeer kunnen
        aanmoedigen. Een ander (onbedoeld) effect is dat herkomst-P+R-locaties
        kunnen worden gebruikt als een bestemmings-P+R (en andersom). Dit kan
        ertoe leiden dat het verkeer minder dan gepland afneemt (of zelfs iets
        toeneemt) op wegcorridors die de P+R-locaties juist moesten ontzien.
      </p>
  </div>
</template>

<script>
import BarChart from "./BarChart";

export default {
  name: "Main",
  components: { BarChart },
  props: ["data"],
  data() {},
  created() {},
  updated() {
    console.log("Updated main");
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap");

body {
  font-family: "News Cycle", sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #0e518d;
}

.spacer {
  width: 100%;
  height: 100vh;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
}

.stage {
  width: 50%;
  height: 100vh;
  background-color: #0e518d;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  text-align: center;
}

.one {
  background-color: white;
  padding: 2rem;
  border-radius: 2rem;
  width: 50%;
  top: 0;
  left: 0;
}

.corner {
  top: 0;
  left: 0;
  position: absolute;
  display: flex;
}

.corner h1 {
  font-family: "Roboto", sans-serif;
  text-align: center;
  font-size: 3rem;
  align-self: flex-end;
  margin-bottom: -12px;
  margin-left: 20px;
}

.logo {
  background-color: #0e518d;
  height: 20rem;
  width: 20rem;
}

h1.title {
  font-family: "Roboto", sans-serif;
  text-align: center;
  color: #0e518d;
  font-size: 30rem;
  margin-top: 15rem;
}

.stage h2 {
  font-family: "Roboto", sans-serif;
  font-size: 4rem;
  color: white;
}

.stage p {
  font-family: "Roboto", sans-serif;
  font-size: 1.4rem;
  color: #d8d8d8;
}

.information {
  padding-bottom: 0.5rem;
}

.wrap {
    height: 100%;
    width: 100%;
    text-align: center;
}

div img {
    height: 40px;
    margin: 0 auto;
    margin-left: -4rem;
}

.wrap img {
    line-height: 60px;
    position: absolute;
    bottom: 50px;
}

.bounce {
    animation-iteration-count: infinite;
    animation-duration: 1.5s;
    animation: bounce 3.6s ease infinite;
    transform-origin: 50% 50%;
}

@keyframes bounce {
    0% {
        transform: translateY(0);
    }
    5.55556% {
        transform: translateY(0);
    }
    11.11111% {
        transform: translateY(0);
    }
    22.22222% {
        transform: translateY(-15px);
    }
    27.77778% {
        transform: translateY(0);
    }
    33.33333% {
        transform: translateY(-15px);
    }
    44.44444% {
        transform: translateY(0);
    }
    100% {
        transform: translateY(0);
    }
}
</style>