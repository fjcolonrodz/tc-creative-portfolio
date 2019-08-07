<template>
    <div id="app">
        <top-section></top-section>
        <products :product="displayAds" :banners="true"></products>
        <products :product="socialVideos" :videos="true"></products>
    </div>
</template>

<script>
    import TopSection from './components/TopSection.vue'
    import Products from './components/Products.vue'

    export default {
        name: 'app',
        components: {
            TopSection, Products
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
