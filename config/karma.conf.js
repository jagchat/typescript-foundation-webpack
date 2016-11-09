var webpackConfig = require('./webpack.test');

module.exports = function (config) {
  var _config = {
    basePath: '../',

    frameworks: ['jasmine'],

    files: [
      {pattern: 'src/app/**/*.js', watched: false}
    ],

    preprocessors: {
      'src/app/**/!(*spec).js': ['webpack', 'coverage']
    },

    webpack: webpackConfig,

    webpackMiddleware: {
      stats: 'errors-only'
    },

    webpackServer: {
      noInfo: true
    },

    reporters: ['progress', 'coverage', 'karma-remap-istanbul'],
    remapIstanbulReporter: {
      reports: {
        html: 'coverage'
      }
    },
    // configure istanbul coverage reporting
    coverageReporter: {
      dir: 'coverage',
      // configure the different reporters and their output dirs and folders
      reporters: [
        { type: 'json', subdir: '.', file: 'coverage-remap.json' }, // JSON is needed for remap-istanbul (js->ts map)
        { type: 'html', subdir: 'html-js' } // generates JS coverage report
        // { type: 'teamcity', subdir: '../testresult/coverage/', file: 'teamcity.txt' }
      ]
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['PhantomJS'],
    singleRun: true
  };

  config.set(_config);
};