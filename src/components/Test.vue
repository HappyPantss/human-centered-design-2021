<template>
<h1>Hoi</h1>
  <ul>
    <li v-for="city in cityData" :key="city.lat">{{ city.city }}</li>
  </ul>
  <Chart v-if="cityData.length > 0" :barData="cityData" :width="900" :height="420" @cityname="makePie"/>
</template>

<script>
import * as RDWData from "../helpers/dataCleaning";
import Chart from "./Chart";

console.log("Hallo boven export van Main");
export default {
  name: 'Main',
  components: { Chart },
  data() {
    return {
      specificationData: [],
      cityData: [],
      pieData: [],
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      const specData = await RDWData.combinedData();
      this.specificationData = specData;
      const prCityData = await RDWData.cityData(specData);
      this.cityData = prCityData;
    },
    makePie(id) {
      const citySpecs = this.specificationData.filter(a => a.city == id);
      this.pieData = citySpecs;
    }
  },
};
</script>