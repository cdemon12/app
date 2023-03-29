<script lang="ts">
import Map from './Map.svelte';
import Playground from './Playground.svelte';
import Line from './Line.svelte';
import Bar from './Bar.svelte';
import ScrollyRc from './Scrolly_rc.svelte';

let value;

</script>
<div class= "spacer" />
<section>
    <div class="section-container">
        <div class="steps-container">
            <ScrollyRc bind:value={value}>
                <div class:active={value === 0}>
                  </div>
                <div class="step" class:active={value === 0}>
                    <div class="step-content">Text 2</div>
                </div>
                <div class="step" class:active={value === 1}>
                  <div class="step-content">Text 2</div>
                </div>
            </ScrollyRc>
        </div>
        <div class="sticky">
          <p>{value}</p>
          {#if value === 0 || value === 1}
            <Bar step={value}/>
          {/if}
          {#if value === 2}
            <Line />
          {/if}
        </div>
    </div>
</section>

<style lang="sass">

* 
  font-family: 'Lato', sans-serif
  
.spacer
  height: 1000vh
  position: absolute

h1 
  text-align: center
  font-size: 2rem
  margin: 0px
  padding: 0px

section
  margin: 0 200px

:global(body)
    overflow-x: hidden
	
.hero
    height: 60vh
    display: flex
    place-items: center
    flex-direction: column
    justify-content: center
    text-align: center

	
.hero h2 
    margin-top: 0
    font-weight: 200
	
	
.spacer 
    height: 40vh
  

.sticky 
    position: sticky
    top: 10%
    flex: 1 1 60%
    width: 60%
  

.section-container 
    margin-top: 1em
    text-align: center
    transition: background 100ms
    display: flex
  

.step 
    height: 80vh
    display: flex
    place-items: center
    justify-content: center
  

.step-content 
    font-size: 1rem
    background: whitesmoke
    color: #ccc
    border-radius: 5px
    padding: .5rem 1rem
    display: flex
    flex-direction: column
    justify-content: center
    transition: background 500ms ease
    box-shadow: 1px 1px 10px rgba(0, 0, 0, .2)
    text-align: left
    width: 75%
    margin: auto
    max-width: 500px
  

.step.active .step-content 
  background: white
  color: black
	
	
.steps-container,
.sticky 
  height: 100%
  


.steps-container 
  flex: 1 1 40%
  z-index: 10
  

/* Comment out the following line to always make it 'text-on-top' */
@media screen and (max-width: 768px) 
  .section-container
    flex-direction: column-reverse
  .sticky 
    width: 95%
    margin: auto
      
  
</style>