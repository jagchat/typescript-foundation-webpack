module.exports = {
    entry: './src/app/app.ts',
    output: {
        filename: './src/app/bundle.js'
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
    }
};
