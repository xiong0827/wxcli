const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  productionSourceMap:false,
  devServer:{
    proxy:{
      '/api':{
        target:'127.0.0.1:3000',
        ws:true,
        changeOrigin:true,
      }
    },
    historyApiFallback: true,
    allowedHosts: "all",
  },
  publicPath: './',
})
