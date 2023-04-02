<script>
	import { fade } from 'svelte/transition';
    import { writable } from 'svelte/store';
    import { topHeight } from './stores';

    let min_width = writable(0);
    let scroll = 0;
    $: min_width.set(140*(scroll/50));
    let width = 0;
    let max_width = "140vw";
    $: (width < 1000) ? max_width = "100%" : max_width = "140vw";
    let height = 0;
    $: topHeight.set(height);


    const title="Syphilis in Missouri: A look at the state's STD epidemic"
    const copy= "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore, adipisci. Similique, reiciendis, quisquam asperiores voluptas fuga, harum unde veritatis illum quasi nihil quidem enim totam eum. Inventore nihil sed exercitationem voluptates aperiam voluptatem voluptatibus veritatis quos maiores quis minima nostrum soluta, ab, animi itaque? Delectus voluptates corporis amet rem neque? Doloremque illo distinctio, mollitia fugit modi ea quibusdam excepturi qui animi officia veniam ut tempora atque quisquam suscipit. Sequi corporis praesentium quisquam ipsum error modi aperiam voluptatem sit commodi debitis qui, esse natus cumque placeat reiciendis ratione saepe provident dolores eligendi illum. Necessitatibus ex ratione consectetur unde, nostrum fugit sint!"
</script>

<svelte:head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Domine:wght@400;500&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap" rel="stylesheet">
</svelte:head>

<svelte:window bind:scrollY={scroll} bind:innerWidth={width}/>

<div class="container" bind:clientHeight={height}>
<div class="nav">
    <div class="logos">
        <img src="https://bloximages.newyork1.vip.townnews.com/columbiamissourian.com/content/tncms/custom/image/31bfd10c-c90a-11ed-a410-df8816e5fbc8.png?resize=750%2C150" alt="Columbia Missourian" width="750" height="150" />
        <div class="pipe">|</div>
        <div class="section-head">Interactives</div>
    </div>
    <div class="share" style="width: min({$min_width}vw, {max_width})">
        <h3>{title}</h3>
        <div>
            <ul>
                <li class="share-text">SHARE THIS</li>
                <li><a href="https://www.facebook.com"><ion-icon name="logo-rfacebook"></ion-icon></a></li>
                <li><a href="https://www.twitter.com"><ion-icon name="logo-twitter"></ion-icon></a></li>
                <li><a href="https://www.gmail.com"><ion-icon name="mail-sharp"></ion-icon></a></li>
                <li><button on:click={()  => navigator.clipboard.writeText("www.columbiamissourian.com")}><ion-icon name="copy-sharp"></ion-icon></button></li>
                <li><button on:click={()  => window.print()}><ion-icon name="print-sharp"></ion-icon></button></li>
            </ul>

        </div>
    </div>
</div>
<p>
    <a href="https://www.columbiamissourian.com/">Home</a> <span class="slash">/</span>
    <a href="https://www.columbiamissourian.com/visuals/">Visuals</a> <span class="slash">/</span>
    <a href="https://www.columbiamissourian.com/graphics/">Graphics</a>
</p>


    <h1>{title}</h1>
    <div class="date-byline"><div class="byline"><a href="https://www.columbiamissourian.com/users/profile/cschnell">BY COLE SCHNELL</a></div><div class="date">April 20, 2023</div></div>
<article>
    <p>{copy}</p>
</article>
</div>
<div class="slot">
    <slot />
</div>
<article>
    <ul class="footer-btns">
        <li><a href="https://www.columbiamissourian.com/site/forms/online_services/show_error/show_me_the_errors/">Report an error</a></li>
        <li><a href="https://www.columbiamissourian.com/site/forms/online_services/letter_to_the_editor/letter_editor/">Write an letter</a></li>
        <li><a href="https://www.columbiamissourian.com/site/forms/online_services/feedback/">Send us feedback</a></li>
    </ul>
    <div class="profile">
        <div class="profile-img">
            <img src="https://bloximages.newyork1.vip.townnews.com/columbiamissourian.com/content/tncms/avatars/0/b4/64f/0b464f60-7825-11ec-b863-9f4f5882fff6.42c467104aef7d1b01d1033dc5c74b9a.png?_dc=1642620047" alt="Columbia Missourian" width="750" height="150" />
        </div>
        <div class="profile-text">
            <h3><a href="https://www.columbiamissourian.com/users/profile/cschnell">Cole Schnell</a></h3>
            <p>Graphics reporter, spring 2023. Reach me at coleschnell@mail.missouri.edu or in the newsroom at 882-5720.</p>
        </div>
    </div>
