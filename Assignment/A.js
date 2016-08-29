var app = angular.module('myApp', []);
app.controller('customersCtrl', function($scope, $http,orderByFilter) {

  $scope.pageSize=4;
  var currentPageNo=1;
  var startId=0;
  var endId=currentPageNo*$scope.pageSize;
  var totalPageNumbers;

    $http.get("crime.json")
    .success(function (data) {
      $scope.year = data;
      $scope.crime=$scope.year;
      totalPageNumbers = Math.ceil($scope.year.length / $scope.pageSize);
      $scope.page(currentPageNo);
    });

// Pagination Function

    $scope.page=function(CPageNo)
    {

    $scope.pages=[];
    totalPageNumbers = Math.ceil($scope.year.length / $scope.pageSize);
    if((CPageNo*$scope.pageSize)>$scope.year.length){
        endId=$scope.year.length;
        startId=(((CPageNo-1)*$scope.pageSize));
      }
      else{
         endId=(CPageNo*$scope.pageSize);
         startId=(endId-$scope.pageSize);
      }
      for(var i=1;i<=totalPageNumbers;i++){
      $scope.pages.push(i);
      }
      $scope.year=orderByFilter($scope.year, '+year');
          $scope.trial=$scope.year.slice(startId,endId);
    }

  // Pagination Close



// Function for Submitting form
  $scope.SubmitLogin= function (){
            $scope.p = {};
            $scope.p.year = $scope.Year;
            $scope.p.under500= $scope.Below500;
            $scope.p.over500= $scope.Above500;

            $scope.year.push($scope.p);
            $scope.page(totalPageNumbers);
        }


// Closing Submitting form Function

//Removing Function Open
  $scope.remove = function(x) {
  var indexToRemove = $scope.year.indexOf(x);
  $scope.year.splice($scope.year.indexOf(x), 1);
  console.log(indexToRemove);
  if (indexToRemove === 0) {
    indexToRemove = 1;
  }
  $scope.page(Math.ceil(indexToRemove / 4));
        }
// Removing Function open
$scope.Year,$scope.Below500,$scope.Above500,$scope.xyz;

$scope.sortType     = 'year';
$scope.sortReverse  = false;

$scope.propertyValue= 'year';
$scope.fun =function(){
  temp=undefined;
  // console.log($scope.crime);
$scope.year=$scope.crime;
  if($scope.propertyValue=='year'){
    for (x=0;x<$scope.crime.length;x++){

      if($scope.crime[x].year==$scope.apply_constraint){
        temp=x;
        break;
       }
      }
     }
     else if($scope.propertyValue=='over500' || $scope.propertyValue=='under500'){

       $scope.crime=orderByFilter($scope.crime, $scope.propertyValue);

        for(var v=0;v<$scope.crime.length;v++)
        {
    if($scope.crime[v][$scope.propertyValue]>=$scope.apply_constraint){
      temp=v;
      break;
    }
  }
}
// else {
//
//   $scope.year=$scope.crime;
//   $scope.page(currentPageNo);
// }
// console.log(temp);
$scope.filteredCrimes=[];
  for(var n=temp;n<$scope.crime.length;n++){

    $scope.filteredCrimes.push($scope.crime[n]);
    // console.log($scope.filteredCrimes);
  }
  $scope.year=$scope.filteredCrimes;
console.log("inside Above");
// console.log($scope.year);
  $scope.page(1);
};

//   }

});
//Closing Controller

//Opening Table directive
app.directive('table1', function()
{
return {
  templateUrl: 'Template/table.html'
};
});
//Closing table Directive

//Opening Form directive
app.directive('form1', function()
{
return {
  templateUrl: 'Template/form.html'
};
});
//closing form directive
app.directive('form2', function()
{
return {
  templateUrl: 'Template/form2.html'
};
});
