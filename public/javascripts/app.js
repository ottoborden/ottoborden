angular.module('myApp', [
    'ngRoute',
    'appRoutes',
    'Reader',
    'About',
    'MainController'
]).controller('MainController', ['$scope', '$http', function($scope, $http) {
    console.log('mainctrl');
}]);