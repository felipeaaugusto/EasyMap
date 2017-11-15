(function() {
'use strict';

/* ngInject */
InteractionService.$inject = ['StyleService', 'ngDialog'];

function InteractionService(StyleService, ngDialog) {

    function interactionMouseHover(map, vectorSource){
        var selectPointerMove = new ol.interaction.Select({
            condition: ol.events.condition.pointerMove,
            layers: [vectorSource]
        });
        map.addInteraction(selectPointerMove);
        selectPointerMove.on('select', function(features) {
            features.selected.forEach(function(feature) {
                feature.setStyle(StyleService.getStyleTextFeature(feature));
            });
            features.deselected.forEach(function(feature) {
                feature.setStyle(StyleService.getStyleDefault());
            });
        });
    };

    function interactionMouseClick(map, vectorSource){
        var selectMouseClick = new ol.interaction.Select({
            condition: ol.events.condition.pointerMove,
            layers: [vectorSource]
        });
        map.addInteraction(selectMouseClick);
        selectMouseClick.on('select', function(features) {
            
        });
    };

    return {
        interactionMouseHover: interactionMouseHover,
        interactionMouseClick: interactionMouseClick
    };
}

angular
    .module('interaction.service', [])
    .factory('InteractionService', InteractionService);
})();
