var app3=angular.module('app3',[]);
app3.controller('glist',function($scope)
{
  $scope.groceries=[
    {
      item:"Tomatoes" , purchased : false
    },
    {
      item:"Potatoes" , purchased : false
    },
    {
      item:"Bread" , purchased : false
    },
    {
        item:"xyz" , purchased : false
    }
  ];
  $scope.getList = function()
  {
    return $scope.showList ? "A4.html" : "A5.html"
  };
});
