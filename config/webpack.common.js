var webpack = require('webpack');

module.exports = {
    entry: {
        app: './src/app/app.ts',
        vendor: './src/app/vendor.ts'
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
                test: /\.scss/, loaders: ['style', 'css', 'sass']
            }
        ]
    },
    ts: {
        configFileName: './tsconfig.json'
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendor', './src/app/vendor.bundle.js')
    ],
    output: {
        filename: './src/app/bundle.js'
    },
};