<template>
    <div id="display_ads">
        <h2>Display Ads</h2>
        <div class="line"></div>
        <hr>
        <div id="categories">
            <div id="description">
                <h3>Templated Banners</h3>
                <p>No changes to template. Just fitting of photo or video into our banners. Up to 4 updates allowed per year.</p>
                <div id="change_template_buttons">
                    <a class="change_template" href="">1</a>
                    <a class="change_template" href="">2</a>
                    <a class="change_template" href="">3</a>
                    <a class="change_template" href="">4</a>
                    <a class="change_template" href="">5</a>
                    <a class="change_template" href="">6</a>
                </div>
                <img src="../assets/building6.png" alt="">
            </div>
            <div id="banners">
                <banner class="banner" width="300" height="600" url="//adpiler.s3.eu-central-1.amazonaws.com/ads/b8c8ff3dbb8398d07190ed6b876e162c_html/index.html"></banner>
                <banner class="banner" width="160" height="600" url="//adpiler.s3.eu-central-1.amazonaws.com/ads/b8c8ff3dbb8398d07190ed6b876e162c_html/index.html"></banner>
                <banner class="banner" width="300" height="250" url="//adpiler.s3.eu-central-1.amazonaws.com/ads/b8c8ff3dbb8398d07190ed6b876e162c_html/index.html"></banner>
                <banner class="banner" width="728" height="90" url="//adpiler.s3.eu-central-1.amazonaws.com/ads/b8c8ff3dbb8398d07190ed6b876e162c_html/index.html"></banner>
            </div>
        </div>
    </div>
</template>

<script>
    import Banner from '../components/Banner.vue'

    export default {
        name: "DisplayAds",
        components: {
            Banner
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
        margin-top: 1em;
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
    .line {
        position: absolute;
        top: 85px;
        left: 143px;
        width: 20px;
        height: 2px;
        background: #005eb8;
    }
</style>