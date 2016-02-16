(function (angular, lab) {
    'use strict';
    function NewsController($http) {
        var newsCtrl = this;
        $http.get('/News').then(
            function success(data) {
                newsCtrl.news = data.data;
            }, function error(err) {
                console.log('Error al obtener las noticias: ', err);
            }
        );
    }

    NewsController.$inject = ['$http'];

    angular.module(lab.MODULE)
        .controller('NewsController', NewsController);

}(window.angular, window.lab));