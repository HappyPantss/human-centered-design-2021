<template>
  <h2>
    Hoeveel Park & Ride plekken zijn er in <span>{{ year }}</span> gemaakt?
  </h2>
  <br />
  <div id="chart-wrapper">
    <svg id="d3-chart"></svg><br />
    <div class="buttonYear">
      <p>Verander van jaar:</p>
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
      year: "2013",
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
      this.year = "2013";
      let data = this.year2013;

      // format the data
      data.forEach((d) => {
        d.value = +d.value;
      });

      const xValue = (d) => d.info;
      const yValue = (d) => d.value;

      this.margin = { top: 10, right: 0, bottom: 30, left: 25 };
      this.padding = { x: 50, y: 20 };

      (this.width = 895 - this.margin.left - this.margin.right),
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

      this.y = d3.scaleLinear().domain([0, 60]).range([this.height, 0]);

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
          return this.x(d.info);
        })
        .attr("width", this.x.bandwidth())
        .attr("y", (d) => {
          return this.y(d.value);
        })
        .attr("height", (d) => {
          return this.height - this.y(d.value);
        })
        .append("title")
        .text((i) => {
          return (
            xValue(i) + ": " + yValue(i) + " voorzieningen."
          );
        })
        .on("mouseover", function () {
          d3.select(this).attr("opacity", "0.7");
          var coordinates = d3.pointer(this);
          var xCo = coordinates[0];
          var yCo = coordinates[1];
          console.log(xCo, yCo);
        })
        .on("mouseout", function () {
          d3.select(this).attr("opacity", "1");
        });
    },

    updateData2014() {
      this.year = "2014";
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
      this.year = "2015";
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
      this.year = "2018";
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
      this.year = "2019";
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
      this.year = "2013";
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
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

rect.bar {
  fill: #1dbbd8;
}

.buttonYear {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

input {
  background-color: white;
  width: 5rem;
  height: 2rem;
  text-align: center;
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  font-size: 1rem;
  color: black;
  border: 2px solid #1dbbd8;
  border-radius: 0.6rem;
  outline: none;
}

input:hover {
  background-color: #1dbbd8;
  color: white;
  border: none;
  border: 2px solid #1dbbd8;
  border-radius: 0.6rem;
}

input:active {
  background-color: #95dbe7;
}

span {
  color: #1dbbd8;
}

.tick text {
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 0.8rem;
}
</style>