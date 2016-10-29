angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, Clips) {
    $scope.clips = Clips.all();
});
