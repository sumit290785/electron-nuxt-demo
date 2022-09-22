/**
 * By default, Nuxt.js is configured to cover most use cases.
 * This default configuration can be overwritten in this file
 * @link {https://nuxtjs.org/guide/configuration/}
 */

module.exports = {
  ssr: false,
  target: 'static',
  components: true,
  head: {
    title: 'Dashboard',
    meta: [{ charset: 'utf-8' }]
  },
  loading: false,
  plugins: [
    {ssr: true, src: '@/plugins/icons.js'}

  ],
  buildModules: [
    '@nuxt/typescript-build'
  ],
  modules: [
    '@nuxtjs/vuetify',
    '@nuxtjs/axios',
    '@nuxtjs/auth-next'

  ],
  axios: {},
  auth: {},
  vuetify: {
    customVariables: ["~/assets/scss/variables.scss"],
    optionsPath: "vuetify.options.js",
    treeShake: true,
    options: {
      customProperties: true
    }
  },
  transpileDependencies: ['vuex-module-decorators', 'nuxt-property-decorator'],
  build: {}
}
