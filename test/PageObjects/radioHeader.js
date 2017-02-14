var obj_ProgramsMenu = {
	lnk_ProgramsDropDown : "//div[@id='rn-navigation']//a[starts-with(text(),'Programs')]",
	getXPathForProgramsMenu : function(menuName){
		return "//ul[@id='rn-programindex']/li/a[contains(text(),'" + menuName + "')]" ;
	}	
};

exports.buildProgramMenuAndReturn = function(){

	return obj_ProgramsMenu;
}	

