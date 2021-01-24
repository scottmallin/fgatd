<template>
  <nav>
      <div class="container">
          <div class="row nav-logo">
              <div class="col-12">
                  <img src="~/assets/images/logo.png" alt="Frank Grimes & The Disasters">
              </div>
          </div>
          <div class="row nav-links">
              <div class="col-12">
                  <ul>
                      <li><NuxtLink to="/">Home</NuxtLink></li>
                      <li><NuxtLink to="/releases">Releases</NuxtLink></li>
                      <li><a href="https://frankgrimesandthedisasters.bigcartel.com/" target="_blank">Store</a></li>
                      <li v-if="this.isLive"><a href="https://www.twitch.tv/frankgamesandthedisasters" target="_blank">Frank Games</a></li>
                      <li v-else><a href="https://www.twitch.tv/frankgamesandthedisasters" target="_blank">Frank Games :(</a></li>
                      <li><NuxtLink to="/contact">Contact</NuxtLink></li>
                  </ul>
              </div>
          </div>
      </div>
  </nav>
</template>

<style lang="scss" scoped>
    @import "~/assets/scss/navigation";
</style>

<script>
    export default {
        data () {
            return {}
        },
        props: {
            isLive: Boolean
        }
    }
</script>