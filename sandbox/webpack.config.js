var path = require('path')
var webpack = require('webpack')
var WebpackBuildNotifierPlugin = require('webpack-build-notifier')
var HtmlWebpackPlugin = require('html-webpack-plugin')

const PATHS = {
    src: __dirname,
    dist: path.join(__dirname, './dist')
}

module.exports = {
    entry: {
        'app': PATHS.src + '/index.ts'
    },
    output: {
        path: PATHS.dist,
        filename: '[name].js'
    },
    devtool: 'source-map',
    module: {
        rules: [{
            test: /\.ts$/,
            loader: 'awesome-typescript-loader',
            exclude: /node_modules/
        }, {
            test: /\.p?css$/,
            use: [{
                loader: 'style-loader'
            }, {
                loader: 'css-loader',
                options: {
                    importLoaders: 1,
                    url: false
                }
            }, {
                loader: 'postcss-loader'
            }]
        }]
    },
    resolve: {
        // you can now require('file') instead of require('file.js')
        extensions: ['.ts', '.js']
    },
    plugins: [
        new WebpackBuildNotifierPlugin({
            title: 'Sandbox Webpack Build'
        }),
        new HtmlWebpackPlugin({
            title: 'Webpack boilerplate',
            hash: true,
            filename: 'index.html',
            template: 'index.html'
        })
    ]
}
