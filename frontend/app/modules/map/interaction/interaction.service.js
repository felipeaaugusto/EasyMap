(function() {
'use strict';

/* ngInject */
InteractionService.$inject = ['StyleService', 'ModalService'];

function InteractionService(StyleService, ModalService) {

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

    function interactionMouseClick(map){
        map.on('click', function(e) {
            map.forEachFeatureAtPixel(e.pixel, function (feature, layer) {
                ModalService.openModalCountry(feature);
            });
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
