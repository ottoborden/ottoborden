angular.module('Reader')
    .directive('readerDirective', function() { 'use strict';
        return  {
            restrict: 'E',
            templateUrl: 'Reader.html'
        }
    });