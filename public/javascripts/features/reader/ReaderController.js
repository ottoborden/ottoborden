angular.module('Reader')
    .controller('ReaderController', ['$scope', '$http', function($scope, $http) {
        console.log('readerctrl');
        $http.get('/api/reader').success(function(data) {
            $scope.rssData = data;
            console.log(data);
        }).
        error(function(err) {
            console.log('Error getting RSS data - ReaderController');
            console.log(err);
        });
    }]);