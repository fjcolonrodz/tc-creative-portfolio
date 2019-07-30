<template>
    <div id="top-section">
        <img src="../assets/logo.png" alt="">
        <img class="image" src="../assets/hero.jpg" alt="">
        <img class="shape" src="../assets/shape.png" alt="">
        <h1>Creative Portfolio</h1>
        <p>
            TravelClick's Creative team offers strategic designs <br>
            for clients such as Google Display Ads that are <br>
            templates, personalized, or custom designed.
        </p>
        <p>
            The team also creates Social Videos for advertisement <br>
            on Facebook, Instagram, YouTube, and Pinterest.
        </p>
        <div id="ctas">
            <a class="button" href="">Display Ads</a>
            <a class="button" href="">Social Videos</a>
            <a class="button" href="">Case Studies</a>
        </div>
        <img src="../assets/google-partner.png" alt="">
    </div>
</template>

<script>
    export default {
        name: "TopSection"
    }
</script>

<style scoped>
    img {
        width: 155px;
    }
    h1 {
        color: white;
        font-size: 46px;
    }
    p {
        color: white;
        font-size: 25px;
    }
    #top-section {
        height: 500px;
        overflow: hidden;
        padding: 3em 11em;
        position: absolute;
        width: 100%;
    }
    #ctas {
        margin: 3em 0;
    }
    .button {
        border: 1px solid white;
        border-radius: .25em;
        color: white;
        font-size: 22px;
        font-weight: bold;
        margin-right: 1em;
        padding: .5em 2em;
        text-decoration: none;
    }
    .image {
        position: absolute;
        top: -475px;
        left: -350px;
        transform: scaleX(-1);
        width: 100%;
        z-index: -3;
    }
    .shape {
        position: absolute;
        left: -1175px;
        opacity: .75;
        top: -575px;
        transform: rotate(-140deg);
        width: 1920px;
        z-index: -2;
    }
</style>