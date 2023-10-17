// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  components: [
    { path: '~/components/common' },
    { path: '~/components/hallows' },
    { path: '~/components/utils' },
  ],
  css: ['~/styles/utils/tailwind.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
