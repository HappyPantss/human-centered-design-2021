<template>
  <!-- I have used the project of @lars-ruijs to see how he managed to transfer the data in the visualisation -->
  <h1>Hoi</h1>
  <button v-on:click="updateData">Click me!</button>
  <br />
  <TestChart :chartData="chartData" />
</template>

<script>
import TestChart from "./TestChart";
import getData from "../helpers/getData";

export default {
  name: "Main",
  components: { TestChart },
  props: ["data"],
  data() {
    return {
      chartData: getData(),
    };
  },
  mounted() {
    console.log("Mounted main");
  },
  updated() {
    console.log("Updated main");
  },
  methods: {
    updateData: async function () {
      this.chartData = getData();
      await this.$nextTick();
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
body {
  margin: 0px;
  overflow: hidden;
}
</style>