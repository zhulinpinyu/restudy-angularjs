var app = angular.module('phoneApp', []);

app.controller('phoneCtrl', function($scope){
  this.callMe = function(){
    alert("我 Call !");
  }

  return $scope.phoneCtrl = this;
});