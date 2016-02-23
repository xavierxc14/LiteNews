(function (angular, lab) {
    'use strict';
    function NewsController($scope) {
        var newsCtrl = this;

        console.log('Connect');
        io.socket.get('/news', function (resData, jwres) {
            console.log('Get: ', resData);
            newsCtrl.news = resData;
            $scope.$apply();
        });


        // Escuchamos por eventos
        io.socket.on('news', function (event) {
            console.log('event news: ', event);

            if (event.verb === 'created') {
                newsCtrl.news.splice(0, 0, event.data);
                $scope.$digest();
            } else if (event.verb === 'updated') {
                for (var i = 0; i < $scope.pasteles.length; i++) {
                    if (newsCtrl.news[i].id === event.id) {
                        newsCtrl.news[i] = event.data;
                        $scope.$digest();
                        break;
                    }
                }
            } else if (event.verb === 'destroyed') {
                for (var i = 0; i < newsCtrl.news.length; i++) {
                    if (newsCtrl.news[i].id === event.id) {
                        newsCtrl.news.splice(i, 1);
                        $scope.$digest();
                        break;
                    }
                }
            }

        });
    }

    NewsController.$inject = ['$scope'];

    angular.module(lab.MODULE)
        .controller('NewsController', NewsController);

}(window.angular, window.lab));