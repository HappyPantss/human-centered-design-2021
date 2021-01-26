<template>
  <h2>Hoeveel Park & Ride plekken zijn er in 2013 gemaakt?</h2>
  <div id="chart-wrapper">
    <svg id="d3-chart"></svg><br />
    <input
      name="updateLocations"
      type="button"
      value="2013"
      @click="updateData2013"
    />
    <input
      name="updateLocations"
      type="button"
      value="2014"
      @click="updateData2014"
    />
    <input
      name="updateLocations"
      type="button"
      value="2015"
      @click="updateData2015"
    />
    <input
      name="updateLocations"
      type="button"
      value="2018"
      @click="updateData2018"
    />
    <input
      name="updateLocations"
      type="button"
      value="2019"
      @click="updateData2019"
    />
  </div>
</template>

<script>
import * as d3 from "d3";
import year2013 from "../helpers/2013";
import year2014 from "../helpers/2014";
import year2015 from "../helpers/2015";
import year2018 from "../helpers/2018";
import year2019 from "../helpers/2019";

// Vue export logic
export default {
  names: "BarChart",
  props: {
    data: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      dataprop: "info",
      svgElement: Object,
      x: Function,
      y: Function,
      width: Number,
      height: Number,
      year2013: year2013,
      year2014: year2014,
      year2015: year2015,
      year2018: year2018,
      year2019: year2019,
    };
  },
  mounted() {
    this.makeBarChart();
  },
  methods: {
    makeBarChart() {
      console.log(this.dataprop);
      this.dataprop = "info";
      let data = this.year2013;

      // format the data
      data.forEach((d) => {
        d.value = +d.value;
      });

      const xValue = (d) => d.info;

      this.margin = { top: 10, right: 20, bottom: 30, left: 40 };

      (this.width = 930 - this.margin.left - this.margin.right),
        (this.height = 500 - this.margin.top - this.margin.bottom);

      this.svgElement = d3.select("#d3-chart");

      const svg = d3
        .select("#d3-chart")
        .attr("width", this.width + this.margin.left + this.margin.right)
        .attr("height", this.height + this.margin.top + this.margin.bottom)
        .append("g")
        .attr(
          "transform",
          "translate(" + this.margin.left + "," + this.margin.top + ")"
        );

      // set the ranges
      this.x = d3
        .scaleBand()
        .range([0, this.width])
        .domain(
          data.map((i) => {
            return xValue(i);
          })
        )
        .padding(0.1);
      // add the x Axis
      svg
        .append("g")
        .attr("transform", "translate(0," + this.height + ")")
        .call(d3.axisBottom(this.x));

      this.y = d3
        .scaleLinear()
        .domain([
          0, 60
        ])
        .range([this.height, 0]);

      // add the y Axis
      this.yAxisG = svg.append("g").call(d3.axisLeft(this.y));
      this.svgElement = svg;

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
        // .on("mouseover", function () {
        //   d3.select(this).attr("opacity", "0.7");
        // })
        // .on("mouseout", function () {
        //   d3.select(this).attr("opacity", "1");
        // });
        .on("click", () => {
          this.updateData2015();
        });
    },

    updateData2014() {
      this.dataprop = "info";
      let data = this.year2014;

      d3.selectAll("rect")
        .data(data)
        .transition()
        .duration(1000)
        .attr("x", (d) => {
          return this.x(d.info);
        })
        .attr("width", this.x.bandwidth())
        .attr("y", (d) => {
          return this.y(d.value);
        })
        .attr("height", (d) => {
          return this.height - this.y(d.value);
        });
    },

    updateData2015() {
      this.dataprop = "info";
      let data = this.year2015;

      d3.selectAll("rect")
        .data(data)
        .transition()
        .duration(1000)
        .attr("x", (d) => {
          return this.x(d.info);
        })
        .attr("width", this.x.bandwidth())
        .attr("y", (d) => {
          return this.y(d.value);
        })
        .attr("height", (d) => {
          return this.height - this.y(d.value);
        });
    },

    updateData2018() {
      this.dataprop = "info";
      let data = this.year2018;

      d3.selectAll("rect")
        .data(data)
        .transition()
        .duration(1000)
        .attr("x", (d) => {
          return this.x(d.info);
        })
        .attr("width", this.x.bandwidth())
        .attr("y", (d) => {
          return this.y(d.value);
        })
        .attr("height", (d) => {
          return this.height - this.y(d.value);
        });
    },

    updateData2019() {
      this.dataprop = "info";
      let data = this.year2019;

      d3.selectAll("rect")
        .data(data)
        .transition()
        .duration(1000)
        .attr("x", (d) => {
          return this.x(d.info);
        })
        .attr("width", this.x.bandwidth())
        .attr("y", (d) => {
          return this.y(d.value);
        })
        .attr("height", (d) => {
          return this.height - this.y(d.value);
        });
    },

    updateData2013() {
      this.dataprop = "info";
      let data = this.year2013;

      d3.selectAll("rect")
        .data(data)
        .transition()
        .duration(1000)
        .attr("x", (d) => {
          return this.x(d.info);
        })
        .attr("width", this.x.bandwidth())
        .attr("y", (d) => {
          return this.y(d.value);
        })
        .attr("height", (d) => {
          return this.height - this.y(d.value);
        });
    },
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