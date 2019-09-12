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
                {{ $store.state.description_1 }}
                {{ $store.state.description_2 }}
                {{ $store.state.description_3 }}
            </p>
            <p>
                {{ $store.state.description_4 }}
                {{ $store.state.description_5 }}
            </p>

            <div id="ctas">
                <a class="button" href="#display_ads">Display Ads</a>
                <a class="button" href="#social_videos">Social Videos</a>
<!--                <a class="button" href="#case_studies">Case Studies</a> -->
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "TopSection"
    }
</script>

<style scoped>
    #top-section {
        overflow: hidden;
        position: relative;
    }

    #background {
        height: 650px;
        overflow: hidden;
        position: relative;
    }

    #background .image {
        position: absolute;
        top: -300px;
        transform: scaleX(-1);
        width: 100%;
        z-index: -3;
    }

    #background .shape {
        left: -1175px;
        opacity: .75;
        position: absolute;
        top: -550px;
        transform: rotate(-140deg);
        width: 1920px;
        z-index: -2;
    }

    #content {
        display: flex;
        flex-direction: column;
        margin: 5.5em 7em;
        position: absolute;
        left: 0;
        top: 0;
        width: 50%;
    }

    #content .logo {
        width: 200px;
    }

    #content h1 {
        color: white;
        font-family: Amadeus;
        font-size: 45px;
        font-weight: normal;
    }

    #content p {
        color: white;
        font-size: 25px;
        font-weight: lighter;
        margin: .5em 0;
    }

    #content #ctas {
        display: flex;
        flex-direction: row;
        margin: 1em 0;
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

    /*
        Responsive Media Queries
    */

    /* iPhone Size */
    @media only screen and (max-width: 375px) {
        #background .image {
            height: 650px;
            object-fit: contain;
            position: relative;
            top: 50%;
            transform: translateY(-50%);
            width: auto;
        }

        #content {
            margin: 2.5em 1em;
            width: 90%;
        }

        #content h1 {
            color: white;
            font-family: Amadeus;
            font-size: 40px;
            font-weight: normal;
        }

        #content p {
            font-size: 1.3em;
        }

        #content #ctas {
            flex-direction: column;
            width: 100%;
        }

        #content .button {
            margin-bottom: .75em;
            padding: .5em 0;
            text-align: center;
            width: 100%;
        }

        #content .button:hover {
            background: white;
            color: #005eb8;
        }
    }

    /* iPad Size */
    @media only screen and (min-width: 376px) and (max-width: 768px) {
        #background .image {
            height: 650px;
            object-fit: contain;
            position: relative;
            top: 50%;
            transform: translateY(-50%);
            width: auto;
        }

        #background .shape {
            left: -1100px;
        }

        #content {
            margin: 3em 2.3em;
            width: 90%;
        }

        #content h1 {
            color: white;
            font-family: Amadeus;
            font-size: 44px;
            font-weight: normal;
        }

        #content p {
            font-size: 1.5em;
        }

        #content #ctas {
            flex-direction: column;
            width: 100%;
        }

        #content .button {
            margin-bottom: .75em;
            padding: .5em 0;
            text-align: center;
            width: 100%;
        }

        #content .button:hover {
            background: white;
            color: #005eb8;
        }
    }

    /* iPad Pro Size */
    @media only screen and (min-width: 769px) and (max-width: 1024px) {
        #background {
            height: 550px;
        }
        #background .image {
            top: 0;
        }

        #background .shape {
            left: -1200px;
        }

        #content {
            margin: 4em 4em;
            width: 67%;
        }
    }
</style>