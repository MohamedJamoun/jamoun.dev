// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  components: [
    { path: '~/components/common' },
    { path: '~/components/hallows' },
    { path: '~/components/utils' },
  ],
  devtools: { enabled: false },
})
