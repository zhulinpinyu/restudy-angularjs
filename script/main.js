var app = angular.module('phoneApp', []);

app.controller('phoneCtrl', function($scope){
  $scope.callMe = function(msg){
    alert(msg);
  }
});

app.directive('phone', function(){
  return {
    scope:{
      dial: '&'
    },
    template: '<input type="text" ng-model="value">'+
              '<div class="btn" ng-click="dial({msg:value})">Call Me!</div>'
  }
});