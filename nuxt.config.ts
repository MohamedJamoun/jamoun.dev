// https://nuxt.com/docs/api/configuration/nuxt-config
import process from 'node:process'

export default defineNuxtConfig({
  devtools: { enabled: false },
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@200..900&family=Montserrat:wght@500&display=swap',
        },
      ],
      script: [
        {
          src: 'https://unpkg.com/@phosphor-icons/web',
        },
      ],
    },
  },
  plugins: [
    {
      src: '~/plugins/microsoft-clarity.js',
      ssr: false,
      mode: 'client',
    },
  ],
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
