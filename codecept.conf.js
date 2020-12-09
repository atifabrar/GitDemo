const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// HEADLESS=true npx codecept run
envConfig = require("./config/envConfig")
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: './tests/*/formControls_test.js',
  output: './output',
  multiple: {
    parallel: {
      browsers: [
        {
          browser: 'chrome',
        },
        {
          browser: 'firefox',
        },
      ],
    },

  },
  helpers: {
    WebDriver: {
      url: envConfig[envConfig.env].web.HOST_URL,
      windowSize: "maximize",
      browser: 'firefox'

    },



    ChaiWrapper: {
      "require": "codeceptjs-chai"
    },

  },

  include: {
    I: './steps_file.js',
    formControls: './pages/formControls/formControls.js'
  },  
  bootstrap: null,
  mocha: {},
  name: 'qforms',
  plugins: {
    allure: {
      enabled: true
    },
    retryFailedStep: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    },
    wdio: {
      enabled: true,
      services: ['selenium-standalone']
    },
  }
}