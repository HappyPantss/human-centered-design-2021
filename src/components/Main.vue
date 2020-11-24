<template>
	<button v-on:click="updateData">Click me!</button>
	<br />
	<Chart />
</template>

<script>
	import Chart from './Chart.vue'
	// Vue export logic
	export default {
		name: "Main",
		components: {
			Chart,
		}
	};
</script>