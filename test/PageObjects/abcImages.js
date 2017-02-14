var obj_locators = {

	listGalleryLocator: "//div[@class='slideshowpro-gallery']//ul[@class='imageGallery lightSlider lsGrab lSSlide']",
	imgList:  function() {return this.listGalleryLocator + "/li";}
					};

exports.buildLocatorPropertiesAndReturn = function(){

	return obj_locators;
}	