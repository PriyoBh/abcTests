//locators
var textEdit_abnSearch = "#MainSearchTextBox";
var btn_search = "#MainSearchButton";
	
//locator methods
exports.enterABNAndHitSearch =  function(browser,abnValue){

		browser.waitForVisible(textEdit_abnSearch);
		browser.waitForEnabled(textEdit_abnSearch);
		browser.setValue(textEdit_abnSearch,abnValue);
		browser.waitForEnabled(btn_search);
		browser.click(btn_search);
		
	}
