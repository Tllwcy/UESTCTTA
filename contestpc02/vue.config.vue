const pxtorem = require('postcss-pxtorem') //定义个变量引入postcss-pxtorem
module.exports = {
    css: {
     loaderOptions: {
      // 设置 scss 公用变量文件
      sass: {
        data: `@import '~@/assets/style/public.scss';`
      },
      // 按照设计稿750px 的 1/2
      postcss: {
        plugins: [
          autoprefixer(),
          pxtorem({
            rootValue: 75, //根据设计稿宽度除以10进行设置，假设设计稿为375，即rootValue设为37.5
            propList: ['*'], //设置需要转换的属性，*为所有都进行转换
            selectorBlackList: ['van-circle__layer']
          })
        ]
      }
    }
  },
}
