(function() {
'use strict';

/* ngInject */
StyleService.$inject = [];

function StyleService() {

    function getStyleDefault(){
        var style = new ol.style.Style({
            stroke: new ol.style.Stroke({ color: '#000' })
        });
        return style;
    };

    function getStyleTextFeature(feature){
        var style = new ol.style.Style({
            stroke: new ol.style.Stroke({ color: '#000' }),
            text: new ol.style.Text({
                text: feature.get('name'),
                font: '12px Calibri,sans-serif',
                fill: new ol.style.Fill({ color: '#000' }),
                stroke: new ol.style.Stroke({
                    color: '#fff', width: 2
                })
            })
        });
        return style;
    };

    return {
        getStyleDefault: getStyleDefault,
        getStyleTextFeature: getStyleTextFeature
    };
}

angular
    .module('style.service', [])
    .factory('StyleService', StyleService);
})();
