<script lang="ts">
    import Map from './Map.svelte';
    import Timeline from './Timeline.svelte';
    import { writable } from 'svelte/store';
    import { step, type, topHeight } from './stores';
    import Buttons from './Buttons.svelte';
    import Bar from './Bar.svelte';
    import MapStatic from './Map_static.svelte';
    import Line from './Line.svelte';
    import Promise from './Promise.svelte';
    import LineCounty from './LineCounty.svelte';


    let y: number;
    let height: number;
    let viewport_height: number;
    let number_of_steps: number = 96 - 1;
    $: steps =  number_of_steps * (y - $topHeight) / (height - viewport_height);
    $: if (steps < 95 && steps > 0) {step.set(steps)};
    $: if (steps > 95) {step.set(95)};
    $: if (steps < 0) {step.set(0)};
    let innerWidth: number;
    let width = writable(0);
    $: width.set(innerWidth);
</script>
<svelte:head>
    <title>Missouri Syphilis Dashboard</title>
</svelte:head>

<svelte:window bind:scrollY={y} bind:innerHeight={viewport_height} bind:innerWidth={innerWidth}/>

<!-- <div class="debug">
    <ul>
        <li>scrollY: {Math.round(y)}</li>
        <li>height: {height}</li>
        <li>step: {Math.round($step)}</li>
        <li>type: {$type}</li>
        <li>topHeight: {$topHeight}</li>
    </ul>
</div> -->

<Promise let:data={data}>
<div class="outer">
    <div class="container" bind:clientHeight={height} style="--mobile-width: {$width}px">
        <div class="sticky">
        <div class="btn">
            <Buttons />
        </div>
        <div class="map">
            <Map {$step} {data}/>
        </div>
        <div class="timeline">
            <Timeline {$step} {data}/>
        </div>
        </div>
    </div>
    <div class="spacer"></div>
    <div class="map-static">
        <div>
            <MapStatic {data} />
        </div>
        <div class="line">
            <Line {data} />
            <LineCounty data={data.cum_sum_counties} />
        </div>
    </div>
    <div class="bottom">
        <p>Source: Missouri Department of Health, U.S. Census Bureau</p>
        <p class="byline"><b>COLE SCHNELL</b> / Columbia Missourian</p>
    </div>
</div>
</Promise>




<style lang="sass">
    * 
        font-family: 'Lato', sans-serif 
    .debug
        position: fixed
        top: 0
        left: 0
        z-index: 1000
        background-color: white
        padding: 10px
        font-size: 1.5rem

    .container
        height: 300vh
        position: absolute
        width: 100%

    .spacer
        height: 300vh

    .map-static
        position: relative
        width: 100%
        display: flex
        align-items: center
        justify-content: space-around

    .sticky
        position: sticky
        top: 0
        display: grid
        grid-template-columns: 1fr 1fr
        grid-template-rows: 80px 80vh
        align-items: center
        justify-items: center
        height: 100vh
        grid-gap: 20px
        
    .btn
        grid-column: 1 / span 2
        grid-row: 1 / 1
        width: 100%
        height: 100%
        display: flex
        align-items: center
        justify-content: center
    .map
        height: 80vh

    .line
        display: flex
        flex-direction: column
        align-items: center
        justify-content: center
        width: 400px
        height: 80vh
    
    .bottom
        position: relative
        bottom: 0
        display: flex
        justify-content: space-between
        width: calc(100% - 20px)
        padding: 10px
        font-size: 1em
        color: black
        
        p
            margin: 0
            padding: 0
            font-size: 1rem
            color: black

        .byline
            text-align: right

    @media screen and (max-width: 768px)
        .container
            width: 100%
        .sticky
            grid-template-columns: 95vw
            grid-template-rows: 80px 50vh 40vh
            grid-gap: 0px
            margin-left: 2vw
        .map
            grid-column: 1 / span 1
            grid-row: 2 / 2
            height: 50vh
            margin: 0
            padding: 0
        .timeline
            grid-column: 1 / span 1
            grid-row: 3 / 3
            -webkit-transform: rotate(270deg)
            -moz-transform: rotate(270deg)
            -o-transform: rotate(270deg)
            -ms-transform: rotate(270deg)
            transform: rotate(270deg) translateX(100px)
        .map-static
            flex-direction: column
            height: 90vh
        .line
            width: 80vw
            height: 150px
            transform: translateY(30px)
        .bottom
            bottom: -130px
</style>