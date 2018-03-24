(function() {
'use strict';

/* ngInject */
config.$inject = ['$urlRouterProvider','$locationProvider'];

function config ($urlRouterProvider, $locationProvider){
    $urlRouterProvider.otherwise('/');
    $locationProvider.hashPrefix('');
};

angular
	.module('main.module', [
		'map.module',
        'modal.module'
    ])
	.config(config);
})();
