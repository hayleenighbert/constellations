angular.module("likes", [])
.directive('like',
		function() {
			return {
				restrict: "E",
				replace: true,
				templateUrl: "views/likes.html",
				scope: {
					
				},
				controller: ["$scope", function($scope) {
				}]
			}
		}
);