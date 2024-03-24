// eslint-disable-next-line no-undef
export default defineNuxtPlugin((nuxtApp) => {
  (function (c, l, a, r, i, t, y) {
    c[a] = c[a] || function () {
      // eslint-disable-next-line prefer-rest-params
      (c[a].q = c[a].q || []).push(arguments)
    }
    // eslint-disable-next-line max-statements-per-line
    t = l.createElement(r); t.async = 1; t.src = `https://www.clarity.ms/tag/${i}`
    // eslint-disable-next-line max-statements-per-line
    y = l.getElementsByTagName(r)[0]; y.parentNode.insertBefore(t, y)
  })(window, document, 'clarity', 'script', 'llrncpype5')
})
