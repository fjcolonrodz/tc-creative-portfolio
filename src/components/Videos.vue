<template>
    <div>
        <div id="videos" v-if="item.show">
            <div v-for="(video, index) in item.videos" :key="index">
                <video controls>
                    <source :src="video.url" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Videos",
        props: ['item']
    }
</script>

<style scoped>
    #videos {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        padding-left: 1em;
    }

    video {
        height: 320px;
        margin: 0 auto 1.5em auto;
        width: 320px;
    }

    /*
        Responsive Media Queries
    */

    /* iPhone Size */
    @media only screen and (max-width: 375px) {
        #videos {
            justify-content: center;
            padding-left: 0;
        }

        video {
            height: 350px;
            width: 350px;
        }
    }

    /* iPad Size */
    @media only screen and (min-width: 376px) and (max-width: 768px) {
        video {
            height: 325px;
            width: 325px;
        }
    }

    /* iPad Pro Size */
    @media only screen and (min-width: 769px) and (max-width: 1024px) {
        video {
            height: 425px;
            width: 425px;
        }
    }
</style>