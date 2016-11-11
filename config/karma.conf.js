var webpackConfig = require('./webpack.test');
var path = require('path');

module.exports = function (config) {
  var _config = {
    basePath: '',

    frameworks: ['jasmine'],

    files: [
      {pattern: './config/karma-test-shim.js', watched: false},
      {pattern: './src/app/**/!(*vendor).js', watched: false}
    ],

    preprocessors: {
      './config/karma-test-shim.js': ['webpack', 'sourcemap'],
      './src/app/**/*.js': ['webpack', 'coverage']
    },

    coverageReporter: {
      reporters: [
        { type: 'json', dir: './coverage', subdir: '.', file: 'coverage-unmapped.json' }
      ]
    },

    remapIstanbulReporter: {
      src: './coverage/coverage-unmapped.json',
      reports: {
        'json': './coverage/coverage-mapped.json'
      },
      timeoutNotCreated: 50000,
      timeoutNoMoreFiles: 1000
    },

    istanbulThresholdReporter: {
      src: './coverage/coverage-mapped.json',
      basePath: path.resolve(__dirname, 'src/app'),
      reporters: ['text'],
      thresholds: {
        global: {
          statements: 90,
          branches: 90,
          lines: 70,
          functions: 90
        },
        each: {
          statements: 80,
          branches: 80,
          lines: 60,
          functions: 80
        }
      }
    },

    webpack: webpackConfig,

    webpackMiddleware: {
      stats: 'errors-only'
    },

    webpackServer: {
      noInfo: true
    },

    reporters: ['coverage', 'karma-remap-istanbul', 'istanbul-threshold', 'spec'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['PhantomJS'],
    singleRun: true
  };

  config.set(_config);
};
