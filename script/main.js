var app = angular.module('phoneApp', []);

app.controller('phoneCtrl', function($scope){
  $scope.callMe = function(number,msg){
    alert(number + "  " +msg);
  }
});

app.directive('panel', function(){
  return {
    restrict: 'E',
    transclude: true,
    template: '<div class="well" ng-transclude>this is label component!</div>'
  }
});