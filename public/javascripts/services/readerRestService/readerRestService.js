angular.module('readerRestService', [])
    .factory('Reader', ['$http', function($http) {
        return {
            get: function() {
                return $http.get('/api/reader');
            }
        };
    }]);