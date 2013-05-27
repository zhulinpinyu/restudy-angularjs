var app = angular.module('superhero', []);
//自定义元素element
app.directive('supermane', function(){
  return {
    restrict: "E",
    template: "<div>First directive</div>"
  }
});

//自定义属性
app.directive('supermana', function(){
  return {
    restrict: "A",
    link: function(){
      alert('mlx, I am working as attribute!');
    }
  }
});

//自定义class
app.directive('supermanc', function(){
  return {
    restrict: "C",
    link: function(){
      alert('mlx,class I am working!');
    }
  }
});

app.directive('superman', function(){
  return {
    restrict: "A",
    link: function(){
      alert('mlx, I am working!, superman');
    }
  }
});

app.directive('flash', function(){
  return {
    restrict: "A",
    link: function(){
      alert('mlx, I am working!, flash');
    }
  }
});

