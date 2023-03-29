<script lang="ts">
    import { scaleThreshold } from "d3-scale";
    import { schemeBlues } from 'd3-scale-chromatic';

    export let colorScale: any;

</script>

<defs>
    <linearGradient id="Gradient2" x1="0" x2="0" y1="0" y2="1">
    <stop offset="0%" stop-color="{colorScale(0)}"/>
    <stop offset="100%" stop-color="{colorScale(500)}"/>
    </linearGradient>
</defs>
<g>
    <rect x="{495 + 118 - 30}" y="{273 + 3}" width="4" height="20" fill ="url(#Gradient2)" />
    <text x="{495 + 118 - 30 + 5}" y="{273 + 3 + 1}" font-size="3">0</text>
    <text x="{495 + 118 - 30 + 5}" y="{273 + 3 + 21}" font-size="3">16 cases</text>
    <!--<text x="{495 + 118 - 30 + 5}" y="{273 + 3 + 23}" font-size="2">per 100,000</text>-->
    <text x="{495 + 118 - 30 + 5 + 0.2}" y="{273 + 3.5 + 23}" font-size="3">or over</text>
</g>

<style>
    text {
        font-weight: bold;
        fill: white;
        opacity: 0.8;
    }

</style>