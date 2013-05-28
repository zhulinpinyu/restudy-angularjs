var app = angular.module('twitterApp', []);

app.controller('twitterCtrl',function($scope){
  $scope.loadMoreTwitters = function(){
    alert("Twitters Loading...");
  }

  $scope.deleteTwitters = function(){
    alert("delete Twitters");
  }
});

app.directive('enter', function(){
  return function(scope, element, attrs){
    element.bind("mouseenter", function(){
      scope.$apply(attrs.enter);
    });
  }
});
