module.exports = {
    // 还记得我们安装的 eslint 吗，它可以用来规范代码，
    // 如果你不想要它的规范，可以配置这个把它关掉
    chainWebpack: (config) => {
        config.module.rules.delete('eslint');
    },

    devServer: {
        // 这个保证可以在实验楼环境下跑起代码
        disableHostCheck: true,

        // 开发环境下的跨域配置，现在你可能还不知道有什么用，
        // 当前你只需要知道， target 需要与我们搭建的转发域名相同即可。
        proxy: {
            '/api': {
                target: 'http://localhost:8000/api', //设置你调用的接口域名
                changeOrigin: true,
                pathRewrite: {
                    '^/api/': '',
                },
            },
        },
    },
};