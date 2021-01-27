<template>
  <div class="container">
    <!-- <div class="one">
    <div class="corner"></div>
    <h1>Parkeren</h1>
    <h1 class="title">P + R</h1>
  </div> -->
    <div class="two">
      <!-- I have used the project of @lars-ruijs to see how he managed to transfer the data in the visualisation -->
      <h2>Wat is Park and Ride?</h2>
      <br />
      <p>
        Een Park and Ride facilities (oftewel: Parkeer en Reis-voorziening),
        vaak aangeduid als P&R of P+R, is een parkeervoorziening bij een halte
        of station die bedoeld is voor automobilisten die vervolgens met het
        openbaar vervoer verder reizen. Ook in de buurt van opritten van
        autosnelwegen worden parkeervoorzieningen aangelegd waar automobilisten
        kunnen overstappen op het openbaar vervoer of carpool-reizen.
      </p>
      <br />
      <BarChart />
      <br />
      <h2>Over de jaren heen:</h2><br>
      <p>
        Het is interessant om te zien dat er 1 jaar uitspringt, dat is 2015.
        Waarom dat is, is niet duidelijk.
      </p>
    </div>
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

.container {
  background-color: white;
  border-radius: 10px;
  padding: 1rem;
}

.one {
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
}

.corner {
  background-color: #0e518d;
  height: 20rem;
  width: 20rem;
}

h1 {
  font-family: "Roboto", sans-serif;
  text-align: center;
  font-size: 5rem;
}

h1.title {
  font-family: "Roboto", sans-serif;
  text-align: center;
  font-size: 18rem;
}

h2 {
  font-family: "Roboto", sans-serif;
  font-size: 1.6rem;
}
</style>