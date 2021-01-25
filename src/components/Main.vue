<template>
  <!-- I have used the project of @lars-ruijs to see how he managed to transfer the data in the visualisation -->
  <h1>Park and Ride</h1>
  <h2>Wat is Park and Ride?</h2>
  <p>Een Park and Ride facilities (oftewel: Parkeer en Reis-voorziening), vaak aangeduid als P&R of P+R, is een parkeervoorziening bij een halte of station die bedoeld is voor automobilisten die vervolgens met het openbaar vervoer verder reizen. Ook in de buurt van opritten van autosnelwegen worden parkeervoorzieningen aangelegd waar automobilisten kunnen overstappen op het openbaar vervoer of carpool-reizen.</p>
  <br />
  <h2>Hoeveel Park & Ride plekken zijn er per jaar gemaakt?</h2>
  <BarChart :mostData="mostData" :dataprop="startdataarea" />
  <h2>Over de jaren heen:</h2>
  <p>Het is interessant om te zien dat er 1 jaar uitspringt, dat is 2015. Waarom dat is, is niet duidelijk. </p>
  <br />
  <h2>In welke steden/ dorpen zijn de meeste Park & Ride plekken gemaakt in 2015? (3 of hoger)</h2>
  <BarChart :mostData="mostData" :dataprop="areadesc" />
  <h2>Conclusie:</h2>
  <p>Het valt mij op dat de meeste Park & Ride bevinden in dorpen, of steden zonder een te drukke binnenstad. 2015 springt er heel erg uit, waarom dit is, is nog onzeker.</p>
</template>

<script>
import BarChart from "./BarChart";
import mostData from "../helpers/mostData";

export default {
  name: "Main",
  components: { BarChart },
  props: ["data"],
  data() {
    return {
      mostData: mostData(),
    };
  },
  mounted() {
    console.log("Mounted main");
  },
  updated() {
    console.log("Updated main");
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
body {
  margin: 0px;
  font-family: 'News Cycle', sans-serif;
}

h1 {
  text-align: center;
}
</style>