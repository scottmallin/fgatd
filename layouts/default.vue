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
              twAuthResponse: '',
              twAccToken: '',
              twData: '',
              isLive: Boolean
            }
        },
        methods: {
            checkIfLive() {
                this.$axios({
                  url: 'https://api.twitch.tv/helix/search/channels?query=frankgamesandthedisasters',
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
                this.twAuthResponse = response
                this.twAccToken = response.data.access_token
                console.log('gotty')
              })
            this.checkIfLive()
        }
    }
</script>