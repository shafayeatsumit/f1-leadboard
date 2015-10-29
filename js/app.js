angular.module('f1App',[
	'f1App.controllers',
	'f1App.services',
	'ngRoute'
	])
.config (["$routeProvider",function($routeProvider){
	$routeProvider
		.when("/",{
			templateUrl:"partials/drivers.html",
			controller:"driversController"
		})
		.when("/drivers/:id",{
			templateUrl:"partials/driver.html",
			controller:"driverController"
		})
		
}]);