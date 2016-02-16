(function (global, angular) {
    'use strict';

    var lab = {
            MODULE: 'lite-news'
        },
        dependencies = [
            'ui.router'
        ];

    function ApplicationConfig($stateProvider, $urlRouterProvider) {
        var login = {
            name: 'login',
            url: '/login',
            views: {
                menu: {
                    //templateUrl: 'rutas/menu.html'
                },
                content: {
                    templateUrl: 'rutas/login.html',
                    controller: 'LoginController',
                    controllerAs: 'loginCtrl'
                }
            }
        }, news = {
            name: 'news',
            url: '/news',
            views: {
                menu: {
                    templateUrl: 'rutas/menu.html',
                    controller: 'MenuController',
                    controllerAs: 'menuCtrl'
                },
                content: {
                    templateUrl: 'rutas/news.html',
                    controller: 'NewsController',
                    controllerAs: 'newsCtrl'
                }
            }
        };

        $stateProvider
            .state(login)
            .state(news);

        $urlRouterProvider.otherwise('/login');

    }

    ApplicationConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    angular.module(lab.MODULE, dependencies)
        .config(ApplicationConfig);

    global.lab = lab;

}(window, window.angular));