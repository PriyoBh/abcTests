var expect = require('chai').expect;
var request = require('request');
var xml2js = require('xml2js');
var ps = require('../apiModules/publicService');
var ch = require('../commonUtilities/collectionHandlers');


// tests to do an abn acn search

	describe("test abn service",function(){

		it("I should get a status code of 200 when I call the public abn service with test data 62 885 060 801",
			function(done){
					var objParams = {
						searchString:'62885060801',
						includeHistoricalDetails:'N',
						authenticationGuid:'83751b46-0116-4a0a-955b-62553e4d8955'
					};
					ps.ABNService(objParams,function(response,body){
						expect(response.statusCode).to.equal(200);	
					done();	
					});
				
				});

		it("when i search abn 62885060801 the entity type code should be active",
			function(done){
					var objParams = {
						searchString:'62885060801',
						includeHistoricalDetails:'N',
						authenticationGuid:'83751b46-0116-4a0a-955b-62553e4d8955'
					};
					ps.ABNService(objParams,function(response,body){
					xml2js.parseString(body,function(err,result){						
						var keyPath = ['ABRPayloadSearchResults','response','businessEntity201408','entityStatus','entityStatusCode'];
						var entityStatusCode = ch.getValueByKeyPath(result,keyPath);											
						expect(entityStatusCode).to.equal('Active');
						done();	
					})	
					
					});
					
				});

		it("when i search abn 39011010594 the entity type code should be cancelled",
			function(done){
					var objParams = {
						searchString:'39011010594',
						includeHistoricalDetails:'N',
						authenticationGuid:'83751b46-0116-4a0a-955b-62553e4d8955'
					};
					ps.ABNService(objParams,function(response,body){
					xml2js.parseString(body,function(err,result){						
						var keyPath = ['ABRPayloadSearchResults','response','businessEntity201408','entityStatus','entityStatusCode'];
						var entityStatusCode = ch.getValueByKeyPath(result,keyPath);											
						expect(entityStatusCode).to.equal('Cancelled');
						done();	
					})	
					
					});
					
				});	

		it("when i search abn 62885060801 the organisation name should be The Trustee for LAUTRE SELF MANAGED SUPERANNUATION FUND",
			function(done){
					var objParams = {
						searchString:'62885060801',
						includeHistoricalDetails:'N',
						authenticationGuid:'83751b46-0116-4a0a-955b-62553e4d8955'
					};
					ps.ABNService(objParams,function(response,body){
					xml2js.parseString(body,function(err,result){
						var keyPath = ['ABRPayloadSearchResults','response','businessEntity201408','mainName','organisationName'];
						var orgName = ch.getValueByKeyPath(result,keyPath);					
						expect(orgName).to.equal('The Trustee for LAUTRE SELF MANAGED SUPERANNUATION FUND');
						done();	
					})	
					
					});
					
				});
	});	

			