</article>

<footer>
    <div class="footer-content">
    <div class="flex-container">
        <div class="long"><div class="small"><h3>Sections</h3></div></div>
        <ul>
            <li><a href="https://www.columbiamissourian.com/news/">News</a></li>
            <li><a href="https://www.columbiamissourian.com/sports/">Sports</a></li>
            <li><a href="https://www.columbiamissourian.com/opinion/">Opinion</a></li>
            <li><a href="https://www.columbiamissourian.com/visuals/">Visuals</a></li>
            <li><a href="https://www.columbiamissourian.com/special-section/">Special Sections</a></li>
            <li><a href="https://www.columbiamissourian.com/archives/">Archives</a></li>
        </ul>
    </div>
    <div class="flex-container">
        <div class="long"><div class="small"><h3>Services</h3></div></div>
        <ul>
            <li><a href="https://www.columbiamissourian.com/about/">About the Missorian</a></li>
            <li><a href="https://www.columbiamissourian.com/site/advertise.html">Advertise with us</a></li>
            <li><a href="https://www.columbiamissourian.com/site/contact.html/">Contact us</a></li>
            <li><a href="https://www.columbiamissourian.com/site/forms/">Site Forms</a></li>
            <li><a href="https://www.columbiamissourian.com/site/forms/subscription_services/subscribe/">Subscribe</a></li>
        </ul>
    </div>
    <div class="flex-container">
        <a href="www.columbiamissourian.com"><img src="https://bloximages.newyork1.vip.townnews.com/columbiamissourian.com/content/tncms/custom/image/31bfd10c-c90a-11ed-a410-df8816e5fbc8.png?resize=750%2C150" alt="Columbia Missourian" width="750" height="150" /></a>
        <div class="long"><div class="small"><h3>Contact Information</h3></div></div>
        <ul class="contact">
            <li><b>columbiamissourian.com</b></li>
            <li>221 South 8th Street</li>
            <li>Columbia, MO 65201</li>
            <li>Phone: 573-882-5700</li>
            <li>Email: news@columbiamissourian.com</li>
        </ul>
    </div>
    </div>
    <div class="boiler"> © Copyright 2023 The Columbia Missourian | 221 South 8th Street, Columbia, MO  | <a href="https://www.columbiamissourian.com/site/terms.html">Terms of Use</a>  | <a href="https://www.columbiamissourian.com/site/privacy.html">Privacy Policy</a> </div>
</footer>

