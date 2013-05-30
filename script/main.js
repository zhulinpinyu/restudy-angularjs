var app = angular.module('drinkApp', []);

app.controller('appCtrl', function($scope){
  $scope.username = "zlpy";
});

app.directive('drink', function(){
  return {
    scope:{
      name: '='
    },
    template: '<input type="text" ng-model="name">'
  }
});