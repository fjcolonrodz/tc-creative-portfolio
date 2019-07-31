<template>
  <div id="app">
    <top-section></top-section>
    <display-ads></display-ads>
  </div>
</template>

<script>
import TopSection from './components/TopSection.vue'
import DisplayAds from './components/DisplayAds.vue'

export default {
  name: 'app',
  components: {
    TopSection, DisplayAds
  }
}
</script>

<style>

</style>
