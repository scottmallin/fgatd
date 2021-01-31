<template>
  <content-wrapper>
    <h1 class="page-heading">Privacy Policy</h1>
    <p>Your privacy is important to us. It is our policy to respect your privacy regarding any information we may collect from you across our website, <a href="/">https://www.frankgrimesandthedisasters.co.uk</a>, and other sites we own and operate.</p>
    <p>We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we’re collecting it and how it will be used.</p>
    <p>We only retain collected information for as long as necessary to provide you with your requested service. What data we store, we’ll protect within commercially acceptable means to prevent loss and theft, as well as unauthorised access, disclosure, copying, use or modification.</p>
    <p>We don’t share any personally identifying information publicly or with third-parties, except when required to by law.</p>
    <p>Our website may link to external sites that are not operated by us. Please be aware that we have no control over the content and practices of these sites, and cannot accept responsibility or liability for their respective privacy policies.</p>
    <p>You are free to refuse our request for your personal information, with the understanding that we may be unable to provide you with some of your desired services.</p>
    <p>Your continued use of our website will be regarded as acceptance of our practices around privacy and personal information. If you have any questions about how we handle user data and personal information, feel free to contact us.</p>
    <p>This policy is effective as of 30 January 2021.</p>
  </content-wrapper>
</template>

<script lang="ts">
import Vue from 'vue'
import ContentWrapper from '~/components/ContentWrapper.vue'

export default Vue.extend({
  components: { ContentWrapper },
  head() {
    return {
      title: 'Privacy / Frank Grimes & The Disasters',
      meta: [
          { property: "og:site_name", content: "Frank Grimes & The Disasters" },
          { hid: "og:type", property: "og:type", content: "website" },
          {
            hid: "og:url",
            property: "og:url",
            content: "https://www.frankgrimesandthedisasters.co.uk/privacy",
          },
          {
            hid: "og:title",
            property: "og:title",
            content: "Frank Grimes & The Disasters Privacy Policy",
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