exports.config = {

    /**
     * server configurations
     */
    host: '0.0.0.0',
    port: 4444,
    maxInstance: 1,

    /**
     * specify test files
     */
    specs: [
        './test/specs/*.js'
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
    logLevel: 'error',
    coloredLogs: true,
    screenshotPath: 'shots',
    baseUrl: 'http://www.abc.net.au',
    waitforTimeout: 5000,
    framework: 'mocha',

    reporters: ['spec'],
    reporterOptions: {
        outputDir: './report'
    },

    mochaOpts: {
        ui: 'bdd',
        timeout: 20000
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