angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider

        // home page
        .when('/reader', {
            templateUrl: '/views/reader.jade',
            controller: 'ReaderController.js'
        });

    $locationProvider.html5Mode(true);
}]);