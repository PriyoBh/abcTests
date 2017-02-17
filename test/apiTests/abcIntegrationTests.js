var expect = require('chai').expect;
var request = require('request');
var xml2js = require('xml2js');
var path = require('path');
var ps = require('../apiModules/apiMethods');
var ch = require('../commonUtilities/collectionHandlers');
var fm = require('../commonUtilities/streamHandlers');
var fs = require('fs');

var baseUrl_ppJj0E8g2R;		
var baseUrl_ppxa2Amj2b;
var baseJSON_ppJj0E8g2R_filePath;
var baseJSON_ppxa2Amj2b_filePath;
	

	before(function(done){
			var environment = process.env.NODE_ENV;
	//setup environment config file based on the node run environment in package.json
			switch(environment){

				case 'production':
				configFilePath = path.join(__dirname,"../environmentConfigs/config_production.json");
				break;

				case 'staging':
				configFilePath = path.join(__dirname,"../environmentConfigs/config_production.json");
				break;

				case 'test':
				configFilePath = path.join(__dirname,'../environmentConfigs/config_test.json');
				break;
			}


			fm.readInputFile(configFilePath,(error,fileData)=>{
				var obj_config_json = JSON.parse(fileData);
				baseUrl_ppJj0E8g2R = obj_config_json["baseUrl_ppJj0E8g2R"];
				baseUrl_ppxa2Amj2b = obj_config_json["baseUrl_ppxa2Amj2b"];
				baseJSON_ppJj0E8g2R_filePath = path.join(__dirname,obj_config_json["baseJSON_ppJj0E8g2R_fileName"]);
				baseJSON_ppxa2Amj2b_filePath = path.join(__dirname,obj_config_json["baseJSON_ppxa2Amj2b_fileName"]);
				done();
			});


		});

	describe("api integration tests",function(){

		it("call the service ppJj0E8g2R and verify the key value pairs", function(done){
				ps.callAPI(baseUrl_ppJj0E8g2R,(error,response,body)=>{
				if (error != null){
					console.log("error message: " + error);					
				}					

				var obj_json_body = JSON.parse(body);
				fm.readInputFile(baseJSON_ppJj0E8g2R_filePath,(error,fileData)=>{
					var obj_json_baseline = JSON_parse(fileData);
					expect(obj_json_body).to.equal(obj_json_baseline);
				});

				});
				done();
			});

		it("call the service ppJj0E8g2R and verify the key value pairs", function(done){
			ps.callAPI(baseUrl_ppxa2Amj2b,(error,response,body)=>{
				if (error != null){
					console.log("error message: " + error);					
				}					
				var obj_json_body = JSON.parse(body);
				fm.readInputFile(baseJSON_ppxa2Amj2b_filePath,(error,fileData)=>{
					var obj_json_baseline = JSON_parse(fileData);
					expect(obj_json_body).to.equal(obj_json_baseline);
				});

				});
				done();
			});	

	});	

			



