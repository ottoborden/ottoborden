angular.module('myApp').config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider

        // home page
        .when('/', {
            templateUrl: 'index.html',
            controller: 'MainController'
        })

        // reader
        .when('/reader', {
            templateUrl: 'Reader.html',
            controller: 'ReaderController'
        });

    $locationProvider.html5Mode(true);
}]);