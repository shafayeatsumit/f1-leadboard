angular.module("f1App.controllers",[])
.controller("driversController",function($scope,f1ApiService){
	$scope.nameFilter;
	$scope.driversList = [];
	$scope.searchFilter = function(driver){
		var keyword = new RegExp($scope.nameFilter,'i');
		return !$scope.nameFilter || keyword.test(driver.Driver.givenName) || keyword.test(driver.Driver.familyName);
	}
	f1ApiService.getDrivers().success(function(response){
		$scope.driversList = response.MRData.StandingsTable.StandingsLists[0].DriverStandings;
	});
	f1ApiService.getDriversProfile()
})

.controller("driverController",function($scope,$routeParams,f1ApiService){
	$scope.id = $routeParams.id;
	$scope.races =[];
	$scope.driver = null;

	f1ApiService.getDriversProfile($scope.id).success(function(response){
		
		$scope.driver = response.MRData.StandingsTable.StandingsLists[0].DriverStandings[0];
	}) ;

	f1ApiService.getDriversRaces($scope.id).success(function(response){
		$scope.races = response.MRData.RaceTable.Races; 
	})
})

