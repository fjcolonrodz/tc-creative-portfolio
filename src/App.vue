<template>
    <div id="app">
        <top-section></top-section>
        <div id="container">
            <products id="banners" :product="displayAds" :banners="true"></products>
            <products id="videos" :product="socialVideos" :videos="true"></products>
            <case-studies></case-studies>
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
        margin: 1em 9em;
        display: flex;
        flex-direction: column;
    }

    /* Extra small devices (phones, 600px and down) */
    @media only screen and (max-width: 600px) {
        #container {
            margin: 0 2em;
            position: relative;
        }
    }
</style>
