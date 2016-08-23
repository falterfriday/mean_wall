app.controller('messageController', ['$scope','userFactory', '$location', '$cookies', function($scope, userFactory, $location, $cookies){
  console.log("messageController");
  // $scope.user;
  $scope.messages = [];
  $scope.newComment = {};


  if($cookies.getObject('user')){
    $scope.user = $cookies.getObject('user');
    console.log('current user = ', $scope.user);
  }
  else {
    $location.url('/');
  }

  $scope.logout = function(){
		$cookies.remove('user');
		$location.url('/');
	};

  $scope.getMessages = function(){
    userFactory.getMessages(function(retData){
      console.log('retData from the controller = ', retData);
      $scope.messages = retData;
    });
  };
  $scope.getMessages();

//------pushes a new message to the db------
  $scope.createMessage = function(){
    $scope.newMessage.name = $scope.user.name;
    console.log('newMessage = ', $scope.newMessage);
    userFactory.createMessage($scope.newMessage, function(retData){
      $scope.newMessage = {};
      $scope.getMessages();
    });
  };
//------pushes a new comment to the db---------
  $scope.createComment = function(messageId){
    $scope.newComment.comment = $scope.messages[messageId].comment;
    $scope.newComment.name = $scope.user.name;
    $scope.newComment.messageId = messageId;
    console.log('newComment = ', $scope.newComment);
    userFactory.createComment($scope.newComment, function(retData){
      $scope.newComment = {};
      $scope.getMessages();
    });
  };
}]);
