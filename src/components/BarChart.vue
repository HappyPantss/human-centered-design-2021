<template>
  <div id="chart-wrapper">
    <svg id="d3-chart"></svg>
    <div id="option">
        <input name="updateButton" 
              type="button" 
              value="Update" 
              onclick="updateData()" />
    </div>
  </div>
</template>

<script>
import * as d3 from "d3";
// Vue export logic
export default {
  names: "BarChart",
  props: ["chartData", "dataprop"],
  data() {
    return {
      svgElement: Object,
      x: Function,
      y: Function,
      width: Number,
      height: Number,
    };
  },
  mounted() {
    this.makeBarChart();
  },
  methods: {
    makeBarChart() {
      let data = this.chartData;
      this.svgElement = d3.select("#d3-chart");

      // set the dimensions and margins of the graph
      const margin = {
          top: 10,
          right: 20,
          bottom: 30,
          left: 40,
        },
        width = 930 - margin.left - margin.right,
        height = 500 - margin.top - margin.bottom;

      // set the ranges
      const x = d3.scaleBand().range([0, width]).padding(0.1);

      const y = d3.scaleLinear().range([height, 0]);

      // append the svg object to the body of the page
      // append a 'group' element to 'svg'
      // moves the 'group' element to the top left margin
      const svg = d3
        .select("#d3-chart")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

      // format the data
      data.forEach(function (d) {
        d.value = +d.value;
      });

      // Scale the range of the data in the domains
      x.domain(
        data.map(function (d) {
          return d[this.dataprop];
        })
      );

      y.domain([
        0,
        d3.max(data, function (d) {
          return d.value;
        }),
      ]);

      // append the rectangles for the bar chart
      svg
        .selectAll(".bar")
        .data(data)
        .enter()
        .append("rect")
        .attr("class", "bar")
        .attr("x", function (d) {
          return x(d.startdataarea);
        })
        .attr("width", x.bandwidth())
        .attr("y", function (d) {
          return y(d.value);
        })
        .attr("height", function (d) {
          return height - y(d.value);
        })
        .on("mouseover", function () {
          d3.select(this).attr("opacity", "0.7");
        })
        .on("mouseout", function () {
          d3.select(this).attr("opacity", "1");
        });

      // add the x Axis
      svg
        .append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x));

      // add the y Axis
      svg.append("g").call(d3.axisLeft(y));
      this.svgElement = svg;
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
    },

    updateData() {
      console.log("UPDATE")
    }
  },
  updated() {},
  computed() {
    console.log("Computed chart");
    console.log(this);
  },
};
</script>

<style>
rect.bar {
  fill: #0048a8;
}
div.tooltip {
  position: absolute;
  text-align: center;
  width: 70px;
  height: 38px;
  padding: 5px;
  font: 12px sans-serif;
  background: lightsteelblue;
  border: 0px;
  border-radius: 8px;
  pointer-events: none;
}
</style>