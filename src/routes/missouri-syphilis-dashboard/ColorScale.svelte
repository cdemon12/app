<script lang="ts">
import { scaleThreshold } from "d3-scale";
import { schemeBlues } from "d3-scale-chromatic";


export let max: number;

const colorScale = scaleThreshold()
    .domain([0, 1, 2, 4, 16])
    .range(schemeBlues[5]);

</script>

<defs>
    <linearGradient id="Gradient" x1="0" x2="0" y1="0" y2="1">
    <stop offset="0%" stop-color="{colorScale(0)}"/>
    <stop offset="100%" stop-color="{colorScale(16)}"/>
    </linearGradient>
</defs>
<g>
    <rect x="{495 + 118 - 30}" y="{273 + 3}" width="4" height="20" fill ="url(#Gradient)" />
    <text x="{495 + 118 - 30 + 5}" y="{273 + 3 + 1}" font-size="3">0</text>
    <text x="{495 + 118 - 30 + 5}" y="{273 + 3 + 21}" font-size="3">{max} cases</text>
    <!--<text x="{495 + 118 - 30 + 5}" y="{273 + 3 + 23}" font-size="2">per 100,000</text>-->
    <text x="{495 + 118 - 30 + 5 + 0.2}" y="{273 + 3.5 + 23}" font-size="3">or over</text>
</g>

<style>
    text {
        font-weight: bold;
        fill: black;
        opacity: 0.8;
    }

</style>