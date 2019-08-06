<template>
    <div id="display_ads">
        <h2>Display Ads</h2>
        <div class="line"></div>
        <categories v-for="(category, index) in categories" :key="index" :item="category"></categories>
    </div>
</template>

<script>
    import Categories from '../components/Categories.vue'

    export default {
        name: "DisplayAds",
        components: {
            Categories
        },
        computed: {
            categories() {
                return this.$store.state.products[0].categories
            }
        }
    }
</script>

<style scoped>
    #display_ads {
        padding: 1em 9em;
        position: relative;
    }

    #display_ads h2 {
        color: #005eb8;
        font-family: Amadeus;
        font-size: 36px;
        font-weight: lighter;
    }

    .line {
        position: absolute;
        top: 85px;
        left: 143px;
        width: 20px;
        height: 2px;
        background: #005eb8;
    }
</style>