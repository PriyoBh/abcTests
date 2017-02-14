var assert = require('assert');
var expect = require('chai').expect; 
var rh = require('../PageObjects/radioHeader.js');

var objProgramsMenuLocator = rh.buildProgramMenuAndReturn();

describe('abc radio tests', function(){
/*
	it("navigate to the radio url", function(){
		browser.url('/radionational');
	});

	it("navigate to a program via programs sub-menu", function(){
		browser.click(objProgramsMenuLocator.lnk_ProgramsDropDown);
		browser.click(objProgramsMenuLocator.getXPathForProgramsMenu("The World Today"));
		browser.waitForVisible("//div[@id='header']/h1",5000);
		var expectedHeader = browser.getText("//div[@id='header']/h1",function(result){
			expect(result).to.equal("The World Today with Eleanor Hall");
		});	
	});
*/
	
	/*
	it("social media pop up should open when the icon is clicked", function(){
		browser.timeouts('page load',30000);
		browser.url('/radionational/programs/bigideas/a-fortunate-universe/8076406');
		var windowId = [];
		windowId.MAIN = browser.getTabIds();
		browser.waitForExist('iframe[id="twitter-widget-0"]',10000);
		var widgetFrame = $('iframe[id="twitter-widget-0"]').value;
		browser.frame(widgetFrame);
		browser.waitForVisible("//div[@id='widget']",1000);
		browser.click("//div[@id='widget']//a[@id='b']");
		browser.getTabIds().forEach(function(element) {
					if (element===windowId.MAIN){
						return;
					}
					windowId.Twitter = element;
				});
		console.log(windowId.MAIN);
		console.log(windowId.Twitter);

		browser.switchTab(windowId.Twitter);

		browser.getText("//h1[@class='logo']/a",function(result){
			expect(result).to.equal("Twitter");
		});
		
		browser.close();
	
	});
*/
});