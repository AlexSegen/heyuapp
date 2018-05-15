module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'mynuxt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Lato:300,400,900' },
    ],
    script:[
      {src:'/js/jquery.min.js'},
      {src:'/js/bootstrap.min.js'},
      {src:'/js/smooth-scroll.min.js'},
      {src:'/js/wow.min.js'},
      {src:'/js/app.js'}
      ]
  },
  /*
  ** Customize your css
  */  
 router: { base: '/heyuapp/' },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
