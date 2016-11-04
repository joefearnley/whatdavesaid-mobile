angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, Clips) {
    $scope.clips = [];

    Clips.all().then(function(response) {
        $scope.clips = response.data.clips;
    });

    $scope.play = function(clip) {
        if ($scope.media) {
            $scope.media.pause();
        }

        $scope.media = new Audio();
        $scope.media.src = '/clips/' + clip.file;
        $scope.media.load();
        $scope.media.play();
    };
});
