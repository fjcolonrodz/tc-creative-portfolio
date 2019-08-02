<template>
    <div>
        <hr>
        <div id="categories">
            <div id="description">
                <h3>{{ item.name }}</h3>
                <p>{{ item.description }}</p>
                <div id="change_template_buttons">
                    <a :v-for="(template, index) in item.templates" class="change_template" href="">{{ $index }}</a>
                </div>
                <img src="../assets/building6.png" alt="">
            </div>
            <div id="banners" v-for="(set, index) in item.templates" :key="index" v-if="item">
                <banner v-for="(template, index) in set" :key="index" :template="template"
                        class="banner"></banner>
            </div>
        </div>
    </div>
</template>

<script>
    import Banner from '../components/Banner.vue'

    export default {
        name: "Categories",
        components: {
            Banner
        },
        props: ['item']
    }
</script>

<style scoped>
    #categories {
        display: flex;
        align-items: flex-start;
    }

    #description {
        margin-top: 1em;
        /*background: red;*/
        flex: 60%;
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
        width: 100%;
    }

    #banners {
        display: flex;
        flex-wrap: wrap;
        margin: 1em 0 .8em 0;
        justify-content: space-between;
    }

    #change_template_buttons {
        margin: 3em 0;
    }

    .banner:last-child {
        margin-top: .5em;
    }

    .change_template {
        border: 1.5px solid #005eb8;
        margin-right: .5em;
        padding: .5em .9em;
        text-decoration: none;
        font-size: 20px;
        font-weight: bold;
    }
</style>