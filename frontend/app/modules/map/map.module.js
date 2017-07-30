(function() {
'use strict';

angular
	.module('map.module', [
		'map.controller',
		'map.directives',
		'map.routes',
		'map.service',
		'interaction.module',
		'style.module',
		'vector.module'])
})();