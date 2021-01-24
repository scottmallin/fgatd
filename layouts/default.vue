<template>
  <div class="user-view">
    <Navigation :is-live="this.isLive"/>
    <Nuxt />
  </div>
</template>
<script>

  export default {
        data () {
            return {
              twAccToken: '',
              twData: '',
              isLive: {
                type: Boolean
              }
            }
        },
        methods: {
            checkIfLive() {
                this.$axios({
                  url: 'https://api.twitch.tv/helix/search/channels?query=frankgamesandthedisasters',
                  method: 'get',
                  headers: {
                    'client-id': `${process.env.CLIENT_ID}`,
                    'Authorization': 'Bearer ' + this.twAccToken
                  }
                }).then(response => {
                  this.twData = response.data.data[0]
                  this.isLive = this.twData.is_live
                })
            }
        },
        async mounted () {
            await this.$axios.post(`https://id.twitch.tv/oauth2/token?client_id=${process.env.CLIENT_ID}&client_secret=${process.env.SECRET}&grant_type=client_credentials`)
              .then(response => {
                this.twAccToken = response.data.access_token
              })
            this.checkIfLive()
        }
    }
</script>