(function() {
'use strict';

/* ngInject */
InteractionService.$inject = [];

function InteractionService() {

    function interactionMouseHover(map, vectorSource){

        var selectPointerMove = new ol.interaction.Select({
            condition: ol.events.condition.pointerMove,
            layers: [vectorSource]
        });

        map.addInteraction(selectPointerMove);

        selectPointerMove.on('select', function(features) {
            features.selected.forEach(function(feature) {
                console.log('selected');
            });

            features.deselected.forEach(function(feature) {
                console.log('deselected');
            });    
        });

    };

    return {
        interactionMouseHover: interactionMouseHover
    };
}

angular
    .module('interaction.service', [])
    .factory('InteractionService', InteractionService);
})();