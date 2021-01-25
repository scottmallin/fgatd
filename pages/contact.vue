<template>
  <div class="flex items-center">
    <div class="container">
      <div class="row">
        <div class="col-8 offset-2">
          <h1 class="page-heading">Contact us</h1>
          <form method="post" netlify>
            <div class="form-row">
              <label for="form_name">Name:</label>
              <input type="text" name="name" id="form_name">
            </div>
            <div class="form-row">
              <label for="form_email">Email:</label>
              <input type="email" name="email" id="form_email">
            </div>
            <div class="form-row">
              <label for="form_message">Message:</label>
              <textarea name="message" id="form_message" rows="10"></textarea>
            </div>
            <div class="form-row">
              <input class="button button--primary" type="submit" value="Send">
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
    @import "~/assets/scss/form";
</style>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  transition: 'home'
})
</script>