const apiServer = 'http://api.douban.com/v2/'

module.exports = {
    devServer: {
        port: '8080',
        proxy: {
            '/api': {
                target: apiServer,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}