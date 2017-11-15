(function() {
'use strict';

/* ngInject */
MapService.$inject = [];

function MapService() {

    function loadConfigMap(vectorSource){
        var raster = new ol.layer.Tile({
            source: new ol.source.OSM()
        });

		var washingtonLonLat = [-47.822170,-15.792770];
        var washingtonWebMercator = ol.proj.fromLonLat(washingtonLonLat);
        return newMap(raster, vectorSource, washingtonWebMercator);
    };

    function newMap(raster, vectorSource, washingtonWebMercator){
        var map = new ol.Map({
            controls: ol.control.defaults({
                zoom: false,
                attributionOptions: ({
                    collapsible: false,
                })
            }),
            layers: [raster, vectorSource],
            target: 'map',
            view: new ol.View({
                center: washingtonWebMercator,
                zoom: 1,
                minResolution: 0,
                maxResolution: 20000
            })
        });
        return map;
    };

    return {
        loadConfigMap: loadConfigMap,
        newMap: newMap
    };
}

angular
    .module('map.service', [])
    .factory('MapService', MapService);
})();
