// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ["nuxt-vuefire"],
  nitro: {
    preset: "firebase",
    firebase: {
      gen: 2,
      nodeVersion: "18",
      httpsOptions: {
        region: 'europe-west1',
        maxInstances: 3,
        enforceAppCheck: true
      },
    }
  },
  vuefire: {
    emulators: {
      enabled: false,
      auth: {
        options: {
          disableWarnings: true,
        },
      },
    },
    auth: {
      enabled: true,
      sessionCookie: true,
    },
    appCheck: {
      provider: 'ReCaptchaV3',
      // site key, NOT secret key
      key: '6LfNUAoqAAAAAMidMJZYNGhsIH4iryS_TZUazDXX',
      isTokenAutoRefreshEnabled: true,
    },
    config: {
      apiKey: "AIzaSyBA2euHYCGy3QYMuU5RpHUFGLMuhuEIo48",
      authDomain: "scpodev.firebaseapp.com",
      projectId: "scpodev",
      storageBucket: "scpodev.appspot.com",
      messagingSenderId: "561695446584",
      appId: "1:561695446584:web:c1c2de91280d739442f8cd",
      measurementId: "G-LBHTX4PRMQ"
    },
  },
})