(function() {
'use strict';

/* ngInject */
MapController.$inject = ['MapService', 'VectorService'];

function MapController(MapService, VectorService) {

	//carrega source dos paises
	var vectorSource = VectorService.loadConfigVectorSource();

	//carrega configurações iniciais do map
	MapService.loadConfigMap(vectorSource);
}

angular
	.module('map.controller', [])
	.controller('MapController', MapController, [])
})();