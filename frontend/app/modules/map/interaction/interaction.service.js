(function() {
'use strict';

/* ngInject */
InteractionService.$inject = ['StyleService'];

function InteractionService(StyleService) {

    function interactionMouseHover(map, vectorSource){

        var selectPointerMove = new ol.interaction.Select({
            condition: ol.events.condition.pointerMove,
            layers: [vectorSource]
        });

        map.addInteraction(selectPointerMove);

        selectPointerMove.on('select', function(features) {
            features.selected.forEach(function(feature) {
                feature.setStyle(getStyleTextFeature(feature));
            });

            features.deselected.forEach(function(feature) {
                feature.setStyle(StyleService.getStyleDefault());
            });    
        });

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
        interactionMouseHover: interactionMouseHover,
        getStyleTextFeature: getStyleTextFeature
    };
}

angular
    .module('interaction.service', [])
    .factory('InteractionService', InteractionService);
})();