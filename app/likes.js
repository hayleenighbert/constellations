angular.module("cardView", [])
.directive('card',
		function() {
			return {
				restrict: "E",
				replace: true,
				templateUrl: "views/likes.html",
				scope: {

					//@ takes an attribute called question and passes string to similarly named variable inside of scope
					question: "@",
					questionModel: "=",
					onCardLoaded: "&"
					//directives have controllers which make it interactive
				},
				controller: ["$scope", function($scope) {
					//have to call with an object with a named key called message
					$scope.onCardLoaded({ message:$scope.questionModel.question });
				}]
			}
		}
);