export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Nuxt Movie App',
    htmlAttrs: {
      lang: 'ko'
    },
    meta: [
      { charset: 'utf-8' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'og:type', property: 'og:type', content: 'website' },// hid를 동일하게 작성한 meta정보가 있다면 이부분에 새롭게 덮어쓸 수 있다.
      { hid: 'og:site_name', property: 'og:site_name', content: 'Nuxt Movie App' },
      { hid: 'og:title', property: 'og:title', content: 'Nuxt Movie App / Search' },
      { hid: 'og:description', property: 'og:description', content: 'The MOVIE is a RESTful web service to obtain movie information, all content and images on the site are contributed and maintained by our users.' },
      { hid: 'og:image', property: 'og:image', content: 'https://mblogthumb-phinf.pstatic.net/MjAyMDAyMDFfMTQ5/MDAxNTgwNTMzMjUwMTI5.4QPpbN-GOhL17fbmTfFFQq2aetLlh3TTMibTc9OAn6Ag.Ie5igcaEbXvBb9Z5V2xvmMbzKFnuvLTtITpFSu5E-CEg.JPEG.rissnam/f9-poster-han-sung-kang.jpeg?type=w800' },
      { hid: 'og:url', property: 'og:url', content: process.env.CLIENT_URL }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      // <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reset-css@5.0.1/reset.min.css" />
      // <link rel="preconnect" href="https://fonts.gstatic.com" />
      // <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@500&family=Roboto:wght@400;700&display=swap" rel="stylesheet" />
      { rel: 'Stylesheet', href: "https://cdn.jsdelivr.net/npm/reset-css@5.0.1/reset.min.css"},
      { rel: 'preconnect', href:"https://fonts.gstatic.com" },
      { href:"https://fonts.googleapis.com/css2?family=Oswald:wght@500&family=Roboto:wght@400;700&display=swap", rel:"stylesheet"},
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/main.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/index.js' // index.js는 경로를 생략가능
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/dotenv'
  ],

  styleResources: {
    scss: [
      '~/scss/main.scss'
    ]
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    bable: {
      presets: ['@babel/preset-env'],
      plugins: [
        ['@babel/plugin-transform-runtime']
      ]
    },
    postcss: {
      plugins: [
        'autoprefixer'
      ]
    }
  },

  serverMiddleware: [
    { 
      path: '/api/movie', 
      handler: '~/server-middleware/movie.js'
    }
  ]
}
