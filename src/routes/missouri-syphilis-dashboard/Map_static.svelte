<script lang="ts">
	import { onMount } from 'svelte';
	import * as topojson from 'topojson-client';
	import { geoPath, geoAlbersUsa } from 'd3-geo';
	import { fade } from 'svelte/transition';
    import { writable } from 'svelte/store';
	import { scaleTime } from 'd3-scale';
	import Promise from './Promise.svelte';
    import ColorScaleStatic from './ColorScale_static.svelte';
	import { scaleThreshold } from 'd3-scale';
	import { schemeGreens } from 'd3-scale-chromatic';
	import dates from './dates.js';
	import { step, type } from './stores';

	const colorScale = scaleThreshold()
        .domain([0, 50, 100, 150, 200])
        .range(schemeGreens[5]);

	const xScale = scaleTime()
		.domain([new Date("2022-12-01"), new Date("2015-01-01")])
		.range([0, 100]);

	const projection = geoAlbersUsa().scale(1300).translate([487.5, 305])
	const path = geoPath().projection(null);
	let counties: any = []
	let xTicks = [new Date("2015-06-01"), new Date("2016-06-01"), new Date("2017-06-01"), new Date("2018-06-01"), new Date("2019-06-01"), new Date("2020-06-01"), new Date("2021-06-01"), new Date("2022-06-01")]

	onMount(async () => {
		const us = await fetch('https://cdn.jsdelivr.net/npm/us-atlas@3/counties-albers-10m.json')
		.then(d => d.json())
		counties = topojson.feature(us, us.objects.counties).features.filter(d => d.id.slice(0, 2) === '29');
	})

    let hovered: object | null = null;
    let m = { x: 0, y: 0 };

    function handleMousemove(event) {
        m.x = event.clientX;
        m.y = event.clientY;
    }

	$: console.log(hovered)

</script>

<h1>Cases per 100,000 since 2015</h1>
<div on:mousemove={handleMousemove}>
<Promise let:data={data}>
	<svg viewBox="495 273 118 120">
		<g transform ="rotate(2, 150, 75)">
			{#each counties as d, i}
				<path d={path(d)} 
				class="county" 
				stroke="#121212" 
				stroke-width="0.1" 
				fill="{String(colorScale(data.cum_sum_per_capita_counties.get(d.id)[dates[95]]))}"
				in:fade="{{ delay: i*10, duration: 500 }}" 
				on:mouseover={() => hovered = d}
				on:mouseout={() => hovered = null}
				/>
			{/each}
		</g>
		<ColorScaleStatic max={200} />
	</svg>
	{#if hovered}
	<div class="tooltip" style="top: {m.y + 20}px; left: {m.x - 100}px;">
		<h3>{(hovered.id == 29510) ? "St. Louis city" : hovered.properties.name + " county"}</h3>
		<p>{(hovered.id == 29510) ? "St. Louis city" : hovered.properties.name + " county"} reported <b>{Math.round(data.cum_sum_counties.get(hovered.id)[dates[95]])} Syphilis cases per 100,000</b> and <b>{Math.round(data.cum_sum_per_capita_counties.get(hovered.id)[dates[95]])} in total</b> since 2015.</p>
	</div>
	{/if}
</Promise>
</div>



<style>
	svg {
		display: block;
		position: relative;
		max-width: 100%;
		height: 80vh;
	}

	.county:hover {
		fill: #000;
	}

	.tooltip {
		position: fixed;
		width: 200px;
		padding: 5px;
		background: white;
		border: 1px solid black;
		z-index: 100;
	}

	h3 {
		margin: 0;
		padding: 0;
	}

	h2 {
		text-align: center;
	}

	@media screen and (max-width: 768px)
	{
		svg {
			height: 50vh;
		}
	}
</style>