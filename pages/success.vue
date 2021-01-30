<template>
  <content-wrapper>
    <h1 class="page-heading">Thanks for reaching out!</h1>
    <p>We'll be in touch soon!</p>
  </content-wrapper>
</template>

<script lang="ts">
import Vue from 'vue'
import ContentWrapper from '~/components/ContentWrapper.vue'

export default Vue.extend({
  components: { ContentWrapper },
  transition: 'home'
})
</script>