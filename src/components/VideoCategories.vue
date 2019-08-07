<template>
    <div>
        <div id="videos" v-if="item.show">
            <div v-for="(video, index) in item.videos" :key="index">
                <video width="320" height="320" controls>
                    <source :src="video.url" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "VideoCategories",
        methods: {
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
    #videos {
        display: flex;
        flex-wrap: wrap;
        padding: 0 1.2em .8em 1.2em;
        justify-content: space-between;
    }

    video {
        margin: 0 auto 1.2em auto;
    }
</style>