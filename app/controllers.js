angular.module('AppCtrls', [])
.controller('AppCtrl', ['$scope', function($scope) {
  $scope.pageClass = "index-page";


}])
// .controller("AppShowCtrl", [
// 	"$scope",
// 	"$routeParams",
// 	"App",
// 	function($scope, $routeParams, App){
// 		App.get({id: $routeParams.id}, function(data) {
// 			$scope.app = data;
// 		}, function(data) {
// 			console.log(data);
// 		});
// 	}
// ])
.controller('PageOne', ['$scope', function($scope){
	$scope.pageClass = "first-page";

}])

  // App.query(function success(data) {
  //   $scope.apps = data;
  // }, function error(data) {
  //   console.log(data);
  // });
