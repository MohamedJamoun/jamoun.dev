
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  app: {
    head:{
      link: [
        { 
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300;400;500;600;700&family=Young+Serif&display=swap',
        },
      ],
    },
  },
  components: [
    { path: '~/components/common' },
    { path: '~/components/hallows' },
    { path: '~/components/utils' },
  ],
  css: ['~/styles/utils/tailwind.css', '~/styles/main.scss'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
