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

        <loading class="loading" color="#009dd1" width="50"
                 :active.sync="isLoading" :can-cancel="false" :is-full-page="fullPage">
        </loading>

        <div id="add_ons_ads" v-if="add_ons">
            <div class="title">
                <h2>{{ product.name }}</h2>
                <div class="add_on_line"></div>
            </div>
            <div class="content">
                <div class="description">
                    <div class="change_template_buttons">
                        <button v-for="(category, index) in product.categories" :key="index" class="change_template" :class="active(category)"
                                @click="changeTemplate(product.categories, category)">
                            {{ category.name }}
                        </button>
                    </div>
                    <p><strong>Price:</strong> {{ product.price }}</p>
                </div>
                <div id="add_ons_categories">
                    <template v-for="(category, index) in product.categories">
                        <div :key="index" v-if="category.show">
                            <div>
                                <p id="add_on_description">{{ category.description}}</p>
                            </div>
                            <div id="add_ons">
                                <add-ons v-for="(banner, index) in category.templates" :key="index" :banner="banner"></add-ons>
                            </div>
                        </div>

                    </template>
                </div>
            </div>
        </div>

        <div id="social_videos" v-if="videos">
            <div class="title">
                <h2>{{ product.name }}</h2>
                <div class="line"></div>
            </div>
            <div class="content">
                <div class="description">
                    <p>{{ product.description }}</p>
                    <div class="change_template_buttons">
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
    import Loading from 'vue-loading-overlay';
    import BannerCategories from './BannerCategories.vue'
    import AddOns from "./AddOns.vue";
    import Videos from './Videos.vue'

    export default {
        name: "Products",
        data() {
            return {
                isLoading: false,
                fullPage: true
            }
        },
        components: {
            BannerCategories, AddOns, Videos, Loading
        },
        methods: {
            active : function (category) {
                return category.show ? 'active' : ''
            },
            changeTemplate: function (sets, set) {
                this.isLoading = true;
                let currentSet = sets.filter(function (set) {
                    return set.show === true
                });
                currentSet[0].show = false;

                set.show ? set.show = false : set.show = true;

                setTimeout(() => {
                    this.isLoading = false
                },2500)
            }
        },
        props: ['product', 'banners', 'add_ons', 'videos']
    }
</script>

<style scoped>
    #display_ads, #social_videos, #add_ons_ads {
        padding-bottom: 3em;
        position: relative;
    }

    .title h2 {
        color: #005eb8;
        font-family: Amadeus;
        font-size: 36px;
        font-weight: lighter;
    }

    .add_on_line {
        background: #005eb8;
        height: 2px;
        position: absolute;
        left: 0;
        top: 70px;
        width: 20px;
    }

    .line {
        background: #005eb8;
        height: 2px;
        position: absolute;
        left: 0;
        top: 40px;
        width: 20px;
    }

    .content {
        display: flex;
    }

    .description {
        display: flex;
        flex: 1;
        flex-direction: column;
    }

    #add_on_description {
        font-size: 24px;
        font-weight: lighter;
        margin-left: .3em;
    }

    #video_categories, #add_ons_categories {
        flex: 2;
        padding-top: .6em;
    }

    #add_ons {
        display: flex;
        flex: 2;
        flex-wrap: wrap;
        padding-top: .6em;
    }

    .content .description p {
        font-size: 24px;
        font-weight: lighter;
        margin: 0;
    }

    .change_template_buttons {
        display: flex;
        flex-wrap: wrap;
        margin: 2em 0;
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

    .loading {
        position: relative;
        left: 700px;
        top: 350px
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