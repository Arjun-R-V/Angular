var app4=angular.module('app4',[]);
app4.controller('eventCtrl',function($scope)
{
//   $scope.click=0;
//   $scope.copy=0;
//   $scope.paste=0;
//   $scope.dblclick=0;
//   $scope.cut=0;
//   $scope.mouseleave=0;
//   $scope.focus=0;
//   $scope.blur=0;
//
//   $scope.keydown=function(e)
// {
// $scope.kdkey=String.fromCharCode(e.keyCode);
// };
  $scope.dayTimeButton =true;

  $scope.capitals = [
    { "city" : "A",
      "state": "B"},
    { "city" : "C",
      "state": "D"},
    { "city" : "E",
      "state": "F"}
  ];
});
