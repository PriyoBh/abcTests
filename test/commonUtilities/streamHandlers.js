var fs = require('fs');

exports.readInputFile = function(fullFilePath,callback) {

	fs.readFile(fullFilePath,'utf-8',function(error,data){
		//if (error) throw error;
		callback(error,data);
	});
}