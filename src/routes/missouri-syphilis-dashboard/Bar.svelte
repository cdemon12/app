<script>
    import { scaleLinear, scaleTime } from 'd3-scale';
	import { tweened } from 'svelte/motion';
	import Promise from './Promise.svelte';
	import { step } from './stores';
	import dates from './dates';
	import { getMonthYear } from './helper';
	import { schemeBlues } from 'd3-scale-chromatic';
	import { scaleThreshold } from 'd3-scale';


    const xTicks = [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022];
	const yTicks = [200];
	const padding = { top: 0, right: 15, bottom: 0, left: 15 };
	let chartWidth = 500;
	let chartHeight = 200;

	
	const colorScale = scaleThreshold()
        .domain([0, 1, 2, 4, 16])
        .range(schemeBlues[5]);

	const xScale = scaleTime()
        .domain([new Date("2015-01-01"), new Date("2022-12-01")])
        .range([padding.top, chartWidth + padding.top]);
	
	const yScale = scaleLinear()
		.domain([0, 400])
		.range([padding.left, chartHeight + padding.left]);

	// export let step = 0;

	// let minDomain = tweened(72)

	// $: { if (step == 0) {
	// 	minDomain.set(72)
	// }
	// if (step == 1) {
	// 	minDomain.set(0)
	// }
	// }

	// $: xScale = scaleLinear()
	// 	.domain([$minDomain, 96])
	// 	.range([padding.left, width - padding.right]);

	// $: yScale = scaleLinear()
	// 	.domain([0, Math.max.apply(null, yTicks)])
	// 	.range([height - padding.bottom, padding.top]);

	// $: innerWidth = width - (padding.left + padding.right);
	$: barWidth = chartWidth / 96;
</script>

<Promise let:data={data}>
		<!-- y axis -->
		<g class="axis y-axis">
			{#each yTicks as tick}
				<g class="tick tick-{tick}" transform="translate({yScale(tick)}, 0)">
					<line y2="100%"></line>
					<text x="3" y="15">{tick} statewide cases</text>
				</g>
			{/each}
		</g>

		<!-- x axis -->
        <!-- <line x2="{width}" stroke="black" stroke-opacity="1" fill="none" transform="translate(0, {height - padding.bottom})"/>
		<g class="axis x-axis">
			{#each xTicks as tick, i}
				<g class="tick" transform="translate({xScale(i*12)},{height})">
					<text x="{barWidth*12/2}" y="-10">{tick} {tick ===  400 ? ' Syphilis cases' : ''}</text>
				</g>
			{/each}
		</g> -->

		<g class='bars'>
			{#each data.nominal_mo as point, i}
				<rect
					y="{xScale(point.date)}"
					x="{yScale(0)}"
					height="{4}"
					width="{yScale(point.value) - yScale(0)}"
					fill={(getMonthYear(point.date) === getMonthYear(new Date(dates[Math.round($step)]))) ? colorScale(16) : colorScale(0)}
				></rect>
			{/each}
		</g>
</Promise>


<style>

	.tick line {
        stroke: black;
		stroke-opacity: .25;
	}

	text {
		text-anchor: start;
        font-size: 16px;
        font-family: Lato, sans-serif;
        font-weight: bold;
		fill: black;
	}

	.x-axis .tick text {
		text-anchor: middle;
	}
</style>
