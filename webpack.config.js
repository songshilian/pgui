const px2rem = require('postcss-px2rem')
{
    loader: require.resolve('postcss-loader'),
    options {
         plugins: () => [
             //在postcss-loader的插件中加入这个插件
             //px2rem({ remUnit: 75 }) 的意思就是1rem = 75px 这个是根据750px设计稿来的，如果是620 的就写 62
             px2rem({ remUnit: 75 })
         ]
    }
}