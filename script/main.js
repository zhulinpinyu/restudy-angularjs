var app = angular.module('app', []);

/*该程序不健壮 存在bug*/
/*
 删除文字在输入 样式不加载 或者 样式加载混乱
*/
app.directive('dumbPassword', function(){
  var validElement = angular.element("<div>{{model.input}}</div>");
  
  this.link = function(scope){
      scope.$watch('model.input', function(value){
        if(value=="mlx"){
          validElement.toggleClass("badge badge-success");
        }
      });
    }

  return {
    restrict: 'E',
    replace:true,
    template: '<div><input type="text" ng-model="model.input"></div>',
    compile: function(tElem){
      tElem.append(validElement);
      return link;
    } 
  }
});
