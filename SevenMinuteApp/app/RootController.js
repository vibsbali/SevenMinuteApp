'use strict';

angular.module('app')
  .controller('rootController', ['$scope', '$modal', function ($scope, $modal) {
      $scope.showWorkoutHistory = function () {
          var dailog = $modal.open({
              templateUrl: 'partials/workout-history.html',
              controller: workoutHistoryController,
              size: 'lg'
          });
      };

      function workoutHistoryController($scope, $modalInstance, workoutHistoryTracker) {
          $scope.search = {};
          $scope.search.completed = '';
          $scope.history = workoutHistoryTracker.getHistory();

          $scope.ok = function () {
              $modalInstance.close();
          };
      };

      //The following line is for minimization purposes
      workoutHistoryController['$inject'] = ['$scope', '$modalInstance', 'workoutHistoryTracker'];

  }]);