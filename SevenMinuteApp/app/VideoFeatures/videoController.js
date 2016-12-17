"use strict";

(function() {
    angular.module("7minWorkout").controller("WorkoutVideosController", ["$scope", "$modal",WorkoutVideosController]);

    function WorkoutVideosController($scope, $modal) {

        $scope.playVideo = function (videoId) {
            $scope.pauseWorkout();

            var dailog = $modal.open({
                templateUrl: 'youtube-modal',
                controller: VideoPlayerController,
                scope: $scope.$new(true),
                resolve: {
                    video: function () {
                        return '//www.youtube.com/embed/' + videoId;
                    }
                },
                size: 'lg'
            }).result['finally'](function () {
                $scope.resumeWorkout();
            });

            dailog.then(function () {
                console.log("dialog opened!");
            });
        };

        

        function VideoPlayerController($scope, $modalInstance, video) {
            $scope.video = video;
            $scope.ok = function () {
                $modalInstance.close();
            };
        };
        VideoPlayerController['$inject'] = ['$scope', '$modalInstance', 'video'];

        var init = function () {
        };
        init();
    };
}())