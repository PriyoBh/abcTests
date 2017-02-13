//functions to handle different collections

//Documentation: This function will recursively traverse a nested object and find the value for a key path
exports.getValueByKeyPath = function(objToLookup, keyPathArray)
{
	var retVal = objToLookup;

	keyPathArray.forEach(function(key){
		retVal = retVal[key];
			//if the value returned at any step is an array with only 1 element then just return the first element
			if (Array.isArray(retVal) && (retVal.length==1)){
				retVal = retVal[0];
		}
	});
	return retVal;
}