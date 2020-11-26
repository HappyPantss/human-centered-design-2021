<template>
<!-- I have used the project of @lars-ruijs to see how he managed to transfer the data in the visualisation -->
  <h1>Hoi</h1>
  <TestChart
    v-if="specificationData.length > 0"
    :testData="specificationData"
    :width="900"
    :height="420"
  />
</template>

<script>
import * as RDWData from "../helpers/getData";
import TestChart from "./TestChart";
console.log("Hallo boven export van Main");
export default {
  name: "Main",
  components: { TestChart },
  data() {
    return {
      specificationData: [],
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      const specData = await RDWData.getData();
      this.specificationData = specData;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
g text.axis-label {
  font-size: 1.5em;
  fill: grey;
}
</style>