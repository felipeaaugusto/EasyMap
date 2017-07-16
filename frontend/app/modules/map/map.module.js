(function() {
'use strict';

angular
	.module('map.module', [
		'map.controller',
		'map.routes',
		'map.service',
		'vector.module',
		'interaction.module'])
})();