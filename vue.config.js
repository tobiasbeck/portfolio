module.exports = {
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  }
  /*configureWebpack: config => {
    console.log("----------------------");
    console.log("WEBPACK CONFIGURATION!");
    console.log("----------------------");
    console.log(config.module.rules[10].oneOf[3].use);
    console.log("----------------------");
  }*/,

  baseUrl: undefined,
  outputDir: undefined,
  assetsDir: undefined,
  runtimeCompiler: true,
  productionSourceMap: undefined,
  parallel: undefined
}
