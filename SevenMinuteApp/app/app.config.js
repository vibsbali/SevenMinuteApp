"use strict";

(function () {
    angular.module("app")
        .config(function ($routeProvider, $sceDelegateProvider) {
            $routeProvider.when("/start",
            {
                templateUrl: "app/partials/start.html"
            });
            $routeProvider.when("/workout",
            {
                templateUrl: "app/7MinWorkout/workout.html",
                controller: "WorkoutController"
            });
            $routeProvider.when("/finish",
            {
                templateUrl: "app/partials/finish.html"
            });
            $routeProvider.otherwise({
                redirectTo: "/start"
            });
        
            $sceDelegateProvider.resourceUrlWhitelist([
            'self',
            'http://*.youtube.com/**']);
    });
}());