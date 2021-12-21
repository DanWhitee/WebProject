module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/themes/index.scss";`
      }
    }
  }
}