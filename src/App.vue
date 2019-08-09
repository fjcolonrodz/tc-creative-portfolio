<template>
    <div id="app">
        <top-section></top-section>
        <products :product="displayAds" :banners="true"></products>
        <products :product="socialVideos" :videos="true"></products>
        <case-studies></case-studies>
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

</style>
