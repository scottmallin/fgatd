<template>
  <content-wrapper>
    <h1 class="page-heading">Contact us</h1>
    <form name="contact" method="POST" action="/success" data-netlify="true">
      <input type="hidden" name="form-name" value="contact" />
      <div class="form-row">
        <label for="form_name">Name:</label>
        <input type="text" name="name" id="form_name" v-model="name" required>
      </div>
      <div class="form-row">
        <label for="form_email">Email:</label>
        <input type="email" name="email" id="form_email" v-model="email" required>
      </div>
      <div class="form-row">
        <label for="form_message">Message:</label>
        <textarea name="message" id="form_message" rows="10" minlength="50" v-model="message" required></textarea>
      </div>
      <div class="form-row flex">
        <button class="button button--primary" @click="submitForm()">Send</button>
      </div>
    </form>
  </content-wrapper>
</template>

<style lang="scss" scoped>
    @import "~/assets/scss/form";
</style>

<script lang="ts">
import Vue from 'vue'
import ContentWrapper from '~/components/ContentWrapper.vue'

export default Vue.extend({
  data() {
    return {
      name: "",
      email: "",
      message: ""
    }
  },
  components: { ContentWrapper },
  methods: {
    encode(data: any) {
      return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&")
    },
    submitForm() {

      this.$axios.$post('/success',
        this.encode({
          "form-name": "contact",
          "name": this.name,
          "email": this.email,
          "message": this.message
        }),
        {
          headers: { "Content-Type": "application/x-www-form-urlencoded" }
        }
      ).then(() => {
        this.$router.push("/success")
      })
    }
  },
  head() {
    return {
      title: 'Contact / Frank Grimes & The Disasters',
      meta: [
          { property: "og:site_name", content: "Frank Grimes & The Disasters" },
          { hid: "og:type", property: "og:type", content: "website" },
          {
            hid: "og:url",
            property: "og:url",
            content: "https://www.frankgrimesandthedisasters.co.uk/contact",
          },
          {
            hid: "og:title",
            property: "og:title",
            content: "Contact Frank Grimes & The Disasters",
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