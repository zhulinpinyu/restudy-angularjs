var myApp = angular.module('myApp', []);
myApp.factory('Data', function(){
  return {message: "I am mlx come from xp."}
});

myApp.filter('reverse', function(Data){
  return function(text){
    return text.split("").reverse().join("")+ Data.message;
  };
})

function FirstCtrl($scope, Data){
  $scope.data = Data;
}

function SecondCtrl($scope, Data){
  $scope.data = Data;
  $scope.reverseMessage = function(message){
    return message.split("").reverse().join("");
  }
}