<template>
    <h2>Welke steden hebben de meeste P+R locaties na Rotterdam?</h2>
    <div id="barchartdiv">
	</div>
</template>

<script>
console.log("Hallo van BarChart");
import * as d3 from "d3"
export default {
    name: "BarChart",
    emits: ["cityname"],
    props: {
        width: {
            type: Number,
            required: true
        },
        height: {
            type: Number,
            required: true
        },
        barData: {
            type: Array,
            required: true
        }
    },
    mounted() {
        this.makeBarChart();
    },
    methods: {
        makeBarChart() {
            const lessData = this.barData.filter(d => d.prLocations > 2 && d.prLocations < 15).sort((b, a) => a.prLocations - b.prLocations);
            const margin = {top: 10, right: 30, bottom: 170, left: 80};
            const innerWidth = this.width - margin.left - margin.right;
            const innerHeight = this.height - margin.top - margin.bottom;

            // Append the svg object to the body of the page
            const svg = d3.select("#barchartdiv")
            .append("svg")
                .attr("width", this.width)
                .attr("height", this.height)
                .attr('class', 'barchart')
            .append("g")
                .attr("transform", `translate(${margin.left}, ${innerHeight/2/2})`);

            // X-axis with scaleBand() used for catigorical elements (here: city names)
            const x = d3.scaleBand()
            .domain(lessData.map(d =>  d.city))
            .range([0, innerWidth])
            .padding(0.2);

            // Add label to X-axis 'City's with P+R'
            svg.append("g")
            .call(d3.axisBottom(x))
            .attr("transform", `translate(0, ${innerHeight})`)
            .append('text')
            .attr('class', 'axis-label')
            .attr('y', 100)
            .attr('x', innerWidth/2)
            .text('Steden met P+R');

            // Rotate the city names (tick text)
            svg.selectAll(".tick text")
            .attr("transform", "translate(-10,0)rotate(-45)")
            .style("text-anchor", "end");

            // Y-axis with scaleLinear(). 
            // Domain starts at 0 and ends at the maximum data value of P+R locations. 
            const y = d3.scaleLinear()
            .domain([0, d3.max(lessData, d => d.prLocations)])
            .range([innerHeight, 0]);

            // Add label to Y-axis with the text "Number of P+R locations"
            svg.append("g")
            .call(d3.axisLeft(y))
            .append('text')
            .attr('class', 'axis-label')
            .attr('y', -40)
            .attr('x', -innerHeight/2+15)
            .attr("transform", `rotate(-90)`)
            .text('Aantal P+R locaties >');
            
            // Create the bars based on the cityData
            // Give it a class with the name of the city (used for generating pie chart later)
            // Add onclick to invoke the updatePie function to generate or update the pie chart
            svg.selectAll("rect")
            .data(lessData)
            .enter()
            .append("rect")
            .attr("x", d => x(d.city))
            .attr("y", d => y(d.prLocations))
            .attr("width", x.bandwidth())
            .attr("height", d => innerHeight - y(d.prLocations))
            .attr("fill", "#1873cc")
            .attr("class", d => d.city)
            .on("mouseover", function() {d3.select(this).style("cursor", "pointer");})
            .on("click", this.storeCity);
        },
        storeCity(id) {
            const city = id.target.className.baseVal;
            this.$emit('cityname', city);
        }
    }
};
</script>

<style scoped>
    h2 {
        font-size: 1.5em;
        margin: 0 0 0 0;
        color: #325F98;
    }
    p {
        margin: 0.1em 0 0 0;
        color: #797979;
    }
</style>