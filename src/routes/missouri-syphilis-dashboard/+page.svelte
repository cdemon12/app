<script lang="ts">
    import Map from './Map.svelte';
    import Timeline from './Timeline.svelte';
    import { writable } from 'svelte/store';
    import { step, type, topHeight } from './stores';
    import Buttons from './Buttons.svelte';
    import Bar from './Bar.svelte';



    let y: number;
    let height: number;
    let viewport_height: number;
    let number_of_steps: number = 96 -1;
    $: steps =  number_of_steps * (y - $topHeight) / (height - viewport_height);
    $: if (steps < 95 && steps > 1) {step.set(steps)};
    let innerWidth: number;
    let width = writable(0);
    $: width.set(innerWidth);
</script>

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

<div class="container" bind:clientHeight={height} style="--mobile-width: {$width}px">
    <div class="sticky">
    <div class="btn">
        <Buttons />
    </div>
    <div class="map">
        <Map {$step} />
    </div>
    <div class="timeline">
        <Timeline {$step} />
    </div>
    </div>
    <div class="bottom">
        <p>Source: Missouri Department of Health, U.S. Census Bureau</p>
        <p class="byline"><b>COLE SCHNELL</b> / Columbia Missourian</p>
    </div>
</div>

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
        background-color: white
        width: 100%

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
    
    .bottom
        position: absolute
        bottom: 0
        display: flex
        justify-content: space-between
        width: calc(100% - 20px)
        padding: 10px
        font-size: 1em
        color: white
        
        p
            margin: 0
            padding: 0
            font-size: 1rem
            color: white

        .byline
            text-align: right

    @media screen and (max-width: 768px)
        .container
            width: var(--mobile-width)
        .sticky
            grid-template-columns: 1fr
            grid-template-rows: 80px 60vh 40vh
            grid-gap: 0px
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
            transform: rotate(270deg)
</style>