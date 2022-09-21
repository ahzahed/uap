export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'University of Asia Pacific',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'A Better Education For A Better World',
      },
      {
        hid: 'og:title',
        name: 'og:title',
        content: 'University of Asia Pacific',
      },
      {
        hid: 'og:image',
        name: 'og:image',
        content: 'Image Link Dewa Lagbe',
      },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },

      {
        rel: 'stylesheet',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp',
      },
    ],
  },
  publicRuntimeConfig: {
    baseURL: process.env.BASE_URL || 'https://uapadmin.shoptheowlet.com/',
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/styles/app.scss'],
  // "~/plugins/animate.js"
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/directives.js', '~/plugins/VueYouTubeEmbed.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/moment',
  ],
  moment: {
    timezone: true,
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    baseURL: 'https://uap.shoptheowlet.com/api/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
