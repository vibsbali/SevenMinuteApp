"use strict";

(function () {
    angular.module('7minWorkout').filter('lineBreakFilter', function () {
        return function (input) {

            if (input) {
                var response = input.replace(new RegExp('[.]', 'g'), ".<br>");
                return response;
            }
            

            return input;
        }
    });
}());