var app = angular.module('behaviorApp', []);
//自定义元素element
app.directive('enter', function(){
  return function(scope, element){
    element.bind("mouseenter", function(){
      console.log("I am inside!");
    })
  }
});
app.directive('leave', function(){
  return function(scope, element){
    element.bind("mouseleave", function(){
      console.log("Bye,I am leave!");
    })
  }
});
