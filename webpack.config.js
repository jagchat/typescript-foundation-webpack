module.exports = {
    entry: './app/app.ts',
    output: {
        filename: './app/bundle.js'
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
    }
};
