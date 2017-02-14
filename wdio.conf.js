exports.config = {

    /**
     * server configurations
     */
    host: '0.0.0.0',
    port: 4444,

    /**
     * specify test files
     */
    specs: [
        './test/specs/abcRadioTests.js'
    ],
    /*exclude: [
        'test/spec/multibrowser/**',
        'test/spec/mobile/**'
    ],
*/
    /**
     * capabilities
     */
    
    capabilities: [ {
        browserName: 'chrome',
        
    }],

    /**
     * test configurations
     */
    logLevel: 'silent',
    coloredLogs: true,
    screenshotPath: 'shots',
    baseUrl: 'http://www.abc.net.au',
    waitforTimeout: 99999999,
    framework: 'mocha',

    reporters: ['spec','allure'],
    reporterOptions: {
        outputDir: './allure-results'
    },

    mochaOpts: {
        ui: 'bdd'
    },

    /**
     * hooks
     */
    onPrepare: function() {
        console.log('starting uiTests');
    },
    onComplete: function() {
        console.log('completing uiTests');
    }

};