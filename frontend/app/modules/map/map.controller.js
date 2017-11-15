(function() {
'use strict';

/* ngInject */
MapController.$inject = ['MapService', 'VectorService', 'InteractionService'];

function MapController(MapService, VectorService, InteractionService) {
	//carrega source dos paises
	var vectorSource = VectorService.loadConfigVectorSource();
	//carrega configurações iniciais do map
	var map = MapService.loadConfigMap(vectorSource);
	InteractionService.interactionMouseHover(map, vectorSource);
	InteractionService.interactionMouseClick(map);
};

angular
	.module('map.controller', [])
	.controller('MapController', MapController, [])
})();
