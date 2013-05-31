var app = angular.module('phoneApp', []);

app.controller('phoneCtrl', function($scope){
  $scope.callMe = function(number,msg){
    alert(number + "  " +msg);
  }
});

app.directive('phone', function(){
  return {
    restrict: 'E',
    scope:{
      number: '@',
      network: '=',
      dial: '&'
    },
    template: '<div class="label label-info">Number:{{number}} Say: {{value}}</div>'+
              '<select ng-model="network" ng-options="n for n in networks"></select>'+
              '<input type="text" ng-model="value">'+
              '<div class="btn btn-info" ng-click="dial({number:number,msg:value})">Call Me!</div>',
    link: function(scope){
      scope.networks=["CU", "CMCC", "CN"];
      scope.network = scope.networks[0];
    }
  }
});