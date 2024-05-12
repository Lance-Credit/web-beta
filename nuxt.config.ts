// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      monoKey: process.env.MONO_KEY || 'test_pk_WjmkB85mktPkjnjfIRYS',
      defaultInterestRate: process.env.DEFAULT_INTEREST_RATE || "5",
      defaultProcessingFeeRate: process.env.DEFAULT_PROCESSING_FEE_RATE || "1",
      apiURL: process.env.API_URL || "https://staging-core-api.lancecredit.com",
    }
  },
  components: [
    { path: '~/components/kyc', prefix: 'KYC' },
    { path: '~/components/form', prefix: 'Form' },
    { path: '~/components/auth', prefix: 'Auth' },
    { path: '~/components/loans', prefix: 'Loans' },
    { path: '~/components/wallet', prefix: 'Wallet' },
    '~/components'
  ],
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
    '@sidebase/nuxt-auth',
    '@pinia-plugin-persistedstate/nuxt',
  ],
  alias: {
    'pinia': "/node_modules/@pinia/nuxt/node_modules/pinia/dist/pinia.mjs",
    'pinia-plugin-persistedstate': "/node_modules/@pinia-plugin-persistedstate/nuxt/node_modules/pinia-plugin-persistedstate/dist/index.mjs",
  },
  auth: {
    // The module is enabled. Change this to disable the module
    isEnabled: true,
    // provider: {
    //   type: 'local',
    //   endpoints: {
    //     signIn: { path: '/login', method: 'post' },
    //     signOut: { path: '/logout', method: 'post' },
    //     signUp: { path: '/register', method: 'post' },
    //     getSession: { path: '/session', method: 'get' }
    //   },
    //   token: { signInResponseTokenPointer: '/token/accessToken' },
    // }
  },
  css: ['~/assets/css/main.css'],
})
