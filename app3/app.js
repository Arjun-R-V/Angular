var dynamictable = angular.module('dynamictable', []);

dynamictable.controller('userCtrl', function($scope, $http,orderByFilter) {

  $scope.pageSize=4;
  var currentPageNo=1;
  var startId=0;
  var endId=currentPageNo*$scope.pageSize;

$http.get("crime.json").success(function (response) {
$scope.member= response;

totalPageNumbers = Math.ceil($scope.member.length / $scope.pageSize);
$scope.page(currentPageNo);


});

$scope.page=function(CPageNo){
  PageNo=CPageNo;
$scope.pages=[];
totalPageNumbers = Math.ceil($scope.member.length / $scope.pageSize);
if((CPageNo*$scope.pageSize)>$scope.member.length){
    endId=$scope.member.length;
    startId=(((CPageNo-1)*$scope.pageSize));
  }
  else{
     endId=(CPageNo*$scope.pageSize);
     startId=(endId-$scope.pageSize);
  }
  for(var i=1;i<=totalPageNumbers;i++){
  $scope.pages.push(i);
  }
  $scope.member=orderByFilter($scope.member, '+year');
      $scope.trial=$scope.member.slice(startId,endId);

}

$scope.AddData=function(){
$scope.obj={};
$scope.obj.year=$scope.add_year;
$scope.obj.under500=$scope.add_under;
$scope.obj.over500=$scope.add_over;
$scope.member.push($scope.obj);
$scope.page(totalPageNumbers);
}
$scope.delData=function(value){

  for(var p=0;p<$scope.member.length;p++){
    if($scope.member[p].year==value){
      for(var l=p;l<(($scope.member.length)-1);l++){
    $scope.member[l].year=$scope.member[l+1].year;
    $scope.member[l].over500=$scope.member[l+1].over500;
    $scope.member[l].under500=$scope.member[l+1].under500;
  }
  $scope.member.pop();
  }
  }
$scope.page(PageNo);
}

$scope.sort=function(keyname){
  $scope.sortKey= keyname;
  $scope.reverse= !$scope.reverse;
}

});

dynamictable.directive('tableDirective',function(){
  return{
    templateUrl:'table.html'
  };
});
