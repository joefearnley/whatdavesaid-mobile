angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, Clips) {
    $scope.clips = Clips.all();

    $scope.play = function(clip) {
        $scope.media = new Audio();
        $scope.media.src = '/clips/' + clip.file;
        $scope.media.load();
        $scope.media.play();
    };
});
