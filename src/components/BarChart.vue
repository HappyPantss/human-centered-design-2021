<template>
  <div id="chart-wrapper">
    <svg id="d3-chart"></svg>
      <input name="updateButton" 
            type="button" 
            value="Update" 
            @click="updateData" />
  </div>
</template>

<script>
import * as d3 from "d3";
import yearsData from "../helpers/years";
import locationsData from "../helpers/locations";

// Vue export logic
export default {
  names: "BarChart",
  props: {
     data:{
        type: Array,
        required: true
     }
  },
  data() {
    return {
      dataprop: "startdataarea",
      svgElement: Object,
      x: Function,
      y: Function,
      width: Number,
      height: Number,
      yearsData: yearsData,
      locationsData: locationsData
    };
  },
  mounted() {
    this.makeBarChart();
  },
  methods: {
    makeBarChart() {
      console.log(this.dataprop)
      let data = this.yearsData;
      this.svgElement = d3.select("#d3-chart");
      // set the dimensions and margins of the graph
      const margin = {
          top: 10,
          right: 20,
          bottom: 30,
          left: 40,
        }
      this.width = 930 - margin.left - margin.right,
      this.height = 500 - margin.top - margin.bottom;

      // set the ranges
      this.x = d3.scaleBand().range([0, this.width]).padding(0.1);

      this.y = d3.scaleLinear().range([this.height, 0]);

      // append the svg object to the body of the page
      // append a 'group' element to 'svg'
      // moves the 'group' element to the top left margin
      const svg = d3
        .select("#d3-chart")
        .attr("width", this.width + margin.left + margin.right)
        .attr("height", this.height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

      // format the data
      data.forEach((d) => {
        d.value = +d.value;
      });

      // Scale the range of the data in the domains
      this.x.domain(
        data.map((d) => {
          return d[this.dataprop];
        })
      );

      this.y.domain([
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
        .attr("x", (d) => {
          return this.x(d[this.dataprop]);
        })
        .attr("width", this.x.bandwidth())
        .attr("y", (d) => {
          return this.y(d.value);
        })
        .attr("height", (d) => {
          return this.height - this.y(d.value);
        })
        .on("mouseover", function() {
          d3.select(this).attr("opacity", "0.7");
        })
        .on("mouseout", function() {
          d3.select(this).attr("opacity", "1");
        })
        .on("click", () => {
          this.updateData()
        });

      // add the x Axis
      svg
        .append("g")
        .attr("transform", "translate(0," + this.height + ")")
        .call(d3.axisBottom(this.x));

      // add the y Axis
      svg.append("g").call(d3.axisLeft(this.y));
      this.svgElement = svg;
      // this.x = x;
      // this.y = y;
      // this.width = width;
      // this.height = height;
    },

    updateData() {
      this.dataprop = "location"
      console.log("UPDATE")
      console.log(this.dataprop)

    let data = this.locationsData;  

      // format the data
      data.forEach((d) => {
        d.value = +d.value;
      });

      // Scale the range of the data in the domains
      this.x.domain(
        data.map((d) => {
          return d[this.dataprop];
        })
      );

      this.y.domain([
        0,
        d3.max(data, function (d) {
          return d.value;
        }),
      ]);
      
    d3.selectAll(".bar")
            .data(data)
            .transition().duration(1000)
            .attr("x", (d) => {
              return this.x(d.location);
            })
            .attr("width", this.x.bandwidth())
            .attr("y", (d) => {
              return this.y(d.value);
            })
            .attr("height", (d) => {
              return this.height - this.y(d.value);
            })
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