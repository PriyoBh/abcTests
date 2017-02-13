# js_utilities

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

for the ui tests => npm run uiTests
for the api tests => npm run apiTests
