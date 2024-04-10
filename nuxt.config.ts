// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      apiURL: process.env.API_URL || "https://staging-core-api.lancecredit.com"
    }
  },
  components: [
    { path: '~/components/form', prefix: 'Form' },
    { path: '~/components/auth', prefix: 'Auth' },
    { path: '~/components/wallet', prefix: 'Wallet' },
    '~/components'
  ],
  modules: [
    '@nuxtjs/tailwindcss',
    '@sidebase/nuxt-auth'
  ],
  auth: {
    // The module is enabled. Change this to disable the module
    isEnabled: true,
  },
  css: ['~/assets/css/main.css'],
})
