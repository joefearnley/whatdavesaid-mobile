angular.module('starter.services', [])

.factory('Clips', function($http) {
    return {
        all: function() {
            return $http.get('/data/clips.json');
        }
    }
});
