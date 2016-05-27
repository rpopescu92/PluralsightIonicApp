(function(){

  'use strict';

  angular.module('eliteApp').factory('eliteApi', ['$http','$q',eliteApi]);
  function eliteApi($http, $q){

    var currentLeagueId;

    function getLeagues(){
      var deferred = $q.defer();

      $http.get("http://elite-schedule.net/api/leaguedata")
        .success(function(data){
          deferred.resolve(data);
        })
        .error(function(data){
          console.log("Error while making HTTP call.");
          deferred.reject();
        });
      return deferred.promise;
    };
    function getLeagueData(){
      var deferred = $q.defer();
      $http.get("http://elite-schedule.net/api/leaguedata/"+ currentLeagueId)
        .success(function(data, status){
            console.log("Received schedule via HTTP.", data, status);
            deferred.resolve(data);
        })
        .error(function(data){
          console.log("Error while making HTTP call.");
          deferred.reject();
        });
      return deferred.promise;
    };

    function setLeagueId(leagueId){
      currentLeagueId = leagueId;
    }
    function getLeagueId(){
      return currentLeagueId;
    }
    return {
        getLeagues: getLeagues,
        getLeagueData: getLeagueData,
        setLeagueId: setLeagueId
    };
  };

})();
