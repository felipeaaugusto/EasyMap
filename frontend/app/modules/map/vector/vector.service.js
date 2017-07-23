(function() {
'use strict';

/* ngInject */
VectorService.$inject = ['StyleService'];

function VectorService(StyleService) {

    function loadConfigVectorSource(){
    	
		var source = new ol.source.Vector({
			url: 'https://openlayers.org/en/v4.2.0/examples/data/geojson/countries.geojson',
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