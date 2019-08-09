<template>
    <div id="products">
        <div id="display_ads" v-if="banners">
            <div class="title">
                <h2>{{ product.name }}</h2>
                <div class="line"></div>
            </div>
            <div id="ad_categories">
                <banner-categories v-for="(category, index) in product.categories" :key="index" :item="category"></banner-categories>
            </div>
        </div>

        <div id="social_videos" v-if="videos">
            <div class="title">
                <h2>{{ product.name }}</h2>
                <div class="line"></div>
            </div>
            <div id="content">
                <div id="description">
                    <p>{{ product.description }}</p>
                    <div id="change_template_buttons">
                        <button v-for="(category, index) in product.categories" :key="index" class="change_template" :class="active(category)"
                                @click="changeTemplate(product.categories, category)">
                            {{ category.name }}
                        </button>
                    </div>
                </div>
                <div id="video_categories">
                    <videos v-for="(category, index) in product.categories" :key="index" :item="category"></videos>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import BannerCategories from './BannerCategories.vue'
    import Videos from './Videos.vue'

    export default {
        name: "Products",
        components: {
            BannerCategories, Videos
        },
        methods: {
            active : function (category) {
                return category.show ? 'active' : ''
            },
            changeTemplate : function (categories, category) {
                let currentCategory = categories.filter(function (category) {
                    return category.show === true
                });
                currentCategory[0].show = false;

                category.show ? category.show = false : category.show = true;
            }
        },
        props: ['product', 'banners', 'videos']
    }
</script>

<style scoped>
    #products {
        padding: 1em 9em;
        position: relative;
    }

    .title h2 {
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

    .social {
        top: 95px;
    }

    #content {
        display: flex;
    }

    #description {
        flex: 1;
    }

    #video_categories {
        flex: 2;
        padding-top: .6em;
    }

    #content #description p {
        font-size: 24px;
        font-weight: lighter;
        margin: 0;
    }

    #change_template_buttons {
        margin: 3em 0;
    }

    .change_template {
        border: 2px solid #005eb8;
        color: #005eb8;
        display: block;
        margin: 1em;
        padding: .5em 0;
        text-decoration: none;
        font-size: 20px;
        font-weight: bold;
        width: 300px;
        transition:all 0.3s ease;
    }

    .change_template:hover {
        background: #005eb8;
        color: white;
    }

    .active {
        background: #005eb8;
        color: white;
    }
</style>