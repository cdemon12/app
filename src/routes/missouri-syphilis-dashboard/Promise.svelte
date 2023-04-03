<script lang="ts">
    import { csv } from "d3-fetch";
    import dates from "./dates";
    import { filterKeys } from "./helper";

    type DataType = {
        nominal_counties: Map<string | undefined, number>;
        per_capita_counties: Map<string | undefined, number>;
        cum_sum_counties: Map<string | undefined, number>;
        cum_sum_per_capita_counties: Map<string | undefined, number>;
        nominal_mo: { date: Date | string | undefined; value: number | undefined}[];
        cum_sum_mo: { date: Date | string | undefined; value: number | undefined}[];
    };

    let promise = getData();

    async function getData() {
        const keysToKeep = dates; 

        const data: DataType = {
            nominal_counties: new Map<string | undefined, number>(),
            per_capita_counties: new Map<string | undefined, number>(),
            cum_sum_counties: new Map<string | undefined, number>(),
            cum_sum_per_capita_counties: new Map<string | undefined, number>(),
            nominal_mo: [],
            cum_sum_mo: []
        }
        
		let csvData = await csv('https://raw.githubusercontent.com/cdemon12/app/master/src/routes/missouri-syphilis-dashboard/data/nominal_counties.csv')
		csvData.forEach(d => {
  			data.nominal_counties.set(d.geoid, filterKeys(d, keysToKeep));
        });
        
        csvData = await csv('https://raw.githubusercontent.com/cdemon12/app/master/src/routes/missouri-syphilis-dashboard/data/per_capita_counties.csv')
        csvData.forEach(d => {
            data.per_capita_counties.set(d.geoid, filterKeys(d, keysToKeep));
        });

        csvData = await csv('https://raw.githubusercontent.com/cdemon12/app/master/src/routes/missouri-syphilis-dashboard/data/cum_sum_counties.csv')
        csvData.forEach(d => {
            data.cum_sum_counties.set(d.geoid, filterKeys(d, keysToKeep));
        });

        csvData = await csv('https://raw.githubusercontent.com/cdemon12/app/master/src/routes/missouri-syphilis-dashboard/data/cum_sum_per_capita_counties.csv')
        csvData.forEach(d => {
            data.cum_sum_per_capita_counties.set(d.geoid, filterKeys(d, keysToKeep));
        });

        csvData = await csv('https://raw.githubusercontent.com/cdemon12/app/master/src/routes/missouri-syphilis-dashboard/data/nominal_mo.csv')
        csvData.forEach(d => {
            data.nominal_mo.push({
                date: new Date(d.date),
                value: +d.value
            });
        });

        csvData = await csv('https://raw.githubusercontent.com/cdemon12/app/master/src/routes/missouri-syphilis-dashboard/data/cum_sum_mo.csv')
        csvData.forEach(d => {
            data.cum_sum_mo.push({
                date: new Date(d.date),
                value: +d.value
            });
        });
        
        return data;
    }

</script>

{#await promise}
    <p>loading...</p>
{:then data}
    <slot data={data}/>
{:catch error}
    <p>{error.message}</p>
{/await}

<style>
    p {
        font-size: 1.5rem;
        font-weight: 600;
        color: black;
    }

</style>