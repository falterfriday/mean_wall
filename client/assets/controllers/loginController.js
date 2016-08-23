app.controller('loginController', ['$scope','userFactory', '$location', '$cookies', function($scope, userFactory, $location, $cookies){
  // console.log('hit the loginController');
  $scope.loginUser = function(){
    // console.log('login method of the loginController');
    userFactory.create($scope.newUser, function(retData){
      console.log('retData from controller = ', retData);
      if(retData.errors){
        console.log('errors');
        $scope.errors = retData.errors;
        $scope.newUser = {};
      }
      else {
        $cookies.putObject('user', {name:retData.name});
        $location.url('/messages');
      }
    });
  };

}]);
