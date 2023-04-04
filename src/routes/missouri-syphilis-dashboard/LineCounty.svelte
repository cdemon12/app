<script lang="ts">
    import { scaleLinear, scaleTime } from 'd3-scale';
    import { line, curveBasis } from 'd3-shape';
    import { draw } from 'svelte/transition';
    import { getYear } from './helper';
    import Promise from './Promise.svelte';
    import { schemeGreens } from 'd3-scale-chromatic';
    import { scaleThreshold } from 'd3-scale';
    import { extent } from 'd3';
    import dates from "./dates";
    import { selected } from './stores';
    import { min, max } from 'd3';

    export let data: any;
    let d:{ date: Date | string | undefined; value: number | undefined}[] = []

    $:{for (let x in dates) {
            if (x == 0) {d = []};
            d.push({
                date: new Date(dates[x]),
                value: data.get($selected.id)[dates[x]]
            })
        }}

    const colorScale = scaleThreshold()
        .domain([0, 50, 100, 150, 200])
        .range(schemeGreens[5]);

    // create graph dimensions
    let height = 500;
    let width = 200;
	const padding = { top: 20, right: 15, bottom: 25, left: 25 };


    // create scales
    $: xScale = scaleTime()
             .domain([new Date('2015-01-01'), new Date('2022-12-01')])
            .range([padding.left, width - padding.right]);
    
    $: yScale = scaleLinear()
            .domain([min(Object.values(data.get($selected.id))), max(Object.values(data.get($selected.id)))+1])
            .range([height - padding.bottom, padding.top]);

    // create line generator
    $: lineGenerator = line()
            .x(d => xScale(d.date))
            .y(d => yScale(d.value))
            .curve(curveBasis);

    // create axes
    $: xTicks = xScale.ticks(3);
    $: yTicks = yScale.ticks(5);


</script> 

<h2>{($selected.id == 29510) ? "St. Louis city" : $selected.name + " county"} cummulative cases</h2>

<div class="chart" bind:clientWidth={width} bind:clientHeight={height}>
    <svg>
        <path d={lineGenerator(d)} fill="none" stroke="{colorScale(200)}" stroke-width="2" in:draw={{ delay: 10, duration: 1000 }}/>
    <!-- y axis -->
	<g>
		{#each yTicks as y} 
			<g class="tick" opacity="1" transform="translate(0, {yScale(y)})">
                <line stroke="black" x2="100%" opacity="0.25" />
				<text y="-4" x="0" text-anchor="start">
					{y.toLocaleString('en-US')} <!--{y ===  15000 ? ' Syphilis cases' : ''}-->
				</text>
			</g>
 		{/each}
    </g>
    <!-- x axis -->
	<g transform="translate(0, {yScale(0)})">
        <line x2="100%" stroke="black" fill="none" />
        {#each xTicks as x} 
            <g class="tick" opacity="1" transform="translate({xScale(x)},0)">
                <text y="15">
                    {getYear(x)}
                </text>
            </g>
        {/each}
	</g>
    </svg>
</div>

<style>

    .chart {
            width: 100%;
            height: 100%;
            margin: 0;
        }

    svg {
		position: relative;
		width: 100%;
		height: 100%;
        aspect-ratio: 2/1;
	}

    text {
        font-size: 16px;
        font-weight: bold;
        font-family: Lato, sans-serif;
    }

    h2 {
		text-align: center;
        padding:0;
        margin:0;
	}

</style>