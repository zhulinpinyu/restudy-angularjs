var app = angular.module('app', []);

/*
 directive 中link的function 参数顺序不能变 即 scope element attrs
*/

app.controller('mdCtrl',function($scope){
  console.log($scope);
});


app.directive('md', function(){
  return {
    link: function(attrs,element, scope){
      console.log(attrs);
    } 
  }
});
