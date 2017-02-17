var request = require("request");


exports.callAPIWithParams = function(baseUrl,objParams,callback){
	request({url:baseUrl,qs:objParams},function(error,response,body){
	callback(error,response,body);	
	});


}

exports.callAPI = function(baseUrl,callback){
	request({url:baseUrl},function(error,response,body){
	callback(error,response,body);	
	});	
}

