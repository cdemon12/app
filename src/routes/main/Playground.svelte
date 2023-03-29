<script>
import { csv } from 'd3-fetch';

let promise = getData();

async function getData(){
    // load data
    const csvData = await csv('src/routes/data.csv')
    return csvData;
}

</script>

{#await promise}
    <h3>Loading...</h3>
{:then data} 
    {#each data as d}
        <p>{d.geoid}</p>
    {/each}
{/await}