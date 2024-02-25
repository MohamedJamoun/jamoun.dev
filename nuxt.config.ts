
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inconsolata:wght@200..900&display=swap',
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
  devServer: {
    host: process.env.NUXT_DAEMON_IP,
  },
})
