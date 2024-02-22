
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&family=Sometype+Mono:wght@500;600;700&display=swap',
        },
      ],
      script: [
        {
          src: 'https://unpkg.com/@phosphor-icons/web',
        },
      ],
    },
  },
  components: {
    global: true,
    dirs: [
      '~/components/common',
      '~/components/hallows',
      '~/components/utils',
    ],
  },
  css: ['~/styles/utils/tailwind.css', '~/styles/main.scss'],
  postcss: {
    plugins: {
      'postcss-import': {},
      'tailwindcss/nesting': {},
      'tailwindcss': {},
      'autoprefixer': {},
    },
  },
  modules: [
    '@nuxthq/studio',
    '@nuxt/content',
  ],
})
