<template>
  <div id="chart-wrapper">
    <svg id="d3-chart2"></svg>
  </div>
</template>

<script>
import * as d3 from "d3";
// Vue export logic
export default {
  names: "BarChart2",
  props: ["mostData"],
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
      let data = this.mostData.filter(d => d.value > 2 );
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
        .select("#d3-chart2")
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
          return d.areadesc;
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
          return x(d.areadesc);
        })
        .attr("width", x.bandwidth())
        .attr("y", function (d) {
          return y(d.value);
        })
        .attr("height", function (d) {
          return height - y(d.value);
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
  },
  updated() {
  },
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
</style>