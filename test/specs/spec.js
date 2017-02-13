var assert = require('assert');
var expect = require('chai').expect; 
var abcNewsHeader = require('../PageObjects/abcNewsHeader.js'); 
var pgJustIn = require('../PageObjects/justInPage.js');
var objNewsLocator = abcNewsHeader.buildLocatorPropertiesAndReturn();
var objJustInLocator =  pgJustIn.buildLocatorPropertiesAndReturn();       

describe('abc news page', function() {
/*
    it('abc news site should get loaded and title should be ABC News (Australian Broadcasting Corporation)', function () {
        browser.url('/news');
        var title = browser.getTitle();
        console.log("debug :" + title);	
        assert.equal(title, 'ABC News (Australian Broadcasting Corporation)');
    });

    it('uploading news page the new icon should be present', function () {
        console.log("debug:: " + objNewsLocator["img_NewsIcon"] );
        browser.waitForVisible(objNewsLocator["img_NewsIcon"],1000);
    });

    it('verify that the user can navigate to justIn page through primary navigation', function () {
        console.log("debug:: " + objNewsLocator["link_justIn"] );
        browser.waitForVisible(objNewsLocator["link_justIn"],1000);
        browser.click(objNewsLocator["link_justIn"],function() {
            browser.waitForVisible(objJustInLocator["hdrText_justIn"], 1000);
            expect(browser.getText(objJustInLocator["hdrText_justIn"]))
            .to
            .equal('Just In');
                
            
        });
    });
*/
    it('verify all articles have been correctly loaded', function(){
        browser.url('/news/justin/');
        
        var result = browser.elements("//ul[@class='article-index']/li");
        for (var i=1; i<=result.value.length; i++){
            var objArticle = {};
            var locator_article = "//ul[@class='article-index']/li[" + i +  "]";
            console.log('debug:: ' + locator_article);
            objArticle.title = browser.getText(locator_article + '/h3');

            expect(objArticle.title).not.equal(null);

            objArticle.timeStamp = browser.getText(locator_article + "//p[@class='published']");
            expect(objArticle.timeStamp).not.equal(null);

            objArticle.articleContent = browser.getText(locator_article + "//p[2]");
            expect(objArticle.articleContent).not.equal(null);

            //check if the article has an author - then only check
            if (browser.isExisting(locator_article + "//div[@class='byline']/a")){
                objArticle.Author = browser.getText(locator_article + "//div[@class='byline']/a");
                expect(objArticle.Author).not.equal(null);                
            }
          
        }



    });
/*

    it('should return some result when I search the abn -62885060801',function(){
    	browser.url('/');
    	abnPageHandler.enterABNAndHitSearch(browser,'62885060801');
    	browser.waitForVisible("h1*=Current details for",1000);
    	var locator_header_text = browser.getText("h1*=Current details for");
    	console.log("debug::" + locator_header_text);
    	expect(locator_header_text).to.equal("Current details for ABN 62 885 060 801");
    });

    it('name should be displayed for the abn the abn -62885060801',function(){
    	browser.url('/');
    	abnPageHandler.enterABNAndHitSearch(browser,'62885060801');
    	var locator_table_name = "//div[\@id=\"content\"]/div/div[2]/table/tbody/tr[1]/td/span";

    	console.log("debug::" + locator_table_name);

    	browser.waitForVisible(locator_table_name,1000);
    	var locator_table_name_text = browser.getText(locator_table_name);
    	
    	expect(locator_table_name_text).to.equal("The Trustee for LAUTRE SELF MANAGED SUPERANNUATION FUND");
    });    	
*/
});