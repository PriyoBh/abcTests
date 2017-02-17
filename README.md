# abcTests

This testing framework runs a set of ui tests and api tests.

Test Framework Used:- mocha
Build Tool Used:- gulp
UI Automation Tool Used:- webdriverio

API Test Workflow:-

node => gulp => mocha

UI Test Workflow:-

node => gulp => wdio (webdriver test runner) => mocha

Installation Instructions:-

All the required libraries are in the repo. So cloning the library is sufficient.

Pre-requisites for running the UI tests:-

Chrome should be installed. The tests are presently set up to run in chrome.

After cloning the repository - the chromedriver needs to be installed for the very first time.

To install chromedriver => 

Run the following command => ./node_modules/.bin/selenium-standalone install

Commands to run the tests =>

for the ui news page  tests => npm run uiNewsTests
for the ui radio page tests => npm run uiRadioTests
for the api tests in production => npm run apiTestsInProduction

Please Note:- at present there is no task to run the api tests in test or staging as the webservice urls do not work in those environments. But they can be easily added in future by adding environment specific config files.
