export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Frank Grimes & The Disasters',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'The official Frank Grimes & The Disasters website' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/scss/app.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/feather',
    '@/plugins/cookie-law'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/pwa',
    '@nuxt/image'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/gtm'
  ],

  pageTransition: {
    name: 'page',
    mode: 'out-in'
  },

  gtm: {
    id: process.env.GOOGLE_TAG_MANAGER_ID, // Used as fallback if no runtime config is provided
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
  },

  image: {
    sizes: [768, 1200]
  },

  pwa: {
    icon: {
      sizes: [72, 96, 120, 128, 144, 152, 180, 192, 384, 512]
    },
    manifest: {
      name: 'Frank Grimes & The Disasters',
      short_name: 'FGATD',
      description: 'Punk Rock from Barnsley, South Yorkshire.',
      background_color: '#151a20',
      lang: 'en',
      useWebmanifestExtension: false
    }
  },

  publicRuntimeConfig: {
    clientID: process.env.CLIENT_ID,
    secret: process.env.SECRET,
    gtm: {
      id: process.env.GOOGLE_TAG_MANAGER_ID
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
