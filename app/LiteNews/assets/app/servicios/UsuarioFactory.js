(function (angular, lab) {
    'use strict';
    function UsuarioFactory($resource) {
        var factory = $resource(
            'http://localhost:1337/User/:idUsuario',
            {
                idEntrenador: '@idUsuario'
            },
            {
                actualizar: {
                    method: 'PUT',
                    params: {
                        idUsuario: '@idUsuario'
                    }
                },
                buscarPorUsuario: {
                    url: 'http://localhost:1337/User?username=:username',
                    method: 'GET',
                    params: {
                        username: '@username'
                    }, isArray: true
                }
            });

        return factory;
    }

    UsuarioFactory.$inject = ['$resource'];

    angular.module(lab.MODULE)
        .factory('UsuarioFactory', UsuarioFactory);
}(window.angular, window.lab));
