<template>
  <div class="single-release lg:col-6 col-12">
      <img :src="artwork" :alt="title">
      <h3 class="sr-only">{{ title }}</h3>
  </div>
</template>

<style lang="scss" scoped>
    @import "~/assets/scss/album";
</style>

<script>
    export default {
        data () {
            return {}
        },
        props: {
            title: String,
            artwork: String
        }
    }
</script>