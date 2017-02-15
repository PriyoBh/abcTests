var obj_ProgramsMenu = {
	lnk_ProgramsDropDown : "//div[@id='rn-navigation']//a[starts-with(text(),'Programs')]",
	getXPathForProgramsMenu : function(menuName){
		return "//ul[@id='rn-programindex']/li/a[contains(text(),'" + menuName + "')]" ;
	},
	txt_SearchProgram: "#search-simple-input-query",
	txt_SearchProgramInput: "#search-simple-input-submit"

};

var obj_ProgramNav = {
	getXPathForProgramNav: function(programName){
		return "//ul[@aria-label='RN On Air Schedule']//div[contains(text(),'" + programName + "')]/../../../a";
	},
	lnk_leftArrow: "//div[@id='left-arrow']",
	lnk_rightArrow: "//div[@id='right-arrow']"
};

exports.buildProgramMenuAndReturn = function(){

	return obj_ProgramsMenu;
}	

exports.buildProgramNavAndReturn = function(){
	return obj_ProgramNav;
}

