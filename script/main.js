var app = angular.module('phoneApp', []);


var phoneAppStuff = {};
phoneAppStuff.controllers = {};
phoneAppStuff.controllers.phoneCtrl = function($scope){
  this.callMe = function(){
    alert("我 Call !");
  }
  return $scope.phoneCtrl = this;
}

phoneAppStuff.directives = {};
phoneAppStuff.directives.well = function(){
  return {
    restrict: 'E',
    template: '<div class="label">MLX</div>'
  }
}

//app.filter();
app.directive(phoneAppStuff.directives);
app.controller(phoneAppStuff.controllers);
