module.exports = {
    // 发布模式
    chainWebpack: config => {
        config.when(process.env.NODE_ENV === 'production', config => {
            config.set('externals', {
                vue: 'Vue',
                vuex: 'Vuex',
                'vue-router': 'VueRouter',
                axios: 'axios',
                'view-design': 'view-design',
                wow: 'wow',
                animated: 'animate'
            });

        });
    }


}