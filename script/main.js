var app = angular.module('choreApp', []);

app.controller('choreCtrl',function($scope){
  $scope.logChore = function(chore){
    alert(chore);
  }
});

app.directive('kid', function(){
  return {
    restrict: 'E',
    scope:{
      done: '&'
    },
    template: '<input type="text" ng-model="chore"> {{chore}} '+
      '<div class="btn" ng-click="done({chore:chore})">DONE</div>'
  }
});