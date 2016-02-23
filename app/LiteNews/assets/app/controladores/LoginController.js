(function (angular, lab) {
    'use strict';
    function LoginController($state, UsuarioFactory) {
        var loginCtrl = this;
        this.username = '';
        this.password = '';
        loginCtrl.login = function () {
            //var user = JSON.parse(window.localStorage.user || '{}');
            console.log(loginCtrl.username);
            UsuarioFactory.buscarPorUsuario({
                username: loginCtrl.username
            }).$promise.then(
                function success(respuesta) {
                    console.log(respuesta[0].username);

                    var prueba = respuesta[0].username == loginCtrl.username;
                    console.log(prueba);
                    if (respuesta[0].username == loginCtrl.username && respuesta[0].password == loginCtrl.password) {
                        window.localStorage.user = JSON.stringify(respuesta);
                        $state.go('news');
                    }

                },
                function error(error) {
                    console.log(error);
                });
        }

    }

    LoginController.$inject = ['$state', 'UsuarioFactory'];

    angular.module(lab.MODULE)
        .controller('LoginController', LoginController);

}(window.angular, window.lab));
