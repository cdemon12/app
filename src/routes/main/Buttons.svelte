<script lang="ts">
    import { type } from './stores'

    let selected = "nominal";
    $: type.set(selected);

</script>

<button class:selected="{selected === "nominal"}" on:click={()=> selected = "nominal"}>Nominal Cases</button>
<button class:selected="{selected === "cum_sum"}" on:click={()=> selected = "cum_sum"}>Cummulative Cases</button>
<button class:selected="{selected === "per_capita"}" on:click={()=> selected = "per_capita"}>Cases Per Capita</button>

<style>
    button {
        background-color: white;
        opacity: 0.3;
        color: black;
        padding: 0.5em;
        font-size: 1.25em;
        cursor: pointer;
        margin: 0.5em;
        box-shadow: none;
        border: none;
        }
    .selected {
        opacity: 0.7;
        }
</style>