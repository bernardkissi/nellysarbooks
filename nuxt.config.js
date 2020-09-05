export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'universal',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'static',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
      { hid: 'site', name: 'twitter:site', content: 'Nellysarbooks' },
      { hid: 'creator', name: 'twitter:creator', content: '@Bernardkissi' },
      {
        hid: 'title',
        name: 'twitter:title',
        content: 'Kids books hub with interesting stories',
      },
      {
        name: 'keywords',
        content:
          'kids book, kids stories, story book for kids, kids books for climate change',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [{ src: '~/plugins/modal.js', ssr: false }],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
    [
      '@nuxtjs/google-analytics',
      {
        id: 'UA-58432997-3',
      },
    ],
  ],
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/pwa'],

  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {},
}
