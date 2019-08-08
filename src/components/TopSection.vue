<template>
    <div id="top-section">
        <div id="background">
            <img class="image" src="../assets/hero.jpg" alt="">
            <img class="shape" src="../assets/shape.png" alt="">
        </div>

        <div id="content">
            <img class="logo" src="../assets/logo.png" alt="">

            <h1>{{ $store.state.title }}</h1>

            <p>
                {{ $store.state.description_1 }} <br>
                {{ $store.state.description_2 }} <br>
                {{ $store.state.description_3 }}
            </p>
            <p>
                {{ $store.state.description_4 }} <br>
                {{ $store.state.description_5 }}
            </p>

            <div id="ctas">
                <a class="button" href="">Display Ads</a>
                <a class="button" href="">Social Videos</a>
                <a class="button" href="">Case Studies</a>
            </div>

            <img class="google_partner" src="../assets/google-partner.png" alt="">
        </div>

    </div>
</template>

<script>
    export default {
        name: "TopSection"
    }
</script>

<style scoped>
    #background {
        position: relative;
        height: 650px;
        overflow: hidden;
    }

    #background .image {
        position: absolute;
        top: -300px;
        transform: scaleX(-1);
        width: 100%;
        z-index: -3;
    }

    #background .shape {
        position: absolute;
        left: -1175px;
        opacity: .75;
        top: -550px;
        transform: rotate(-140deg);
        width: 1920px;
        z-index: -2;
    }

    #content {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        padding: 4em 9em;
    }

    #content h1 {
        color: white;
        font-family: Amadeus;
        font-size: 46px;
        font-weight: normal;
    }

    #content p {
        color: white;
        font-size: 25px;
        font-weight: lighter;
    }

    #content #ctas {
        margin: 3em 0;
    }

    #content .button {
        border: 1px solid white;
        border-radius: .25em;
        color: white;
        font-size: 22px;
        font-weight: bold;
        margin-right: 1em;
        padding: .5em 2em;
        text-decoration: none;
        transition:all 0.3s ease;
    }

    #content .button:hover {
        background: white;
        color: #005eb8;
    }

    #content .logo, #content .google_partner {
        width: 150px;
    }

    #top-section {
        overflow: hidden;
        position: relative;
    }
</style>