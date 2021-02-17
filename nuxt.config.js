import colors from 'vuetify/es5/util/colors'

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'HCMS2019',
    meta: [
      { charset: 'utf-8' },
      { name: 'theme-color', content: '#FFFFFF' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'robots', content: 'index, follow, noodp' },
      { name: 'googlebot', content: 'index, follow' },
      { name: 'format-detection', content: 'telephone=no' },
      { hid: 'description', name: 'description', content: 'Health Claims Management Service' },
      { name: 'keywords', content: 'HCMS, Health, Claims, Management, Service' },
      // Twitter sharing
      // https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/summary
      { name: 'twitter:card', content: 'summary' },
      // Facebook sharing
      // https://developers.facebook.com/docs/sharing/webmasters/
      { property: 'og:site_name', content: 'HCMS2019' },
      { property: 'og:image', content: 'https://www.hcms2019.com/images/home_background_1.jpg' },
      { property: 'og:title', content: 'HCMS2019' },
      { property: 'og:url', content: 'https://www.hcms2019.com/' },
      { property: 'og:description', content: 'Health Claims Management Service' },
      { property: 'og:type', content: 'website' },
    ],
    link: [
      // Manifest for appplaction name and icon at Home screen
      // https://web.dev/add-manifest/
      { rel: 'manifest', href: '/manifest.json' },
      { rel: 'shortcut icon', href: '/favicons/favicon.ico' },
      { rel: 'icon', sizes: '32x32', type: 'image/ico', href: '/favicons/favicon.ico' },
      { rel: 'icon', sizes: '48x48', type: 'image/png', href: '/favicons/favicon@xs.png' },
      { rel: 'icon', sizes: '96x96', type: 'image/png', href: '/favicons/favicon@sm.png' },
      { rel: 'icon', sizes: '144x144', type: 'image/png', href: '/favicons/favicon@md.png' },
      { rel: 'icon', sizes: '192x192', type: 'image/png', href: '/favicons/favicon@lg.png' },
      { rel: 'apple-touch-icon', href: '/favicons/touch-icon-iphone.png' },
      { rel: 'apple-touch-icon', sizes: '76x76', href: '/favicons/touch-icon-ipad.png' },
      { rel: 'apple-touch-icon', sizes: '120x120', href: '/favicons/touch-icon-iphone-retina.png' },
      { rel: 'apple-touch-icon', sizes: '152x152', href: '/favicons/touch-icon-ipad-retina.png' },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/services.ts'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  axios: {
    baseURL:'http://localhost:5000'
  }
}
