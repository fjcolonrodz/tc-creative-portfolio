<template>
    <div>
        <iframe allowfullscreen="true" marginwidth="0" marginheight="0" hspace="0" vspace="0" :src="template.url"
                :width="template.width" :height="template.height" scrolling="no"></iframe>
    </div>
</template>

<script>
    export default {
        name: "Banners",
        props: ['template']
    }
</script>

<style scoped>
    iframe {
        border: 0px;
    }
</style>