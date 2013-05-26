var myApp = angular.module('myApp', []);
myApp.factory('Data', function(){
  return {message: "I am mlx come from xp."}
});

function FirstCtrl($scope, Data){
  $scope.data = Data;
}

function SecondCtrl($scope, Data){
  $scope.data = Data;
  $scope.reverseMessage = function(message){
    return message.split("").reverse().join("");
  }
}