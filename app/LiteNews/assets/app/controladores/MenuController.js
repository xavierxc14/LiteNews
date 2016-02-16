(function (angular, lab) {
    'use strict';
    function MenuController($http) {
        var menuCtrl = this;
        $http.get('/Category').then(
            function success(data) {
                menuCtrl.categories = data.data;
            }, function error(err) {
                console.log('Error al obtener las categorias: ', err);
            }
        );

    }

    MenuController.$inject = ['$http'];

    angular.module(lab.MODULE)
        .controller('MenuController', MenuController);

}(window.angular, window.lab));