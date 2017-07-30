(function() {
'use strict';

/* ngInject */
ModalFeature.$inject = [];

function ModalFeature(){
    return {
        restrict: "E",
        templateUrl: "app/modules/map/views/map.modal-features.html"
    };
}

angular
    .module('map.directives', [])
    .directive('modalFeature', ModalFeature);
})();
