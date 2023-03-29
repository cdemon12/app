<script>
    import Students from "./Students.svelte"

</script>

<content>
    <Students />
    <h1>Attendance rates sink academic performance in recent report</h1>
    <ul>
        <li class="author">BY COLE SCHNELL</li>
        <li><date>March XX, 2023</date></li>
    </ul>
</content>

<style>
    content {
        margin: 0 25vw 0 25vw;
    }

    h1 {
        margin: 0 25vw 0 25vw;
        font-size: 42px;
        text-align: center;
    }

    .author {
        color: #3b58a8;
        font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
    }

    li {
        list-style: none;
        font-size: 14px;
        color: #595959;
        font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
    }

    

</style>