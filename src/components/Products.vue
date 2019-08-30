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
    #display_ads {
        position: relative;
    }

    #social_videos {
        padding-bottom: 3em;
        position: relative;
    }

    .title h2 {
        color: #005eb8;
        font-family: Amadeus;
        font-size: 36px;
        font-weight: lighter;
    }

    .line {
        background: #005eb8;
        height: 2px;
        position: absolute;
        left: 0;
        top: 40px;
        width: 20px;
    }

    #content {
        display: flex;
    }

    #description {
        display: flex;
        flex: 1;
        flex-direction: column;
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
        display: flex;
        flex-direction: column;
        margin: 3em;
    }

    .change_template {
        border: 2px solid #005eb8;
        color: #005eb8;
        margin: .5em;
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

    /*
        Responsive Media Queries
    */

    /* iPhone Size */
    @media only screen and (max-width: 375px) {
        #content {
            display: flex;
            flex-direction: column;
        }

        #change_template_buttons {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: 1.5em 0;
        }
    }

    /* iPad Size */
    @media only screen and (min-width: 376px) and (max-width: 768px) {
        #content {
            display: flex;
            flex-direction: column;
        }

        #change_template_buttons {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: 1.5em 0;
        }
    }

    /* iPad Pro Size */
    @media only screen and (min-width: 769px) and (max-width: 1024px) {
        #content {
            display: flex;
            flex-direction: column;
        }

        #change_template_buttons {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: 1.5em 0;
        }
    }
</style>