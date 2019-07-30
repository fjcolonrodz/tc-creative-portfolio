<template>
    <div>
        <iframe allowfullscreen="true" marginwidth="0" marginheight="0" hspace="0" vspace="0" :src="url" :width="width" :height="height" scrolling="no"></iframe>
    </div>
</template>

<script>
    export default {
        name: "Banners",
        props: ['url', 'width', 'height']
    }
</script>

<style scoped>
    iframe {
        border: 0px;
    }
</style>