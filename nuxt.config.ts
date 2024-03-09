// https://nuxt.com/docs/api/configuration/nuxt-config
import process from 'node:process'

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
          src: 'https://smtpjs.com/v3/smtp.js',
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
