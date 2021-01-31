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
  head() {
    return {
      title: 'Frank Grimes & The Disasters',
      meta: [
          { property: "og:site_name", content: "Frank Grimes & The Disasters" },
          { hid: "og:type", property: "og:type", content: "website" },
          {
            hid: "og:url",
            property: "og:url",
            content: "https://www.frankgrimesandthedisasters.co.uk",
          },
          {
            hid: "og:title",
            property: "og:title",
            content: "Frank Grimes & The Disasters",
          },
          {
            hid: "og:description",
            property: "og:description",
            content: "Punk Rock from Barnsley, South Yorkshire.",
          },
          {
            hid: "og:image",
            property: "og:image",
            content: "/og.jpg",
          },
          { property: "og:image:width", content: "1200" },
          { property: "og:image:height", content: "630" },
      ]
    }
  }
})
</script>