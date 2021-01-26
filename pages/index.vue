<template>
  <content-wrapper>
    <h1 class="page-heading">Boris sez we can't play shows...</h1>
    <p>And for once, we agree with him.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate rem labore assumenda nobis, reiciendis obcaecati soluta temporibus animi ipsum similique nisi sunt quis? Dolores voluptatibus laboriosam quaerat aspernatur ducimus quae voluptas facere, reprehenderit officia consequatur, dignissimos saepe tenetur inventore modi mollitia doloribus quo suscipit debitis possimus molestiae! Iusto, molestiae hic.</p>
    <p>Stay home. Protect the NHS. See you soon.</p>
    <p>Simon, Scott, Ste, Dan</p>
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