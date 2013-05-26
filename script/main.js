var myApp = angular.module('myApp', []);


myApp.factory('Friend', function(){
  var friends = {};
  friends = {mlx:[
    { 
      name: "wxb",
      age: "24"
    },
    { 
      name: "ll",
      age: "25"
    },
    { 
      name: "lh",
      age: "24"
    },
    { 
      name: "qjw",
      age: "23"
    },
    { 
      name: "ft",
      age: "24"
    },
    { 
      name: "whf",
      age: "24"
    }
  ]};
  return friends;
});

function ListFriendCtrl($scope, Friend){
  $scope.friends = Friend.mlx
}