module.exports = {
  pwa: {
    name: "ACUY666",
    themeColor: "rgba(62,111,244,255)",
    
    workboxOptions: {
      skipWaiting: true
    },

    icons: {
      favicon32: 'img/favicon-32x32.png',
      favicon16: 'img/favicon-16x16.png',
      appleTouchIcon: 'img/icons/apple-touch-icon-152x152.png',
      maskIcon: 'img/icons/safari-pinned-tab.svg',
      msTileImage: 'img/icons/msapplication-icon-144x144.png'
    }
  },
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
        @import "@/assets/scss/_variable.scss";
        @import "@/assets/scss/_main.scss";
        `
      }
    }
  },

  configureWebpack: {
    plugins: [
    
    ],
    
  }
};