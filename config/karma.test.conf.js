var webpack = require('webpack'),
    path = require('path');

module.exports = function(config) {
    config.set({
        frameworks: [ 'jasmine' ],

        files: [
            '../src/app/**/*.js',
        ],

        autoWatch: true,

        browsers: [
            'PhantomJS'
        ],

        preprocessors: {
            'tests/*_test.js': ['webpack']
        },

        reporters: [
            'progress',
            'coverage'
        ],

        coverageReporter: {
            dir: 'coverage',
            reporters: [
                {
                    type: 'html',
                    subdir: 'report-html'
                }
            ]
        },

        webpack: {
            module: {
                postLoaders: [
                    {
                        test: /\.js$/,
                        exclude: /(node_modules|resources\/js\/vendor)/,
                        loader: 'istanbul-instrumenter'
                    }
                ]
            }
        },

        webpackMiddleware: {
            noInfo: true
        },

        plugins: [
            'karma-webpack',
            'karma-phantomjs-launcher',
            'karma-coverage'
        ]

    });
};
