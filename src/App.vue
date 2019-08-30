<template>
    <div id="app">
        <top-section></top-section>
        <div id="container">
            <products id="banners" :product="displayAds" :banners="true"></products>
            <products id="videos" :product="socialVideos" :videos="true"></products>
<!--            <case-studies></case-studies>-->
        </div>
        <footer-section></footer-section>
    </div>
</template>

<script>
    import TopSection from './components/TopSection.vue'
    import Products from './components/Products.vue'
    import CaseStudies from './components/CaseStudies.vue'
    import FooterSection from './components/FooterSection.vue'

    export default {
        name: 'app',
        components: {
            TopSection, Products, CaseStudies, FooterSection
        },
        computed: {
            displayAds() {
                return this.$store.state.products[0]
            },
            socialVideos() {
                return this.$store.state.products[1]
            }
        }
    }
</script>

<style>
    #container {
        position: relative;
        margin: 1em 7em;
        display: flex;
        flex-direction: column;
    }

    /*
        Responsive Media Queries
    */

    /* iPhone Size */
    @media only screen and (max-width: 375px) {
        #container {
            margin: 0 2em;
            position: relative;
        }
    }

    /* iPad Size */
    @media only screen and (min-width: 376px) and (max-width: 768px) {
        #container {
            margin: 0 2.3em;
            position: relative;
        }
    }

    /* iPad Pro Size */
    @media only screen and (min-width: 769px) and (max-width: 1024px) {
        #container {
            margin: 0 4em;
        }
    }
</style>
