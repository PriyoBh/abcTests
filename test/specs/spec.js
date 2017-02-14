var assert = require('assert');
var expect = require('chai').expect; 
var abcNewsHeader = require('../PageObjects/abcNewsHeader.js'); 
var pgJustIn = require('../PageObjects/justInPage.js');
var pgImageGallery = require('../PageObjects/abcImages.js');
var objNewsLocator = abcNewsHeader.buildLocatorPropertiesAndReturn();
var objJustInLocator =  pgJustIn.buildLocatorPropertiesAndReturn();  
var objImageLocator = pgImageGallery.buildLocatorPropertiesAndReturn();  


describe('abc news page', function() {

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

    it('verify that the video loads successfully for an article with a video', function(){
            browser.url('/news/2017-02-09/weatherill-promises-to-intervene-dramatically/8254908');
  
            var result = browser.execute(function(){                
                return document.getElementsByTagName('video')[0];
                                  
            });
            
            console.log(result.value);
            expect(result.value).not.equal(null);
            
    });

    it('verify that images in image gallery loaded successfully', function(){
        browser.url('/news/2017-02-10/abc-open-pic-of-the-week/8256256');
        var num_of_images = (browser.elements(objImageLocator.imgList())).value.length;
        console.log(num_of_images);
        //check all the 15 images in the gallery have been loaded
        expect(num_of_images).to.equal(15);
    });

});