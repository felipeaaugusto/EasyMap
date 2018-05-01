(function() {
'use strict';

/* ngInject */
VectorService.$inject = ['StyleService'];

function VectorService(StyleService) {

    function loadConfigVectorSource(urlVectorSource){
    	var source = new ol.source.Vector({
			url: urlVectorSource,
			format: new ol.format.GeoJSON()
		})
		var vector = new ol.layer.Vector({
            source: source,
            style: StyleService.getStyleDefault()
      	})
		return vector;
    };

    return {
        loadConfigVectorSource: loadConfigVectorSource
    };
}

angular
    .module('vector.service', [])
    .factory('VectorService', VectorService);
})();
