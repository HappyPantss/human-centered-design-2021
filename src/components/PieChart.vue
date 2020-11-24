<template>
  <svg width="960" height="500"></svg>
</template>

<script>
import * as d3 from "d3";
// Vue export logic
export default {
  name: "PieChart",
  //   props: ["chartData"],
  //   data() {
  //     return {
  //       svgElement: Object,
  //       x: Function,
  //       y: Function,
  //       width: Number,
  //       height: Number,
  //     };
  //   },
  mounted() {
    const render = (data) => {
      // let data = this.chartData;
      const svg = d3.select("svg");

      const title = "A Week in San Francisco";

      const xValue = (d) => d.timestamp;
      const xAxisLabel = "Time";

      const yValue = (d) => d.temperature;
      const yAxisLabel = "Temperature";
      // set the dimensions and margins of the graph
      const margin = {
          top: 20,
          right: 20,
          bottom: 30,
          left: 40,
        },
        width = 960 - margin.left - margin.right,
        height = 500 - margin.top - margin.bottom;
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

      g.append("path")
        .attr("class", "line-path")
        .attr("d", lineGenerator(data));

      g.append("text").attr("class", "title").attr("y", -10).text(title);
    };
    d3.csv(
      "https://vizhub.com/curran/datasets/temperature-in-san-francisco.csv"
    ).then((data) => {
      data.forEach((d) => {
        d.temperature = +d.temperature;
        d.timestamp = new Date(d.timestamp);
      });
      render(data);
    });
  },
  updated() {
    console.log("Updated chart");
    console.log(this.chartData);
    console.log(this.svgElement);
    // Create the u variable
    let u = this.svgElement.selectAll("rect").data(this.chartData);
    u.enter()
      .append("rect") // Add a new rect for each new elements
      .merge(u) // get the already existing elements as well
      .transition() // and apply changes to all of them
      .duration(1000)
      .attr("x", (d) => {
        return this.x(d.timestamp);
      })
      .attr("y", (d) => {
        return this.y(d.temperature);
      })
      .attr("width", this.x.bandwidth())
      .attr("height", (d) => {
        return this.height - this.y(d.temperature);
      });
    // If less group in the new dataset, I delete the ones not in use anymore
    u.exit().remove();
  },
  computed() {
    console.log("Computed chart");
    console.log(this);
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