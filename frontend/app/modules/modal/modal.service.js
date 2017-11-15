(function() {
'use strict';

/* ngInject */
ModalService.$inject = ['ngDialog', '$injector'];

function ModalService(ngDialog, $injector) {

    function openModalCountry(feature){
        var name = feature.getProperties().name;
        var controller = function() {
            var ctrl = this;
            ctrl.name = name;
        };
        newModal(controller, "app/modules/modal/views/modal.features.html");
    };

    function newModal(ctrlFunction, templateUrl){
        var modal = ngDialog.open({
            template: templateUrl,
            controller: ctrlFunction,
            controllerAs: 'modalCtrl',
            showClose: false
        });
        return modal;
    };

    return {
        openModalCountry: openModalCountry,
        newModal: newModal
    };
}

angular
    .module('modal.service', [])
    .factory('ModalService', ModalService);
})();
