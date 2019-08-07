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
        border: 0;
    }
</style>