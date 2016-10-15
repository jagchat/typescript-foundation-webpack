var webpack = require("webpack");
var path = require("path");

module.exports = {
    entry: './app/app.ts',
    output: {
        filename: './app/bundle.js'
    },
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
    },
    module: {
        loaders: [
            {
                test: /\.ts$/, loader: 'ts-loader'
            },
            {
                test: /\.scss/, loaders: ['style', 'css', 'sass']
            }
        ]
    }
};
