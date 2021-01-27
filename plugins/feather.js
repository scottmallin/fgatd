import Vue from 'vue'
import { HomeIcon, MusicIcon, ShoppingBagIcon, TwitchIcon, MailIcon, VideoIcon, FacebookIcon, InstagramIcon, TwitterIcon } from 'vue-feather-icons'

Vue.component('home-icon', HomeIcon)
Vue.component('music-icon', MusicIcon)
Vue.component('shopping-bag-icon', ShoppingBagIcon)
Vue.component('twitch-icon', TwitchIcon)
Vue.component('mail-icon', MailIcon)
Vue.component('video-icon', VideoIcon)
Vue.component('fb-icon', FacebookIcon)
Vue.component('ig-icon', InstagramIcon)
Vue.component('tw-icon', TwitterIcon)

Vue.use(HomeIcon, MusicIcon, ShoppingBagIcon, TwitchIcon, MailIcon, VideoIcon, FacebookIcon, InstagramIcon, TwitterIcon)

// export default {
//     components: {
//         HomeIcon
//     }
// }