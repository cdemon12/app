<script  lang="ts">
    import { scaleTime } from "d3-scale";
    import { writable } from "svelte/store";
    import { getYear } from "./helper";
    import { tweened } from "svelte/motion";
    import dates from "./dates.js";
    import { step } from "./stores";
    import { getMonth } from "./helper";
    import Bar from "./Bar.svelte";
    import { schemeBlues } from "d3-scale-chromatic";
    import { scaleThreshold } from "d3-scale";

    export let data: any;

    const colorScale = scaleThreshold()
        .domain([0, 1, 2, 4, 16])
        .range(schemeBlues[5]);

    export let date = writable("2015-01-01");

    const scale = scaleTime()
        .domain([new Date("2015-01-01"), new Date("2022-12-01")])
        .range([0, 500]);
    
    const xTicks = [new Date("2015-07-02"), new Date("2016-07-02"), new Date("2017-07-02"), new Date("2018-07-02"), new Date("2019-07-02"), new Date("2020-07-02"), new Date("2021-07-02"), new Date("2022-07-02")]

    // $: {

    //     if ($step < dates.length){
    //         date.set(dates[$step]);
    //     }

    //     }
</script>

<svg viewBox="-200 -10 500 520">
    <g transform="translate(0, 0)">
        {#each xTicks as tick}
            <line 
                y1={scale(tick)} 
                x1={0} 
                y2={scale(tick)} 
                x2={10} 
                stroke="black" 
                opacity={(getYear(tick) == getYear(new Date(dates[Math.round($step)]))) ? 1 : 0.2} 
                stroke-width="60"
                class={(getYear(tick) == getYear(new Date(dates[Math.round($step)]))) ? "selected": "none"} />
            <text 
                y={scale(tick) +7} 
                x={-70}
                font-size={(getYear(tick) == getYear(new Date(dates[Math.round($step)]))) ? 25 : 20}
                font-weight={(getYear(tick) == getYear(new Date(dates[Math.round($step)]))) ? "bold" : "500"}
                opacity={(getYear(tick) == getYear(new Date(dates[Math.round($step)]))) ? 1 : 0.4}
                fill="black"
                class={(getYear(tick) == getYear(new Date(dates[Math.round($step)]))) ? "selected": "none"}>
                {getYear(tick)}
            </text>
        {/each}
        <rect 
            y={scale(new Date(dates[Math.round($step)]))} 
            x={0} 
            width="25" 
            height="{4}" 
            fill="{colorScale(16)}" />
        <text 
            y={scale(new Date(dates[Math.round($step)]))+10} 
            x={-90} 
            font-size="25"
            text-anchor="end">
            {getMonth(new Date(dates[Math.round($step)]))}
        </text>
    </g>
    <g>
        <Bar {data} />
    </g>
</svg>

<style lang="sass">
    svg
        padding: 0
        width: 500px
        height: 500px
    .selected
        opacity: 1
        fill: black
    text
        fill: black

    @media screen and (max-width: 768px)
    svg
        padding: 0
        width: 400px
        height: 100vw

</style>