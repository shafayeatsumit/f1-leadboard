angular.module('f1App.services',[])
 .factory('f1ApiService',function($http){
 	var f1Api = {};

 	f1Api.getDrivers= function(){
 		return $http({
 			method:"JSONP",
 			url:"http://ergast.com/api/f1/2015/driverStandings.json?callback=JSON_CALLBACK"
 		});
 	}

 	f1Api.getDriversProfile = function(id){
 		return $http({
 			method:"JSONP",
 			url: 'http://ergast.com/api/f1/2015/drivers/'+ id +'/driverStandings.json?callback=JSON_CALLBACK'
 		});
 	}
 	f1Api.getDriversRaces =function(id){
 		return $http({
 			method:"JSONP",
 			url: 'http://ergast.com/api/f1/2015/drivers/'+ id +'/results.json?callback=JSON_CALLBACK'
 		});
 	}

 	return f1Api;

 });