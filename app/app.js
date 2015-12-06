var app = angular.module('MyApp', ['AppCtrls', "ngRoute", 'ngAnimate', 'likes']);

app.config([
	"$routeProvider", //index in the array
	"$locationProvider", // index
	function($routeProvider, $locationProvider) {
		$routeProvider.when("/", { //route
			templateUrl: "views/index.html", //render
			controller: "AppCtrl" //provides data for that view
		}).when("/about", {
			templateUrl: "views/about.html"
		}).when("/contact", {
			templateUrl: "views/contact.html"
		}).when("/perseus", {
			templateUrl: "views/perseus.html",
			controller: "PageOne"
		}).when("/andromeda", {
			templateUrl: "views/andromeda.html"
		// }).when("/doughnut/:id", {
		// 	templateUrl: "views/doughtnut.html",
		// 	controller: "DoughnutShowCtrl"
		}).otherwise({
			templateUrl: "views/404.html"
		});

		$locationProvider.html5Mode(false).hashPrefix('!');
	}
]);
