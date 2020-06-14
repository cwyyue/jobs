// 这是项目发布阶段（生产环境）需要用到的 babel插件
const prodPlugins = [];
// 获取编译模式环境 如果是生产环境 则使用移除console的插件
if (process.env.NODE_ENV == 'production') {
    prodPlugins.push('transform-remove-console')
}
module.exports = {
    presets: [
        '@vue/cli-plugin-babel/preset'
    ],
    plugins: [
        // 'transform-remove-console'
        // 发布产品时候的插件数组
        ...prodPlugins,
    ]
}