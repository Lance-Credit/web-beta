// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  runtimeConfig: {
    public: {
      apiURL: process.env.API_URL || "https://staging-core-api.lancecredit.com/v1",

      monoKey: process.env.MONO_KEY || 'test_pk_WjmkB85mktPkjnjfIRYS',
      
      dojahAppId: process.env.DOJAH_APP_ID || "63887b462e85a5003640f7e0",
      dojahWidgetId: process.env.DOJAH_WIDGET_ID || "65e284b5f2409c00400ae810",
      dojahPublicKey: process.env.DOJAH_PUBLIC_KEY || "test_pk_BArg1e8S34jyNwf03lujrmp0q"
    }
  },

  components: [
    {
      path: '~/components/kyc',
      prefix: 'KYC',
      isAsync: true
    },
    {
      path: '~/components/form',
      prefix: 'Form',
      isAsync: true
    },
    { path: '~/components/auth', prefix: 'Auth' },
    {
      path: '~/components/loans',
      prefix: 'Loans',
      isAsync: true
    },
    {
      path: '~/components/wallet',
      prefix: 'Wallet',
      isAsync: true
    },
    {
      path: '~/components',
      isAsync: true
    },
  ],

  modules: [
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
    '@sidebase/nuxt-auth',
    '@pinia-plugin-persistedstate/nuxt',
    [
      '@vee-validate/nuxt',
      {
        autoImports: true,
      },
    ],
  ],

  piniaPersistedstate: {
    storage: 'localStorage'
  },
  
  auth: {
    isEnabled: true,
    baseURL: process.env.AUTH_ORIGIN
  },

  css: ['~/assets/css/main.css'],

  // nitro: {
  //   baseURL: "http://localhost:8000",
  //   prerender: {
  //     crawlLinks: true,
  //     failOnError: false, 
  //   },
  // },
  // routeRules: {
  //   "/**": { swr: true },
  //   "/dashboard/**": { ssr: false },
  // },
  ssr: false,

  compatibilityDate: '2025-02-08',
})