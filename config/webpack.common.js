var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var helpers = require('./helpers');
module.exports = {
    entry: {
        vendor: './src/app/vendor.ts',
        app: './src/app/app.ts',
        spec: './src/app/app.spec.ts'
    },
    resolve: {
        extensions: ['', '.ts', '.js']
    },
    module: {
        loaders: [
            {
                test: /\.ts$/, loader: 'ts-loader'
            },
            {
                test: /\.html$/, loader: 'html'
            },
            {
                test: /\.scss/, loaders: ['style', 'css', 'sass']
            },
            {
                test: /\.css$/,
                loader: 'raw'
            }

        ]
    },
    ts: {
        configFileName: './tsconfig.json'
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendor', 'spec']
        }),
        new HtmlWebpackPlugin({
            template: 'src/app/index.html'
        })
    ]
};
