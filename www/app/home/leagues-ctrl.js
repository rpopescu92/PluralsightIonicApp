/**
 * Created by roxanap on 25.05.2016.
 */
(function(){
  'use stricht';

  angular.module('eliteApp').controller('LeaguesCtrl',['$state','eliteApi', LeaguesCtrl]);

  function LeaguesCtrl($state, eliteApi){

    var vm = this;
    var leagues = eliteApi.getLeagues();
    var leagueData = eliteApi.getLeagueData();

    console.log(leagues);
    vm.leagues = leagues;

    vm.selectLeague = function(leagueId){
      $state.go("app.teams");

    };

  };
})();
