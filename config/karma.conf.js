const webpackConfig = require('../build/webpack.test.conf');

module.exports = function (config) {
  config.set({
    // base path used to resolve all patterns
    basePath: '',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'chai', 'moxios'],

    // list of files/patterns to load in the browser
    files: [
      // 'node_modules/phantomjs-polyfill/bind-polyfill.js',
      // 'node_modules/phantomjs-polyfill-object-assign/object-assign-polyfill.js',
      'node_modules/babel-polyfill/dist/polyfill.js',
      { pattern: './config/spec.bundle.js', watched: false }
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: { './config/spec.bundle.js': ['webpack', 'sourcemap'] },

    webpack: webpackConfig,

    webpackMiddleware: {
      noInfo: true,
    },

    webpackServer: {
      noInfo: true // prevent console spamming when running in Karma!
    },

    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['spec', 'coverage', 'progress', 'html', 'mocha'],

    coverageReporter: {
      reporters: [
        { type: 'html', dir: 'report/coverage/' },
        { type: 'text' },
        { type: 'text-summary' }
      ]
    },

    htmlReporter: {
      outputFile: 'report/unit/units.html'
    },

    // web server port
    port: 9876,

    // enable colors in the output
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // toggle whether to watch files and rerun tests upon incurring changes
    autoWatch: false,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],

    // if true, Karma runs tests once and exits
    singleRun: true,

    browserNoActivityTimeout: 20000
  });
};
