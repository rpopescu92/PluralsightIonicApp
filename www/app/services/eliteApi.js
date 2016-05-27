(function(){

  'use strict';

  angular.module('eliteApp').factory('eliteApi', ['$http',eliteApi]);
  function eliteApi($http){

    var currentLeagueId;

    function getLeagues(callback){
      $http.get("http://elite-schedule.net/api/leaguedata")
        .success(function(data){
          callback(data);
        });
    };
    function getLeagueData(callback){
      $http.get("http://elite-schedule.net/api/leaguedata/"+ currentLeagueId)
        .success(function(data, status){
            console.log("Received schedule via HTTP.", data, status);
            callback(data);
        })
        .error(function(data){
          console.log("Error while making HTTP call.");
        });
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
