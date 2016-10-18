var webpack = require('webpack');

module.exports = {
    entry: {
        app: './src/app/app.ts',
        vendor: './src/app/vendor.ts'
    },
    output: {
        filename: './src/app/bundle.js'
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendor', './src/app/vendor.bundle.js')
    ],
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
    }
};
