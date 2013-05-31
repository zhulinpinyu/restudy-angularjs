var app = angular.module('DatetimeApp', ['$strap.directives']);

app.controller('datetimeCtrl', function($scope){
  $scope.datepicker = {date: new Date()};
});