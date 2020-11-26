<template>
  <h2>Welke steden hebben de meeste P+R locaties na Rotterdam?</h2>
  <p>
    <strong>Klik op de staaf</strong> van een stad om te zien hoe het aantal
    parkeerplaatsen van de P+R locaties binnen die stad is verdeeld.
  </p>
  <svg width="960" height="500"></svg>
  <!-- <div id="testchartdiv"></div> -->
</template>

<script>
import * as d3 from "d3";

export default {
  name: "TestChart",
  mounted() {
    this.makeBarChart();
  },
  components: {},
  methods: {
    makeBarChart(data) {
      const svg = d3.select("svg");

      const width = +svg.attr("width");
      const height = +svg.attr("height");

      const xValue = data;
      const xAxisLabel = "Time";

      const yValue = data.value;
      const yAxisLabel = "areaid";

      const margin = { top: 60, right: 40, bottom: 88, left: 105 };
      const innerWidth = width - margin.left - margin.right;
      const innerHeight = height - margin.top - margin.bottom;

      const xScale = d3
        .scaleLinear()
        .domain(d3.extent(data, xValue))
        .range([0, innerWidth])
        .nice();

      const yScale = d3
        .scaleLinear()
        .domain(d3.extent(data, yValue))
        .range([innerHeight, 0])
        .nice();

      const g = svg
        .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);

      const xAxis = d3
        .axisBottom(xScale)
        .tickSize(-innerHeight)
        .tickPadding(15);

      const yAxis = d3.axisLeft(yScale).tickSize(-innerWidth).tickPadding(10);

      const yAxisG = g.append("g").call(yAxis);
      yAxisG.selectAll(".domain").remove();

      yAxisG
        .append("text")
        .attr("class", "axis-label")
        .attr("y", -60)
        .attr("x", -innerHeight / 2)
        .attr("fill", "black")
        .attr("transform", `rotate(-90)`)
        .attr("text-anchor", "middle")
        .text(yAxisLabel);

      const xAxisG = g
        .append("g")
        .call(xAxis)
        .attr("transform", `translate(0,${innerHeight})`);

      xAxisG.select(".domain").remove();

      xAxisG
        .append("text")
        .attr("class", "axis-label")
        .attr("y", 80)
        .attr("x", innerWidth / 2)
        .attr("fill", "black")
        .text(xAxisLabel);

      const lineGenerator = d3
        .line()
        .x((d) => xScale(xValue(d)))
        .y((d) => yScale(yValue(d)))
        .curve((d) => d3.curveBasis(d));

      g.append("path")
        .attr("class", "line-path")
        .attr("d", lineGenerator(data));

      //   d3.json(
      //     "https://opendata.rdw.nl/resource/6wzd-evwu.json"
      //   ).then((data) => {
      //     data.forEach((d) => {
      //       d.areaid = +d.areaid;
      //       d.startdataarea = +d.startdataarea;
      //     });
      //     render(data);
      //   });
      console.log(data);
    },
  },
};
</script>

<style>
body {
  margin: 0px;
  overflow: hidden;
}

circle {
  fill: steelblue;
}

.line-path {
  fill: none;
  stroke: maroon;
  stroke-width: 5;
  stroke-linejoin: round;
}

text {
  font-family: sans-serif;
}

.tick text {
  fill: #635f5d;
}

.tick line {
  stroke: #c0c0bb;
}

.axis-label {
  fill: #8e8883;
}

.title {
  fill: #635f5d;
}
</style>