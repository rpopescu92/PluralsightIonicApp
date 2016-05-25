/**
 * Created by roxanap on 25.05.2016.
 */
(function(){

  'use strict';
  angular.module('eliteApp').controller('StandingsCtrl',StandingsCtrl);
  StandingsCtrl.$inject = ['eliteApi'];

  function StandingsCtrl(eliteApi){
    var vm = this;
    var data = eliteApi.getLeagueData();
    vm.standings = data.standings;

  };
})();
