const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'https://gibm.becknet.ch',
            changeOrigin: true,
            pathRewrite: {
                '^/api': '/formular/formular.php',
            },
        })
    );
};
