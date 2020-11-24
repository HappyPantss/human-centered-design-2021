<template>
  <div id="chart"></div>
  <h1>{{ loadData[0] }}</h1>
  <svg width="960" height="500"></svg>
</template>

<script>
import cleanData from "../assets/index";
import * as d3 from "d3";

const svg = d3.select("svg");

const title = "How many Park & ​​Ride places have been made per year?";

const xValue = (d) => d.areaid;
const xAxisLabel = "areaid";

const yValue = (d) => d.usageid;
const yAxisLabel = "usageid";
// set the dimensions and margins of the graph
const margin = {
    top: 20,
    right: 20,
    bottom: 30,
    left: 40,
  },
  width = 960 - margin.left - margin.right,
  height = 500 - margin.top - margin.bottom;

async function getData() {
  let data = await cleanData();
  console.log(data);
  return data;
}
getData().then((data) => {
  // set the ranges
  const xScale = d3
    .scaleTime()
    .domain(d3.extent(data, xValue))
    .range([0, width])
    .nice();

  const yScale = d3
    .scaleLinear()
    .domain(d3.extent(data, yValue))
    .range([height, 0])
    .nice();

  const g = svg
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

  const xAxis = d3.axisBottom(xScale).tickSize(-height).tickPadding(15);

  const yAxis = d3.axisLeft(yScale).tickSize(-width).tickPadding(10);

  const yAxisG = g.append("g").call(yAxis);
  yAxisG.selectAll(".domain").remove();

  yAxisG
    .append("text")
    .attr("class", "axis-label")
    .attr("y", -60)
    .attr("x", -height / 2)
    .attr("fill", "black")
    .attr("transform", `rotate(-90)`)
    .attr("text-anchor", "middle")
    .text(yAxisLabel);

  const xAxisG = g
    .append("g")
    .call(xAxis)
    .attr("transform", `translate(0,${height})`);

  xAxisG.select(".domain").remove();

  xAxisG
    .append("text")
    .attr("class", "axis-label")
    .attr("y", 80)
    .attr("x", width / 2)
    .attr("fill", "black")
    .text(xAxisLabel);

  const lineGenerator = d3
    .line()
    .x((d) => xScale(xValue(d)))
    .y((d) => yScale(yValue(d)))
    .curve(d3.curveBasis);

  g.append("path").attr("class", "line-path").attr("d", lineGenerator(data));

  g.append("text").attr("class", "title").attr("y", -10).text(title);
});

// Vue export logic
export default {
  name: "Chart",
  props: {
    data: Array,
  },
  data() {
    return {
      loadData: [],
    };
  },
  mounted() {
    console.log("App loaded");
    this.fetchData();
  },
  methods: {
    async fetchData() {
      let data = await cleanData();
      this.loadData = data;
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