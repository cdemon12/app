<script>

    let hovered: object | null = null;
    let m = { x: 0, y: 0 };

    function handleMousemove(event) {
        m.x = event.clientX;
        m.y = event.clientY;
    }	
</script>



{#if hovered}
	<div class="tooltip" style="top: {m.y}px; left: {m.x}px;">
		<h3>{hovered.properties.name} county</h3>
		<p>{hovered.properties.name} county reported {Math.round(data.nominal_counties.get(hovered.id)[$date])} Syphilis cases in {getMonthYear($date)}.</p>
	</div>
{/if}

<style>

.tooltip {
		position: absolute;
		width: 200px;
		height: 80px;
		padding: 10px;
		background: white;
		border: 1px solid black;
	}

	h3 {
		margin: 0;
		padding: 0;
	}

	h2 {
		text-align: center;
	}

</style>