<template>
    <div>
        <iframe allowfullscreen="true" marginwidth="0" marginheight="0" hspace="0" vspace="0" :src="banner.url"
                :width="banner.width" :height="banner.height" scrolling="no"></iframe>
    </div>
</template>

<script>
    export default {
        name: "Banners",
        props: ['banner']
    }
</script>

<style scoped>
    iframe {
        display: flex;
        flex-wrap: wrap;
        margin: 0 1.2em .8em 1.2em;
        justify-content: space-between;
        border: 0;
    }
</style>