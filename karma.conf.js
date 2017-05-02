// Karma configuration file, see link for more information
// https://karma-runner.github.io/0.13/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular/cli'],
    plugins: [
      require('karma-jasmine'),
      require('karma-phantomjs-launcher'),
      require('karma-remap-istanbul'),
      require('@angular/cli/plugins/karma')
    ],
    files: [
      { pattern: './src/test.ts', watched: false },
      { pattern: './node_modules/@angular/material/prebuilt-themes/indigo-pink.css', included: true, watched: true}

    ],
    preprocessors: {
      './src/test.ts': ['@angular/cli']
    },
    mime: {
      'text/x-typescript': ['ts','tsx']
    },
    remapIstanbulReporter: {
      reports: {
        html: 'coverage',
        lcovonly: './coverage/coverage.lcov'
      }
    },
    angularCli: {
      config: './angular-cli.json',
      environment: 'dev'
    },
    reporters: config.angularCli && config.angularCli.codeCoverage
              ? ['progress', 'karma-remap-istanbul']
              : ['progress'],
hostname : process.env.IP,
port : process.env.PORT,
runnerPort : 0,
    // port: 9876,
    // colors: true,
    // logLevel: config.LOG_INFO,
    // autoWatch: true,
    browsers: ['PhantomJS'],
    // browsers: ['Chrome'],
    singleRun: false
  });
};
