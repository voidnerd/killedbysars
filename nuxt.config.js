export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'killedbysars',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: `“Killed by Sars” is the list of people who have died as a result of police brutality in Nigeria. These are people who were killed by the same Police Unit (SARS - Special Anti-Robbery Squad ) constituted to protect them.`,
      },
      {
        name: 'og:description',
        property: 'og:description',
        content: `“Killed by Sars” is the list of people who have died as a result of police brutality in Nigeria. These are people who were killed by the same Police Unit (SARS - Special Anti-Robbery Squad ) constituted to protect them.`,
      },
      {
        property: 'og:image',
        content: '/icons/ms-icon-310x310.png',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'shortcut icon',
        href: '/icons/android-icon-72x72.png',
      },
      {
        rel: 'apple-touch-icon',
        href: '/icons/apple-icon-152x152.png',
      },
      {
        rel: 'stylesheet',
        href:
          'https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha2/css/bootstrap.min.css',
        integrity:
          'sha384-DhY6onE6f3zzKbjUPRc2hOzGAdEf4/Dz+WJwBvEYL/lkkIsI3ihufq9hk9K4lVoK',
        crossorigin: 'anonymous',
      },
      {
        href:
          'https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap',
        rel: 'stylesheet',
      },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ['~/plugins/filter'],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    baseURL: process.env.BASE_URL || 'https://api.killedbysars.com/api',
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
}
