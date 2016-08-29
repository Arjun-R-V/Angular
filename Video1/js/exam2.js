var app2=angular.module('app2',[]);
app2.controller('contl1',function($scope)
{
$scope.randomNum1 = Math.floor((Math.random() * 10) +1);
$scope.randomNum2 = Math.floor((Math.random() * 10) +1);
});
app2.controller('bad',function($scope)
{
  var bad=["disregard","Notimportant","Rejected","powerless"]
$scope.bad = bad[Math.floor((Math.random() * 4))];
});
app2.controller('good',function($scope)
{
  var good=["Pleasure","Awesome","Lovelable","Inner Peace"]
$scope.good = good[Math.floor((Math.random() * 4))];
});
