<template>
    <div id="categories">
        <div id="description">
            <h3>{{ item.name }}</h3>
            <p>{{ item.description }}</p>
            <div id="change_template_buttons">
                <button v-for="(set, index) in item.template_sets" :key="index" class="change_template"
                        :class="active(set)"
                        @click="changeTemplate(item.template_sets, set)">
                    <span v-if="set.name"> {{ set.name }}</span>
                    <span v-else>{{ index + 1 }}</span>
                </button>
            </div>
            <img :src="item.image" alt="">
        </div>

        <template v-for="(set, index) in item.template_sets">
            <div id="banners" v-if="set.show" :key="index">
                <banner v-for="(banner, index) in item.template_sets[0].templates" :key="index" :banner="banner"
                        class="banner"></banner>
            </div>
        </template>
    </div>
</template>

<script>
    import Banner from '../components/Banner.vue'

    export default {
        name: "BannerCategories",
        components: {
            Banner
        },
        methods: {
            active: function (set) {
                return set.show ? 'active' : ''
            },
            changeTemplate: function (sets, set) {
                let currentSet = sets.filter(function (set) {
                    return set.show === true
                });
                currentSet[0].show = false;

                set.show ? set.show = false : set.show = true;

            }
        },
        props: ['item']
    }
</script>

<style scoped>
    #categories {
        display: flex;
        margin-bottom: 3em;
    }

    #description {
        flex: 1;
    }

    #banners {
        display: flex;
        flex: 2;
        flex-wrap: wrap;
        padding-top: .6em;
    }

    #description h3 {
        color: #009dd1;
        font-family: Amadeus;
        font-size: 32px;
        font-weight: lighter;
        margin: 0;
    }

    #description p {
        font-size: 24px;
        font-weight: lighter;
    }

    #description img {
        display: block;
        margin: 0 auto;
        height: 200px;
    }

    #change_template_buttons {
        display: flex;
        flex-wrap: wrap;
        margin: 3em 0;
    }

    .change_template {
        border: 2px solid #005eb8;
        color: #005eb8;
        margin: 0 1em 1em 0;
        padding: .5em .8em;
        text-decoration: none;
        font-size: 20px;
        font-weight: bold;
        transition: all 0.3s ease;
    }

    .change_template:hover {
        background: #005eb8;
        color: white;
    }

    .active {
        background: #005eb8;
        color: white;
    }

    /* Extra small devices (phones, 600px and down) */
    @media only screen and (max-width: 600px) {
        #categories {
            flex-direction: column;
        }

        #description img {
            display: none;
        }

        #banners {
            justify-content: center;
            padding-top: 0;
        }

        #change_template_buttons {
            margin: 1.5em 0;
            justify-content: center;
        }

        .banner:nth-child(1) {
            display: none;
        }

        .banner:nth-child(2) {
            display: none;
        }

        .banner:nth-child(4) {
            display: none;
        }
    }
</style>