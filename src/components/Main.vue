<template>
	<button v-on:click="updateData">Click me!</button>
	<br />
	<PieChart :chartData="chartData" />
</template>

<script>
	import getData from '../helpers/getData';
	import PieChart from './PieChart.vue'
	// Vue export logic
	export default {
		name: "Main",
		components: {
			PieChart,
		},
		props: ['data'],
		data() {
			return {
				chartData: getData(),
			}
		},
		mounted() {
			console.log('Mounted main')
		},
		updated() {
			console.log('Updated main');
		},
		methods: {
			updateData: async function() {
				this.chartData = getData()
				await this.$nextTick()
			}
		},
	};
</script>