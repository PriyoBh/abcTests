var assert = require('assert');
var expect = require('chai').expect; 
var rh = require('../PageObjects/radioHeader.js');
var radioMedia = require('../PageObjects/radioProgramsBody.js');

var objProgramsMenuLocator = rh.buildProgramMenuAndReturn();
var objRadioMenuLocator = radioMedia.buildRadioMediaMenuAndReturn();
var objProgramNavLocator = rh.buildProgramNavAndReturn();

describe('abc radio tests', function(){

	it("navigate to a program via programs sub-menu", function(){
		browser.url('/radionational');
		browser.click(objProgramsMenuLocator.lnk_ProgramsDropDown);
		browser.click(objProgramsMenuLocator.getXPathForProgramsMenu("The World Today"));
		browser.waitForVisible("//div[@id='header']/h1",5000);
		expect(browser.getText("//div[@id='header']/h1")).to.contain("The World Today");
	});

	it("search for content in the search bar and search results returned", function(){
		browser.url('/radionational');
		browser.setValue(objProgramsMenuLocator.txt_SearchProgram,"Big Ideas");
		browser.click(objProgramsMenuLocator.txt_SearchProgramInput);
		var num_search_results = (browser.elements("//h3/a[contains(text(),'Big Ideas')]")).value.length;
		expect(num_search_results).to.be.above(0);
	});
	

	it("upon clicking on download audio should get directed to mp3 file", function(){
		browser.url('/radionational/programs/bigideas/a-fortunate-universe/8076406');
		var hrefResource = browser.getAttribute(objRadioMenuLocator.lnk_downloadAudio,"href");
		expect(hrefResource.indexOf(".mp3")).to.not.equal(-1);
	});


	it("upon going to the audio url check audio gets loaded", function(){
		browser.url("https://radio.abc.net.au/programitem/pg1aGbWlx6?play=true");
		var isPlayButtonVisible = browser.waitForVisible("//div[@id='player']//div[@aria-controls='player' and @aria-label='Play']",10000);
		expect(isPlayButtonVisible).to.equal(true);
		
	});


	it("upon clicking on listen Now should get re-directed to proper url", function(){
		browser.url('/radionational/programs/bigideas/a-fortunate-universe/8076406');
		var tabIds = [];
		tabIds.MAIN = browser.getTabIds();
		browser.click(objRadioMenuLocator.lnk_ListenNow);
		browser.getTabIds().forEach(function(element){
			if(element===tabIds.MAIN){
				return;
			}
			else {
				tabIds.radioPlayerTab = element;
			}
		});
		browser.switchTab(tabIds.radioPlayerTab);
		expect(browser.getUrl()).to.equal("https://radio.abc.net.au/programitem/pg1aGbWlx6?play=true");
		browser.close();
		browser.url('/radionational');
	});
	
	
	it("twitter window pop up should open when the twitter icon is clicked", function(){
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

		browser.switchTab(windowId.Twitter);
		var logoText = browser.getText("//h1[@class='logo']/a");
		expect(logoText).to.equal("Twitter");
	
	});


it("navigate successfully to the last guide of the program guide banner and select", function(){
		browser.url('/radionational');
		browser.pause(5000);
		do
		{
			browser.click(objProgramNavLocator.lnk_rightArrow);	
			browser.pause(2000);
		} while(!browser.isVisible("//ul[@aria-label='RN On Air Schedule']/li[21]/a"));
		
		console.log(browser.getAttribute("//ul[@aria-label='RN On Air Schedule']/li[21]/a","href"));
		var anchorTextUrl = browser.getAttribute("//ul[@aria-label='RN On Air Schedule']/li[21]/a","href");
		var programText = browser.getText("//ul[@aria-label='RN On Air Schedule']/li[21]/a/div/div[2]");
		browser.url(anchorTextUrl);	
		expect(browser.getText("//h2[@class='rn-program-banner']/a")).to.equal(programText);

	
	});
	
});