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
                      <li><NuxtLink class="nav-link" to="/"><home-icon/> Home</NuxtLink></li>
                      <li><NuxtLink class="nav-link" to="/releases"><music-icon/> Releases</NuxtLink></li>
                      <li><a class="nav-link" href="https://frankgrimesandthedisasters.bigcartel.com/" target="_blank"><shopping-bag-icon/> Store</a></li>
                      <li v-if="this.isLive">
                          <a class="nav-link" href="https://www.twitch.tv/frankgamesandthedisasters" target="_blank">
                            <twitch-icon/> 
                            Frank Games 
                            <span class="nav-link__live-now">
                                <video-icon size="16" class="nav-link__live-icon"/>
                                We're live
                            </span>
                        </a>
                      </li>
                      <li v-else><a class="nav-link" href="https://www.twitch.tv/frankgamesandthedisasters" target="_blank"><twitch-icon/> Frank Games</a></li>
                      <li><NuxtLink class="nav-link" to="/contact"><mail-icon/> Contact</NuxtLink></li>
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