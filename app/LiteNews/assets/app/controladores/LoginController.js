(function (angular, lab) {
    'use strict';
    function LoginController() {
        var loginCtrl = this;

    }

    LoginController.$inject = [];

    angular.module(lab.MODULE)
        .controller('LoginController', LoginController);

}(window.angular, window.lab));