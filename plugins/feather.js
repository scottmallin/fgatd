import Vue from 'vue'
import { HomeIcon, MusicIcon, ShoppingBagIcon, TwitchIcon, MailIcon, VideoIcon } from 'vue-feather-icons'

Vue.component('home-icon', HomeIcon)
Vue.component('music-icon', MusicIcon)
Vue.component('shopping-bag-icon', ShoppingBagIcon)
Vue.component('twitch-icon', TwitchIcon)
Vue.component('mail-icon', MailIcon)
Vue.component('video-icon', VideoIcon)

Vue.use(HomeIcon, MusicIcon, ShoppingBagIcon, TwitchIcon, MailIcon, VideoIcon)

// export default {
//     components: {
//         HomeIcon
//     }
// }