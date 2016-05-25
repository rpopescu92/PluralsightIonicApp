/**
 * Created by roxanap on 25.05.2016.
 */
(function () {
  'use strict';

  angular.module('eliteApp').controller('LocationCtrl', LocationCtrl);

  LocationCtrl.$inject = ['eliteApi'];

  function LocationCtrl(eliteApi) {
    var vm = this;

    var data = eliteApi.getLeagueData();
    vm.leagueData = data.locations;

  };
})();
