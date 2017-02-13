var request = require("request");


exports.ABNService = function(objParams,callback){
	
	var baseUrl = "http://abr.business.gov.au/abrxmlsearch/AbrXmlSearch.asmx/SearchByABNv201408";
	request({url:baseUrl,qs:objParams},function(error,response,body){
		//console.log("body is " + body);
	callback(response,body);	
	});


}