<style lang="sass">
    $missourian-blue: #2f4879
    
    .slot
        height: 300vh
        margin: 0 0 30px 0
    .nav
        background-color: $missourian-blue
        height: 50px
        display: flex
        justify-content: space-between
        position: sticky
        top: 0
        z-index: 100
        .logos
            display: flex
            align-items: center
            gap: 10px
            justify-content: center
            width: 100%
        img
            padding: 5px 0 0 0px
            height: 40px
            width: auto
        .share
            position: relative
            right: 0
            top: 0
            margin-bottom: 1px
            height: 49px
            background-color: white
            display: flex
            align-items: center
            justify-content: space-between
            overflow: hidden
            h3
                font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif
                font-size: 14px
                font-weight: 700
                color: #333
                padding: 0
                margin: 0
                text-align: center
                height: 1.25em
                overflow: hidden
                margin-right: 10px
                margin-left: 10px
            ul
                font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif
                list-style: none
                opacity: 0.6
                padding: 0
                margin: 0
                display: flex
                gap: 2px
                height: 1.5em
                overflow: hidden
                margin-right: 10px
                button
                    background-color: none !important
                    color: black
                    border: none
                    cursor: pointer
                    padding: 0
                    margin: 0
                ion-icon
                    font-size: 20px
                    color: black
                    margin: 0
                    padding: 0
                    &:hover
                        color: $missourian-blue
                .share-text
                    transform: translateY(.2em)
                    color: #333
                    font-size: .9em
                    margin-right: 5px
                    min-width: 6em
    p
        font-family: "Helvetica Neue",Helvetica,Arial,sans-serif
        font-size: 14px
        a
            text-decoration: none
            color: #3b58a8
            margin-left: 6px
            &:hover
                text-decoration: underline
        .slash
            color: #ccc
    .section-head
        font-family: 'Domine', serif        
        font-size: 40px
        font-weight: 400
        color: rgba(0, 0, 0, 0)
        padding: 5px 0 0 0
        margin: 0
        text-align: center
        -webkit-text-stroke: 0.4px white
    .pipe
        font-family: serif        
        font-size: 40px
        font-weight: 200
        color: white
        padding: 0 0 0 0
        margin: 0
        text-align: center
    h1
        font-family: 'Domine', serif
        font-size: 42px
        font-weight: 400
        color: #333
        padding: 0
        margin: 0 0 15px 0
        text-align: center
        line-height: 1
    .date-byline
        font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif
        font-size: 14px
        color: #595959
        padding: 0
        margin: 0
        text-align: center
        display: flex
        justify-content: center
        gap: 15px
        font-weight: normal
        a
            color: #3b58a8
            text-decoration: none
            &:hover
                text-decoration: underline
    article
        display: flex
        margin: 0 auto
        width: min(90vw, 800px)
        flex-direction: column
        p
            font-family: "Domine", serif
            font-size: 16px
            color: #444
            padding: 0
            text-align: left
            font-weight: lighter
            line-height: 1.8em
    .footer-btns
        font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif
        font-size: 14px
        color: white
        margin: 0 0 15px 0
        text-align: center
        display: flex
        justify-content: left
        gap: 15px
        font-weight: 700
        list-style: none
        padding: 0
        li
            a
                cursor: pointer
                background-color: $missourian-blue
                padding: 0.5em
                text-decoration: none
                color: white
                &:hover
                    background-color: #1f2f4f
                    text-decoration: underline
    .profile
        display: flex
        gap: 10px
        margin: 0 auto
        width: min(90vw, 660px)
        border-top: 1px solid #ccc
        overflow: hidden
        padding: 10px 0 10px 0
        .profile-img
            width: 100px
            height: 100px
            margin: 5px 0 5px 0
            img
                width: 100px
                height: 100px
                object-fit: cover
        .profile-text
            display: flex
            flex-direction: column
            align-items: start
            h3
                a
                    font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif
                    font-size: 18px
                    font-weight: 400
                    color: $missourian-blue
                    margin: 0
                    text-align: left
                    line-height: 1
                    text-decoration: none
                    &:hover
                        text-decoration: underline
            p
                font-family: "Helvetica Neue",Helvetica,Arial,sans-serif
                font-size: 14px
                color: #444
                text-align: left
                font-weight: lighter
                line-height: 1em
                margin: 0
    footer
        background-color: $missourian-blue
        color: white
        font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif
        font-size: 14px
        padding: 10px 0 10px 0
        margin: 0
        text-align: center
        display: flex
        flex-direction: column
        justify-content: center
        gap: 15px
        font-weight: 400
        list-style: none
        padding: 0
        .footer-content
            display: flex
            flex-direction: row
            justify-content: space-between
            align-items: start
            gap: 15px
            text-align: left
            .flex-container
                width: calc(100vw / 3)
                margin: 15px
                .long
                    border-bottom: 1px solid rgba(0,0,0,.1)
                    .small
                        border-bottom: 2px solid #c04848
                        display: inline-block
                        padding-right: 15px
                        h3
                            font-family: 'Source Sans Pro', sans-serif
                            font-size: 18px
                            margin: 14px 0 14px 0
                img
                    width: 100%
                    height: 100%
                    object-fit: cover
                .contact
                    list-style: none
                    padding: 0
                ul
                    padding-left: 18px
                    li 
                        text-align: left
                        margin:0
                        padding: 0
                        line-height: 1.5em
                        a
                            font-size: 14px
                            color: white
                            text-decoration: none
                            &:hover
                                text-decoration: underline
        .boiler
            font-size: 12px
            margin: 0 10px 10px 10px
            a
                color: white
                text-decoration: none
                &:hover
                    text-decoration: underline
    @media (max-width: 1000px)
        .nav
            flex-direction: column
            height: 100px

</style>