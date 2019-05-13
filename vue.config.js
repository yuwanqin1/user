const apiServer = 'http://api.douban.com/v2/'
// https://api.apiopen.top/searchMusic
const musicServer = 'http://api.apiopen.top'

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
            },
            '/music': {
                target:  musicServer,
                changeOrigin: true,
                pathRewrite: {
                    '^/music': ''
                }
            }
        }
    }
}