angular.module('Reader')
    .controller('ReaderController', ['$scope', function($scope) {
        console.log('ctrl');
        $scope.test = 'Hello, I\'m the ReaderController';
    }]);