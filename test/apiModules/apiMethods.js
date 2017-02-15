var request = require("request");


exports.callAPIWithParams = function(baseUrl,objParams,callback){
	
	//var baseUrl = "http://abr.business.gov.au/abrxmlsearch/AbrXmlSearch.asmx/SearchByABNv201408";
	request({url:baseUrl,qs:objParams},function(error,response,body){
		//console.log("body is " + body);
	callback(response,body);	
	});


}

exports.callAPI = function(baseUrl,callback){
	request({url:baseUrl},function(error,response,body){
		//console.log("body is " + body);
	callback(response,body);	
	});	
}

