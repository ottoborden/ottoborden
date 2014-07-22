var readerService = angular.module('ReaderSrvc', []);

readerService.factory('ReaderService', ['$http', function($http) {
    return {
        get: function(urls) { // urls will be []
            //return $http.get('http://www.kurzweilai.net/news/feed/atom');
        }
    }
}]);