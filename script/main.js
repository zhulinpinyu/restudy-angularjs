var app = angular.module('drinkApp', []);

app.controller('appCtrl', function($scope){

});

app.directive('drink', function(){
  return {
    scope:{
      name: '@'
    },
    template: '<div>XXX {{name}}</div>'
  }
});