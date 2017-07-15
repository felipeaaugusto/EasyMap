(function() {
'use strict';

/* ngInject */
config.$inject = ['$urlRouterProvider', '$stateProvider'];

function config ($urlRouterProvider, $stateProvider){

	$urlRouterProvider.otherwise('/');

	$stateProvider.state('map', {
		title: 'Map',
		url: '/map',
		templateUrl: 'app/modules/map/map.view.html',
		controller: 'MapController',
		controllerAs: 'mapCtrl'
	});
};

angular
	.module('map.routes', ["ui.router"])
	.config(config);
})();
