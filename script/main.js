var app = angular.module('superApp', []);

app.directive('superhero', function(){
  return {
    restrict: "E",
    scope: {},
    controller: function($scope){
      $scope.info = [];
      this.addName = function(){
        $scope.info.push("mlx");
        console.log("1");
        console.log($scope.info);
      }
      this.addAge = function(){
        $scope.info.push("23");
        console.log("2");
        console.log($scope.info);
      }
      this.addAddr = function(){
        $scope.info.push("wuxi");
        console.log("3");
        console.log($scope.info);
      }
    },
    link: function(scope, element, attrs){
      element.addClass("btn");
      element.bind("mouseenter", function(){
        console.log(scope.info);
      });
    }
  }
});

app.directive('name', function(){
  return{
    require: "superhero",
    link: function(scope, element, attrs, superheroCtrl){
      superheroCtrl.addName();
    }
  }
});

app.directive('age', function(){
  return{
    require: "superhero",
    link: function(scope, element, attrs, superheroCtrl){
      superheroCtrl.addAge();
    }
  }
});

app.directive('addr', function(){
  return{
    require: "superhero",
    link: function(scope, element, attrs, superheroCtrl){
      superheroCtrl.addAddr();
    }
  }
});
