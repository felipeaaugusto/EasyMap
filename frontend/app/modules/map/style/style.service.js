(function() {
'use strict';

/* ngInject */
StyleService.$inject = [];

function StyleService() {

    function getStyleDefault(feature){

        var style = new ol.style.Style({
            stroke: new ol.style.Stroke({ color: '#000' })
        });

        return style;
    }

    return {
        getStyleDefault: getStyleDefault
    };
}

angular
    .module('style.service', [])
    .factory('StyleService', StyleService);
})();