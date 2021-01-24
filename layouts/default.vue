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
                  url: 'https://api.twitch.tv/helix/search/channels?query=rtgamecrowd',
                  method: 'get',
                  headers: {
                    'client-id': 'ly02f7bvldlkfnpf9wr453c55nmdhl',
                    'Authorization': 'Bearer ' + this.twAccToken
                  }
                }).then(response => {
                  this.twData = response.data.data[0]
                  this.isLive = this.twData.is_live
                })
            }
        },
        async mounted () {
            await this.$axios.post('https://id.twitch.tv/oauth2/token?client_id=ly02f7bvldlkfnpf9wr453c55nmdhl&client_secret=rny3pkbw5beqhzw6kohben5ioixnqz&grant_type=client_credentials')
              .then(response => {
                this.twAccToken = response.data.access_token
              })
            this.checkIfLive()
        }
    }
</script>