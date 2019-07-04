module.exports = {
    entry: [
        '@babel/polyfill',
        './app.js'
    ],
    output: {
        filename: 'app.bundle.js',
        publicPath: '/dist',
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader"
            }
        }]
    }
};