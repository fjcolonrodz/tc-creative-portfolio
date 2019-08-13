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
        justify-content: space-between;
        padding-left: 1em;
    }

    video {
        height: 320px;
        margin: 0 auto 1.5em auto;
        width: 320px;
    }

    /* Extra small devices (phones, 600px and down) */
    @media only screen and (max-width: 600px) {
        #videos {
            justify-content: center;
            padding-left: 0;
        }

        video {
            height: 500px;
            width: 500px;
        }
    }
</style>